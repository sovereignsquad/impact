# Changelog

All notable changes to **Impact** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once versioned releases begin.

## [Unreleased]

### Added

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
