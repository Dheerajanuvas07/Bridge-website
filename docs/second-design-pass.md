# Bridge — second design pass

## Audit before editing

Reviewed the current homepage in isolated local Chrome at desktop and mobile widths,
including navigation, all nine main sections, pricing disclosures, CTA destinations,
typography, spacing, surface treatments, motion, and existing form configuration.
The starting site was already restrained; the problem was hierarchy and storytelling,
not excessive decoration. The five priorities were:

1. Hero: the three-part promise fragmented into five lines on desktop.
2. Difference: small inline arrows understated the full service journey.
3. Process: five equal columns offered little progression or reading hierarchy.
4. Family: abstract reassurance needed a concrete completion-update example.
5. Pricing: recurring plans competed with the primary $89 appointment.

The minimal FAQ, concrete safety boundaries, clear example labeling, and qualified
research quote were worth preserving. Screenshots alone cannot establish full
accessibility compliance or prove conversion improvement.

## Reviewed implementation passes

1. **Tokens and typography — complete.** Warm paper, neutral ink, scarce green,
   warm route accent, reusable heading/spacing/motion tokens; three complete hero
   statements at desktop and the requested phone widths.
2. **Hero — complete.** Five connected, timestamped appointment milestones and a
   family update. All personal details are explicitly illustrative. The interface
   describes an after-visit completion report, not a real-time tracking product.
3. **Service journey — complete.** A prominent connected route distinguishes a
   destination from appointment support. Desktop horizontal, phone vertical, tablet
   two-row composition.
4. **Process — complete.** Sticky desktop introduction and numbered editorial
   timeline; viewport intersection highlights the current step.
5. **Family and trust — complete.** Five realistic questions lead to three concrete
   confirmations. Existing safeguards and non-medical boundaries remain. No employee,
   portrait, identity-verification claim, or testimonial was invented.
6. **Pricing, FAQ, final CTA — complete.** $89 dominates; all existing recurring plan
   details remain in a native disclosure. FAQ remains keyboard-native. A restrained
   route background connects the closing CTA to the hero.
7. **Motion — complete.** Short, one-time entrances, staggered milestones, route
   drawing, and family confirmation; native CSS and IntersectionObserver. Reduced
   motion removes animation. Content remains readable without JavaScript.
8. **Mobile — complete.** Reviewed 375, 390, 430, and 768-pixel compositions, with
   additional overflow checks at 1024, 1440, and 1920 pixels.
9. **Accessibility and cleanup — complete.** Visible focus, contrasting final-CTA
   focus ring, Escape/focus restoration, native disclosures, no-script navigation,
   cache-version updates, production build, and regression checks.

## Evidence and review captures

Local audit captures: `/tmp/second-before-{1440,390}-{section}.png`.
Pass review captures: `/tmp/second-pass1-*` through `/tmp/second-pass8-*`.
Each pass was visually reviewed before moving to the next one. These are local
review artifacts, not production assets. Final focused captures: `/tmp/second-final-keyboard.png` and
`/tmp/second-final-noscript.png`. Final verification is recorded below.

## Implementation and references

The existing static HTML/CSS/JavaScript architecture and Watermelon adaptations are
preserved. Shared form behavior is unchanged. `css/bridge-route.svg` is a 234-byte
original, maintained SVG using the journey/wave principles requested in the brief.
No raster image, React runtime, animation package, or other dependency was added.

Studied [Motion Primitives InView](https://motion-primitives.com/docs/in-view) and
[AnimatedGroup](https://motion-primitives.com/docs/animated-group). Implemented their
entrance and stagger interaction patterns natively to preserve the static site;
this is not an installation of those React components. Studied
[Haikei](https://haikei.app/) and used the brief's permission to create an equivalent
lightweight SVG locally. No Haikei export or third-party graphic is claimed.

## Checks and limits

- `python3 scripts/check.py`: local links, assets, fragments, unique IDs, one H1 per
  page, and field labels.
- `python3 scripts/build.py`: static public-file allowlist to `dist/`.
- Browser checks: all five pages across seven widths; menu toggle and Escape focus
  return; FAQ; reduced motion; both forms' validation/review and mocked success and
  failure responses. No real email was sent.
- Final production checks additionally cover expanded recurring pricing,
  keyboard-operated disclosures, and navigation/content without JavaScript.
- There is no package-manager lint task, TypeScript, or typecheck configuration.
  Browser execution checks JavaScript parsing/runtime behavior; static validation
  and whitespace checks cover the available repository checks.
- No Lighthouse score is claimed. Deferred JavaScript, font-display swap, semantic
  HTML, lightweight SVG, no new packages, and no continuously running animation
  preserve the existing low-overhead architecture. Full assistive-technology and
  cross-browser certification are outside these checks.
- EmailJS is still unconfigured. The existing visible email contact fallback and
  disabled online submission remain; this design pass does not enable live booking.
- Conversion improvements are design hypotheses, not measured outcomes.
