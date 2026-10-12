# Bridge

Website for Bridge (bridgelincoln.com): a screened, non-clinical companion takes an older adult to a non-emergency medical appointment, stays with them, brings them home, and updates authorized family. Lincoln and Omaha, Nebraska.

This branch (`main`) is the live static site, served by GitHub Pages. Every file in the repo is public at `bridgelincoln.com/<path>`, including this README, so keep it short and free of internal notes.

## Files

| Path | What |
|---|---|
| `index.html` | Home page |
| `book.html` | Request a visit (Tally form `Zj4QNa`) |
| `professionals.html` | For care professionals (Tally form `aQbl6E`) |
| `captains.html` | Become a companion (Tally form `QK6N9Y`) |
| `legal/` | Privacy policy and terms |
| `styles.css` | All styles |
| `site.js` | Analytics events, `?src=` source tracking, Tally embeds |

## Placeholders

Unconfirmed facts are shown on the page as highlighted `[PLACEHOLDER: …]` text (class `ph`). Search the repo for `PLACEHOLDER` to find every one.

## Analytics

Plausible (`data-domain="bridgelincoln.com"`). Custom events: `Request Submitted`, `Referral Form Submitted`, `Phone Click`, `PDF Download`. Visits to `/professionals` are a pageview goal.

## Source tracking

Add `?src=<channel>` (or `utm_source`, `utm_medium`, `utm_campaign`) to any link, e.g. `bridgelincoln.com/?src=nextdoor`. The value is kept for the visit and sent to the request and referral forms as hidden fields.
