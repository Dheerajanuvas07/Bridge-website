"use client";

import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

/** Anything with an optional message: a react-hook-form error or our own. */
export type ErrorLike = { message?: string } | undefined;

import type { Option } from "@/lib/forms/options";
import { cn } from "@/lib/utils";

/*
 * Plain native inputs, styled large. Native controls give the best screen
 * reader and keyboard behavior for free; each is wired to its hint and error
 * with aria-describedby, and marked aria-invalid when there is a problem.
 */

const controlBase =
  "block w-full rounded-[var(--radius-control)] border-2 border-line bg-paper px-4 text-body text-ink transition-colors placeholder:text-muted/70 hover:border-ink/40 focus-visible:border-accent aria-[invalid=true]:border-error";

export const errorId = (name: string) => `${name}-error`;
export const hintId = (name: string) => `${name}-hint`;

function describedBy(name: string, hint?: ReactNode, error?: ErrorLike) {
  return [hint ? hintId(name) : null, error ? errorId(name) : null].filter(Boolean).join(" ") || undefined;
}

export function FieldMessage({ name, error }: { name: string; error?: ErrorLike }) {
  if (!error?.message) return null;
  return (
    <p id={errorId(name)} className="mt-2 flex items-start gap-2 font-semibold text-error">
      <CircleAlert aria-hidden="true" className="mt-1 size-5 shrink-0" />
      {error.message}
    </p>
  );
}

function Hint({ name, children }: { name: string; children?: ReactNode }) {
  if (!children) return null;
  return (
    <p id={hintId(name)} className="mt-1 text-muted">
      {children}
    </p>
  );
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-lead font-semibold">
      {children}
      {optional ? <span className="ml-2 text-body font-normal text-muted">(optional)</span> : null}
    </label>
  );
}

type TextProps = {
  name: string;
  label: ReactNode;
  registration: UseFormRegisterReturn;
  error?: ErrorLike;
  hint?: ReactNode;
  optional?: boolean;
  type?: "text" | "email" | "tel" | "date";
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
};

export function TextField({ name, label, registration, error, hint, optional, type = "text", autoComplete, inputMode, className }: TextProps) {
  return (
    <div className={className}>
      <Label htmlFor={name} optional={optional}>
        {label}
      </Label>
      <Hint name={name}>{hint}</Hint>
      <input
        id={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, hint, error)}
        className={cn(controlBase, "mt-3 min-h-14")}
        {...registration}
      />
      <FieldMessage name={name} error={error} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  registration,
  error,
  hint,
  optional,
  rows = 4,
}: Omit<TextProps, "type" | "autoComplete" | "inputMode"> & { rows?: number }) {
  return (
    <div>
      <Label htmlFor={name} optional={optional}>
        {label}
      </Label>
      <Hint name={name}>{hint}</Hint>
      <textarea
        id={name}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(name, hint, error)}
        className={cn(controlBase, "mt-3 py-3 leading-relaxed")}
        {...registration}
      />
      <FieldMessage name={name} error={error} />
    </div>
  );
}

type ChoiceProps = {
  name: string;
  legend: ReactNode;
  options: readonly Option[];
  registration: UseFormRegisterReturn;
  error?: ErrorLike;
  hint?: ReactNode;
  optional?: boolean;
  type: "radio" | "checkbox";
  columns?: 1 | 2;
};

/** A fieldset of large, tappable radio or checkbox cards. */
export function ChoiceGroup({ name, legend, options, registration, error, hint, optional, type, columns = 1 }: ChoiceProps) {
  return (
    <fieldset
      id={name}
      tabIndex={-1}
      className="outline-none"
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy(name, hint, error)}
    >
      <legend className="text-lead font-semibold">
        {legend}
        {optional ? <span className="ml-2 text-body font-normal text-muted">(optional)</span> : null}
      </legend>
      <Hint name={name}>{hint}</Hint>
      {type === "checkbox" ? <p className="mt-1 text-muted">Choose all that apply.</p> : null}
      <div className={cn("mt-4 grid gap-3", columns === 2 && "sm:grid-cols-2")}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className="flex min-h-14 cursor-pointer items-center gap-4 rounded-[var(--radius-control)] border-2 border-line bg-paper px-4 py-3 transition-colors hover:border-ink/40 has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
            >
              <input
                id={id}
                type={type}
                value={option.value}
                className="size-6 shrink-0 accent-[var(--color-accent)] focus-visible:outline-none"
                {...registration}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
      <FieldMessage name={name} error={error} />
    </fieldset>
  );
}

/** A single required consent checkbox. */
export function ConsentField({
  name,
  registration,
  error,
  children,
}: {
  name: string;
  registration: UseFormRegisterReturn;
  error?: ErrorLike;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-control)] border-2 border-line bg-paper p-4 has-[:checked]:border-accent has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent"
      >
        <input
          id={name}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId(name) : undefined}
          className="mt-1 size-6 shrink-0 accent-[var(--color-accent)] focus-visible:outline-none"
          {...registration}
        />
        <span>{children}</span>
      </label>
      <FieldMessage name={name} error={error} />
    </div>
  );
}

/** Hidden from people (and screen readers); bots tend to fill it in. */
export function Honeypot({ registration }: { registration: UseFormRegisterReturn }) {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
      <label htmlFor="website">Leave this empty</label>
      <input id="website" type="text" tabIndex={-1} autoComplete="off" {...registration} />
    </div>
  );
}

/** Lists every problem on the current step; announced when it appears. */
export function ErrorSummary({
  id,
  errors,
  headingLevel = 3,
}: {
  id: string;
  errors: { name: string; message: string }[];
  /** One level below the heading the form sits under. */
  headingLevel?: 3 | 4;
}) {
  if (errors.length === 0) return null;
  const Heading = headingLevel === 3 ? "h3" : "h4";
  return (
    <div
      id={id}
      role="alert"
      tabIndex={-1}
      aria-labelledby={`${id}-title`}
      className="rounded-[var(--radius-control)] border-2 border-error bg-error-soft p-5 outline-none"
    >
      <Heading id={`${id}-title`} className="text-body font-semibold text-error-ink">
        {errors.length === 1 ? "There’s one thing to fix:" : `There are ${errors.length} things to fix:`}
      </Heading>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-error-ink">
        {errors.map((e) => (
          <li key={e.name}>
            <a href={`#${e.name}`} className="underline underline-offset-4">
              {e.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
