# Placeholders

Every unconfirmed fact on the site is a placeholder. Nothing here ships until DJ fills it in.

Values live in one file: `src/content/placeholders.ts`. While a value still starts
with `[`, the site shows it highlighted with a dashed underline, so it can't slip
through unnoticed.

## Values to fill

| Key | Shown as | Where it appears | Notes |
|---|---|---|---|
| `pilotPrice` | `[PILOT PRICE]` | Home → Pricing, FAQ, /terms | Price per visit during the pilot. |
| `hoursIncluded` | `[X] hours` | Home → Pricing, FAQ, /terms | Time a visit covers, door to door. |
| `extraRate` | `[RATE per half hour]` | Home → Pricing, /terms | What happens if a visit runs long. |
| `screening` | `[How companions are screened]` | Home → FAQ, /companions | Only describe checks you actually run. Don't name background checks until they're in place and confirmed in writing. |
| `serviceArea` | `[Service area]` | Home → FAQ | Exact boundaries inside Omaha, Nebraska. |
| `responseTime` | `[Response time]` | Home → Request section, /request, /thanks | e.g. "one business day". Only promise what you can keep. |
| `phone` | `[PHONE NUMBER]` | Footer, Request section, /request, /thanks, /for-parents, /privacy, /terms, posters (Phase 5) | Real number only. No 555 numbers. |
| `email` | `[Business email]` | Footer, /privacy, /terms | No public email until `hello@bridgelincoln.com` actually receives mail. See "Email" below. |
| `rideDetails` | `[How the ride works]` | Not shown yet. Until you decide, the site says only "We’ll arrange the ride with you." (How it works step 3, FAQ) | Who drives? Companion's car, rideshare, or the parent's own? Insurance implications differ. |
| `founderBio` | `[Founder bio]` | Home → Who's behind Bridge | Two or three plain sentences in your own words. |
| — | `[Founder photo]` | Home → Who's behind Bridge | A real photo of you. No stock images. Replace the placeholder box in `src/components/home/who.tsx`. |
| `companionPay` | `[Companion pay]` | /companions | What companions earn per visit, or "we'll discuss it on a call". |
| `retention` | `[How long we keep visit records and companion applications]` | /privacy | Requests that never become visits: **12 months, then deleted** (confirmed; Phase 4 will automate it). Still needed: visits and applications. |
| `cancellationPolicy` | `[Cancellation policy]` | /terms | What happens if a visit is cancelled late. |
| — | `[Liability terms: needs legal review]` | /terms | Have a Nebraska attorney or your insurer write this part. Both legal pages say "DRAFT — needs review" until then. |

## Statements: confirmed by DJ

All twelve statements are confirmed, with two changes now applied:

- Pharmacy is now "Can stop at the pharmacy, if you let us know ahead." The same condition is applied wherever a pharmacy stop is mentioned (How it works, /for-parents, /companions).
- The example update card says "the doctor" instead of a named doctor. It stays fictional and labeled "Example. Not a real visit."

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
