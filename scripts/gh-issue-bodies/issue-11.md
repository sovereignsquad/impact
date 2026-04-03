## Objective

Implement the **privacy pipeline**: **denylist** of sensitive concepts, **local salt** persistence, **privacy block** on profile, **CLI consent** with **payload preview**, and **hard gate** so **no network submission** occurs without explicit steps and configured endpoint.

## Unified Context

IMPACT serves users **worldwide**; trust is the product. **Sovereign benchmarking** requires that even pre-benchmark discovery never becomes **covert telemetry**.

## Based On

- `packages/privacy`
- `apps/cli` submission flow
- `docs/privacy-policy.md`

## Problem

“Optional analytics” creep—must be **impossible** without user intent and visibility.

## Goal

- `raw_identifiers_stored: false` invariant in schema.
- `~/.impact/salt` mode `0600`.
- Submission: preview file + `SUBMIT` typing (unless explicitly documented automation flag).
- `IMPACT_SUBMIT_URL` required to send.

## Scope

In scope: client-side behaviour. Out of scope: server retention policy (document elsewhere).

## Execution Prompt

Any new field → privacy review + schema + this issue comment.

## Constraints

- Never log full payloads to third parties by default.

## Acceptance Checks

- [ ] Default `impact scan --no-submit` is network-silent for submission.
- [ ] Without `IMPACT_SUBMIT_URL`, client returns explicit error, local files kept.
- [ ] Privacy section present in HTML report.

## Dependencies

- **Depends on:** #6
- **Pairs with:** #13

## Risks

- Users confuse fingerprint with tracking—docs must clarify **local salt**.

## Delivery Artifact

- Linked `docs/privacy-policy.md` + CLI help text updates if needed.

## Developer Notes

- **Status** on board reflects audit state, not title text.

- Programme card quality bar: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498).
