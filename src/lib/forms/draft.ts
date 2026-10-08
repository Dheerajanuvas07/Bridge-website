/**
 * Unsent form drafts live only in this browser (localStorage) so a refresh or a
 * phone call mid-form doesn't lose anything. Cleared when the form is sent.
 * Storage can be unavailable (private mode, blocked site data), so every call is guarded.
 */
const OMIT = new Set(["website", "started_at"]);

export function readDraft<T>(key: string): { values: Partial<T>; step: number } | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { values?: Partial<T>; step?: number; savedAt?: number };
    // Drafts older than two weeks are stale; start fresh.
    if (!parsed.values || !parsed.savedAt || Date.now() - parsed.savedAt > 14 * 24 * 60 * 60 * 1000) return null;
    return { values: parsed.values, step: Number(parsed.step) || 0 };
  } catch {
    return null;
  }
}

export function writeDraft(key: string, values: Record<string, unknown>, step: number) {
  try {
    const kept = Object.fromEntries(Object.entries(values).filter(([k]) => !OMIT.has(k)));
    window.localStorage.setItem(key, JSON.stringify({ values: kept, step, savedAt: Date.now() }));
  } catch {
    /* storage unavailable: the form still works, it just won't remember */
  }
}

export function clearDraft(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* nothing to clear */
  }
}

/** Where the visitor came from: ?source= (short links, Phase 5), UTM tags, and an outside referrer. */
export function readTracking() {
  const params = new URLSearchParams(window.location.search);
  const pick = (k: string) => params.get(k)?.slice(0, 200) || undefined;
  let referrer: string | undefined;
  try {
    if (document.referrer && new URL(document.referrer).origin !== window.location.origin) referrer = document.referrer.slice(0, 500);
  } catch {
    referrer = undefined;
  }
  return {
    source: pick("source")?.slice(0, 80),
    utm_source: pick("utm_source"),
    utm_medium: pick("utm_medium"),
    utm_campaign: pick("utm_campaign"),
    referrer,
  };
}
