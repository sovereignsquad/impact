# IMPACT — current state (living snapshot)

**Purpose:** single in-repo summary of **what exists today** on `main`, aligned with the [GitHub Project board](https://github.com/users/moldovancsaba/projects/2/views/3) (Programme — not Done; [full board](https://github.com/users/moldovancsaba/projects/2/views/1)). **Issues remain SSOT** for acceptance and decisions; this page reduces onboarding friction.

**Last aligned with repo:** see git history for this file’s commit date.

---

## Programme framing

| Item | Location |
| ---- | -------- |
| Expanded acronym + north star | [README.md](../README.md), [product.md](product.md), [architect-handoff.md](architect-handoff.md) |
| Doctrine anchor (living) | [Issue #1](https://github.com/moldovancsaba/impact/issues/1) |
| Phase ladder 0–4 | [Issue #16](https://github.com/moldovancsaba/impact/issues/16) |

**IMPACT** = **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est** — sovereign evaluation path for **system + tool + LLM**, toward benchmarks. **v0.x in this repo** is the **privacy-first discovery scanner** only (no capability benchmarks yet).

### MVP readiness (snapshot)

After the documentation sprint: **product communication** is strong enough for MVP. The **primary remaining gate** is **packaging and release proof**: canonical macOS Path B verified on a **clean** machine ([docs/smoke-test-macos.md](smoke-test-macos.md)), then README / [install-macos.md](install-macos.md) / this page aligned to that evidence — [#27](https://github.com/moldovancsaba/impact/issues/27). Roughly **~90%** of the v0.x MVP slice is in **code and docs**; the last **~10%** is **distribution verification** and **final install-doc alignment** (see [docs/docs-alignment-after-packaging.md](docs-alignment-after-packaging.md)).

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
| [install-macos.md](install-macos.md) | **Canonical macOS install** — Path B for releases |
| [privacy-for-users.md](privacy-for-users.md) | Plain-language **privacy & trust** |
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

**Status** is authoritative on the [project board](https://github.com/users/moldovancsaba/projects/2/views/3) (not in issue titles). Typical stance after Sprint B: **#27** packaging **In Progress**; **#4** / **#5** **Backlog**; **#13** **Backlog** when not the next execution slice; **#16** plus theme cards **Roadmap**; many Sprint B issues **Done**. See [project-management.md](project-management.md) for column meanings.

Exact **Status** values live **only** on the board; this table is illustrative and may lag.

---

## Explicit non-goals (still)

No capability benchmarks, agent CRUD tests, shell execution benchmarks, crowd scores, auto-repair, background telemetry, or “AI readiness scores” as product truth — see architect guidance in issues and [product.md](product.md).

---

## Next leverage (Sprint B)

1. **Packaging (macOS-first)** — lower-friction install/run path (tracked as Sprint B ticket B7 once filed).  
2. **Merge-path depth** — more orchestration tests beyond current fixture coverage (B10).  
3. **#4 / #5** — community and security channels.  
4. Keep **#1** doctrine in sync when scope shifts.

Sprint B: **[#17](https://github.com/moldovancsaba/impact/issues/17)–[#26](https://github.com/moldovancsaba/impact/issues/26)**. Sprint B.1: **[#27](https://github.com/moldovancsaba/impact/issues/27)** (packaging completion), **[#28](https://github.com/moldovancsaba/impact/issues/28)** (409 duplicate handling — close after merge). Issue bodies: [`scripts/gh-issue-bodies/`](../scripts/gh-issue-bodies/); board: [`apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh). Install: [install-macos.md](install-macos.md).
