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
| `retention` | `[How long we keep data]` | /privacy | e.g. "Requests that don't become visits are deleted after 12 months." |
| `cancellationPolicy` | `[Cancellation policy]` | /terms | What happens if a visit is cancelled late. |
| — | `[Liability terms: needs legal review]` | /terms | Have a Nebraska attorney or your insurer write this part. Both legal pages say "DRAFT — needs review" until then. |

## Statements to confirm

New in Phase 3 (please confirm too):

- /privacy: "if something goes wrong, we'll tell the people affected" and "we'll … delete it, and let you know when it's done."
- /companions and the companion thank-you page: "DJ reads every application and will get back to you."
- /for-parents: "Ask anything. There's no pressure, and no cost to ask."
- /terms: "These terms are governed by the laws of the State of Nebraska."

From Phase 2:

These aren't bracketed, but they're promises the site makes. Confirm each one, or tell me what to change.

1. "The same day, you get a written update." (from your brief)
2. "In an emergency, the companion calls 911 first, then you." (from your brief)
3. "No payment now" / "No payment. We talk first." (from your brief)
4. "We'll ask you for honest feedback after each visit." (Pricing)
5. ~~A companion won't "provide nursing or hands-on personal care."~~ Replaced with your wording: "No nursing, and no personal care like bathing or toileting. A steady arm and help with a walker, always."
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
