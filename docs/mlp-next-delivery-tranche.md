# MLP — next delivery tranche (CTO directive)

**Purpose:** SSOT for the **next** delivery work after the **frozen** public-web/doc tranche ([mlp-status-cto.md](mlp-status-cto.md)). **Product:** (1) **real community dashboard data** on the webapp, (2) **downloadable macOS distribution** — **not equal in readiness**; the **dashboard is closer** than a polished Mac app. **Execute in phase order.**

**Board issues:** dashboard **[#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)**; macOS packaging **[#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)**. **Do not start** dashboard execution until **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **Done** (npm publish + smoke + evidence).

**Established:** CTO directive · **Accepted:** 2026-04-07 (initial) · **Confirmed SSOT:** 2026-04-08 — tranche doc + issue map + low-WIP discipline **final** for this phase.

---

## CTO acceptance — next delivery tranche

**Decision:** **This file** is the **correct SSOT** for the **next public delivery phase**.

**What this document is doing right:**

- Sequencing is **clear** · WIP discipline is **clear** · **Dashboard** comes **first** · **macOS packaging** is **staged** correctly · **DMG stays last** · **Issue map** at the end is **complete** for people **without** GitHub/repo access.

**Current status (CTO):**

- **Green:** MVP  
- **Green:** in-repo **MLP web shell** and **recommendation / report** work  
- **Green:** **next-delivery tranche** definition and board setup  
- **Amber:** **[#34](https://github.com/moldovancsaba/impact/issues/34)** still blocks **broad** execution of the dashboard tranche  
- **Ready:** as soon as **#34** is **Done**, start **[#58](https://github.com/moldovancsaba/impact/issues/58)** **first** — **not** everything at once.

**Correct execution order (preserve dependency — do not parallelise into busywork):**

1. **Close [#34](https://github.com/moldovancsaba/impact/issues/34)** (publish, verify, smoke, evidence, board **Done**).  
2. **Move [#58](https://github.com/moldovancsaba/impact/issues/58)** to **In Progress**.  
3. **Start [#59](https://github.com/moldovancsaba/impact/issues/59)** only when **D1** is **materially** underway.  
4. Keep **[#60](https://github.com/moldovancsaba/impact/issues/60)–[#62](https://github.com/moldovancsaba/impact/issues/62)** in **Todo** until **unblocked** by prior steps.  
5. Keep **[#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)** in **Backlog** until **dashboard** work has **advanced**.  
6. Treat **DMG** ([#66](https://github.com/moldovancsaba/impact/issues/66)) as the **final** packaging layer — **not** an early deliverable.

**CTO note:** The **low-WIP** correction matters. **Do not** let the board turn into **parallel busywork** — this tranche **only works** if the team preserves **dependency order**.

**Immediate next step (operational — unchanged):** publish and close **#34** → begin **#58** → advance the **dashboard** tranche **in sequence**.

**Strong product choices (preserved):** dashboard = **next product-value layer**; Mac download = **packaging / release engineering**, staged. **Out of scope:** native GUI, accounts/profile layer, leaderboards, benchmark overlays.

---

## What was missing (management summary)

### 1. Downloadable macOS app

Today IMPACT is a **scanner + web shell + CLI install** — **not** a native Mac product download.

Still required:

- **Packaging strategy** — standalone **CLI binary** and/or **.app** wrapper; **DMG is last**, not the product ([#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)).
- **Pipeline** — reproducible build, versioning, artifact, clean-Mac smoke ([#64](https://github.com/moldovancsaba/impact/issues/64)).
- **Trust** — signing, notarization, release process ([#65](https://github.com/moldovancsaba/impact/issues/65)).
- **DMG** — only after M1–M3 ([#66](https://github.com/moldovancsaba/impact/issues/66)).

**Product choice:** document **CLI-in-binary** vs **.app**; default recommendation: **binary first**, app/DMG later. **No GUI scope** in this tranche.

### 2. Web dashboard (real data)

The **web shell** exists; the **dashboard** does not.

Still required:

- **Ingest** — receive, validate, dedupe, store ([#58](https://github.com/moldovancsaba/impact/issues/58)).
- **Aggregation** — dimensions and rollups ([#59](https://github.com/moldovancsaba/impact/issues/59)).
- **Privacy thresholds** — low-n suppression, safe grouping, publication rules ([#60](https://github.com/moldovancsaba/impact/issues/60)).
- **Read API** — hardware / tools / models endpoints ([#61](https://github.com/moldovancsaba/impact/issues/61)).
- **Web wiring** — replace `data.html` placeholders with **real** aggregates only when D1–D4 are live ([#62](https://github.com/moldovancsaba/impact/issues/62)).

Relates to legacy programme **[#48](https://github.com/moldovancsaba/impact/issues/48)** (M5 umbrella) and **[#51](https://github.com/moldovancsaba/impact/issues/51)–[#53](https://github.com/moldovancsaba/impact/issues/53)** (aggregate MVPs on the board — superseded in detail by **#58–#62** as execution spine).

---

## Execution order

### Phase 1 — Public install gate (mandatory)

1. **Close [#34](https://github.com/moldovancsaba/impact/issues/34)** — publish `@impact/cli`, `npm view @impact/cli`, published-package smoke, evidence, board **Done**.

### Phase 2 — Dashboard foundation (start immediately after #34)

| ID | Issue | Deliverables |
| -- | ----- | ------------ |
| **D1** | [#58](https://github.com/moldovancsaba/impact/issues/58) | Ingest endpoint, validation, duplicate handling, storage schema, basic ops README |
| **D2** | [#59](https://github.com/moldovancsaba/impact/issues/59) | Normalized aggregation schema, rollup job or query layer, documented metric definitions |
| **D3** | [#60](https://github.com/moldovancsaba/impact/issues/60) | Privacy threshold policy, enforcement in aggregation/output |
| **D4** | [#61](https://github.com/moldovancsaba/impact/issues/61) | Stable read API contract, response shapes, sample payloads |
| **D5** | [#62](https://github.com/moldovancsaba/impact/issues/62) | Wire `/data.html` (and home summaries if needed); “updated from submitted profiles” copy; no benchmark overlays |

**Dimensions to support (D2):** machine classes, chip families, memory bands, platform counts, runtime/tool families, model families, locality split.

### Phase 3 — macOS distribution (after dashboard trajectory is clear; do not skip to DMG)

| ID | Issue | Deliverables |
| -- | ----- | ------------ |
| **M1** | [#63](https://github.com/moldovancsaba/impact/issues/63) | Decision record: standalone binary vs .app wrapper; build approach; release implications |
| **M2** | [#64](https://github.com/moldovancsaba/impact/issues/64) | Reproducible build, versioned artifact, install/run docs, clean-Mac smoke evidence |
| **M3** | [#65](https://github.com/moldovancsaba/impact/issues/65) | Signing + notarization strategy, checklist, manual vs automated |
| **M4** | [#66](https://github.com/moldovancsaba/impact/issues/66) | DMG / drag-to-Applications, uninstall/update notes — **only after M1–M3** |

---

## Board movement & WIP discipline

**Use the board to preserve sequence, not only visibility.** Having **#58–#62** all in **Todo** is fine for **queue visibility**; **operationally** limit **In Progress** work to **one or two** dashboard tickets at a time.

| When | Action |
| ---- | ------ |
| **Now** | **[#34](https://github.com/moldovancsaba/impact/issues/34)** **In Progress** until closed. **#58–#62** **Todo** (queued — see [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh)); **none** In Progress until **#34** **Done**. |
| **Immediately after #34 Done** | Move **only [#58](https://github.com/moldovancsaba/impact/issues/58)** to **In Progress** (D1 ingest). Keep **#59–#62** in **Todo** until unblocked. |
| **When #58 is materially underway** | Move **[#59](https://github.com/moldovancsaba/impact/issues/59)** to **In Progress** (D2 aggregation). Advance **#60→#61→#62** the same way — **dependency order**, low WIP. |
| **macOS tranche** | Keep **#63–#66** in **Backlog** until the **dashboard foundation has meaningfully advanced**. **Primary:** dashboard · **Secondary:** packaging (parallel **investigation** only if spare capacity). **DMG last.** |
| **Ideabank** | GUI, accounts, leaderboards — no new issues required here. |

[`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) sets a **template** (e.g. **#58–#62** Todo); **after #34**, maintainers should **manually** set **In Progress** per the table above to reduce board noise and fragmentation.

---

## Constraints

- **No** fake dashboard / community data.  
- **No** benchmark overlays.  
- **No** DMG before macOS packaging strategy + pipeline + signing plan exist (**do not** jump straight to DMG work).  
- **No** GUI scope creep.  
- **No** account / public profile layer.  
- **Privacy thresholds** must exist **before** public aggregates go live; **privacy-safe** language everywhere.

---

## Definition of success

**Dashboard:** site shows **real** aggregate historical data for hardware tested, tools/runtimes tested, LLM/model families tested — with trust copy and suppression rules.

**Mac distribution:** user can **download a real macOS artifact** and run IMPACT **without cloning the repo** (binary or app — per M1 decision).

**Trust:** public claims match shipped reality; privacy thresholds enforced.

---

## Developer handoff (report back)

Next handoff must include:

- What shipped for **ingest / storage**  
- Which **dashboard endpoints** exist  
- Which **aggregate sections** are live on the webapp  
- **Chosen macOS distribution path** (M1)  
- Whether **binary/app packaging** is ready (M2)  
- Whether **DMG** is blocked and **why** (M4)

---

## Developer directive (CTO — verbatim intent)

The **next-delivery tranche setup is accepted**. **This document** is the **SSOT** for the next public delivery phase.

**Immediate rule:** do **not** begin broad execution of the new tranche until **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **operationally closed** (publish, verify, smoke, evidence).

**After #34 closes** — execute in order: **#58** ingest MVP → **#59** aggregation → **#60** privacy thresholds → **#61** dashboard API → **#62** wire webapp. **Packaging:** keep **#63–#66** staged (decision → pipeline → signing → **DMG last**).

**Board:** preserve **sequence**; **low WIP** on **#58–#62** (see § Board movement & WIP discipline).

---

## GitHub issues — index with titles (architects without repo access)

Repo: **moldovancsaba/impact**. Base: `https://github.com/moldovancsaba/impact/issues/`

### Install gate & MLP spine

| # | Title |
| - | ----- |
| [34](https://github.com/moldovancsaba/impact/issues/34) | IMPACT P1: Publish @impact/cli to npm registry |
| [44](https://github.com/moldovancsaba/impact/issues/44) | IMPACT P0: MLP M1 — Public install and adoption |
| [45](https://github.com/moldovancsaba/impact/issues/45) | IMPACT P0: MLP M2 — Report delight and first-run payoff |
| [46](https://github.com/moldovancsaba/impact/issues/46) | IMPACT P0: MLP M3 — Conservative recommendation engine |
| [47](https://github.com/moldovancsaba/impact/issues/47) | IMPACT P1: MLP M4 — Shareable result layer |
| [48](https://github.com/moldovancsaba/impact/issues/48) | IMPACT P1: MLP M5 — Community visibility MVP |
| [49](https://github.com/moldovancsaba/impact/issues/49) | IMPACT P1: MLP M6 — Install polish after npm |

### Public web shell (H1–H8)

| # | Title |
| - | ----- |
| [50](https://github.com/moldovancsaba/impact/issues/50) | IMPACT P0: MLP Web H1 — Historical data information architecture |
| [51](https://github.com/moldovancsaba/impact/issues/51) | IMPACT P0: MLP Web H2 — Historical hardware dataset MVP |
| [52](https://github.com/moldovancsaba/impact/issues/52) | IMPACT P0: MLP Web H3 — Historical tools/runtimes dataset MVP |
| [53](https://github.com/moldovancsaba/impact/issues/53) | IMPACT P0: MLP Web H4 — Historical LLM/model dataset MVP |
| [54](https://github.com/moldovancsaba/impact/issues/54) | IMPACT P0: MLP Web H5 — Install / download page |
| [55](https://github.com/moldovancsaba/impact/issues/55) | IMPACT P0: MLP Web H6 — Launch / use page |
| [56](https://github.com/moldovancsaba/impact/issues/56) | IMPACT P0: MLP Web H7 — Submit result page |
| [57](https://github.com/moldovancsaba/impact/issues/57) | IMPACT P0: MLP Web H8 — Homepage rework (four pillars) |

### Dashboard tranche (D1–D5) — this document’s Phase 2

| # | Title |
| - | ----- |
| [58](https://github.com/moldovancsaba/impact/issues/58) | IMPACT P0: Dashboard D1 — Ingest MVP |
| [59](https://github.com/moldovancsaba/impact/issues/59) | IMPACT P0: Dashboard D2 — Aggregation model |
| [60](https://github.com/moldovancsaba/impact/issues/60) | IMPACT P0: Dashboard D3 — Privacy thresholds |
| [61](https://github.com/moldovancsaba/impact/issues/61) | IMPACT P0: Dashboard D4 — Dashboard read API |
| [62](https://github.com/moldovancsaba/impact/issues/62) | IMPACT P0: Dashboard D5 — Wire webapp to real aggregates |

### macOS packaging tranche (M1–M4) — Phase 3

| # | Title |
| - | ----- |
| [63](https://github.com/moldovancsaba/impact/issues/63) | IMPACT P1: macOS M1 — Distribution decision (binary vs app) |
| [64](https://github.com/moldovancsaba/impact/issues/64) | IMPACT P1: macOS M2 — Packaging pipeline & clean-Mac smoke |
| [65](https://github.com/moldovancsaba/impact/issues/65) | IMPACT P1: macOS M3 — Signing & notarization plan |
| [66](https://github.com/moldovancsaba/impact/issues/66) | IMPACT P1: macOS M4 — DMG packaging (after M1–M3) |

### Related programme issues (ingest / stats / binary — context)

| # | Title |
| - | ----- |
| [35](https://github.com/moldovancsaba/impact/issues/35) | IMPACT P1: Anonymous ingest service MVP |
| [36](https://github.com/moldovancsaba/impact/issues/36) | IMPACT P1: Community aggregates — governance, pipeline, metric definitions |
| [37](https://github.com/moldovancsaba/impact/issues/37) | IMPACT P1: Public stats surface (dashboard or API) |
| [38](https://github.com/moldovancsaba/impact/issues/38) | IMPACT P1: Standalone binary packaging — investigation |
| [39](https://github.com/moldovancsaba/impact/issues/39) | IMPACT P1: Programme — signed releases and desktop-style macOS distribution |
| [40](https://github.com/moldovancsaba/impact/issues/40) | IMPACT P1: Programme — public benchmark portal and compare vs crowd |
| [41](https://github.com/moldovancsaba/impact/issues/41) | IMPACT P1: Programme — cross-platform parity for install and analytics |
| [42](https://github.com/moldovancsaba/impact/issues/42) | IMPACT P2: Ideabank — DMG drag-drop installer |
| [43](https://github.com/moldovancsaba/impact/issues/43) | IMPACT P2: Ideabank — native GUI, accounts, leaderboards, auto-update |

---

## Related

- [mlp-status-cto.md](mlp-status-cto.md) · [mlp-execution.md](mlp-execution.md) · [mlp.md](mlp.md) · [web.md](web.md) · [submission-contract.md](submission-contract.md) · [#38](https://github.com/moldovancsaba/impact/issues/38) (historical binary spike — defer to **#63**)
