## Objective

Build a **test and hardening matrix** so IMPACT remains **safe to extend** as benchmarking lands: **unit tests** per package, **schema regression**, **readiness regression**, **scanner isolation** (partial failures do not abort full scan), and **fixture-based** checks.

## Unified Context

A sovereign **Industrial Multi-Platform Agent Connector Test** programme cannot rely on manual smoke tests alone. Automated proof is part of **governance**.

## Based On

- `packages/schemas` vitest
- `packages/core` vitest
- Future expansion per scanner package

## Problem

Coverage is **minimal** today; CI (#2) will amplify value once tests exist.

## Goal

- Each scanner package exports **pure functions** where possible with tests.
- Timeout/subprocess failures **covered** with mocks or stubs.
- Golden files for **host** parsing optional.

## Scope

In scope: tests + patterns for new code. Out of scope: full E2E across OS matrix in CI (may be phased).

## Execution Prompt

Add tests in same PR as features; block regressions.

## Constraints

- Tests must be **deterministic** (no real network in unit tests).

## Acceptance Checks

- [ ] `npm test` meaningful coverage for schemas + readiness + critical parsers.
- [ ] Documented how to run a single package’s tests.
- [ ] Partial failure behaviour manually verified once (#7–#10).

## Dependencies

- **Depends on:** #6
- **Pairs with:** #2

## Risks

- Slow CI—keep tests lean; integration nightly optional later.

## Delivery Artifact

- Test files + coverage report optional in comment.

## Developer Notes

- **Status** may stay **In Progress** while programme grows.
