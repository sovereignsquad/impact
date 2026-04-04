# MLP status — CTO assessment (snapshot)

**Purpose:** single **answerable status memo** for leadership and contributors: how far the MLP has progressed, what is in code, what blocks public adoption, and **ordered next work**. Supplements [mlp.md](mlp.md) (what the MLP **is**), [mlp-execution.md](mlp-execution.md) (how execution is **staged**), and [current-state.md](current-state.md) (broader **operational truth**). **Board workflow:** [Project #2](https://github.com/users/moldovancsaba/projects/2).

**Established:** 2026-04-03 · **Updated:** 2026-04-10 — **Three distribution paths** (B/C/D) + **M1–M4 nuance** + **dual-track sequencing** after **#34** ([mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md) § *CTO assessment — three distribution paths*): Path D pipeline **real** but **trust-incomplete**; **dashboard #58–#62** still **not started**; **#34** still blocks public npm.

**Maintain this doc when:** the public install gate (**#34**) closes, or **M1–M3** / **H\*** work materially changes state.

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
| **Public web shell** (multi-page, honest copy) | **Green** — **in repo**; **deploy + smoke** = top **operational** task ([web-deploy-smoke.md](web-deploy-smoke.md)) |
| **Historical data IA** | **Green** — structure + labelled placeholders on `/data.html`; **aggregates not live** (correct) |
| **Install truth on site** | **Green** — **strictly gated** on **[#34](https://github.com/moldovancsaba/impact/issues/34)** (Path B primary until close) |
| **Profile explorer** | **Green** — strong MLP asset (`/profile.html`) |
| **In-repo MLP** (report + recommendations + web) | **Green** |
| **Next-delivery tranche** (dashboard **#58–#62**, mac **#63–#66**) | **Green** definition + board + issue index; **red / not started** — **dashboard execution (#58–#62)** |
| **Path B** (repo install) | **Green** — real, verified, usable |
| **Path C** (npm) | **Amber** — implementation-ready; **not public** until **#34** (login, publish, `npm view`, clean-Mac smoke, evidence) |
| **Path D** (DMG) | **Amber** — **local pipeline + artifact + ad-hoc sign + checksum + local smoke**; **not** consumer-grade until **M3** (Developer ID, notarization, **released** artifact validation) |
| **Public MLP adoption path** (npm as easiest install) | **Amber** until **#34** closed |

**Overall (CTO):** **MVP** and **MLP web shell** **green** · **local DMG pipeline** **green** · **public npm** and **Path D trust** **amber** · **dashboard (#58–#62)** **not started** — **primary missing product-value**. **Immediate priority:** close **#34** → attach DMG to Release (honest trust level) → start **#58** → **signing/notarization** in **parallel if capacity** ([mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md)).

### Distribution snapshot (2026-04-10)

| Path | Call |
| ---- | ---- |
| **B** | **Green** — clone/build install; verified. |
| **C** | **Amber** — ready to publish; blocked on maintainer auth + smoke + evidence (**#34**). |
| **D** | **Amber** — pipeline + `.dmg` + checksum + **ad-hoc** sign + local smoke; **not** notarized / Developer ID / release-validated → **not** “Mac app done.” |

**macOS programme (M1–M4):** **M1** done enough · **M2** substantially done · **M3** not done · **M4** DMG exists — **public-quality** only after **M3**.

**Dashboard:** ingest, validation/dedupe, aggregation, privacy thresholds, API, web wiring — **unchanged gap** (**#58–#62**).

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

**SSOT:** [mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md) — includes **2026-04-10** assessment: **Path B / C / D** status, **M1–M4** nuance, **dual-track** after **#34**.

**Order:** **#34** first → **#58** immediately after → **#59–#62** in **dependency order** (**low WIP**). **macOS trust completion** (**#65**, **#66** public-quality bar) may run **in parallel** with dashboard **if capacity** — **do not** treat Path D as **finished** until **M3**; **do not** let packaging **distract** from dashboard.

**Board:** [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) template — **#58–#62** **Todo** until **#34** **Done**; then move **only #58** **In Progress** first. See § *Board movement & WIP discipline* in the tranche doc.

---

## Immediate operational sequence (post-acceptance)

1. **Deploy and smoke** the public web shell — checklist: [web-deploy-smoke.md](web-deploy-smoke.md) (`/`, `/install.html`, `/use.html`, `/submit.html`, `/data.html`, `/profile.html`).  
2. **Close #34** — publish `@impact/cli`, `npm view @impact/cli`, published-package smoke, evidence on issue, board **Done**.  
3. **Under [#44](https://github.com/moldovancsaba/impact/issues/44)** — after **#34**: make **Path C primary** on **home + install**, **Path B fallback**, update truth banners and steps.  
4. **Formalise completion evidence** for **[#44](https://github.com/moldovancsaba/impact/issues/44)–[#46](https://github.com/moldovancsaba/impact/issues/46)** (M1 / M2 / M3) once deploy and **#34** are done and acceptance criteria are met.

**Backlog discipline:** keep **[#51](https://github.com/moldovancsaba/impact/issues/51)–[#53](https://github.com/moldovancsaba/impact/issues/53)** in **Backlog** until ingest and privacy thresholds can populate real aggregates safely.

---

## What is materially delivered (in repo)

- **M3** — Deterministic `buildRecommendations` (`@impact/reporting`); shared with web.  
- **M2** — Richer `impact-report.html` (at a glance, meaning, suggested steps, limitations).  
- **M1** — Install troubleshooting ([install-macos.md](install-macos.md)).  
- **W2** — Web profile explorer (runtimes + same recommendations).  
- **Public web IA (initial)** — Multi-page site: **home** (#57), **install** (#54), **run & results** (#55), **submit** (#56), **community data** placeholders (#50), **profile preview** on `/profile.html` ([web.md](web.md)).  
- **Tests / build** — green at repo root.

Product shape: **scanner + interpretation + guidance + public explainer** — not scanner-only.

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

- **Do not** imply **live community data** before ingest exists.  
- **Do not** imply **npm install is live** before **#34** closes.  
- **Do not** add **benchmark** claims beyond discovery / honest scope.  
- **Privacy** wording explicit ([privacy-for-users.md](privacy-for-users.md), [submission-contract.md](submission-contract.md)).  
- **Placeholders** only when **clearly labelled**; explain ingest + privacy thresholds.  
- **No** DMG/GUI from this track unless explicitly rescoped.

---

## CTO directive to developers (current)

The **public web / data P0 slice is accepted**. The site is now a **real product surface** and the correct **MLP-facing** layer for IMPACT.

**Immediate next steps**

1. **Deploy and smoke** — [web-deploy-smoke.md](web-deploy-smoke.md) (six URLs + nav + copy + profile parse).  
2. **Keep install truth strict** until **#34** closes.  
3. **After #34** — update **home + install** CTA copy under **[#44](https://github.com/moldovancsaba/impact/issues/44)** so **Path C** is **primary** and **Path B** is **fallback only**.

**After deployment**

- Prepare **completion evidence** for **#44** (install/adoption), **#45** (report delight), **#46** (recommendation engine).  
- Leave **#51–#53** in **Backlog** until real aggregate data can ship safely.

**Bottom line:** deploy + smoke the site → close **#34** → switch install story to npm on the site → formalise **M1/M2/M3** evidence.

---

## Ongoing engineering (post–#34, parallel where useful)

- Tighten **recommendation** rules (low memory, platform honesty, cloud-first hints).  
- Strengthen report **summary hierarchy** (primary takeaway, top actions).  
- Web explorer: **badges**, **provenance**, **sample profile** mode.

---

## Related links

- [mlp.md](mlp.md) · [mlp-execution.md](mlp-execution.md) · [current-state.md](current-state.md) · [ssot-map.md](ssot-map.md) · [web.md](web.md) · [web-deploy-smoke.md](web-deploy-smoke.md)
