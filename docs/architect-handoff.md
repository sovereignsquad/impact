# Architect handoff — IMPACT programme state

**Audience:** system / software architects onboarding to **IMPACT**  
**Date context:** 2026-04-03  
**SSOT:** GitHub Issues in [moldovancsaba/impact](https://github.com/moldovancsaba/impact) + [Project board Status](https://github.com/users/moldovancsaba/projects/2/views/1)  
**Style reference for issue quality:** [mvp-factory-control#495](https://github.com/moldovancsaba/mvp-factory-control/issues/495)

---

## 1. What IMPACT is (north star)

**IMPACT** expands to **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est**.

It is a programme for a **fully sovereign** evaluation stack spanning **system + tool + LLM**, aimed at **industrial-grade** rigour and **global** usefulness. The long-term destination is a **benchmark system** with clear phases (discovery → readiness hints → atomic probes → capability benchmarks), not a single throwaway script.

**v0.x today** delivers the **discovery layer**: a **privacy-first local CLI** that inventories host signals, runtimes (e.g. Ollama, MLX pip), **allowlisted** AI tools on `PATH`, and models exposed via supported local APIs. It emits **canonical JSON** (`impact.v0.2`) and an **offline HTML report**, with **opt-in** anonymous submission gated by explicit consent and `IMPACT_SUBMIT_URL`.

This positions later benchmark phases on **ground truth** about what can run where, under **explicit privacy rules**.

---

## 2. Repository and runtime shape

| Area | Implementation |
| ---- | ---------------- |
| Language / runtime | TypeScript on **Node.js ≥ 20** |
| Packaging | **npm workspaces** monorepo |
| Entry | `apps/cli` → `impact` binary after `npm run build` |
| Validation | `@impact/schemas` — **Zod** `ImpactProfileSchema` (`impact.v0.2`) |
| Orchestration | `@impact/core` — `runScan()`, merge, optional readiness |
| Host | `@impact/scanner-host` — OS, CPU string, memory, `df` disk, Metal hint, salted fingerprint |
| Runtimes | `@impact/scanner-runtimes` — Ollama version + localhost reachability; MLX via pip |
| Tools | `@impact/scanner-tools` — **allowlist only** |
| Models | `@impact/scanner-models` — Ollama `/api/tags`; MLX dirs **stub** |
| Privacy | `@impact/privacy` — `~/.impact/salt`, denylist constants |
| Reporting | `@impact/reporting` — `impact-profile.json`, `impact-report.html` |
| Submission | `@impact/submission` — HTTP POST client + local receipt log |

**Build order** is scripted in root `package.json` (`npm run build`) to respect internal dependencies.

**Tests today:** Vitest in `@impact/schemas` and `@impact/core` (schema + readiness). **CI workflow is not yet merged** (tracked in issue **#2**).

---

## 3. Trust, privacy, and data boundaries

- **Local-first scan** — no network required for detection (except optional localhost runtime APIs).
- **No** serial numbers, hardware UUIDs, usernames, hostnames as identifiers, file contents, or env secrets in the profile contract.
- **Fingerprint** = SHA-256 of **canonical coarse host fields + local salt** (not a stable hardware ID).
- **Submission** requires interactive consent + preview; without `IMPACT_SUBMIT_URL` the client **refuses** to send.

Authoritative narrative: `docs/privacy-policy.md`.

---

## 4. Programme phases (index)

| Phase | Intent |
| ----- | ------ |
| 0 | Foundation — monorepo, schema, contracts, fixtures |
| 1 | MVP discovery — scanners, reports, consent |
| 2 | Readiness hints — coarse rules, **no** benchmark scores |
| 3 | Atomic benchmark foundation |
| 4 | Capability benchmarks |

Indexed in issue **#16**; doctrine in issue **#1**.

---

## 5. GitHub as SSOT — how to work it

- **Issues** hold **Objective, Context, Problem, Goal, Scope, Execution Prompt, Acceptance Checks, Dependencies, Risks, Delivery Artifacts** (aligned with [#495](https://github.com/moldovancsaba/mvp-factory-control/issues/495)).
- **Kanban state** uses **only** the Project field **Status** (`IDEABANK (SOMEDAY)` → … → `Done`). **Titles do not** carry `Roadmap:`, `Backlog:`, `Todo:`, or open/closed state.
- **Priority** may appear as **P0 / P1** labels and/or in titles as programme priority (not board column).
- Bodies under `scripts/gh-issue-bodies/` are a **reproducible mirror** for bulk edits via `apply-updates.sh`; **GitHub remains authoritative** after push.

---

## 6. Delivered vs in-flight (high level)

**Substantially delivered on `main` (see issues #6–#12, #7–#11 for detail):** monorepo, schema, CLI `impact scan`, host/runtime/tool/model paths (with MLX model paths stub), privacy + consent flow, HTML+JSON reports, coarse readiness, minimal tests.

**In progress / backlog:** CI (#2), architecture/runbook depth (#3), CoC (#4), Discussions + private reporting (#5), submission API spec + hardening (#13), test matrix expansion (#15), programme index maintenance (#16), doctrine maintenance (#1).

**Board Status** on [the project](https://github.com/users/moldovancsaba/projects/2/views/1) reflects the live stance (Done / Review / In Progress / Backlog / Todo / Roadmap).

---

## 7. Known technical gaps (architect-relevant)

- **Windows** parity for disk and shell probes is not fully validated.
- **Submission** server contract is **not** yet documented in `docs/api/` (issue #13).
- **Benchmark** layers are **out of scope** until phases 3–4; guardrails in product docs and issues must stay enforced.

---

## 8. Quick verify

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
npm install
npm run build
npm test
npm run impact -- scan --no-submit -o ./reports
```

---

## 9. Primary references

- Issues: [#1](https://github.com/moldovancsaba/impact/issues/1) (doctrine), [#16](https://github.com/moldovancsaba/impact/issues/16) (phases), [#6–#15](https://github.com/moldovancsaba/impact/issues) (workstreams)
- `docs/product.md`, `docs/architecture.md`, `docs/privacy-policy.md`
- Issue template quality bar: [mvp-factory-control#495](https://github.com/moldovancsaba/mvp-factory-control/issues/495)
