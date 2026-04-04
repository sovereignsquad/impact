# MLP status — CTO assessment (snapshot)

**Purpose:** single **answerable status memo** for leadership and contributors: how far the MLP has progressed, what is in code, what blocks public adoption, and **ordered next work**. Supplements [mlp.md](mlp.md) (what the MLP **is**), [mlp-execution.md](mlp-execution.md) (how execution is **staged**), and [current-state.md](current-state.md) (broader **operational truth**). **Board workflow:** [Project #2](https://github.com/users/moldovancsaba/projects/2).

**Established:** 2026-04-03 · **Updated:** 2026-04-03 — **Dashboard backend accepted in repo** — D1–D5 (**#58–#62**) implemented in code ([`apps/ingest`](../apps/ingest), [`apps/web`](../apps/web) `data.html` + **`VITE_STATS_API_BASE`**); **product-live** still requires **hosted ingest**, **web build env**, **volume**, **verification**. Prior: **2026-04-12** background-system-first framing; **2026-04-11** control-doc usability.

**Maintain this doc when:** the public install gate (**#34**) closes; **hosted ingest** or **live stats** materially changes; **#58–#62** board closure; or **M1–M3** / **H\*** work materially changes state.

---

## Doc layering (SSOT)

| Document | Role |
| -------- | ---- |
| [mlp.md](mlp.md) | What the **MLP is** — doctrine, phases, constraints |
| [mlp-execution.md](mlp-execution.md) | How execution is **staged** — gates, task IDs, order |
| **This file** | **Current CTO assessment** — delivery status, priorities, board mapping |
| [current-state.md](current-state.md) | **Operational truth** — MVP, Path B/C, versioning SSOT |

---

## Summary status

| Signal | Call |
| ------ | ---- |
| **MVP** | **Green** — shipped |
| **Public web shell** (multi-page, honest copy) | **Green** — **in repo**; **deploy + smoke** remain operational ([web-deploy-smoke.md](web-deploy-smoke.md)) |
| **Historical / community data (`/data.html`)** | **Green** in repo — **placeholders** when API unset; **live tables** when **`VITE_STATS_API_BASE`** + reachable ingest; **publicly meaningful** only with **volume** under privacy thresholds |
| **Dashboard backend (D1–D5 / #58–#62)** | **Green** in repo — ingest, SQLite + dedupe, aggregation, privacy thresholds, **`GET /api/stats/*`**, CORS, HTTP tests, **`verify:release`** |
| **Dashboard product-live** (hosted) | **Amber** — ingest **not** assumed deployed; web **not** assumed wired to live API; buckets **empty** until enough submissions |
| **Install truth on site** | **Green** — **strictly gated** on **[#34](https://github.com/moldovancsaba/impact/issues/34)** (Path B primary until close) |
| **Profile explorer** | **Green** — strong MLP asset (`/profile.html`) |
| **In-repo MLP** (report + recommendations + web + ingest/stats) | **Green** |
| **Tranche SSOT** ([mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md)) | **Green** — **Project #2** + views + spine + issue index **at top** |
| **Next-delivery tranche** (mac **#63–#66**, activation) | **Green** definition + board mapping; **operational** work = **deploy ingest**, **env web build**, **seed/verify**, **#34**, Path D trust |
| **Path B** (repo install) | **Green** — real, verified, usable |
| **Path C** (npm) | **Amber** — implementation-ready; **not public** until **#34** (login, publish, `npm view`, clean-Mac smoke, evidence) |
| **Path D** (DMG) | **Amber** — **local pipeline + artifact + ad-hoc sign + checksum + local smoke**; **not** consumer-grade until **M3** (Developer ID, notarization, **released** artifact validation) |
| **Public MLP adoption path** (npm as easiest install) | **Amber** until **#34** closed |

**Overall (CTO):** **Repo** — **MVP**, **web shell**, **dashboard engine**, and **verification** are **green**. **Bottleneck shifted** to **operations and activation**: **hosted ingest**, **`VITE_STATS_API_BASE`** on production web, **submission volume**, **hosted end-to-end proof**, **GitHub/board truth** — **not** “missing dashboard code.” **#34** and **Path D trust** remain **amber**. **Distinction:** **repo-complete** ≠ **product-live** for community stats.

### Distribution snapshot (2026-04-10)

| Path | Call |
| ---- | ---- |
| **B** | **Green** — clone/build install; verified. |
| **C** | **Amber** — ready to publish; blocked on maintainer auth + smoke + evidence (**#34**). |
| **D** | **Amber** — pipeline + `.dmg` + checksum + **ad-hoc** sign + local smoke; **not** notarized / Developer ID / release-validated → **not** “Mac app done.” |

**macOS programme (M1–M4):** **M1** done enough · **M2** substantially done · **M3** not done · **M4** DMG exists — **public-quality** only after **M3**.

**Dashboard:** **In repo** — **#58–#62** delivered as code (ingest MVP, aggregation, privacy, read API, web consumer). **Not publicly delivered** until **hosted** service + **web env** + **verification** + (typically) **enough submissions** for thresholds. **SSOT:** [mlp-next-delivery-tranche.md — Board closure model](mlp-next-delivery-tranche.md#board-closure-dashboard).

### Product bottleneck shift (2026-04-03)

**Was:** “We need to build the dashboard backend.” **Now:** **deployment**, **seeding / volume**, **board–issue truth**, **public activation**, **`#34`**, **Path D trust** — **operational**, not conceptual. **Do not** mark **#58–#62** **Done** on **repo code alone**; **do not** move **#62** to **Done** until the **public** webapp shows **verified** live aggregates. **Do not** relax **production** privacy thresholds to **fake** community volume.

---

## CTO acceptance — public web / data P0 (2026-04-05)

**Accepted.** The developer delivered the **correct layer**: a **public-facing product shell** that is **honest** about current reality and **does not fake** community data.

**In repo:**

- Homepage, install, launch/use, submit, historical data page, profile explorer  
- Multi-page Vite setup, docs, board traceability, GitHub comments on **#50, #54–#57**

**What is now true**

- MVP shipped; web shell **real and structured**; historical **IA** real; install copy **still** gated by **#34**; aggregates **correctly held back**; profile explorer a **strong** asset.

### Documentation & traceability — cleanup accepted

**Correct SSOT in repo:**

- [web-deploy-smoke.md](web-deploy-smoke.md) — public web shell **smoke checklist** (operational SSOT).  
- **This file** — **post-acceptance** state (not pre-acceptance “build the slice” framing).  
- [mlp-execution.md](mlp-execution.md) · [current-state.md](current-state.md) — **next sequence** (deploy → smoke → **#34** → **#44** → **#44–#46** evidence; **#51–#53** Backlog).  
- Board note on **[#57](https://github.com/moldovancsaba/impact/issues/57)** (and related issue comments).

**CTO:** Further **repo-side reframing** is **not** required right now. The **next real moves are operational:** deploy the web shell → run [web-deploy-smoke.md](web-deploy-smoke.md) against **production** → close **#34** when npm is published and smoke-tested → update install CTA under **#44** → attach **#44–#46** completion evidence.

**Tranche freeze — directive to developers:** **Stop** repo/doc churn **for the accepted P0 web shell slice** (no more wording or status reshaping there). **Wait** for operational results. **Resume** only with: **(1)** **#44** home/install **Path C primary** copy **after #34**; **(2)** **#44–#46** completion evidence **once the live path is verified**.

---

## Next delivery tranche — dashboard + macOS (CTO)

**SSOT:** [mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md) — [CTO directive — background system delivery](mlp-next-delivery-tranche.md#cto-directive-background); [Board closure model (#58–#62)](mlp-next-delivery-tranche.md#board-closure-dashboard) (**2026-04-03**).

**Order today:** **Dashboard code** is **in repo**. **Operational priority:** **deploy ingest** → **production `VITE_STATS_API_BASE`** → **redeploy web** → **seed / verify** → sync **GitHub** issue **truth** → close **#58–#62** per **hosted** evidence. **In parallel:** **#34** (npm) and **macOS trust** (**#65** / **#66**) — **do not** treat Path D as **finished** until **M3**.

**Board:** align **Project #2** with [closure model](mlp-next-delivery-tranche.md#board-closure-dashboard); [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) templates may lag — **maintainers override** with **hosted** truth.

---

## Immediate operational sequence (post-acceptance)

1. **Sync GitHub** — issue bodies / Status for **#58–#62** vs repo ([`scripts/gh-issue-bodies/`](../scripts/gh-issue-bodies/)); move columns only when **deploy readiness** matches.  
2. **Deploy ingest** — TLS, persistent **`IMPACT_INGEST_DB_PATH`**, backup plan, **`better-sqlite3`** runtime; smoke **POST** + **`GET /api/stats/overview`**, **`/full`**, **`/hardware`**, **`/tools`**, **`/models`**.  
3. **Web** — production build with **`VITE_STATS_API_BASE=<live-ingest-origin>`**; redeploy; extend [web-deploy-smoke.md](web-deploy-smoke.md) mentally with **stats** checks.  
4. **Volume** — enough real submissions **or** **non-public** env with **controlled** threshold tests — **not** production threshold gaming.  
5. **Deploy and smoke** the public web shell — [web-deploy-smoke.md](web-deploy-smoke.md) (six URLs + **`/data.html`** placeholder vs live).  
6. **Close #34** — publish `@impact/cli`, `npm view`, smoke, evidence — **Path C** primary on site after.  
7. **Under [#44](https://github.com/moldovancsaba/impact/issues/44)–[#46](https://github.com/moldovancsaba/impact/issues/46)** — evidence once live paths exist.

**Backlog discipline:** **[#51](https://github.com/moldovancsaba/impact/issues/51)–[#53](https://github.com/moldovancsaba/impact/issues/53)** remain **legacy IA**; **#58–#62** are the **execution spine** for real aggregates — see closure model.

---

## What is materially delivered (in repo)

- **Dashboard D1–D5 (#58–#62)** — [`apps/ingest`](../apps/ingest): POST ingest, validation, SQLite + dedupe ([submission-contract.md](submission-contract.md)), aggregation + privacy thresholds, **`GET /api/stats/*`**, CORS, Vitest including HTTP tests; [`apps/web`](../apps/web): **`data.html`** live/fallback via **`VITE_STATS_API_BASE`**.  
- **M3** — Deterministic `buildRecommendations` (`@impact/reporting`); shared with web.  
- **M2** — Richer `impact-report.html` (at a glance, meaning, suggested steps, limitations).  
- **M1** — Install troubleshooting ([install-macos.md](install-macos.md)).  
- **W2** — Web profile explorer (runtimes + same recommendations).  
- **Public web IA** — Multi-page site: **home**, **install**, **run & results**, **submit**, **community data**, **profile preview** ([web.md](web.md)); footer **version** line aligned with [current-state.md](current-state.md) § Versioning.  
- **Tests / build** — **`npm run verify:release`** green at repo root.

Product shape: **scanner + interpretation + guidance + public explainer + in-repo dashboard engine** — **public community stats** still **activation**, not code gap.

---

## Product goal — next lovable moment

> A visitor **sees** what kinds of machines, tools, and models show up in the community dataset, **installs** IMPACT, **runs** it, and **understands** how to **contribute** a result — with **trust** intact.

**Three public-facing surfaces (priority):**

1. **Historical data** on the website — main **proof** layer (aggregates, not hype).  
2. **Download / install** — one obvious **primary CTA** (honest until **#34**).  
3. **Launch → submit** — tiny flow: install → scan → report → optional submit.

---

## Staged delivery (realistic)

| Phase | Content |
| ----- | -------- |
| **A** | Website **structure** + live-ready sections (may be empty / labelled). |
| **B** | Public **install/download** path truth (**#34** unlocks npm-first CTA). |
| **C** | **Submission** story visibility (what is sent, privacy, how stats update **later**). |
| **D** | **Real historical aggregates** once ingest is live enough — **do not fake** data before then. |

**Rule:** Historical **sections** can ship **now**; **live community numbers** only when submissions exist and pass **privacy thresholds**. Copy must say so explicitly.

---

## Historical data — content intent (MVP)

**Start with:** counts, top categories, simple distributions.  
**Later:** trends, compare-my-machine, benchmark overlays (Roadmap — not this slice).

**Sections (IA):**

- **Hardware tested** — machine classes, chip families, memory buckets, OS/platform distribution.  
- **Tools tested** — runtimes/tools (Ollama, MLX, allowlisted tools; more as they appear).  
- **LLMs tested** — normalised model families, local vs cloud where available, runtime associations, top families when data exists.

---

## Board-tracked tasks: H1–H8 (GitHub **#50–#57**)

Executable issues on [Project #2](https://github.com/users/moldovancsaba/projects/2). **Status** reapplied via [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh).

| ID | Issue | Board (template) | Priority |
| -- | ----- | ---------------- | -------- |
| **H1** | [#50](https://github.com/moldovancsaba/impact/issues/50) Historical data **information architecture** (hardware / tools / LLMs sections) | **Todo (NEXT)** | P0 |
| **H5** | [#54](https://github.com/moldovancsaba/impact/issues/54) **Install / download** page | **Todo (NEXT)** | P0 |
| **H6** | [#55](https://github.com/moldovancsaba/impact/issues/55) **Launch / use** page | **Todo (NEXT)** | P0 |
| **H7** | [#56](https://github.com/moldovancsaba/impact/issues/56) **Submit result** page | **Todo (NEXT)** | P0 |
| **H8** | [#57](https://github.com/moldovancsaba/impact/issues/57) **Homepage** rework (four pillars) | **Todo (NEXT)** | P0 |
| **H2** | [#51](https://github.com/moldovancsaba/impact/issues/51) Historical **hardware** dataset MVP | **Backlog (SOONER)** | P0 |
| **H3** | [#52](https://github.com/moldovancsaba/impact/issues/52) Historical **tools/runtimes** dataset MVP | **Backlog (SOONER)** | P0 |
| **H4** | [#53](https://github.com/moldovancsaba/impact/issues/53) Historical **LLM/model** dataset MVP | **Backlog (SOONER)** | P0 |

**#34** remains **In Progress (NOW)** until maintainer closeout (publish + smoke + evidence).

**Roadmap (later) — not opened as H-tasks here:** trend charts, compare vs crowd, benchmark overlays on historical data, binary / DMG / desktop delivery.

**Ideabank (later):** personalised accounts, public leaderboards, “social profiles for machines” — do **not** track as P0.

---

## Constraints (non-negotiable)

- **Do not** imply **live community data** on the **public** site before **hosted** ingest + **wired** web + **verified** behaviour.  
- **Do not** imply **npm install is live** before **#34** closes.  
- **Do not** add **benchmark** claims beyond discovery / honest scope.  
- **Privacy** wording explicit ([privacy-for-users.md](privacy-for-users.md), [submission-contract.md](submission-contract.md)).  
- **Placeholders** when API unset; **live** only from **real** API — **no** fabricated aggregate counts.  
- **Do not** relax **production** privacy thresholds to **inflate** public buckets.  
- **No** DMG/GUI from this track unless explicitly rescoped.

---

## CTO directive to developers (current)

The **dashboard backend tranche is accepted as substantially implemented in the repo** — **#58–#62** in code, tests, **`verify:release`**. This is a **major milestone**.

**What is not complete:** **public** delivery of community stats — **hosted ingest**, **live stats API**, **production `VITE_STATS_API_BASE`**, **submission volume**, **hosted verification**. **Repo-complete ≠ product-live** for this tranche.

**Immediate next steps**

1. **Push / sync** GitHub issue **truth** for **#59–#62** (bodies + Status when deploy-ready).  
2. **Deploy ingest** — TLS, persistent DB, ops; verify **`better-sqlite3`** in target environment.  
3. **Set `VITE_STATS_API_BASE`** for production web build; **redeploy** web.  
4. **Seed** enough submissions **or** use **non-public** threshold tests — **never** fake production volume or relax production suppression for optics.  
5. **Smoke hosted** — **`/api/stats/*`**, **`/data.html`** (placeholder vs live vs low-sample behaviour).  
6. **Board:** **#62** stays open until **public** web shows **verified** live aggregates; close **#58–#61** per [closure model](mlp-next-delivery-tranche.md#board-closure-dashboard).  
7. **Keep install truth strict** until **#34** closes; then **[#44](https://github.com/moldovancsaba/impact/issues/44)** Path C primary on site.

**Bottom line:** **activation and ops** are the bottleneck — then **#34** and **Path D trust** remain on the **adoption / packaging** track.

---

## Ongoing engineering (post–#34, parallel where useful)

- Tighten **recommendation** rules (low memory, platform honesty, cloud-first hints).  
- Strengthen report **summary hierarchy** (primary takeaway, top actions).  
- Web explorer: **badges**, **provenance**, **sample profile** mode.

---

## Related links

- [mlp.md](mlp.md) · [mlp-execution.md](mlp-execution.md) · [current-state.md](current-state.md) · [ssot-map.md](ssot-map.md) · [web.md](web.md) · [web-deploy-smoke.md](web-deploy-smoke.md)
