# MLP — next delivery tranche (CTO directive)

**Purpose:** SSOT for the **next** delivery work after the **frozen** public-web/doc tranche ([mlp-status-cto.md](mlp-status-cto.md)). **Product:** (1) **real community dashboard data** on the webapp, (2) **downloadable macOS distribution** — **not equal in readiness**; **dashboard** remains the **primary missing product-value layer**; **Path D** (DMG) is **real engineering progress** but **not** consumer-grade Mac delivery until **signing + notarization** ([#65](https://github.com/moldovancsaba/impact/issues/65)).

**Board issues:** dashboard **[#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)**; macOS packaging **[#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)**. **Do not start** dashboard execution until **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **Done** (npm publish + smoke + evidence).

**Established:** CTO directive · **Accepted:** 2026-04-07 (initial) · **Confirmed SSOT:** 2026-04-08 · **Operating model:** 2026-04-09 · **Distribution reality + dual-track sequencing:** 2026-04-10.

---

## CTO acceptance — next delivery tranche

**Decision:** **This file** is the **confirmed SSOT** for the **next public delivery phase**.

**Confirmed (unchanged):** **This file** as SSOT · [mlp-status-cto.md](mlp-status-cto.md) aligned · [CHANGELOG.md](../CHANGELOG.md) records the trail · issue map supports readers without repo access.

---

## CTO assessment — three distribution paths (2026-04-10)

**What is newly true — three distribution states**

1. **Path B — repo-based install** — **real**, **verified**, **already usable**.  
2. **Path C — `npm install`** — **implementation-ready** in repo; **not publicly live** until publish; **blocked** by **npm login / publish / `npm view` / clean-Mac smoke** — **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **still not Done**.  
3. **Path D — DMG** — **working local packaging pipeline** ([`packaging/macos/`](../packaging/macos/)); **`.dmg`**, **checksum**, **`Impact.app`**, **ad-hoc** signing, **local smoke** passed — **not** a **fully trusted, consumer-grade** Mac release until **Developer ID**, **notarization**, **release hosting**, and **clean end-user validation** from the **published** artifact. **Do not market** Path D as “the Mac app is done.”

**Strategic correction**

Earlier sequencing assumed **#34 → dashboard → packaging → DMG last**. **What happened:** packaging **advanced early** as **infrastructure** — **partway** only — **acceptable** if we **do not pretend** it is **complete** public Mac delivery.

| Lens | Position |
| ---- | -------- |
| **Distribution** | **Further along** than before. |
| **Trust / compliance** | **Still incomplete** for polished macOS distribution. |
| **Dashboard** | **Still not started** (**#58–#62**). |

**macOS tranche nuance (M1–M4)**

| Stage | Issue | Status call |
| ----- | ----- | ----------- |
| **M1** | [#63](https://github.com/moldovancsaba/impact/issues/63) | **Done enough** ([macos-distribution.md](macos-distribution.md)). |
| **M2** | [#64](https://github.com/moldovancsaba/impact/issues/64) | **Partially to substantially done** (scripted DMG + artifact + docs; evidence on **released** artifact TBD). |
| **M3** | [#65](https://github.com/moldovancsaba/impact/issues/65) | **Not done** (ad-hoc only). |
| **M4** | [#66](https://github.com/moldovancsaba/impact/issues/66) | **Technically produced** — **not** public-quality Mac release until **M3** is done. |

**Current status call**

- **Green:** MVP · **public web shell** · **in-repo MLP** · **local DMG build pipeline**.  
- **Amber:** **#34** open · Path D **trust-incomplete** · Mac artifact **technical** but **below** polished product bar.  
- **Red / not started:** **dashboard [#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)**.

**Operating model (updated)**

1. **Close [#34](https://github.com/moldovancsaba/impact/issues/34)** — `npm login` → `npm run publish:npm` → `npm view` → **Path C** smoke → evidence — **still the most important short-term adoption step.**  
2. **Attach DMG + checksum** to a **GitHub Release**; **do not overclaim** trust.  
3. **Do not** call the DMG **finished** until **M3** is done.  
4. **Start [#58](https://github.com/moldovancsaba/impact/issues/58)** **immediately after #34**; **#59** when D1 is materially underway; **#60→#61→#62** in **dependency order**, **low WIP** on the dashboard track.  
5. **Two tracks after #34** (if capacity): **Track A** — signing, notarization, release flow, clean-Mac validation of **published** DMG. **Track B** — **dashboard (#58–#62)**. **Primary product-value: Track B.** **Parallel allowed** — strict “packaging only in Backlog until dashboard advances” **softens**; **constraint: do not let DMG work distract from the dashboard tranche.**

**Bottom line:** **Downloadable Mac app** — much closer; remainder mostly **signing, notarization, release-quality validation**. **Dashboard** — **not yet**; **#58–#62** still required.

**Message to the developer**

Packaging progress is **accepted** (pipeline, app bundle, DMG, checksum, local smoke, docs). **Not accepted** as **finished Mac delivery** until Developer ID, notarization, release validation, and end-user proof on the **released** artifact. **Immediate:** finish **#34**; attach DMG to Release; begin **#58** after **#34**; signing/notarization **in parallel only if capacity**; **do not lose** the dashboard tranche — historical hardware / tools / LLMs / web visibility remain the **missing product-value layer**.

**Strong product choices (preserved):** **Out of scope:** native GUI, accounts/profile layer, leaderboards, benchmark overlays.

---

## What was missing (management summary)

### 1. Downloadable macOS app

**Path B** and **Path C** (after **#34**) cover CLI install from repo and npm. **Path D** — a **local DMG pipeline** exists ([`packaging/macos/`](../packaging/macos/)); **`.dmg` + `Impact.app` + checksum** are produced; **local smoke** passed. **Still missing** for **consumer-grade** Mac delivery: **Developer ID** signing, **notarization**, **release/distribution** for the artifact, **clean end-user validation** from the **published** DMG, and **honest** public positioning (engineering milestone — not “Mac app done”). See § *CTO assessment — three distribution paths* and [macos-distribution.md](macos-distribution.md).

**Product choice:** **.app + DMG** as engineering path; **npm** preferred when live. **No GUI scope** in this tranche.

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

### Phase 3 — macOS distribution (may overlap dashboard after #34; M3 gates “finished” Path D)

| ID | Issue | Deliverables / status (2026-04-10) |
| -- | ----- | ------------------------------------ |
| **M1** | [#63](https://github.com/moldovancsaba/impact/issues/63) | **Done enough** — [macos-distribution.md](macos-distribution.md) |
| **M2** | [#64](https://github.com/moldovancsaba/impact/issues/64) | **Substantial** — scripted DMG, versioned artifact, Path D docs; **released-artifact** smoke evidence still open |
| **M3** | [#65](https://github.com/moldovancsaba/impact/issues/65) | **Open** — Developer ID + notarization (ad-hoc only today) |
| **M4** | [#66](https://github.com/moldovancsaba/impact/issues/66) | **DMG produced** — **not** “final public-quality Mac release” until **M3** |

---

## Board movement & WIP discipline

**Use the board to preserve sequence, not only visibility.** Having **#58–#62** all in **Todo** is fine for **queue visibility**; **operationally** limit **In Progress** work to **one or two** dashboard tickets at a time.

| When | Action |
| ---- | ------ |
| **Now** | **[#34](https://github.com/moldovancsaba/impact/issues/34)** **In Progress** until closed. **#58–#62** **Todo** (queued — see [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh)); **none** In Progress until **#34** **Done**. |
| **Immediately after #34 Done** | Move **only [#58](https://github.com/moldovancsaba/impact/issues/58)** to **In Progress** (D1 ingest). Keep **#59–#62** in **Todo** until unblocked. |
| **When #58 is materially underway** | Move **[#59](https://github.com/moldovancsaba/impact/issues/59)** to **In Progress** (D2 aggregation). Advance **#60→#61→#62** the same way — **dependency order**, low WIP. |
| **macOS tranche** | **After #34:** **signing / notarization / release attachment** (**#65**, **#66** trust completion) may run **in parallel** with dashboard **if capacity** — see § *Operating model (updated)*. **Do not** market Path D as finished until **M3**. **Primary product-value remains dashboard (#58–#62).** |
| **Ideabank** | GUI, accounts, leaderboards — no new issues required here. |

[`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) sets a **template** (e.g. **#58–#62** Todo); **after #34**, maintainers should **manually** set **In Progress** per the table above to reduce board noise and fragmentation.

---

## Constraints

- **No** fake dashboard / community data.  
- **No** benchmark overlays.  
- **No** claiming **consumer-grade** Mac delivery for Path D until **M3** (Developer ID + notarization) — engineering DMG pipeline may exist earlier (**do not** overclaim trust).  
- **No** GUI scope creep.  
- **No** account / public profile layer.  
- **Privacy thresholds** must exist **before** public aggregates go live; **privacy-safe** language everywhere.

---

## Definition of success

**Dashboard:** site shows **real** aggregate historical data for hardware tested, tools/runtimes tested, LLM/model families tested — with trust copy and suppression rules.

**Mac distribution:** **Path C** (npm) and **Path D** (DMG + `Impact.app`) both support **no-clone** install; **Path D** is **trust-complete** only after **M3** (signing + notarization + release validation).

**Trust:** public claims match shipped reality; privacy thresholds enforced.

---

## Developer handoff (report back)

Next handoff must include:

- What shipped for **ingest / storage**  
- Which **dashboard endpoints** exist  
- Which **aggregate sections** are live on the webapp  
- **Chosen macOS distribution path** (M1)  
- **M2 / M4** pipeline status (DMG produced locally vs **released** + trust-complete per **M3**)  
- **Dashboard (#58–#62)** — what is live vs placeholder

---

## Developer directive (CTO — verbatim intent)

The **next-delivery tranche setup is accepted**. **This document** is the **SSOT** for the next public delivery phase.

**Immediate rule:** do **not** begin broad execution of the new tranche until **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **operationally closed** (publish, verify, smoke, evidence).

**After #34 closes** — **#58** ingest MVP → **#59** → **#60** → **#61** → **#62** in **dependency order**, **low WIP** on the dashboard track. **macOS trust completion** (**#65** / **#66** quality bar) may proceed **in parallel if capacity** — see § *Operating model (updated)*; **do not** let packaging **distract** from dashboard.

**Board:** preserve **sequence** on each track; **low WIP** on **#58–#62** (see § Board movement & WIP discipline).

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
