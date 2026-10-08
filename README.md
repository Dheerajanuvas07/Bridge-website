# Bridge

Website for Bridge, a non-medical appointment companion service in Omaha, Nebraska (small local pilot).

> **Status: rebuild in progress (Phase 2 of 6).** Only the Home page exists, and it's static.
> The live site at bridgelincoln.com is still the old static site on `main`. A full copy of
> the old working tree is on `legacy/static-site`.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- UI: shadcn/ui (Radix), Watermelon UI, Motion Primitives, Lucide icons. See `THIRD_PARTY_NOTICES.md`.
- Hosting: Netlify (free tier). Database, auth and email (Supabase, Resend) arrive in Phase 4.

Dependency versions are pinned exactly, and each was released at least two weeks before it was adopted.

## Run it locally

Requires Node.js 22 and pnpm (via corepack).

```bash
corepack enable
pnpm install
pnpm dev          # http://localhost:3000
```

Other scripts:

```bash
pnpm build        # production build
pnpm lint         # ESLint
pnpm typecheck    # TypeScript
```

## Where things live

| Path | What |
|---|---|
| `src/app/globals.css` | Design tokens: colors, type scale, focus styles, reduced-motion rules |
| `src/app/page.tsx` | Home page, assembled from `src/components/home/*` |
| `src/components/site/` | Header, footer, container, placeholder renderer |
| `src/components/motion/` | Scroll fade-in (`InView`) and the motion provider |
| `src/content/placeholders.ts` | **Every unconfirmed fact.** Fill values here. See `PLACEHOLDERS.md`. |
| `public/backgrounds/` | Background SVGs (Haikei exports replace these) |

## Design rules (short version)

- Ink `#17201C`, white, sage `#F1F4F1`, lines `#D9DFDB`, one accent `#2C5A4C`. Hanken Grotesk.
- Body text at least 18px (we use 19px); headings 40–68px; tap targets at least 48px.
- Motion is subtle and plays once. With `prefers-reduced-motion`, all animation is off.
- Honesty: no testimonials, ratings, numbers or unconfirmed claims. Placeholders only.

Setup for environment variables, deployment, poster sources and data export will be documented here as each phase lands.
