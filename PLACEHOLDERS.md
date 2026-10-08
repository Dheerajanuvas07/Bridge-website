# Placeholders

Every unconfirmed fact on the site is a placeholder. Nothing here ships until DJ fills it in.

Values live in one file: `src/content/placeholders.ts`. While a value still starts
with `[`, the site shows it highlighted with a dashed underline, so it can't slip
through unnoticed.

## Values to fill

| Key | Shown as | Where it appears | Notes |
|---|---|---|---|
| `pilotPrice` | `[PILOT PRICE]` | Home → Pricing, FAQ | Price per visit during the pilot. |
| `hoursIncluded` | `[X] hours` | Home → Pricing, FAQ | Time a visit covers, door to door. |
| `extraRate` | `[RATE per half hour]` | Home → Pricing | What happens if a visit runs long. |
| `screening` | `[How companions are screened]` | Home → FAQ | Only describe checks you actually run. Don't name background checks until they're in place and confirmed in writing. |
| `serviceArea` | `[Service area]` | Home → FAQ | Exact boundaries inside Omaha, Nebraska. |
| `responseTime` | `[Response time]` | Home → Request section, /thanks (Phase 3) | e.g. "one business day". Only promise what you can keep. |
| `phone` | `[PHONE NUMBER]` | Footer, Request section, /for-parents (Phase 3), posters (Phase 5) | Real number only. No 555 numbers. |
| `email` | `[Business email]` | Footer | No public email until `hello@bridgelincoln.com` actually receives mail. See "Email" below. |
| `rideDetails` | `[How the ride works]` | Home → How it works step 3, FAQ | Who drives? Companion's car, rideshare, or the parent's own? Insurance implications differ. |
| `founderBio` | `[Founder bio]` | Home → Who's behind Bridge | Two or three plain sentences in your own words. |
| — | `[Founder photo]` | Home → Who's behind Bridge | A real photo of you. No stock images. Replace the placeholder box in `src/components/home/who.tsx`. |

## Statements to confirm

These aren't bracketed, but they're promises the site makes. Confirm each one, or tell me what to change.

1. "The same day, you get a written update." (from your brief)
2. "In an emergency, the companion calls 911 first, then you." (from your brief)
3. "No payment now" / "No payment. We talk first." (from your brief)
4. "We'll ask you for honest feedback after each visit." (Pricing)
5. A companion **won't** "provide nursing or hands-on personal care." (Not a nurse section)
6. A companion **will** "stop at the pharmacy on the way home." (from your brief)
7. "Right now, when you send a request, DJ reads it and calls you back. There is no call center." (Who's behind Bridge)
8. The example update card is fictional ("Dr. Patel", "Sam", the knee). It is labeled "Example. Not a real visit." in two places: the visible badge and the screen-reader label.

## Backgrounds (Haikei)

The SVGs in `public/backgrounds/` are hand-written stand-ins. To replace them, export
from [haikei.app](https://haikei.app) using the same file names:

| File | Generator | Size | Colors |
|---|---|---|---|
| `hero-waves.svg` | Layered Waves, 3 layers, low complexity, waves at the bottom | 1600×900 | Background `#FFFFFF`; layers back to front `#EDF1EE`, `#F3F6F3`, `#FAFBFA` (front layer lightest, so the hero meets the white section below without an edge) |
| `divider-wave.svg` | Wave, 1 wave, low amplitude, transparent background | 1600×120 | Fill `#F1F4F1` |
| `soft-blob.svg` | Blob Scene, 2 blobs, low complexity | 1200×800 | Blobs `#F1F4F1` on `#FFFFFF` |

## Email

`bridgelincoln.com` has MX records pointing to Google, but there's no Google
Workspace account, so mail to any `@bridgelincoln.com` address will most likely
bounce. Before launch I'll propose free forwarding for `hello@bridgelincoln.com`.
Nothing changes in DNS without your OK.
