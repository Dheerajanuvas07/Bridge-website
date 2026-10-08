/**
 * Every unconfirmed fact on the site lives here. Values still in [BRACKETS]
 * render highlighted so they cannot ship by accident. See PLACEHOLDERS.md.
 */
export const placeholders = {
  pilotPrice: "[PILOT PRICE]",
  hoursIncluded: "[X] hours",
  extraRate: "[RATE per half hour]",
  screening: "[How companions are screened]",
  serviceArea: "[Service area]",
  responseTime: "[Response time]",
  phone: "[PHONE NUMBER]",
  email: "[Business email]",
  // Not rendered yet. Until DJ decides, copy says only "We’ll arrange the ride with you."
  rideDetails: "[How the ride works]",
  companionPay: "[Companion pay]",
  retention: "[How long we keep visit records and companion applications]",
  cancellationPolicy: "[Cancellation policy]",
} as const;

export type PlaceholderKey = keyof typeof placeholders;

export const isUnfilled = (value: string) => value.startsWith("[");
