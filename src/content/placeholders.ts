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
  rideDetails: "[How the ride works]",
  founderBio: "[Founder bio]",
} as const;

export type PlaceholderKey = keyof typeof placeholders;

export const isUnfilled = (value: string) => value.startsWith("[");
