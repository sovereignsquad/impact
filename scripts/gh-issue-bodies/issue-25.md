## Objective

Publish a **durable support matrix** that states **macOS / Linux / Windows** behaviour, **partial** semantics, and **expected unknowns**—so README and report footer are backed by a **single doctrine doc**.

## Unified Context

IMPACT must not **imply parity** where none exists. A footnote in HTML is not enough for architects and security reviewers; they need **`docs/support-matrix.md`** linked from README and report.

Without the doc:

- sales-adjacent language creeps into issues
- Windows experimental probes get misread as supported
- “partial” means different things to different readers

## Based On

- Sprint B — B9
- [docs/support-matrix.md](https://github.com/sovereignsquad/impact/blob/main/docs/support-matrix.md)
- README platform table
- Report footer link
- [docs/schema-semantics-v0.3.md](https://github.com/sovereignsquad/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/sovereignsquad/impact/blob/main/docs/confidence-rules.md)
- [docs/submission-contract.md](https://github.com/sovereignsquad/impact/blob/main/docs/submission-contract.md)

## Problem

Support truth lived only in scattered markdown fragments.

## Goal

- One normative **`docs/support-matrix.md`**
- README links to it
- HTML report footer points to it
- Explains **partial**, **experimental**, **unknown** expectations per OS

## Scope

In scope: docs + links only (unless probes change).

Out of scope: implementing Windows parity.

## Execution Prompt

Author matrix; add links; ensure `docs/current-state.md` references it; align wording with product non-goals.

## Scope / Non-Goals

Non-goals: marketing “certified for enterprise” language.

## Constraints

- No false suggestion of cross-OS probe parity

## Acceptance Checks

- [ ] `docs/support-matrix.md` exists and is linked from README
- [ ] Report footer includes link
- [ ] macOS / Linux / Windows tiers explicit

## Dependencies

- **Related:** #24 (diagnostics), #16 (phases)

## Out of Scope

- Legal compliance frameworks

## Risks

- Doc drift from code — add “last reviewed” note in doc header optional

## Delivery Artifact

- `docs/support-matrix.md` + link updates

## Developer Notes

- Style reference: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
