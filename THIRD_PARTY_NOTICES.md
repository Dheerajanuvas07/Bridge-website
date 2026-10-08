# Third-party notices

Bridge includes code adapted from the projects below. Each is used under its license.

| Source | What we use | Where | License |
|---|---|---|---|
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Button structure (Radix `Slot` + `cva`) | `src/components/ui/button.tsx` | MIT, © 2023 shadcn |
| [Watermelon UI registry](https://github.com/WatermelonCorp/watermellon-registry) | `animated-accordion`, used for the FAQ | `src/components/ui/animated-accordion.tsx` | MIT, © 2025-present Watermelon Contributors |
| [Motion Primitives](https://github.com/ibelick/motion-primitives) | `InView` (scroll fade-in) | `src/components/motion/in-view.tsx` | MIT, © 2024 ibelick |
| [Radix UI](https://github.com/radix-ui/primitives) | Accordion and Slot primitives (npm `radix-ui`) | dependency | MIT, © 2022 WorkOS |
| [Motion](https://github.com/motiondivision/motion) | Animation library (npm `motion`) | dependency | MIT, © 2024 Motion B.V. |
| [Lucide](https://github.com/lucide-icons/lucide) | Icons (npm `lucide-react`) | dependency | ISC, © 2026 Lucide Icons and Contributors |
| [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) | Typeface, self-hosted via `next/font` | `src/app/layout.tsx` | SIL Open Font License 1.1 |
| [Haikei](https://haikei.app) | Background SVG style (exports to come) | `public/backgrounds/` | Free for commercial use per Haikei's FAQ; no attribution required |

## Changes we made to adapted code

- **Button:** restyled to Bridge tokens. Every size is at least 48px tall for older readers and touch.
- **Animated accordion:** open state is derived from the accordion value instead of copied into effects. The upstream substring match (`String.includes`) could open the wrong item in single mode. Answers stay rendered so they're searchable. Animation is instant when the reader prefers reduced motion.
- **InView:** plays once, defaults to a short fade and a 16px rise, and is marked `data-motion` so reduced-motion and no-JavaScript readers see content at rest.

Magic UI isn't used yet. If a component is added later, it'll be a free MIT one and will be listed here.
