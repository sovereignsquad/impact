## Objective

Enumerate **models** from **supported runtimes** (Ollama tags API today), normalise identifiers, attach `runtime_id`, set **locality** and **quantisation** when exposed, and mark **confidence** honestly.

## Unified Context

Model inventory feeds **readiness hints** (#14) and future **benchmark selection**. Wrong inventory destroys benchmark credibility for IMPACT’s **sovereign** mission.

## Based On

- `packages/scanner-models`
- Ollama: `GET /api/tags`

## Problem

Empty model lists when runtime is **down** must not be interpreted as “no models exist”—downstream copy must stay conservative.

## Goal

- Ollama integration **complete** for reachable API.
- MLX **path-based** inventory: stub until directory contract defined—track explicitly in comments.

## Scope

In scope: Ollama merge into profile; MLX placeholder. Out of scope: cloud catalogues without user consent.

## Execution Prompt

When MLX paths defined, extend scanner + schema if needed + update acceptance here.

## Constraints

- Localhost only for MVP API calls.
- No model file content reads.

## Acceptance Checks

- [ ] When Ollama reachable, `models` populated with `locality: local` where appropriate.
- [ ] When unreachable, `models` may be empty without error; report/readiness explain gap.
- [ ] No fabricated quantisation.

## Dependencies

- **Depends on:** #6, #8

## Risks

- Large tag lists—consider caps + note in report.

## Delivery Artifact

- Example `models` array in issue comment + code refs.

## Developer Notes

- Board **Status** may be **Review** until MLX path spec exists.
