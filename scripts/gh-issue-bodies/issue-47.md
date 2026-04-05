## Objective

**MLP M4 — Shareable result layer:** redacted **share summary** card, exportable concise summary, **share-safe** wording, optional **copy/share** block in HTML — so users can discuss results **without leaking sensitive detail**.

## Unified Context

Programme: [docs/mlp.md](https://github.com/sovereignsquad/impact/blob/main/docs/mlp.md). Builds on M2/M3 narrative; **privacy** must match [privacy-policy.md](https://github.com/sovereignsquad/impact/blob/main/docs/privacy-policy.md) and [privacy-for-users.md](https://github.com/sovereignsquad/impact/blob/main/docs/privacy-for-users.md).

## Based On

- [mlp.md — M4](https://github.com/sovereignsquad/impact/blob/main/docs/mlp.md#m4--shareable-result-layer)

## Goal

- Standalone **redacted** blurb understandable off-repo.
- Clear **denylist** of what never appears in share text.

## Scope

- HTML section + optional plaintext/markdown export file in output dir.
- Tests for redaction and presence of share block.

## Acceptance Checks

- [ ] Share snippet **excludes** sensitive fields (no raw paths, secrets, identifiers)
- [ ] Snippet **stands alone** for a reader who did not run IMPACT
- [ ] Copy/share affordance documented in user-facing docs

## Dependencies

- Typically after **M2** (layout); may follow **M3**

## Delivery Artifacts

- PR + example share text in issue comment.
