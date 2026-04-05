## Objective

**MLP M6 — Install polish after npm:** reduce friction **after** Path C is live — clearer **onboarding** copy, **install/run failure** recovery, optional **one-command** quickstart, **troubleshooting** section in docs.

## Unified Context

Programme: [docs/mlp.md](https://github.com/sovereignsquad/impact/blob/main/docs/mlp.md). Run after **M1** and registry install are proven in the wild.

## Based On

- [mlp.md — M6](https://github.com/sovereignsquad/impact/blob/main/docs/mlp.md#m6--install-polish-after-npm)

## Goal

- Typical **technical** users install **without repo knowledge**; failures are **recoverable** from docs.

## Scope

- README + install-macos + CLI error hints where appropriate (no scope creep into GUI/DMG).

## Acceptance Checks

- [ ] Troubleshooting covers common `npm`/Node/`impact` failures
- [ ] Onboarding copy reviewed for clarity
- [ ] Optional one-liner quickstart documented if adopted

## Dependencies

- **Blocked by:** **M1** / live Path C baseline

## Delivery Artifacts

- Doc + small CLI PRs as needed; comment with before/after examples.
