/* Bridge: shared behaviour for every page.
   - Counts request/referral submissions, phone/text taps and PDF downloads (Plausible).
   - Remembers where a visitor came from (?src=clinic, utm_*) and passes it to the forms.
   - Loads the Tally form embeds. */
(function () {
  'use strict';

  var SOURCE_KEYS = ['src', 'utm_source', 'utm_medium', 'utm_campaign'];
  var STORE_KEY = 'bridge-source';

  // Tally form id -> analytics event name
  var FORM_EVENTS = {
    Zj4QNa: 'Request Submitted',
    aQbl6E: 'Referral Form Submitted'
  };

  function track(name, props) {
    if (typeof window.plausible === 'function') {
      window.plausible(name, props ? { props: props } : undefined);
    }
  }

  // ── Source tracking ─────────────────────────────────────────────────────
  // A visitor may land on the home page with ?src=clinic and only reach the form
  // two clicks later, so keep the source for the rest of the visit.
  var source = {};
  try { source = JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') || {}; } catch (e) { source = {}; }

  var params = new URLSearchParams(location.search);
  if (!params.get('src') && params.get('source')) params.set('src', params.get('source')); // older ?source= links
  var landed = {};
  SOURCE_KEYS.forEach(function (k) { if (params.get(k)) landed[k] = params.get(k); });
  if (Object.keys(landed).length) {
    source = landed;
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(source)); } catch (e) { /* private mode */ }
  }

  function withSource(url, page) {
    var u = new URL(url);
    SOURCE_KEYS.forEach(function (k) { if (source[k]) u.searchParams.set(k, source[k]); });
    if (page) u.searchParams.set('page', page);
    return u.toString();
  }

  // ── Tally embeds ────────────────────────────────────────────────────────
  // Only embeds marked with data-page; the companion application keeps its own loader.
  var frames = document.querySelectorAll('iframe[data-tally-src][data-page]');
  if (frames.length) {
    frames.forEach(function (f) {
      f.dataset.tallySrc = withSource(f.dataset.tallySrc, f.dataset.page);
    });
    document.querySelectorAll('a[data-tally-link]').forEach(function (a) {
      a.href = withSource(a.href, a.dataset.page);
    });

    var embedJs = 'https://tally.so/widgets/embed.js';
    var load = function () {
      if (typeof Tally !== 'undefined') Tally.loadEmbeds();
      else frames.forEach(function (f) { if (!f.src) f.src = f.dataset.tallySrc; });
    };
    if (typeof Tally !== 'undefined') load();
    else if (!document.querySelector('script[src="' + embedJs + '"]')) {
      var s = document.createElement('script');
      s.src = embedJs; s.onload = load; s.onerror = load;
      document.body.appendChild(s);
    }
  }

  window.addEventListener('message', function (e) {
    if (e.origin !== 'https://tally.so') return;
    var data = e.data;
    if (typeof data === 'string') { try { data = JSON.parse(data); } catch (err) { return; } }
    if (!data || data.event !== 'Tally.FormSubmitted') return;
    var formId = data.payload && data.payload.formId;
    var name = FORM_EVENTS[formId];
    if (name) track(name, { src: source.src || source.utm_source || '(direct)' });
  });

  // ── Phone/text taps and PDF downloads ───────────────────────────────────
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (/^(tel|sms):/i.test(href)) {
      track('Phone Click', { location: a.dataset.trackLoc || 'other', page: location.pathname });
    } else if (/\.pdf($|\?)/i.test(href)) {
      track('PDF Download', { file: href });
    }
  });
})();
