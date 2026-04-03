## Objective

Define and implement a **robust anonymous submission path**: **HTTP contract** (request/response), **client retries/backoff policy**, **error preservation** of local artefacts, and **local receipt log**—so aggregation (if desired) never **destroys** user data.

## Unified Context

Submission is **optional** and **consent-gated** (#11). Still, the client must be **production-grade**: clear failures, idempotency notes, and documented **server expectations** for a sovereign programme.

## Based On

- `packages/submission`
- `IMPACT_SUBMIT_URL` env convention

## Problem

Stub client without documented API leaves operators unable to build a **trusted** receiver.

## Goal

- Document **payload** = `ImpactProfileV01` JSON body.
- Document **response** shape: `submission_id` or `id` field parsing as today.
- Implement **bounded retries** for transient errors (optional flag).
- Append receipts under `~/.impact/submission-receipts.log`.

## Scope

In scope: client + **OpenAPI-style markdown spec** in repo (suggested path: `docs/api/ingest.md`). Out of scope: hosted server implementation in this repo (unless later chosen).

## Execution Prompt

Add `docs/api/ingest.md` + link from README; update this issue with versioned contract changes.

## Constraints

- No submission without user consent flow in CLI.
- No secrets in logs.

## Acceptance Checks

- [ ] Documented request/response contract checked into repo.
- [ ] Network failure leaves `impact-profile.json` intact.
- [ ] Success writes receipt line with `submission_id` and `run_id`.

## Dependencies

- **Depends on:** #11
- **Related:** #2 (CI may mock server later)

## Risks

- **PII accidental addition** in future fields—schema + privacy reviews required.

## Delivery Artifact

- `docs/api/ingest.md` + client code + example `curl`.

## Developer Notes

- **Status** tracks contract readiness vs implementation polish.

- Programme card quality bar: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498).
