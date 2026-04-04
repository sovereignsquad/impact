# Changelog

All notable changes to **Impact** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once versioned releases begin.

## [Unreleased]

### Changed

- **`apply-status.sh`:** **[#58](https://github.com/moldovancsaba/impact/issues/58)** → **In Progress** (activation sprint); **#59–#62** remain **Todo**.

- **`apply-updates.sh`:** includes **[#34](https://github.com/moldovancsaba/impact/issues/34)** (`issue-34.md`) — npm publish gate; P1 label loop updated.

- **Deploy smoke:** [web-deploy-smoke.md](docs/web-deploy-smoke.md) — § **Live stats** (`VITE_STATS_API_BASE`, ingest curl checks, `/data.html`); [ingest-server.md](docs/ingest-server.md) — § **Hosted smoke** + production **`better-sqlite3`** note. [mlp-execution.md](docs/mlp-execution.md) — recommended order + developer message aligned with **activation** vs repo-complete.

- **CTO assessment:** [mlp-status-cto.md](docs/mlp-status-cto.md) § *Leadership view* — **canonical entry points** table; **leadership sentence** (accepted in code vs product-live); **control stack** split; **steps 1–11** + **report-back**; **#58** / **#34** GitHub directive bodies ([`issue-58.md`](scripts/gh-issue-bodies/issue-58.md), [`issue-34.md`](scripts/gh-issue-bodies/issue-34.md)). [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) cross-link updated.

- **Web shell UX & versioning:** footer shows **Web shell** semver + **profile schema** on all pages (Vite `define` from `apps/web/package.json`); **`<main class="site-main">`** wraps primary content on every HTML entry; [docs/README.md](docs/README.md) reorganised with pick-a-path tables; root [README.md](README.md) adds **Versions** section and doc links for web + ingest; [docs/web.md](docs/web.md) and [docs/current-state.md](docs/current-state.md) § Versioning include `@impact/web`.

### Added

- **Dashboard D2–D5 (in repo, #59–#62):** [`apps/ingest`](apps/ingest) — aggregation (`aggregate.ts`, `stats-from-db.ts`), privacy thresholds (`IMPACT_STATS_MIN_BUCKET_COUNT`), **`GET /api/stats/overview|full|hardware|tools|models`**, CORS (`IMPACT_STATS_CORS_ORIGIN`, `OPTIONS`). Vitest: `aggregate.test.ts`, `stats-from-db.test.ts`, **`http-server.test.ts`**. [`apps/web`](apps/web) — [`data.html`](apps/web/data.html) + [`data-entry.ts`](apps/web/src/data-entry.ts) with **`VITE_STATS_API_BASE`** (build-time) for live tables. Docs: [ingest-server.md](docs/ingest-server.md), issue bodies `issue-59.md`–`issue-62.md`, [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) operating state updated.

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

### Changed

- **CTO directive — background system delivery (2026-04-12):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — shell vs infra honesty (Paths B/C/D, dashboard gap, blockers), **six conceptual phases** mapped to **#58–#62**, simple architecture (one service/DB/API), **what not to do**, developer table, success criteria, management summary; Purpose/Established/Constraints/Definition of success/Developer directive aligned. [mlp-status-cto.md](docs/mlp-status-cto.md) · [mlp-execution.md](docs/mlp-execution.md) updated.

- **CTO acceptance — tranche SSOT usability (2026-04-11):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) § *CTO acceptance* records **control-document** acceptance (index-at-top rationale, operating state, five **immediate next steps**); [mlp-status-cto.md](docs/mlp-status-cto.md) header + **Tranche SSOT** summary row.

- **Tranche doc issue visibility:** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — **Project #2** board links + full **# / title** tables moved **above** CTO sections; anchor `#github-issue-index`; bottom § Related links back to top.

- **CTO assessment (2026-04-10):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — **Path B / C / D** distribution states, **strategic correction** (packaging advanced early as infrastructure), **M1–M4** nuance, **dual-track** after **#34** (dashboard primary; signing/notarization parallel if capacity); **do not** market Path D as finished until **M3**. [mlp-status-cto.md](docs/mlp-status-cto.md) summary table + distribution snapshot; [macos-distribution.md](docs/macos-distribution.md) CTO status table + positioning; [mlp-execution.md](docs/mlp-execution.md) recommended order + developer message aligned.

### Added

- **Ingest server (D1 / #58 MVP):** [`apps/ingest`](apps/ingest) (`@impact/ingest`, private) — `POST /` + `/ingest`, `GET /health`, `validateImpactProfile`, SQLite + WAL, dedupe by raw-body hash + `run_id`, [ingest-server.md](docs/ingest-server.md). Depends on `better-sqlite3`. Root scripts: `dev:ingest`, build/test in `verify:release`. Default DB `./data/` (gitignored).

- **macOS DMG (Path D):** `npm run build:dmg` — [`packaging/macos/build-dmg.sh`](packaging/macos/build-dmg.sh) produces `packaging/macos/out/Impact-{version}-macos.dmg` + `.sha256` (`Impact.app` with CLI `dist/` + pruned `node_modules`; **Node 20+** still required on the Mac). Docs: [macos-distribution.md](docs/macos-distribution.md), [install-macos.md](docs/install-macos.md) Path D, [release-checklist.md](docs/release-checklist.md). Script ends with **`npm ci`** to restore dev dependencies after `npm prune`.

- **Operating model alignment (CTO, 2026-04-09):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — § *CTO acceptance* records **confirmed** SSOT, [mlp-status-cto.md](docs/mlp-status-cto.md) + CHANGELOG alignment, **six-step** operating model (#34 → #58 → #59 when D1 underway → #60–#62 in dependency order → #63–#66 **Backlog** → DMG last), and CTO note: repo / board / execution discipline aligned (**low WIP**, dashboard first, packaging second, no parallel busywork, no premature DMG). [mlp-status-cto.md](docs/mlp-status-cto.md) header + overall line updated.

- **Next-tranche SSOT final confirmation (CTO, 2026-04-08):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — expanded § *CTO acceptance* (status greens/ambers, **six-step** execution order, parallel-busywork warning, operational next step); [mlp-status-cto.md](docs/mlp-status-cto.md) summary row + header.

- **Architect issue index:** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — § *Project board — linked issues* at **top** of file (`#github-issue-index`; **#34–#66** + programme **#35–#43**) + **Project #2** links in header.

- **Next-delivery tranche accepted (CTO, 2026-04-07):** [mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — CTO acceptance block, **verbatim developer directive**, **board/WIP discipline** (#58 In Progress first after #34; then #59…; **#63–#66** secondary + Backlog; **DMG last**), expanded constraints (no accounts layer). [mlp-status-cto.md](docs/mlp-status-cto.md), [project-management.md](docs/project-management.md) §6, `issue-58.md`, `apply-status.sh` comment aligned.

- **Next delivery tranche (CTO — dashboard + macOS):** [docs/mlp-next-delivery-tranche.md](docs/mlp-next-delivery-tranche.md) — Phase 1 **#34**; Phase 2 D1–D5 **[#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)**; Phase 3 macOS M1–M4 **[#63](https://github.com/moldovancsaba/impact/issues/63)–[#66](https://github.com/moldovancsaba/impact/issues/66)**. Issue bodies `scripts/gh-issue-bodies/issue-58.md` … `issue-66.md`; [`apply-status.sh`](scripts/gh-issue-bodies/apply-status.sh) (**#58–#62** Todo, **#63–#66** Backlog). Wired from [mlp-status-cto.md](docs/mlp-status-cto.md), [mlp-execution.md](docs/mlp-execution.md), [current-state.md](docs/current-state.md), [mlp.md](docs/mlp.md), [ssot-map.md](docs/ssot-map.md), [project-management.md](docs/project-management.md).

- **Tranche freeze (CTO):** [mlp-status-cto.md](docs/mlp-status-cto.md) — explicit **developer directive**: no further repo/doc reshaping; wait for deploy/smoke/**#34**; resume **#44** CTAs then **#44–#46** evidence; overall status line (green MVP / green web shell / amber npm).

- **Post-acceptance doc closure (CTO):** [mlp-status-cto.md](docs/mlp-status-cto.md) — § *Documentation & traceability — cleanup accepted*; confirms smoke SSOT, post-acceptance framing, **no further repo reframing** for this tranche; next work **operational** (deploy, smoke, **#34**, **#44–#46**).

- **CTO acceptance (P0 web/data) + deploy smoke SSOT:** [mlp-status-cto.md](docs/mlp-status-cto.md) updated (2026-04-05) — accepted state, operational sequence, constraints, **#44–#46** evidence path, **#51–#53** backlog discipline. New [web-deploy-smoke.md](docs/web-deploy-smoke.md); linked from [web.md](docs/web.md), [mlp-execution.md](docs/mlp-execution.md), [current-state.md](docs/current-state.md), [docs/README.md](docs/README.md).

- **`apps/web` multi-page MLP shell:** `/`, `/install.html`, `/use.html`, `/submit.html`, `/data.html` (hardware/tools/LLM **IA** + honest placeholders), `/profile.html` (explorer); shared nav + **#34** install truth (Path B primary until npm live). Vite [`rollupOptions.input`](apps/web/vite.config.ts); [web.md](docs/web.md) + [apps/web/README.md](apps/web/README.md) updated.

- **MLP public web / historical data (board + docs):** GitHub issues **[#50](https://github.com/moldovancsaba/impact/issues/50)–[#57](https://github.com/moldovancsaba/impact/issues/57)** (H1–H8) created, added to [Project #2](https://github.com/users/moldovancsaba/projects/2); [`apply-status.sh`](scripts/gh-issue-bodies/apply-status.sh) sets **Todo** for H1/H5–H8 and **Backlog** for H2–H4; bodies in [`scripts/gh-issue-bodies/issue-50.md`](scripts/gh-issue-bodies/issue-50.md) … `issue-57.md`; [`apply-updates.sh`](scripts/gh-issue-bodies/apply-updates.sh) extended. [mlp-status-cto.md](docs/mlp-status-cto.md) and [mlp-execution.md](docs/mlp-execution.md) updated for the slice; [project-management.md](docs/project-management.md) §6 snapshot.

- **MLP CTO assessment doc:** [docs/mlp-status-cto.md](docs/mlp-status-cto.md) — delivered vs blocked, architectural notes, immediate and post-#34 next tasks; linked from [mlp.md](docs/mlp.md), [mlp-execution.md](docs/mlp-execution.md), [current-state.md](docs/current-state.md), [ssot-map.md](docs/ssot-map.md), [docs/README.md](docs/README.md).

- **HTML report (MLP slice):** **At a glance**, **What this scan means**, deterministic **Suggested next steps** via `buildRecommendations` in [`@impact/reporting`](packages/reporting/src/recommendations.ts), and **Known limitations** — shipped in `impact-report.html` generation.
- **Web profile explorer:** runtimes summary table + the same **Suggested next steps** list (bundles shared recommendation logic; no upload).
- **install-macos:** troubleshooting table (404 / `EACCES` / `impact` not on `PATH` / sparse HTML).

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
