# `@impact/web` — public marketing shell

Static **Vite** site: landing, install help, post-scan explainer, **in-browser** `impact-profile.json` validation via `@impact/schemas`, FAQ, and a **placeholder** for future community stats (M5).

## Develop

From repo root (schemas source is aliased for `ImpactProfileSchema`):

```bash
npm ci
npm run build -w @impact/schemas   # optional if using dist-only later
npm run dev -w @impact/web
```

Open http://localhost:5173

## Build

```bash
npm run build -w @impact/web
```

Output: `apps/web/dist/` — deploy to any static host.

**Vercel:** repo-root project; see root [`vercel.json`](../../vercel.json) (`outputDirectory`: `apps/web/dist`).

## Roadmap

| Phase | Goal |
| ----- | ---- |
| **Now** | Branded shell + real profile upload (local-only parse) |
| **Next** | Deeper report-style preview, share-safe redaction (M4) |
| **Later** | Live aggregates when ingest exists (M5 / #48) |

See [docs/web.md](../../docs/web.md).
