## Objective

Formalise **operational availability** and **epistemic discovery** as **orthogonal dimensions** in the IMPACT profile schema so scanners, reports, and submissions never conflate “what the machine can do” with “how we know it.”

## Unified Context

IMPACT v0.x is a **privacy-first discovery scanner**. Trust comes from **honest signalling**: runtimes can be `installed_unreachable`, tools can be detected with `unknown` version confidence, MLX can be **`partial`** without model inventory. If **`status`** (lifecycle) and **`presence`** (how the row applies) drift into the same vocabulary—e.g. overloading `partial` or `unknown`—downstream benchmarks and aggregation will misread reality.

Without this separation:

- debug traces confuse “API down” with “we guessed wrong”
- cross-platform parity claims get smuggled in via ambiguous fields
- fixture validation cannot reject illegal combinations
- HTML reports blend operational and epistemic language

This issue locks the **impact.v0.x** contract so **`partial` is never a `presence` value** (it belongs in **`status`** for partial runtime support).

## Based On

- Sprint B mandate — semantic tightening (B1)
- [docs/schema-semantics-v0.3.md](https://github.com/sovereignsquad/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/sovereignsquad/impact/blob/main/docs/confidence-rules.md)
- [docs/support-matrix.md](https://github.com/sovereignsquad/impact/blob/main/docs/support-matrix.md)
- [docs/submission-contract.md](https://github.com/sovereignsquad/impact/blob/main/docs/submission-contract.md)

## Problem

Schema v0.2 mixed **semantic** labels with **status** in ways that could be read as duplicate meaning. Model rows used **`discovery_status`** while runtimes used **`semantic`**, overlapping with operational enums.

## Goal

Ship **`impact.v0.3`** with a single epistemic vocabulary:

- **`status`** — lifecycle / availability: `not_installed`, `installed_unreachable`, `installed_reachable`, `partial`, `unknown` (as appropriate per entity rules).
- **`presence`** — `detected` | `inferred` | `configured` | `unknown` only. **`configured`** dormant until a real config source exists.
- Provenance on values: **`source`**, **`probe`**, field **`confidence`** (rule-based).

## Scope

In scope:

- `ImpactProfileSchema` bump and Zod controlled vocabularies
- All emitters (`scanner-*`, `core`, `readiness`) migrated
- Fixtures + `validate-fixtures` / invalid fixtures
- README / product / architecture terminology

Out of scope:

- Benchmark scoring, agent CRUD, shell execution tests, crowd analytics, GUI

## Execution Prompt

Implement and land **`impact.v0.3`**: replace runtime **`semantic`** with **`presence`**, model **`discovery_status`** with **`presence`**, readiness narrative basis with **`presence`**. Migrate every fixture; extend `profile.test.ts` to reject illegal **`presence: partial`**. Document in `docs/schema-semantics-v0.3.md`.

## Scope / Non-Goals

Non-goals:

- “Readiness score” products
- Windows probe parity claims
- Emitting **`configured`** widely without a source of truth

## Constraints

- **`partial`** MUST NOT appear as **`presence`** (validation must fail).
- Field **`confidence`** must remain rule-mapped (see confidence-rules).

## Acceptance Checks

- [ ] `schema_version` is **`impact.v0.3`** and validates in CI
- [ ] All emitters emit **`presence`** + correct **`status`**
- [ ] Fixtures and invalid-fixture tests aligned
- [ ] `docs/schema-semantics-v0.3.md` is the terminology SSOT
- [ ] No benchmark or scoring scope crept in

## Dependencies

- **Unblocks:** report tests (#19), fixture matrix (#20), merge tests (#26)
- **Related:** #18 (confidence rules), #16 (phases)

## Out of Scope

- Server-side ingest
- npm publication / binary packaging (#23, #27)

## Risks

- Missed emitter leaves **`semantic`** in JSON → CI should catch via fixtures
- External consumers on v0.2 need a clear changelog entry

## Delivery Artifact

- Schema diff in `packages/schemas`
- Migrated scanners + `packages/core`
- Updated `fixtures/` + validation scripts
- Short semantics note in docs (linked above)

## Developer Notes

- Reference card quality: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
- Board **Status** = Done when merged to `main` and green CI
