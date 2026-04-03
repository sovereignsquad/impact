# IMPACT — current state (living snapshot)

**Purpose:** single in-repo summary of **what exists today** on `main`, aligned with the [GitHub Project board](https://github.com/users/moldovancsaba/projects/2/views/1). **Issues remain SSOT** for acceptance and decisions; this page reduces onboarding friction.

**Last aligned with repo:** see git history for this file’s commit date.

---

## Programme framing

| Item | Location |
| ---- | -------- |
| Expanded acronym + north star | [README.md](../README.md), [product.md](product.md), [architect-handoff.md](architect-handoff.md) |
| Doctrine anchor (living) | [Issue #1](https://github.com/moldovancsaba/impact/issues/1) |
| Phase ladder 0–4 | [Issue #16](https://github.com/moldovancsaba/impact/issues/16) |

**IMPACT** = **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est** — sovereign evaluation path for **system + tool + LLM**, toward benchmarks. **v0.x in this repo** is the **privacy-first discovery scanner** only (no capability benchmarks yet).

---

## Shipped technical stack

| Area | Detail |
| ---- | ------ |
| Runtime | **Node.js ≥ 20**, TypeScript, **npm workspaces** |
| CLI | `apps/cli` → `impact scan` (see README) |
| Schema | **`impact.v0.2`** — provenance on host fields; runtime **status** + **capabilities.model_inventory**; tool **presence** + provenanced version; model **discovery_status** + probe metadata ([`packages/schemas`](https://github.com/moldovancsaba/impact/tree/main/packages/schemas)) |
| Host | `packages/scanner-host` — OS/memory/CPU string, `df` disk, Metal **hint**, salted fingerprint |
| Runtimes | `packages/scanner-runtimes` — Ollama binary + API reachability; **MLX pip only**, explicit **partial** + **no model inventory** |
| Tools | `packages/scanner-tools` — **allowlist** only, PATH + version probes |
| Models | `packages/scanner-models` — Ollama `/api/tags` when reachable; MLX list **empty** until path policy |
| Privacy | `packages/privacy` — `~/.impact/salt`, denylist constants, privacy block |
| Reporting | `packages/reporting` — `impact-profile.json`, `impact-report.html` (provenance, MLX warning, not-collected, platform footer) |
| Submission | `packages/submission` — opt-in POST; **`IMPACT_SUBMIT_URL`** required; receipt log |
| Orchestration | `packages/core` — `runScan`, merge, coarse **readiness** (not benchmarks) |

---

## Documentation map

| Document | Role |
| -------- | ---- |
| [README.md](../README.md) | Quick start, platform matrix, links |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Build, lint, tests, fixtures |
| [product.md](product.md) | Product + v0.x scope |
| [architecture.md](architecture.md) | Module layout, data flow |
| [architect-handoff.md](architect-handoff.md) | Architect onboarding |
| [privacy-policy.md](privacy-policy.md) | Collection boundaries |
| [submission-contract.md](submission-contract.md) | HTTP ingest (normative) |
| [project-management.md](project-management.md) | Board = kanban; issues = SSOT |
| [CHANGELOG.md](../CHANGELOG.md) | Release-oriented history |
| [fixtures/baseline-profile.sample.json](../fixtures/baseline-profile.sample.json) | Valid **v0.2** example |
| [fixtures/scenarios/](../fixtures/scenarios/) | Scenario JSON for validation |

---

## Automation & quality gates

| Mechanism | Location |
| --------- | -------- |
| **CI** | [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — `npm ci`, **lint**, **build**, **test**, **validate-fixtures** |
| **Lint** | [`eslint.config.mjs`](../eslint.config.mjs) |
| **Fixture validation** | `npm run validate-fixtures` → [`scripts/validate-fixtures.mjs`](../scripts/validate-fixtures.mjs) |
| **Board refresh (local)** | [`scripts/gh-issue-bodies/apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) |

---

## GitHub board ↔ this snapshot (expected)

| Status column | Typical items (issue #) |
| ------------- | ------------------------ |
| **Done** | Foundation (#6), host (#7), runtime (#8), tools (#9), privacy (#11), reporting (#12), **CI (#2)** |
| **Review** | Model inventory (#10), readiness (#14), **architecture SSOT (#3)** after doc pass, **submission contract (#13)** after normative doc |
| **In Progress** | Doctrine (#1), tests/fixtures depth (#15) |
| **Todo** | CoC (#4), Discussions + security reporting (#5) |
| **Roadmap** | Phases index (#16) |
| **Backlog** | *(optional)* further submission client hardening if split from #13 |

Exact **Status** values live **only** on the [project board](https://github.com/users/moldovancsaba/projects/2/views/1); issue titles do not carry workflow state.

---

## Explicit non-goals (still)

No capability benchmarks, agent CRUD tests, shell execution benchmarks, crowd scores, auto-repair, background telemetry, or “AI readiness scores” as product truth — see architect guidance in issues and [product.md](product.md).

---

## Next leverage (from board)

1. Deepen **#15** — fixture-driven scanner / HTML regression tests.  
2. Close **#13** loop — enforce timeout/retry in client per [submission-contract.md](submission-contract.md).  
3. **#4 / #5** — community and security channels.  
4. Keep **#1** doctrine in sync when scope shifts.
