# Changelog

All notable changes to **Impact** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) once versioned releases begin.

## [Unreleased]

### Added

- **I.M.P.A.C.T. v0.1 MVP scaffold:** TypeScript monorepo (`apps/cli`, `packages/*`) with local `impact scan`, JSON/HTML reports, salted coarse fingerprint, Ollama + MLX detection, allowlisted tool detection, optional readiness hints, and opt-in submission client (`IMPACT_SUBMIT_URL`).
- Product definition ([docs/product.md](docs/product.md)), privacy policy ([docs/privacy-policy.md](docs/privacy-policy.md)), and architecture ([docs/architecture.md](docs/architecture.md)).
- Schema package `impact.v0.1` (Zod) and sample fixture under `fixtures/`.
- Vitest tests for schema and readiness heuristics.

### Earlier

- Open source repository scaffold: README, contributing guide, project management docs, MIT license.
- GitHub Project board as the single place for roadmap, backlog, and todos.
