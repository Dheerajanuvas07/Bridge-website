# Bridge

Bridge is a static, conversion-focused marketing site and booking flow for a non-medical appointment-companion service for older adults and their adult children.

## What this project is

This repo contains the MVP website for Bridge, designed to turn clicks into booking requests while staying aligned with the business brief:

- mobile-first static marketing pages
- conversion-driven home page and CTA flow
- multi-step booking form with required acknowledgments
- Captain recruitment page
- legal/privacy pages that avoid noncompliant or inflated claims
- lightweight privacy and analytics hooks
- placeholder form configuration until an email or backend provider is connected

## Current business positioning

- Service: non-medical appointment companionship and family update support
- Primary customer: adult children coordinating care for parents
- Geography: Omaha metro (current launch default)
- Pricing: $139 flat per visit, with no subscriptions or old recurring-plan language in the active site
- Safety boundary: non-medical service only; emergency response follows local protocols

## Site structure

- `index.html` — homepage conversion page
- `book.html` — multi-step appointment request flow
- `captains.html` — Captain application page
- `legal/privacy.html` — privacy policy
- `legal/terms.html` — terms of service
- `styles.css` — theme and responsive design
- `js/site.js` — nav, cookie banner, UTM persistence, and booking logic
- `js/form-config.js` — placeholder integration config for future form/email service setup

## Important notes

- The current form flow is intentionally front-end only and uses safe placeholder mailto behavior until a real email/SMS or backend workflow is configured.
- Meta Pixel and analytics wiring are stubbed and ready for a real Pixel ID and tracking provider.
- UTM capture persists ad parameters into the booking form so campaign source data survives the flow.
- The site is intentionally built as a lightweight static site to keep the MVP simplest, reliable, and easy to deploy.

## Local preview

From the project root, you can serve the site locally with a basic static server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Production readiness

The remaining implementation work is not visual styling or page rebuild — it is backend and operational setup:

- connect the booking form to a real email/SMS or automation provider
- configure live analytics and Meta Pixel ID
- confirm final launch metro copy and schema if a geography change is needed
- replace placeholder contact information and provider credentials when production details are approved

