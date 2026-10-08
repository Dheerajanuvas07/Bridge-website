/**
 * Choice lists for the request and companion forms.
 * Values match the database columns planned for Phase 4; labels are what people see.
 * No option asks about diagnoses, conditions, medications or insurance.
 */
export type Option<V extends string = string> = { value: V; label: string };

export const relationshipOptions = [
  { value: "son", label: "I’m their son" },
  { value: "daughter", label: "I’m their daughter" },
  { value: "other_family", label: "Other family" },
  { value: "friend", label: "A friend" },
  { value: "self", label: "It’s for me. I’m the one with the appointment." },
] as const satisfies readonly Option[];

export const appointmentKindOptions = [
  { value: "routine_checkup", label: "Routine checkup" },
  { value: "specialist", label: "Specialist visit" },
  { value: "test_or_procedure", label: "Test or procedure" },
  { value: "other", label: "Something else" },
] as const satisfies readonly Option[];

export const parentAgreedOptions = [
  { value: "yes", label: "Yes, they’ve agreed" },
  { value: "not_asked", label: "Not yet. I haven’t asked them." },
  { value: "unsure_please_talk_to_them", label: "Not sure. Please talk with them." },
] as const satisfies readonly Option[];

export const helpNeededOptions = [
  { value: "ride", label: "Getting there and back" },
  { value: "walk_in_check_in", label: "Walking in and checking in" },
  { value: "waiting", label: "Company in the waiting room" },
  { value: "exam_room", label: "Company in the exam room" },
  { value: "notes_update", label: "Notes and an update for family" },
  { value: "pharmacy", label: "A pharmacy stop" },
  { value: "other", label: "Something else" },
] as const satisfies readonly Option[];

export const whoGoesTodayOptions = [
  { value: "me", label: "I take them" },
  { value: "sibling", label: "A brother or sister" },
  { value: "alone", label: "They go alone" },
  { value: "rides", label: "A ride service or taxi" },
  { value: "paid_aide", label: "A paid aide" },
  { value: "other", label: "Someone else" },
] as const satisfies readonly Option[];

export const howOftenOptions = [
  { value: "monthly_or_more", label: "Monthly or more" },
  { value: "every_few_months", label: "Every few months" },
  { value: "few_times_a_year", label: "A few times a year" },
] as const satisfies readonly Option[];

export const hasCarOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
] as const satisfies readonly Option[];

export const values = <T extends readonly Option[]>(options: T) =>
  options.map((o) => o.value) as unknown as [T[number]["value"], ...T[number]["value"][]];
