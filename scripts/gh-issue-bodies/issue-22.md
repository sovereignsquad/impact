## Objective

Make **consent auditable** by persisting the **exact outbound JSON** (`impact-submission-preview.json`) before POST, and linking the **receipt** to the same **payload hash** as the sent body.

## Unified Context

“Trust but verify” for privacy products: the user must be able to open the **preview file** and compare it to **`impact-profile.json`** and to what the client claims it sent. The receipt records **`payload_sha256`** and **`preview_payload_sha256`** for audit.

Without preview-on-disk:

- disputes cannot be resolved
- security reviews block adoption
- regressions could send a different object than displayed

## Based On

- Sprint B — B6
- [docs/submission-contract.md](https://github.com/sovereignsquad/impact/blob/main/docs/submission-contract.md) — Local artefacts
- `packages/submission` — `writePayloadPreview`, CLI flow
- [docs/schema-semantics-v0.3.md](https://github.com/sovereignsquad/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/sovereignsquad/impact/blob/main/docs/confidence-rules.md)
- [docs/support-matrix.md](https://github.com/sovereignsquad/impact/blob/main/docs/support-matrix.md)

## Problem

Preview filename and timing were not normative; B6 makes them **contractual**.

## Goal

- After consent, before POST: write **`impact-submission-preview.json`** (exact bytes = POST body)
- Receipt references hash; no preview on `--no-submit` or cancelled prompt

## Scope

In scope: submission package + CLI + doc.

Out of scope: encrypting preview at rest (OS permissions suffice for v0.x).

## Execution Prompt

Rename/write preview path; ensure `JSON.stringify(profile)` matches POST body; document in contract + README optional submission section.

## Scope / Non-Goals

Non-goals: uploading preview separately; cloud storage.

## Constraints

- Preview content === POST body for same `run_id` snapshot

## Acceptance Checks

- [ ] Preview file matches outbound payload (hash equality in receipt)
- [ ] No preview written when submit path not taken
- [ ] Docs updated

## Dependencies

- **Preferred after:** #21
- **Related:** #13

## Out of Scope

- Signed previews

## Risks

- Pretty-print vs compact JSON — standardise on same stringify as POST

## Delivery Artifact

- Preview + receipt fields in `packages/submission`
- README / contract excerpts

## Developer Notes

- Style reference: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
