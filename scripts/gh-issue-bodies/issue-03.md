## Objective

Keep **architecture and operations knowledge** in-repo and **aligned with GitHub Issues**, so new architects and operators can run, extend, and operate IMPACT without tribal knowledge.

## Unified Context

IMPACT is the **Industrial Multi-Platform Agent Connector Test** programme. The codebase is a **TypeScript monorepo** (`apps/cli`, `packages/*`). As benchmarking phases land, `docs/architecture.md` must remain the **technical map**: components, data flow, extension points, and trust boundaries.

Issues remain **SSOT for decisions and acceptance**; docs are **curated mirrors** updated when issues close or doctrine changes (#1).

## Based On

- Current `docs/architecture.md`
- `docs/product.md`, `docs/privacy-policy.md`
- Doctrine #1

## Problem

- Architecture doc can lag behind packages (e.g. new scanners, benchmark runners).
- Runbooks (env vars, `IMPACT_SUBMIT_URL`, troubleshooting) are fragmented.

## Goal

- `docs/architecture.md` reflects **as-built** modules and flows.
- Add or extend **runbooks**: local dev, CLI flags, output files, failure modes.
- Cross-link **issue numbers** for major decisions.

## Scope

In scope:

- Diagrams / mermaid updates
- Module responsibility table
- “How to add a runtime adapter” cookbook

Out of scope:

- Replacing issue bodies with docs-only specs (issues stay authoritative for acceptance).

## Execution Prompt

Update docs in **small PRs** tied to this issue; comment with diff summary when closing subtasks.

## Constraints

- No serial numbers / PII in examples.
- Windows vs Unix differences documented where known gaps exist.

## Acceptance Checks

- [ ] A new contributor can run `impact scan` from docs alone (given Node installed).
- [ ] Extension points (scanner, schema version bump) are documented.
- [ ] Links to privacy and product doctrine are current.

## Dependencies

- **Related:** #6 (foundation), #15 (tests), #1 (doctrine).

## Risks

- Over-long docs—prefer layered docs + deep links.

## Delivery Artifact

- PR(s) touching `docs/architecture.md` + optional `docs/runbook.md`.

## Developer Notes

- **Status** on board only; title remains descriptive.

- Programme card quality bar: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498).
