# IMPACT — current state (living snapshot)

**Purpose:** single in-repo summary of **what exists today** on `main`, aligned with [Project #2](https://github.com/users/moldovancsaba/projects/2) ([Programme — not Done](https://github.com/users/moldovancsaba/projects/2/views/3); [full board](https://github.com/users/moldovancsaba/projects/2/views/1)). **Issues** remain SSOT for **acceptance criteria and intent**; **Project Status** is SSOT for **workflow column** (see § GitHub board below). This page reduces onboarding friction.

**Last aligned with repo:** see git history for this file’s commit date.

---

## Operational status (source of truth)

**What is true right now** — install reality, live vs prepared, gating, and sequencing:

- **MVP:** complete
- **Path B (repo-based install):** live and verified
- **Path C (npm install):** implementation-complete on `main`, not yet publicly live
- **Immediate gate:** [#34](https://github.com/moldovancsaba/impact/issues/34) requires maintainer publish + npm smoke evidence before closure
- **Community stats:** not shipped
- **Next sequence:** finish #34 → adoption/distribution → ingest/community visibility → benchmark foundation

**Status:** IMPACT MVP is shipped. The repo-based macOS install path (Path B) is live and verified. The npm install path (Path C) is implementation-complete on main, but not yet publicly live until a maintainer publishes `@impact/cli`, verifies `npm view`, runs the published-package smoke test, and records evidence on issue #34. Community aggregate visibility is not shipped yet. The next sequence is: finish #34, improve adoption/distribution, then build ingest and community visibility, then benchmark foundations.

---

## Versioning (SSOT)

Use this table so **Git tag**, **npm semver**, **profile JSON**, and **CLI `--version`** stay aligned. When any layer bumps, bump the others in the **same release** (see [release-checklist.md](release-checklist.md), [npm-publish.md](npm-publish.md)).

| Layer | Canonical value (today) | Where it lives |
| ----- | ------------------------ | -------------- |
| **Git / GitHub Release tag** | `v0.3.0` | Annotated tag on `main`; release notes |
| **`@impact/*` npm semver** | `0.3.0` | Every `packages/*/package.json` and `apps/cli/package.json`; pinned internal `dependencies` |
| **Profile JSON `schema_version`** | `impact.v0.3` | Zod + emitters: `packages/schemas` (`ImpactProfileSchema`); `run-scan` default; all valid fixtures |
| **`impact --version` (CLI)** | Same as `@impact/cli` **0.3.0** | Read at runtime from `apps/cli/package.json` (not hardcoded) |
| **Changelog** | `[0.3.0]` + `[Unreleased]` | [CHANGELOG.md](../CHANGELOG.md) |

**Terminology for profile fields** (operational `status` vs epistemic `presence`, provenance): [schema-semantics-v0.3.md](schema-semantics-v0.3.md). **Historical** schema generations (`impact.v0.1`, `impact.v0.2`) appear only in [CHANGELOG.md](../CHANGELOG.md) and old programme issues — **do not** use them in new code, fixtures, or user-facing docs.

---

## MVP status — **delivered**

The **I.M.P.A.C.T. discovery scanner MVP** is **complete** as of release **`v0.3.0`** ([GitHub Release](https://github.com/moldovancsaba/impact/releases/tag/v0.3.0); `impact.v0.3` profile schema). Exit criteria met: canonical **Path B** install/run on fresh macOS, **`impact-profile.json`** + **`impact-report.html`**, optional submission suppressed with **`--no-submit`**, docs match the working path, packaging track closed ([#27](https://github.com/moldovancsaba/impact/issues/27)).

**This is not** a shipped **benchmark system** or **“v1” product** in a consumer sense — it is the **first complete product milestone** for **local discovery + trust + export**.

**Honest user-facing scope:** [user-expectations-mvp.md](user-expectations-mvp.md) (local visibility only; no crowd dashboard; no DMG; **Path B** install verified; **Path C** npm install prepared on `main`, publicly live after [#34](https://github.com/moldovancsaba/impact/issues/34)).

---

## Programme framing

| Item | Location |
| ---- | -------- |
| Expanded acronym + north star | [README.md](../README.md), [product.md](product.md), [architect-handoff.md](architect-handoff.md) |
| Doctrine anchor (living) | [Issue #1](https://github.com/moldovancsaba/impact/issues/1) |
| Phase ladder 0–4 | [Issue #16](https://github.com/moldovancsaba/impact/issues/16) |

**IMPACT** = **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est** — sovereign evaluation path for **system + tool + LLM**, toward benchmarks. **v0.x in this repo** is the **privacy-first discovery scanner** only (no capability benchmarks yet).

### Post-MVP (not blockers)

**Path B** remains the **verified** default for users until **Path C** is publicly live on npm (repo implementation is on `main`; gate: [#34](https://github.com/moldovancsaba/impact/issues/34)). A **binary** distribution track may follow. Next phase: **release hardening** (tag discipline, wording, small fixes) then **adoption** vs **benchmark foundation** tracks per [issue #1](https://github.com/moldovancsaba/impact/issues/1).

---

## Shipped technical stack

| Area | Detail |
| ---- | ------ |
| Runtime | **Node.js ≥ 20**, TypeScript, **npm workspaces** |
| CLI | `apps/cli` → `impact scan` (see README) |
| Schema | **`impact.v0.3`** — provenance on host fields; runtime **`status`** (operational) + **`presence`** (epistemic) + **capabilities.model_inventory**; tool **presence** + provenanced version; model **`presence`** + probe metadata ([`packages/schemas`](https://github.com/moldovancsaba/impact/tree/main/packages/schemas)); see [schema-semantics-v0.3.md](schema-semantics-v0.3.md) |
| Host | `packages/scanner-host` — OS/memory/CPU string, `df` disk, Metal **hint**, salted fingerprint |
| Runtimes | `packages/scanner-runtimes` — Ollama binary + API reachability; **MLX pip only**, explicit **partial** + **no model inventory** |
| Tools | `packages/scanner-tools` — **allowlist** only, PATH + version probes |
| Models | `packages/scanner-models` — Ollama `/api/tags` when reachable; MLX list **empty** until path policy |
| Privacy | `packages/privacy` — `~/.impact/salt`, denylist constants, privacy block |
| Reporting | `packages/reporting` — `impact-profile.json`, `impact-report.html` (provenance, confidence legend, diagnostics, MLX warning, not-collected, platform footer + support-matrix link) |
| Submission | `packages/submission` — opt-in POST; **`IMPACT_SUBMIT_URL`** required; 15s timeout + bounded retries; `impact-submission-preview.json` / `impact-submission-receipt.json` + `~/.impact/submission-receipts.log` |
| Orchestration | `packages/core` — `runScan`, merge, coarse **readiness** (not benchmarks) |

---

## Documentation map

| Document | Role |
| -------- | ---- |
| [README.md](../README.md) | **Public front door** — value, quick start, trust, scope |
| [docs/README.md](README.md) | **Curated doc index** |
| *(this file, § Versioning)* | **SSOT** — tag vs npm vs `schema_version` vs `impact --version` |
| [install-macos.md](install-macos.md) | **Canonical macOS install** — Path B for releases |
| [privacy-for-users.md](privacy-for-users.md) | Plain-language **privacy & trust** |
| [user-expectations-mvp.md](user-expectations-mvp.md) | **MVP scope** — local vs crowd, Path B vs DMG |
| [privacy-policy.md](privacy-policy.md) | Formal **privacy policy** |
| [release-checklist.md](release-checklist.md) | Version bump → CI gates → tag → smoke |
| [smoke-test-macos.md](smoke-test-macos.md) | Fresh-machine proof for releases |
| [docs-alignment-after-packaging.md](docs-alignment-after-packaging.md) | **Post-packaging** README/install reconciliation (D6) |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Build, lint, tests, fixtures |
| [product.md](product.md) | Product + v0.x scope |
| [architecture.md](architecture.md) | Module layout, data flow |
| [architect-handoff.md](architect-handoff.md) | Architect onboarding |
| [submission-contract.md](submission-contract.md) | HTTP ingest (normative) |
| [project-management.md](project-management.md) | Board = kanban; issues = SSOT |
| [CHANGELOG.md](../CHANGELOG.md) | Release-oriented history |
| [fixtures/baseline-profile.sample.json](../fixtures/baseline-profile.sample.json) | Valid **v0.3** example |
| [fixtures/scenarios/](../fixtures/scenarios/) | Scenario JSON for validation |
| [fixtures/invalid/](../fixtures/invalid/) | Negative cases — must fail `validateImpactProfile` |
| [confidence-rules.md](confidence-rules.md) | Field confidence SSOT |
| [schema-semantics-v0.3.md](schema-semantics-v0.3.md) | Terminology |
| [support-matrix.md](support-matrix.md) | OS behaviour |

---

## Automation & quality gates

| Mechanism | Location |
| --------- | -------- |
| **CI** | [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — `npm ci`, **lint**, **build**, **test**, **validate-fixtures**, **validate-invalid-fixtures** |
| **Lint** | [`eslint.config.mjs`](../eslint.config.mjs) |
| **Fixture validation** | `npm run validate-fixtures` (recursive under `fixtures/`, skips `invalid/`) + `npm run validate-invalid-fixtures` |
| **Board refresh (local)** | [`scripts/gh-issue-bodies/apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) |

---

## GitHub board ↔ this snapshot

**Programme workflow SSOT:** [Project #2](https://github.com/users/moldovancsaba/projects/2) **Status** field (not issue titles). This file and [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) are **convenience mirrors**; if anything disagrees, **the Project wins** — then update docs/script.

**MVP and Path B packaging (#27)** are **Done**; **Path C npm publish (#34)** is the usual **immediate** gate (**In Progress**) until closed. **#10** / **#14** are **Done** for shipped MVP scope. **#4** / **#5**, **#38** (binary), and theme cards vary by priority — see the [Programme (Not Done) view](https://github.com/users/moldovancsaba/projects/2/views/3).

Maintainer rules: [project-management.md](project-management.md) §6 (snapshot) and §3 (column semantics).

---

## Explicit non-goals (still)

No capability benchmarks, agent CRUD tests, shell execution benchmarks, crowd scores, auto-repair, background telemetry, or “AI readiness scores” as product truth — see architect guidance in issues and [product.md](product.md).

---

## Programme next slices (post-MVP)

Sequencing is **not** authoritative here — use **Operational status** for the immediate gate. Typical forward work:

1. **[#34](https://github.com/moldovancsaba/impact/issues/34)** — publish `@impact/*` to npm; published-package smoke; evidence on the issue.  
2. **Adoption / distribution** — Path C as default user story when live; optional **[#38](https://github.com/moldovancsaba/impact/issues/38)** (standalone binary).  
3. **#4 / #5** — community and security channels when scheduled.  
4. **Merge-path depth** — more orchestration tests beyond current fixture coverage.  
5. **#1** — doctrine in sync when scope shifts.

**Delivered slices (reference):** Sprint B **[#17](https://github.com/moldovancsaba/impact/issues/17)–[#26](https://github.com/moldovancsaba/impact/issues/26)** (including **`impact.v0.3`** semantics); **[#27](https://github.com/moldovancsaba/impact/issues/27)** Path B smoke; **[#28](https://github.com/moldovancsaba/impact/issues/28)** submission 409 duplicate path. Issue bodies: [`scripts/gh-issue-bodies/`](../scripts/gh-issue-bodies/). Install: [install-macos.md](install-macos.md).
