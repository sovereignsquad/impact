/**
 * Build URL for ingest stats JSON. Supports two `VITE_STATS_API_BASE` shapes:
 * - **Site origin** (ingest path prefix `/api/stats/…`): `https://example.com` → `…/api/stats/full`
 * - **API mount** (stats live under `BASE/stats/…`): `https://example.com/api` → `…/api/stats/full` on the wire
 */
export function statsJsonUrl(apiBase: string, segment: "overview" | "full" | "hardware" | "tools" | "models"): string {
  const b = apiBase.trim().replace(/\/$/, "");
  const rest = `stats/${segment}`;
  if (/\/api$/i.test(b)) {
    return `${b}/${rest}`;
  }
  return `${b}/api/${rest}`;
}
