/**
 * Build URL for ingest stats JSON. Supports `VITE_STATS_API_BASE` shapes:
 * - **Same-origin path** (Vercel multi-domain): `/api` → `/api/stats/full` (resolved against the page origin)
 * - **Site origin** (absolute): `https://example.com` → `…/api/stats/full`
 * - **API mount** (absolute, base ends with `/api`): `https://example.com/api` → `…/api/stats/full`
 */
export function statsJsonUrl(apiBase: string, segment: "overview" | "full" | "hardware" | "tools" | "models"): string {
  const b = apiBase.trim().replace(/\/$/, "");
  const rest = `stats/${segment}`;
  if (/\/api$/i.test(b)) {
    return `${b}/${rest}`;
  }
  return `${b}/api/${rest}`;
}
