## Objective

Handle **HTTP 409 Conflict** from the ingest server as an **intentional idempotent outcome**: **no retries**, clear **user messaging**, and an **auditable receipt** that states **duplicate**—without mutating local scan artefacts.

## Unified Context

Duplicate submission is not “random failure.” Servers may dedupe by **`run_id`** or content hash. The client must **stop**, **surface** the server’s prior **`submission_id`** when JSON provides it, and **preserve** **`impact-submission-preview.json`** and **`impact-profile.json`** unchanged.

Without explicit 409 handling:

- client retries waste rate limits
- users think upload failed when server already stored the row
- security audits cannot distinguish duplicate from error

## Based On

- Sprint B follow-up / B5 extension
- [docs/submission-contract.md](https://github.com/moldovancsaba/impact/blob/main/docs/submission-contract.md) — Duplicate handling, Response table
- `packages/submission/src/submit-profile.ts`
- `packages/submission/src/submit-profile.test.ts`
- CLI receipt + log lines
- [docs/schema-semantics-v0.3.md](https://github.com/moldovancsaba/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/moldovancsaba/impact/blob/main/docs/confidence-rules.md)
- [docs/support-matrix.md](https://github.com/moldovancsaba/impact/blob/main/docs/support-matrix.md)

## Problem

409 was documented before behaviour was fully specialised in code.

## Goal

- On **409**: return **`ok: true`**, **`duplicate: true`**, parse **`submission_id`/`id`**, fallback id `duplicate_<run_id>`
- **Single** HTTP attempt (no retry)
- Receipt: **`outcome: "duplicate"`**, **`duplicate: true`**
- CLI explains duplicate vs fresh success
- Vitest covers 409 JSON body

## Scope

In scope: submission package + CLI + contract + tests.

Out of scope: server returning 409 without body (client still completes duplicate path with synthetic id)

## Execution Prompt

Implement branch before generic error; extend `SubmissionResult`; wire receipt type; document normative semantics; add test.

## Scope / Non-Goals

Non-goals: automatic delete of server-side duplicate

## Constraints

- Local files **never** deleted or altered on 409

## Acceptance Checks

- [ ] 409 test passes
- [ ] Contract documents client behaviour
- [ ] Receipt file discriminates duplicate from success/failure
- [ ] No retry on 409

## Dependencies

- **Depends on:** #21 (submission client baseline)
- **Related:** #13 (server contract umbrella)

## Out of Scope

- Interpreting every vendor’s 409 payload format beyond `id` / `submission_id`

## Risks

- Servers returning HTML 409 — parse fails; synthetic id used; document limitation

## Delivery Artifact

- Code + tests + contract section
- Comment on issue when merged to `main` → **close issue**

## Developer Notes

- Style reference: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
- **If already merged:** keep **Closed**; reopen only if regression
