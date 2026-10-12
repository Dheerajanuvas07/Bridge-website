// Bridge: the only client-side script on the site.
// - Mobile menu toggle
// - Remembers where a visitor came from (?src=clinic, utm_*) and passes it to the forms
// - Loads the Tally form embeds
// - Counts form submissions, phone/text taps and PDF downloads in Plausible

type Props = Record<string, string>;
declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Props }) => void;
    Tally?: { loadEmbeds: () => void };
  }
}

function track(name: string, props?: Props) {
  window.plausible?.(name, props ? { props } : undefined);
}

// ── Mobile menu ─────────────────────────────────────────────────────────────
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.textContent = open ? 'Menu' : 'Close';
  menu?.classList.toggle('hidden', open);
});

// ── Source tracking ─────────────────────────────────────────────────────────
// A visitor may land on the home page with ?src=clinic and only reach the form
// two clicks later, so keep the source for the rest of the visit.
const SOURCE_KEYS = ['src', 'utm_source', 'utm_medium', 'utm_campaign'];
const STORE_KEY = 'bridge-source';

let source: Props = {};
try {
  source = JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') || {};
} catch {
  source = {};
}

const params = new URLSearchParams(location.search);
if (!params.get('src') && params.get('source')) params.set('src', params.get('source')!); // older ?source= links
const landed: Props = {};
for (const k of SOURCE_KEYS) {
  const v = params.get(k);
  if (v) landed[k] = v;
}
if (Object.keys(landed).length) {
  source = landed;
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(source));
  } catch {
    /* private browsing: source applies to this page only */
  }
}

function withSource(url: string, page?: string) {
  const u = new URL(url);
  for (const k of SOURCE_KEYS) if (source[k]) u.searchParams.set(k, source[k]);
  // The Captain application form predates ?src= and stores the channel in "source"
  u.searchParams.set('source', source.src || source.utm_source || `website-${page || 'page'}`);
  if (page) u.searchParams.set('page', page);
  return u.toString();
}

// ── Tally embeds ────────────────────────────────────────────────────────────
// Tally form id -> analytics event name
const FORM_EVENTS: Props = {
  Zj4QNa: 'Request Submitted',
  aQbl6E: 'Referral Form Submitted',
  QK6N9Y: 'Captain Application Submitted',
};

const frames = document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]');
if (frames.length) {
  frames.forEach((f) => {
    f.dataset.tallySrc = withSource(f.dataset.tallySrc!, f.dataset.page);
  });
  document.querySelectorAll<HTMLAnchorElement>('a[data-tally-link]').forEach((a) => {
    a.href = withSource(a.href, a.dataset.page);
  });

  const embedJs = 'https://tally.so/widgets/embed.js';
  const load = () => {
    if (window.Tally) window.Tally.loadEmbeds();
    else frames.forEach((f) => { if (!f.src) f.src = f.dataset.tallySrc!; });
  };
  if (window.Tally) load();
  else if (!document.querySelector(`script[src="${embedJs}"]`)) {
    const s = document.createElement('script');
    s.src = embedJs;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }
}

window.addEventListener('message', (e) => {
  if (e.origin !== 'https://tally.so') return;
  let data = e.data;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { return; }
  }
  if (data?.event !== 'Tally.FormSubmitted') return;
  const name = FORM_EVENTS[data.payload?.formId];
  if (name) track(name, { src: source.src || source.utm_source || '(direct)' });
});

// ── Phone/text taps and PDF downloads ───────────────────────────────────────
document.addEventListener('click', (e) => {
  const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (/^(tel|sms):/i.test(href)) {
    track('Phone Click', { location: a.dataset.trackLoc || 'other', page: location.pathname });
  } else if (/\.pdf($|\?)/i.test(href)) {
    track('PDF Download', { file: href });
  }
});

export {};
