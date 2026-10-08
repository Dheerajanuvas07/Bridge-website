"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { type FieldErrors, useForm, useWatch } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  appointmentKindOptions,
  helpNeededOptions,
  howOftenOptions,
  parentAgreedOptions,
  relationshipOptions,
  whoGoesTodayOptions,
} from "@/lib/forms/options";
import { requestSteps, type VisitRequest, type VisitRequestInput, visitRequestSchema } from "@/lib/forms/schemas";
import { readDraft, clearDraft, readTracking, writeDraft } from "@/lib/forms/draft";
import { cn } from "@/lib/utils";
import { ChoiceGroup, ConsentField, ErrorSummary, Honeypot, TextAreaField, TextField } from "./fields";

const DRAFT_KEY = "bridge-request-draft-v1";
const NO_MEDICAL = "Please don’t include medical details here.";

const defaults: VisitRequestInput = {
  relationship: undefined as unknown as VisitRequestInput["relationship"],
  parent_first_name: "",
  city: "Omaha",
  appointment_date: "",
  appointment_kind: undefined as unknown as VisitRequestInput["appointment_kind"],
  parent_agreed: undefined as unknown as VisitRequestInput["parent_agreed"],
  help_needed: [],
  who_goes_today: [],
  how_often_appointments: undefined,
  hardest_part: "",
  requester_name: "",
  requester_phone: "",
  requester_email: "",
  notes: "",
  consent_contact: false,
  consent_privacy: false,
  website: "",
};

type Props = {
  /** Heading level for the step titles: 2 on /request, 3 inside a home page section. */
  headingLevel?: 2 | 3;
};

export function RequestForm({ headingLevel = 2 }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [restored, setRestored] = useState(false);
  const [summary, setSummary] = useState<{ name: string; message: string }[]>([]);
  const [sending, setSending] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const summaryId = "request-form-errors";

  const form = useForm<VisitRequestInput, unknown, VisitRequest>({
    resolver: zodResolver(visitRequestSchema),
    defaultValues: defaults,
    mode: "onTouched",
    shouldFocusError: false, // we focus the error summary instead
  });
  const { control, register, handleSubmit, trigger, reset, setValue, setError, getValues, subscribe, formState } = form;
  const { errors } = formState;

  const relationship = useWatch({ control, name: "relationship" });
  const isSelf = relationship === "self";

  // Someone booking for themselves has, by definition, agreed.
  useEffect(() => {
    if (isSelf) setValue("parent_agreed", "yes");
  }, [isSelf, setValue]);

  // Restore an unsent draft from this device, and note where the visitor came from.
  useEffect(() => {
    const draft = readDraft<VisitRequestInput>(DRAFT_KEY);
    const tracking = readTracking();
    if (draft) {
      reset({ ...defaults, ...draft.values, ...tracking, website: "" });
      // Restoring from localStorage has to happen after mount (the server can't see it),
      // and only runs once, so these state updates can't cascade.
      /* eslint-disable react-hooks/set-state-in-effect */
      setStep(Math.min(Math.max(draft.step, 0), requestSteps.length - 1));
      setRestored(true);
      /* eslint-enable react-hooks/set-state-in-effect */
    } else {
      reset({ ...defaults, ...tracking });
    }
    setValue("started_at", Date.now());
  }, [reset, setValue]);

  // Save progress as they type.
  useEffect(() => {
    writeDraft(DRAFT_KEY, getValues(), step);
    return subscribe({
      formState: { values: true },
      callback: ({ values }) => writeDraft(DRAFT_KEY, values, step),
    });
  }, [subscribe, getValues, step]);

  const showErrors = useCallback((errs: FieldErrors<VisitRequestInput>, fields: readonly string[]) => {
    const list = fields
      .map((name) => ({ name, message: (errs as Record<string, { message?: string }>)[name]?.message }))
      .filter((e): e is { name: string; message: string } => Boolean(e.message));
    setSummary(list);
    requestAnimationFrame(() => document.getElementById(summaryId)?.focus());
  }, []);

  const goTo = (next: number) => {
    setSummary([]);
    setStep(next);
    requestAnimationFrame(() => {
      headingRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      headingRef.current?.focus({ preventScroll: true });
    });
  };

  const next = async () => {
    const fields = requestSteps[step].fields;
    const ok = await trigger([...fields]);
    if (ok) goTo(step + 1);
    else showErrors(form.formState.errors, fields);
  };

  const onValid = async (data: VisitRequest) => {
    setSending(true);
    // Phase 4 replaces this with the server action that saves the request and sends emails.
    // Until then, nothing leaves the browser.
    void data;
    clearDraft(DRAFT_KEY);
    router.push("/thanks");
  };

  const onInvalid = (errs: FieldErrors<VisitRequestInput>) => {
    const fields = requestSteps[step].fields;
    showErrors(errs, fields);
  };

  const submit = (event: React.FormEvent) => {
    // The "phone or email" rule only runs once every other field is valid,
    // so check it up front for a clear message on the last step.
    const { requester_phone, requester_email } = getValues();
    if (!String(requester_phone ?? "").trim() && !String(requester_email ?? "").trim()) {
      event.preventDefault();
      const message = "Please give us a phone number or an email address.";
      setError("requester_phone", { message });
      void trigger(requestSteps[step].fields.filter((f) => f !== "requester_phone")).then(() =>
        showErrors({ ...form.formState.errors, requester_phone: { type: "required", message } }, requestSteps[step].fields),
      );
      return;
    }
    return handleSubmit(onValid, onInvalid)(event);
  };

  const startOver = () => {
    clearDraft(DRAFT_KEY);
    reset({ ...defaults, ...readTracking(), started_at: Date.now() });
    setRestored(false);
    goTo(0);
  };

  const Heading = headingLevel === 2 ? "h2" : "h3";
  const current = requestSteps[step];
  const isLast = step === requestSteps.length - 1;
  const them = isSelf ? "you" : "your parent";

  return (
    <form noValidate onSubmit={isLast ? submit : (e) => (e.preventDefault(), void next())} className="relative">
      <Progress step={step} />

      {restored ? (
        <p className="mt-6 rounded-[var(--radius-control)] bg-sage px-4 py-3">
          We kept what you typed earlier on this device.{" "}
          <button type="button" onClick={startOver} className="font-semibold text-accent underline underline-offset-4">
            Start over
          </button>
        </p>
      ) : null}

      <Heading ref={headingRef} tabIndex={-1} className="mt-10 scroll-mt-28 text-h3 font-bold outline-none">
        <span className="block text-small font-semibold tracking-[0.08em] text-accent uppercase">
          Step {step + 1} of {requestSteps.length}
        </span>
        {current.title}
      </Heading>

      <div className="mt-6">
        <ErrorSummary id={summaryId} errors={summary} headingLevel={headingLevel === 2 ? 3 : 4} />
      </div>

      <Honeypot registration={register("website")} />

      <div className="mt-8 space-y-10">
        {current.id === "appointment" ? (
          <>
            <ChoiceGroup
              type="radio"
              name="relationship"
              legend="Who is the appointment for?"
              options={relationshipOptions}
              registration={register("relationship")}
              error={errors.relationship}
            />
            {!isSelf ? (
              <TextField
                name="parent_first_name"
                label="Your parent’s first name"
                optional
                autoComplete="off"
                registration={register("parent_first_name")}
                error={errors.parent_first_name}
              />
            ) : null}
            <TextField
              name="city"
              label="City or town"
              hint="Bridge is a small pilot in Omaha, Nebraska."
              autoComplete="address-level2"
              registration={register("city")}
              error={errors.city}
            />
            <TextField
              name="appointment_date"
              type="date"
              label="Appointment date"
              optional
              hint="If you know it. We can work it out on the phone."
              registration={register("appointment_date")}
              error={errors.appointment_date}
            />
            <ChoiceGroup
              type="radio"
              name="appointment_kind"
              legend="What kind of appointment?"
              hint="Just the kind of visit. We don’t need to know what it’s for."
              options={appointmentKindOptions}
              registration={register("appointment_kind")}
              error={errors.appointment_kind}
              columns={2}
            />
          </>
        ) : null}

        {current.id === "say" ? (
          <>
            {!isSelf ? (
              <ChoiceGroup
                type="radio"
                name="parent_agreed"
                legend="Has your parent agreed to have a companion?"
                hint="Either way is fine. We always talk with them before anything is booked. If they say no, we don’t go."
                options={parentAgreedOptions}
                registration={register("parent_agreed")}
                error={errors.parent_agreed}
              />
            ) : null}
            <ChoiceGroup
              type="checkbox"
              name="help_needed"
              legend={`What would help ${them} on the day?`}
              options={helpNeededOptions}
              registration={register("help_needed")}
              error={errors.help_needed}
              columns={2}
            />
          </>
        ) : null}

        {current.id === "understand" ? (
          <>
            <p className="rounded-[var(--radius-control)] bg-sage px-5 py-4">
              Every question on this step is optional. Bridge is new, and your answers help us understand how
              families manage appointments today.
            </p>
            <ChoiceGroup
              type="checkbox"
              name="who_goes_today"
              legend={isSelf ? "Who goes with you today?" : "Who goes with your parent today?"}
              optional
              options={whoGoesTodayOptions}
              registration={register("who_goes_today")}
              error={errors.who_goes_today}
              columns={2}
            />
            <ChoiceGroup
              type="radio"
              name="how_often_appointments"
              legend="How often are there appointments?"
              optional
              options={howOftenOptions}
              registration={register("how_often_appointments")}
              error={errors.how_often_appointments}
            />
            <TextAreaField
              name="hardest_part"
              label="What’s the hardest part about appointments right now?"
              optional
              hint={NO_MEDICAL}
              registration={register("hardest_part")}
              error={errors.hardest_part}
            />
          </>
        ) : null}

        {current.id === "contact" ? (
          <>
            <TextField
              name="requester_name"
              label="Your name"
              autoComplete="name"
              registration={register("requester_name")}
              error={errors.requester_name}
            />
            <p className="-mb-4 text-muted">A phone number or an email address. Either is fine; both is best.</p>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
              <TextField
                name="requester_phone"
                type="tel"
                label="Phone"
                autoComplete="tel"
                inputMode="tel"
                registration={register("requester_phone")}
                error={errors.requester_phone}
              />
              <TextField
                name="requester_email"
                type="email"
                label="Email"
                autoComplete="email"
                registration={register("requester_email")}
                error={errors.requester_email}
              />
            </div>
            <TextAreaField
              name="notes"
              label="Anything else we should know?"
              optional
              hint={`For example, the best time to call. ${NO_MEDICAL}`}
              registration={register("notes")}
              error={errors.notes}
            />
            <div className="space-y-4">
              <ConsentField name="consent_contact" registration={register("consent_contact")} error={errors.consent_contact}>
                Bridge may call, text or email me about this request.
              </ConsentField>
              <ConsentField name="consent_privacy" registration={register("consent_privacy")} error={errors.consent_privacy}>
                I’ve read the{" "}
                <Link href="/privacy" target="_blank" className="font-semibold text-accent underline underline-offset-4">
                  privacy policy
                </Link>{" "}
                and understand what Bridge does with this information.
              </ConsentField>
            </div>
            <p className="font-semibold">No payment now. Nothing is booked until we’ve talked with {them}.</p>
          </>
        ) : null}
      </div>

      <div className={cn("mt-12 flex flex-col-reverse gap-3 sm:flex-row", step > 0 ? "sm:justify-between" : "sm:justify-end")}>
        {step > 0 ? (
          <Button type="button" variant="secondary" size="lg" onClick={() => goTo(step - 1)}>
            <ArrowLeft aria-hidden="true" />
            Back
          </Button>
        ) : null}
        <Button type="submit" size="lg" disabled={sending}>
          {isLast ? (sending ? "Sending…" : "Send request") : "Continue"}
          {!isLast ? <ArrowRight aria-hidden="true" /> : null}
        </Button>
      </div>
    </form>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <nav aria-label="Form progress">
      <ol className="grid grid-cols-4 gap-2">
        {requestSteps.map((s, i) => (
          <li key={s.id} aria-current={i === step ? "step" : undefined}>
            <span
              aria-hidden="true"
              className={cn("block h-1.5 rounded-full transition-colors", i <= step ? "bg-accent" : "bg-line")}
            />
            <span aria-hidden="true" className={cn("mt-2 hidden text-small sm:block", i === step ? "font-semibold text-ink" : "text-muted")}>
              {s.title}
            </span>
            <span className="sr-only">
              {i < step ? "Done: " : i === step ? "Current step: " : "Next: "}
              {s.title}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
