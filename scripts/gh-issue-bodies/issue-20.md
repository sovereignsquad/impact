## Objective

Expand **deterministic fixture coverage** for scanner/profile scenarios and enforce **schema discipline** via **invalid fixtures** that **must** fail validation in CI.

## Unified Context

Refactors to orchestration or schema will silently break edge cases unless fixtures encode **degraded** and **mixed** states. A second script that **expects** parse failures prevents “anything goes” JSON from slipping in.

Without this:

- illegal `presence` values could ship
- missing provenance on host fields could ship
- CI only happy-paths baseline JSON

## Based On

- Sprint B — B4
- `scripts/validate-fixtures.mjs` (recursive, skips `fixtures/invalid/`)
- `scripts/validate-invalid-fixtures.mjs`
- `fixtures/scenarios/*`, `fixtures/invalid/*`
- [docs/schema-semantics-v0.3.md](https://github.com/moldovancsaba/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/moldovancsaba/impact/blob/main/docs/confidence-rules.md)
- [docs/support-matrix.md](https://github.com/moldovancsaba/impact/blob/main/docs/support-matrix.md)
- [docs/submission-contract.md](https://github.com/moldovancsaba/impact/blob/main/docs/submission-contract.md)

## Problem

Scenario set was too shallow for future merge/schema refactors.

## Goal

- Named scenarios: reachable + models, no version, tool detected + unknown version, mixed runtimes, host partial provenance, Windows experimental, Linux partial, etc.
- **Invalid** JSON under `fixtures/invalid/` rejected by `ImpactProfileSchema`
- CI runs both validators

## Scope

In scope: JSON fixtures, validation scripts, CI step, naming discipline.

Out of scope: fuzzing; multi-GB fixtures.

## Execution Prompt

Add scenarios; add `bad-presence.json`, `missing-provenance-chip.json` (or equivalent); wire `npm run validate-invalid-fixtures`; document naming in CONTRIBUTING or fixtures README.

## Scope / Non-Goals

Non-goals: dynamic fixture generation in CI without checked-in goldens.

## Constraints

- Valid fixtures must pass; invalid must fail **deterministically**

## Acceptance Checks

- [ ] `validate-fixtures` passes on repo
- [ ] `validate-invalid-fixtures` fails if invalid files are “fixed” to pass
- [ ] Scenarios cover controlled vocab edges
- [ ] CI includes both steps

## Dependencies

- **Depends on:** #17
- **Related:** #10 (model inventory parity), #15 (historical tests issue)

## Out of Scope

- OS matrix runners in GitHub (future)

## Risks

- Fixture maintenance cost — keep each file minimal

## Delivery Artifact

- Expanded `fixtures/scenarios/`, `fixtures/invalid/`
- CI workflow diff

## Developer Notes

- Style reference: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
