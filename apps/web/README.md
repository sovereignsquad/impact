# `@impact/web` — public marketing shell

**Vite** multi-page site (`index.html`, `install.html`, `use.html`, `submit.html`, `data.html`, `profile.html`): install truth, run/submit explainers, community-data **IA** (labelled placeholders until ingest), and **in-browser** `impact-profile.json` validation via `@impact/schemas` + `buildRecommendations` (no upload).

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
| `*-entry.ts` | Page stubs that only import `boot` |

See [docs/web.md](../../docs/web.md).
