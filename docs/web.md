# IMPACT public web shell (`apps/web`)

**Purpose:** first **public-facing** web surface for IMPACT — not a replacement for the offline **`impact-report.html`** from the CLI, but a place **normal users** discover install steps, understand outputs, and (later) see **aggregate** community stats.

**Code:** [`apps/web`](../apps/web/)

---

## What ships today

- **Landing / hero** — value proposition, links to GitHub and install.
- **Install** — Path C (npm) honest state + Path B commands; links to `install-macos.md` and **#34**.
- **After a scan** — what `impact-report.html` and `impact-profile.json` are.
- **Profile explorer** — user picks or drops `impact-profile.json`; **`ImpactProfileSchema.safeParse`** runs **entirely in the browser** (no upload).
- **Product truth** — MVP vs not shipped; pointers to `current-state.md` and `mlp.md`.
- **Community stats** — static placeholder until ingest + M5 ([#48](https://github.com/moldovancsaba/impact/issues/48)).
- **FAQ** — privacy, benchmarks, npm gate.

---

## Developer commands

```bash
npm run dev -w @impact/web
npm run build -w @impact/web
```

Root **`npm run verify:release`** includes the web build.

### Deploy (Vercel)

Use the **repository root** as the Vercel project root (monorepo). Root [`vercel.json`](../vercel.json) sets **`outputDirectory`** to **`apps/web/dist`** so the deploy does not look for a top-level `public/` folder. **Install** and **build** run at root: `npm ci`, `npm run build` (builds all workspaces including `@impact/web`).

If the Vercel dashboard had **Output Directory** set to `public`, remove it or set it to **`apps/web/dist`** so it matches `vercel.json`.

**Production (configured):** [https://impact.messmass.com](https://impact.messmass.com) — project **`narimato/impact`**, linked locally via `vercel link --project impact --scope narimato`. Deploy: `vercel --prod --yes --scope narimato` from repo root (requires Vercel CLI + team access). GitHub integration will pick up **`vercel.json`** on push.

---

## Roadmap (aligned with MLP)

1. **Branding polish** — visuals, a11y, copy sync with README as Path C goes live (**M1**).
2. **Richer “results” view** — optional table summaries / redacted share block (**M2** / **M4**).
3. **Live stats API + page** — after ingest MVP (**M5**).

Constraints: no benchmark **scores**, no hype “readiness index,” no silent data collection from the profile explorer.

---

## SSOT

- **Product facts:** [current-state.md](current-state.md), [user-expectations-mvp.md](user-expectations-mvp.md).
- **MLP sequencing:** [mlp.md](mlp.md).
- **Authority map:** [ssot-map.md](ssot-map.md).
