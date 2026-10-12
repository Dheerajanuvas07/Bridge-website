# Bridge

Website for Bridge (bridgelincoln.com). A screened, non-medical Bridge Captain goes with an older adult to a non-emergency medical appointment, waits through the visit, brings them home and updates the family. Lincoln and Omaha, Nebraska.

Built with Astro and Tailwind CSS. Static output in `dist/`.

## Run it

Requires Node 22.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

## Where things are

| Path | What |
|---|---|
| `src/data/site.ts` | Phone, email, prices, service area, Tally form ids. Change them here once. |
| `src/pages/` | One file per page: home, `book`, `captains`, `professionals`, `legal/*` |
| `src/layouts/Base.astro` | Head tags, Open Graph, schema.org JSON-LD, analytics, header and footer |
| `src/components/` | Header, footer, photo slots, placeholders, Tally embed |
| `src/styles/global.css` | Colors, fonts, type scale, buttons |
| `src/scripts/site.ts` | The only client script: menu, `?src=` tracking, Tally loading, analytics events |

## Placeholders

Unconfirmed facts render highlighted as `[PLACEHOLDER: …]`, and missing photos as dashed boxes describing the photo needed. Search `src/` for `<Ph>` and `PhotoSlot` to find them all.

## Branches and deploys

`develop` is where all work happens. `main` is live: every push to `main` builds and deploys through `.github/workflows/deploy.yml`.
