# Bridge redesign

The site remains static HTML/CSS/JavaScript. No runtime packages were added.
`styles.css` retains the existing form, Captain, and legal layouts; `css/bridge.css`
defines the updated semantic palette, shared controls, and homepage components.
`js/site.js` owns the accessible navigation, form focus/error enhancements, and
unconfigured-email fallback. See `THIRD_PARTY_NOTICES.md` for Watermelon attribution.

## Content decisions

- The appointment completion interface is explicitly an example. It does not imply
  a real-time tracking app or a medical-provider partnership.
- $89/appointment, $239/three appointments, and $159/month/two appointments remain,
  with the existing duration and continuity qualifications.
- Discovery insights retain their original research attribution and are not called
  customer testimonials.
- The unattributed five-star hero quote (also duplicated on Captains) was removed
  from publication pending authenticity/permission confirmation. Its original text
  remains in git history. No replacement endorsement was created.
- The booking support link to (402) 555-0100 was removed pending a real phone number.
  A sample number in a form placeholder is still illustrative input guidance.
- The existing PNG remains in the repository; it is not loaded by the new homepage.
- Legal text is unchanged; navigation and visual styling are shared with the site.

## Email delivery setup

Fill in `js/form-config.js` with the EmailJS service ID, PUBLIC key, and separate
booking and Captain template IDs. Do not place private keys here. Preserve the
parameter names in `submitViaEmailJS` and `capSubmit` when configuring templates.
Both forms show an email contact fallback and disable submission until configured.
The forms do not claim a request was sent when a visitor opens an email client.
Real delivery requires a configured EmailJS account and a controlled smoke test.

## Local commands

- Preview: `python3 -m http.server 4173 --bind 127.0.0.1`
- Static checks: `python3 scripts/check.py`
- Production build: `python3 scripts/build.py`

The build copies an explicit public-file allowlist to `dist/`. GitHub Pages runs
checks/build and publishes that output on pushes to `main` (or manual dispatch).
The redesign branch is not deployed automatically.

## Verification

Verified in isolated headless Chrome on September 23, 2026:
- All five pages at 375, 768, 1440, and 1920 CSS pixels: no horizontal overflow.
- Mobile menu toggle, Escape dismissal with focus return, FAQ disclosure, reduced motion.
- Both multi-step forms: validation, review, and mocked EmailJS failure/success paths.
- No JavaScript runtime exceptions during those checks; no real email was sent.
- Desktop/mobile screenshots reviewed for hero, report, pricing, safety, FAQ, and CTA.
- Legal page main content is byte-for-byte unchanged from the original checkout.

Screenshots and the temporary CDP test runner were kept outside the repository in
`/tmp`; they are not shipped in the production artifact.
Static checks cover local links/fragments, duplicate IDs, one H1 per page, and
form labels. There is no TypeScript or package-manager lint configuration.
