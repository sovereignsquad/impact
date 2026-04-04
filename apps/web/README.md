# `@impact/web` — public marketing shell

**Vite** multi-page site (`index.html`, `install.html`, `use.html`, `submit.html`, `data.html`, `profile.html`): install truth, run/submit explainers, community data (placeholders unless built with a stats API base), and **in-browser** `impact-profile.json` validation via `@impact/schemas` + `buildRecommendations` (no upload).

**UI shell:** shared **`site-header`** / **`site-footer`**, **`<main class="site-main page-main">`** (home: **`site-main--home`**) for consistent structure. Styles live in **`src/style.css`**; nav active state in **`src/site-nav.ts`**.

**Versioning:** `package.json` **version** must match the monorepo release (with CLI and `@impact/*`). **`vite.config.ts`** injects **`__IMPACT_WEB_VERSION__`** and **`__IMPACT_PROFILE_SCHEMA_VERSION__`** (`impact.v0.3` — keep aligned with Zod in `@impact/schemas`). **`src/site-meta.ts`** appends a footer line on every page so deploys are traceable.

### Community data (`data.html`)

Set **`VITE_STATS_API_BASE`** at **build** time (for example `VITE_STATS_API_BASE=http://127.0.0.1:8787 npm run build -w @impact/web`) so the page fetches **`/api/stats/full`** from the ingest service and renders aggregate tables when privacy thresholds allow. If unset, the honest placeholder copy stays as-is (Vite drops the fetch path as dead code).

## Develop

From repo root:

```bash
npm ci
npm run dev -w @impact/web
```

Open http://localhost:5173 — try `/`, `/install.html`, `/data.html`, `/profile.html`.

## Build

```bash
npm run build -w @impact/web
```

Output: `apps/web/dist/` with all HTML entry points.

**Vercel:** repo-root project; see root [`vercel.json`](../../vercel.json) (`outputDirectory`: `apps/web/dist`).

## Layout

| `src/` | Purpose |
| ------ | ------- |
| `boot.ts` | Shared CSS + nav active state |
| `site-nav.ts` | `data-page` / `data-nav` wiring |
| `profile-explorer.ts` | Profile drop zone + parse |
| `profile-app.ts` | `boot` + `profile-explorer` for `profile.html` |
| `data-entry.ts` | `boot` + optional live stats from ingest (`VITE_STATS_API_BASE`) |
| `*-entry.ts` | Other pages: import `boot` only |

See [docs/web.md](../../docs/web.md).
