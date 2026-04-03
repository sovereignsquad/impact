# Changelog

All notable changes to **Impact** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once versioned releases begin.

## [Unreleased]

### Added

- **Documentation sprint:** README rewritten as **public front door** (value, first-run, trust, today vs later, Mermaid workflow, sample report screenshot, redacted JSON excerpt); [docs/README.md](docs/README.md) curated index; [docs/privacy-for-users.md](docs/privacy-for-users.md) plain-language trust; [docs/docs-alignment-after-packaging.md](docs/docs-alignment-after-packaging.md) D6 checklist; assets under `docs/assets/`.
- **Sprint B.1 (distribution):** [docs/release-checklist.md](docs/release-checklist.md), [docs/smoke-test-macos.md](docs/smoke-test-macos.md); [docs/install-macos.md](docs/install-macos.md) and README aligned to **one canonical Path B** (`npm ci` → build → `npm install -g ./apps/cli` → `impact scan`); root script `npm run verify:release`.
- **Schema `impact.v0.3`:** runtime **`presence`** (epistemic) vs **`status`** (operational); model **`presence`** replaces `discovery_status`; readiness uses **`presence`**; [docs/schema-semantics-v0.3.md](docs/schema-semantics-v0.3.md).
- **Deterministic field confidence:** [docs/confidence-rules.md](docs/confidence-rules.md) + `fieldConfidence()` / `ConfidenceRules` in `@impact/schemas`.
- **Reporting:** HTML confidence legend, diagnostics card, `docs/support-matrix.md` link; Vitest coverage in `@impact/reporting`.
- **Fixtures:** expanded `fixtures/scenarios/*`, `fixtures/invalid/*`, `npm run validate-invalid-fixtures`, CI step for invalid fixtures.
- **Submission:** per-attempt timeout (15s default), bounded retries with backoff, `impact-submission-preview.json` + `impact-submission-receipt.json`, **HTTP 409 duplicate** path (`outcome: "duplicate"`, no retries), Vitest tests in `@impact/submission`.
- **Core:** fixture-backed merge-path tests; readiness tests updated for v0.3.

### Added (Sprint A baseline)

- [docs/current-state.md](docs/current-state.md) — in-repo snapshot of shipped stack, docs map, CI/fixtures, and expected GitHub board alignment.
- **Schema `impact.v0.2`:** provenance on host fields (`source`, `probe`, `field confidence`), runtime **operational status** + **capabilities.model_inventory** (honest MLX partial), tool **presence** semantics + provenanced versions, model **discovery_status** + API provenance; HTML report shows provenance and platform footer.
- **Sprint A hardening:** [docs/submission-contract.md](docs/submission-contract.md), fixture scenarios under `fixtures/scenarios/`, `npm run validate-fixtures`, ESLint, GitHub Actions CI (lint, build, test, validate fixtures).
- **README** platform support matrix aligned with architect guidance.

### Added (earlier)

- **IMPACT programme framing** in docs: full acronym *(Industrial Multi-Platform Agent Connector Test)*, sovereign **system + tool + LLM** benchmark north star, v0.x discovery as first delivery; [docs/architect-handoff.md](docs/architect-handoff.md) for architects.
- **GitHub SSOT hygiene:** all issues **#1–#16** rewritten to structured programme style (objective, scope, acceptance, risks, artifacts); **kanban Status** applied via Project field only (not titles); `scripts/gh-issue-bodies/` refresh kit + `apply-status.sh`.
- **I.M.P.A.C.T. v0.1 MVP scaffold:** TypeScript monorepo (`apps/cli`, `packages/*`) with local `impact scan`, JSON/HTML reports, salted coarse fingerprint, Ollama + MLX detection, allowlisted tool detection, optional readiness hints, and opt-in submission client (`IMPACT_SUBMIT_URL`).
- Product definition ([docs/product.md](docs/product.md)), privacy policy ([docs/privacy-policy.md](docs/privacy-policy.md)), and architecture ([docs/architecture.md](docs/architecture.md)).
- Schema package `impact.v0.1` (Zod) and sample fixture under `fixtures/`.
- Vitest tests for schema and readiness heuristics.

### Earlier

- Open source repository scaffold: README, contributing guide, project management docs, MIT license.
- GitHub Project board as the single place for roadmap, backlog, and todos.
