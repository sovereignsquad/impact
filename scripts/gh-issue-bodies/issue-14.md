## Objective

Deliver **coarse readiness hints**: short, **explainable** sentences about whether the machine **may** be suitable for lightweight local workflows—**without** benchmark scores, **without** performance claims, and with explicit **confidence** (`detected` / `inferred` / `unknown`).

## Unified Context

Phase **2** in the programme is **guidance**, not measurement. IMPACT’s **benchmark** phases (#16) must not be confused with this layer. Readiness must **never** imply throughput or latency.

## Based On

- `packages/core/src/readiness.ts`
- Optional `readiness` field on profile schema

## Problem

Vague “you’re good” messages are **worse than unknown**—they create false operator confidence.

## Goal

- Rules cover: Ollama reachable + local models + Apple Silicon + memory heuristics; unreachable runtime; low memory + models.
- Always offer **conservative** fallback text.

## Scope

In scope: rule updates + copy + tests. Out of scope: scoring, percentile comparisons.

## Execution Prompt

Tune rules via PR with **before/after** examples in issue comment.

## Constraints

- Rules must be **unit tested**; no silent behaviour change.

## Acceptance Checks

- [ ] `readiness` absent when `--no-readiness` CLI flag used.
- [ ] Tests cover at least “happy path” and “unreachable Ollama” path.
- [ ] HTML shows readiness section when present.

## Dependencies

- **Depends on:** #7, #8, #10

## Risks

- Overfitting to one hardware class—add more cases as data arrives.

## Delivery Artifact

- Test names + sample outputs in comments.

## Developer Notes

- **Status** reflects product review of wording.

- Programme card quality bar: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498).
