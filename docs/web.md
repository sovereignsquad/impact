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
