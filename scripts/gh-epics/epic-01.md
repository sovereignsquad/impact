Tracking **Epic 1 — Project foundation** from the v0.1 backlog ([docs/product.md](https://github.com/moldovancsaba/impact/blob/main/docs/product.md), Phase 0).

## Stories

- Monorepo structure (`apps/cli`, `packages/*`)
- Scanner module boundaries + orchestrator in `@impact/core`
- JSON schema `impact.v0.1` in `@impact/schemas`
- Privacy rules + local salt (`@impact/privacy`)
- Fixture samples (`fixtures/baseline-profile.sample.json`)
- Report generation skeleton (`@impact/reporting`)
- Coding standards / CI (follow-up)

## Acceptance criteria

- Repository builds cleanly (`npm run build`)
- Schema validation works (`npm test`)
- Example fixture validates against schema
- `impact scan` produces JSON + HTML
