import { z } from "zod";

import {
  appointmentKindOptions,
  hasCarOptions,
  helpNeededOptions,
  howOftenOptions,
  parentAgreedOptions,
  relationshipOptions,
  values,
  whoGoesTodayOptions,
} from "./options";

// Shared by the browser (react-hook-form) and, from Phase 4, the server.

const trimmed = (max: number) => z.string().trim().max(max, `Please keep this under ${max} characters.`);
/** Optional text: empty input becomes undefined. */
const optionalText = (max: number) =>
  z.preprocess((v) => (typeof v === "string" && v.trim() === "" ? undefined : v), trimmed(max).optional());

const phone = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z
    .string()
    .trim()
    .refine((v) => v.replace(/\D/g, "").length >= 10 && v.replace(/\D/g, "").length <= 15, {
      message: "Please enter a phone number with area code, like 402 555 1234.",
    })
    .optional(),
);

const email = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.email("Please check the email address.").max(200).optional(),
);

const mustAgree = (message: string) => z.boolean().refine((v) => v === true, { message });

/** Tracking and anti-spam fields: filled by the page, not the person. */
const meta = {
  source: optionalText(80),
  utm_source: optionalText(200),
  utm_medium: optionalText(200),
  utm_campaign: optionalText(200),
  referrer: optionalText(500),
  website: z.string().max(0).optional(), // honeypot: people never see it, bots fill it
  started_at: z.number().optional(),
};

export const visitRequestSchema = z
  .object({
    relationship: z.enum(values(relationshipOptions), { error: "Please choose who the appointment is for." }),
    parent_first_name: optionalText(60),
    city: trimmed(80).min(1, "Please tell us the city."),
    appointment_date: optionalText(10),
    appointment_kind: z.enum(values(appointmentKindOptions), { error: "Please choose the kind of appointment." }),

    parent_agreed: z.enum(values(parentAgreedOptions), { error: "Please tell us whether your parent has agreed." }),
    help_needed: z.array(z.enum(values(helpNeededOptions)), { error: "Please choose at least one kind of help." }).min(1, "Please choose at least one kind of help."),

    who_goes_today: z.array(z.enum(values(whoGoesTodayOptions))).optional(),
    how_often_appointments: z.preprocess(
      (v) => (v === "" || v === null ? undefined : v),
      z.enum(values(howOftenOptions)).optional(),
    ),
    hardest_part: optionalText(1000),

    requester_name: trimmed(100).min(1, "Please tell us your name."),
    requester_phone: phone,
    requester_email: email,
    notes: optionalText(1000),
    consent_contact: mustAgree("Please check the box so we may contact you."),
    consent_privacy: mustAgree("Please check the box to confirm you’ve read the privacy policy."),
    ...meta,
  })
  .refine((d) => d.requester_phone || d.requester_email, {
    message: "Please give us a phone number or an email address.",
    path: ["requester_phone"],
  });

export type VisitRequestInput = z.input<typeof visitRequestSchema>;
export type VisitRequest = z.output<typeof visitRequestSchema>;

/** Fields shown on each step of the request form, for step-by-step checks. */
export const requestSteps = [
  {
    id: "appointment",
    title: "The appointment",
    fields: ["relationship", "parent_first_name", "city", "appointment_date", "appointment_kind"],
  },
  { id: "say", title: "Your parent’s say", fields: ["parent_agreed", "help_needed"] },
  { id: "understand", title: "Help us understand", fields: ["who_goes_today", "how_often_appointments", "hardest_part"] },
  {
    id: "contact",
    title: "How to reach you",
    fields: ["requester_name", "requester_phone", "requester_email", "notes", "consent_contact", "consent_privacy"],
  },
] as const satisfies readonly { id: string; title: string; fields: readonly (keyof VisitRequestInput)[] }[];

export const companionApplicationSchema = z
  .object({
    name: trimmed(100).min(1, "Please tell us your name."),
    phone,
    email,
    city: trimmed(80).min(1, "Please tell us where you live."),
    availability: trimmed(500).min(1, "Please tell us roughly when you’re free."),
    has_car: z.enum(values(hasCarOptions), { error: "Please answer yes or no about a car." }),
    why: trimmed(1500).min(1, "Please tell us a little about why."),
    consent_privacy: mustAgree("Please check the box to confirm you’ve read the privacy policy."),
    ...meta,
  })
  .refine((d) => d.phone || d.email, {
    message: "Please give us a phone number or an email address.",
    path: ["phone"],
  });

export type CompanionApplicationInput = z.input<typeof companionApplicationSchema>;
