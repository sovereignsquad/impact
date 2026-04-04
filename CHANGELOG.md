# Changelog

All notable changes to **Impact** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once versioned releases begin.

## [Unreleased]

### Planned

- **MLP track** after **#34** — [mlp.md](docs/mlp.md) (M1–M6); execution on [Project #2](https://github.com/users/moldovancsaba/projects/2).
- Post-MVP **release hardening** and long-horizon programme (see board + [issue #1](https://github.com/moldovancsaba/impact/issues/1)).

### Changed

- **SSOT map:** new [docs/ssot-map.md](docs/ssot-map.md) — authority routing (Project #2 Status vs issue bodies vs `current-state` vs code). Linked from README, CONTRIBUTING, docs index, project-management, current-state, product, architect-handoff (§6 stale delivery list removed), release-checklist evidence, npm-publish, docs-alignment D6, `scripts/gh-issue-bodies/README.md`.
- **Programme board alignment:** [project-management.md](docs/project-management.md) opens with **workflow SSOT = Project #2 Status**; §6 snapshot matches board truth — **#27** Done (Path B), **#34** In Progress (Path C npm). [`apply-status.sh`](scripts/gh-issue-bodies/apply-status.sh) sets **#10** / **#14** to **Done** (MVP shipped) instead of **Review**; script reapplied to GitHub. [current-state.md](docs/current-state.md) purpose + board section distinguish issue bodies vs **Status** column.
- **Docs / versioning audit:** [current-state.md](docs/current-state.md) adds **§ Versioning (SSOT)** (tag `v0.3.0`, npm `0.3.0`, `impact.v0.3`, CLI version source); programme sections refreshed (#34 gate, post-MVP slices). Stale **v0.1** product/doc titles and comments updated to **`impact.v0.3`** / MVP wording ([user-expectations-mvp.md](docs/user-expectations-mvp.md), [product.md](docs/product.md), [privacy-policy.md](docs/privacy-policy.md), [architecture.md](docs/architecture.md), [scripts/README.md](scripts/README.md), privacy package comment). [architect-handoff.md](docs/architect-handoff.md) points at versioning SSOT.
- **Docs:** README + [install-macos.md](docs/install-macos.md) — optional `git checkout v0.3.0` for pinned installs; install page references MVP and follow-on issues **#34** / **#38**.

### Fixed

- **Vercel:** root [`vercel.json`](vercel.json) sets `outputDirectory` to `apps/web/dist` (fixes “No Output Directory named public” when deploying the monorepo build).

### Added

- **MLP execution plan:** [docs/mlp-execution.md](docs/mlp-execution.md) — CTO task breakdown (Gate #34, M1–M6, web W1–W4), linked from [mlp.md](docs/mlp.md).
- **`apps/web` (`@impact/web`):** Vite public shell — hero, install (Path B/C honest), after-scan explainer, **in-browser** `impact-profile.json` via `ImpactProfileSchema.safeParse`, FAQ, community-stats placeholder; [docs/web.md](docs/web.md). Root `npm run build` + `dev:web`; [current-state.md](docs/current-state.md) CTO snapshot + shipped stack row.
- **MLP execution:** GitHub **[#44](https://github.com/moldovancsaba/impact/issues/44)–[#49](https://github.com/moldovancsaba/impact/issues/49)** on [Project #2](https://github.com/users/moldovancsaba/projects/2) (M1–M3 **Todo**, M4–M6 **Backlog**); bodies `scripts/gh-issue-bodies/issue-44.md` … `issue-49.md`; [`apply-status.sh`](scripts/gh-issue-bodies/apply-status.sh) + [`apply-updates.sh`](scripts/gh-issue-bodies/apply-updates.sh) updated. [mlp.md](docs/mlp.md) — CTO acceptance + board table with issue links.
- **npm publish (#34):** all `@impact/*` workspaces at **0.3.0** with `files: ["dist"]`, `publishConfig.access: public`, pinned internal deps, `prepublishOnly` build; [docs/npm-publish.md](docs/npm-publish.md); `scripts/publish-npm-packages.sh`; root `npm run publish:npm` / `publish:npm:dry-run`; [smoke-test-macos.md](docs/smoke-test-macos.md) **Path C**; README / install-macos **registry-first** when live; `apps/cli/README.md`.

---

## [0.3.0] — 2026-04-03

**Discovery scanner MVP — delivered.** First complete milestone: local privacy-first scan, **`impact.v0.3`** profile schema, JSON + HTML outputs, optional consent-based submission, CI + fixtures, public README/doc hierarchy, **Path B** macOS install smoke-verified. **Not** a benchmark system or consumer “v1” app — see [docs/user-expectations-mvp.md](docs/user-expectations-mvp.md). **`@impact/cli` 0.3.0** aligns npm semver with the profile schema generation; **`impact --version`** reads **`apps/cli/package.json`** (single source of truth).

### Added

- **Packaging / #27:** Path B (clone → `npm ci` → build → `npm install -g ./apps/cli` → scan) **smoke-verified** on macOS; evidence in [docs/smoke-test-macos.md](docs/smoke-test-macos.md) verification log.
- **Documentation sprint:** README rewritten as **public front door** (value, first-run, trust, today vs later, Mermaid workflow, sample report screenshot, redacted JSON excerpt); [docs/README.md](docs/README.md) curated index; [docs/privacy-for-users.md](docs/privacy-for-users.md) plain-language trust; [docs/docs-alignment-after-packaging.md](docs/docs-alignment-after-packaging.md) D6 checklist; assets under `docs/assets/`.
- **Sprint B.1 (distribution):** [docs/release-checklist.md](docs/release-checklist.md), [docs/smoke-test-macos.md](docs/smoke-test-macos.md); [docs/install-macos.md](docs/install-macos.md) and README aligned to **one canonical Path B** (`npm ci` → build → `npm install -g ./apps/cli` → `impact scan`); root script `npm run verify:release`.
- **Schema `impact.v0.3`:** runtime **`presence`** (epistemic) vs **`status`** (operational); model **`presence`** replaces `discovery_status`; readiness uses **`presence`**; [docs/schema-semantics-v0.3.md](docs/schema-semantics-v0.3.md).
- **Deterministic field confidence:** [docs/confidence-rules.md](docs/confidence-rules.md) + `fieldConfidence()` / `ConfidenceRules` in `@impact/schemas`.
- **Reporting:** HTML confidence legend, diagnostics card, `docs/support-matrix.md` link; Vitest coverage in `@impact/reporting`.
- **Fixtures:** expanded `fixtures/scenarios/*`, `fixtures/invalid/*`, `npm run validate-invalid-fixtures`, CI step for invalid fixtures.
- **Submission:** per-attempt timeout (15s default), bounded retries with backoff, `impact-submission-preview.json` + `impact-submission-receipt.json`, **HTTP 409 duplicate** path (`outcome: "duplicate"`, no retries), Vitest tests in `@impact/submission`.
- **Core:** fixture-backed merge-path tests; readiness tests updated for v0.3.

### Fixed

- **CLI:** `impact --version` no longer hardcoded; stays aligned with package release bumps.

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
