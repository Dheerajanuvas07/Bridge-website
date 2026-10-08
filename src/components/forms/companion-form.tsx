"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { type FieldErrors, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { hasCarOptions } from "@/lib/forms/options";
import { type CompanionApplicationInput, companionApplicationSchema } from "@/lib/forms/schemas";
import { readTracking } from "@/lib/forms/draft";
import { ChoiceGroup, ConsentField, ErrorSummary, Honeypot, TextAreaField, TextField } from "./fields";

const ORDER = ["name", "phone", "email", "city", "availability", "has_car", "why", "consent_privacy"] as const;

export function CompanionForm() {
  const router = useRouter();
  const [summary, setSummary] = useState<{ name: string; message: string }[]>([]);
  const [sending, setSending] = useState(false);

  const form = useForm<CompanionApplicationInput>({
    resolver: zodResolver(companionApplicationSchema),
    defaultValues: { name: "", phone: "", email: "", city: "Omaha", availability: "", why: "", consent_privacy: false, website: "" },
    mode: "onTouched",
    shouldFocusError: false,
  });
  const { register, handleSubmit, setValue, getValues, setError, trigger, formState } = form;
  const { errors } = formState;

  useEffect(() => {
    const tracking = readTracking();
    for (const [key, value] of Object.entries(tracking)) {
      if (value) setValue(key as keyof CompanionApplicationInput, value);
    }
    setValue("started_at", Date.now());
  }, [setValue]);

  const showErrors = (errs: FieldErrors<CompanionApplicationInput>) => {
    const list = ORDER.map((name) => ({ name, message: errs[name]?.message as string | undefined })).filter(
      (e): e is { name: (typeof ORDER)[number]; message: string } => Boolean(e.message),
    );
    setSummary(list);
    requestAnimationFrame(() => document.getElementById("companion-form-errors")?.focus());
  };

  const onValid = async () => {
    setSending(true);
    // Phase 4 replaces this with the server action that saves the application and emails DJ.
    router.push("/companions/thanks");
  };

  const submit = (event: React.FormEvent) => {
    const { phone, email } = getValues();
    // "Phone or email" only runs once every other field is valid, so check it up front.
    if (!String(phone ?? "").trim() && !String(email ?? "").trim()) {
      event.preventDefault();
      const message = "Please give us a phone number or an email address.";
      void trigger().then(() => {
        setError("phone", { message });
        showErrors({ ...form.formState.errors, phone: { type: "required", message } });
      });
      return;
    }
    return handleSubmit(onValid, (errs) => showErrors(errs))(event);
  };

  return (
    <form noValidate onSubmit={submit} className="relative space-y-10">
      <ErrorSummary id="companion-form-errors" errors={summary} />
      <Honeypot registration={register("website")} />

      <TextField name="name" label="Your name" autoComplete="name" registration={register("name")} error={errors.name} />
      <p className="-mb-4 text-muted">A phone number or an email address. Either is fine; both is best.</p>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
        <TextField name="phone" type="tel" label="Phone" autoComplete="tel" inputMode="tel" registration={register("phone")} error={errors.phone} />
        <TextField name="email" type="email" label="Email" autoComplete="email" registration={register("email")} error={errors.email} />
      </div>
      <TextField
        name="city"
        label="Where do you live?"
        hint="City or neighborhood is enough."
        autoComplete="address-level2"
        registration={register("city")}
        error={errors.city}
      />
      <TextAreaField
        name="availability"
        label="When are you usually free?"
        hint="For example: weekday mornings, Tuesdays and Thursdays, flexible."
        rows={3}
        registration={register("availability")}
        error={errors.availability}
      />
      <ChoiceGroup
        type="radio"
        name="has_car"
        legend="Do you have a car you could use?"
        hint="This helps us plan."
        options={hasCarOptions}
        registration={register("has_car")}
        error={errors.has_car}
        columns={2}
      />
      <TextAreaField
        name="why"
        label="Why would you like to do this?"
        hint="A few sentences is plenty. Please don’t include ID numbers or anyone’s medical details."
        rows={5}
        registration={register("why")}
        error={errors.why}
      />
      <ConsentField name="consent_privacy" registration={register("consent_privacy")} error={errors.consent_privacy}>
        I’ve read the{" "}
        <Link href="/privacy" target="_blank" className="font-semibold text-accent underline underline-offset-4">
          privacy policy
        </Link>{" "}
        and agree that Bridge may contact me about this application.
      </ConsentField>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
        {sending ? "Sending…" : "Send application"}
      </Button>
    </form>
  );
}
