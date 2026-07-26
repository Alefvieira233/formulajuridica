/**
 * Captura e persiste os parâmetros de UTM da campanha (Meta Ads envia
 * utm_source/medium/campaign/content/term na URL). Eles acompanham o lead
 * até o CRM — é a base da inteligência comercial.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const STORAGE_KEY = "fj_utms";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtms(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    // sessionStorage indisponível (modo privado etc.) — segue sem UTMs
  }
}

export function getUtms(): UtmParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
