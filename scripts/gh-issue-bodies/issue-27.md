## Objective

**Sprint B.1 — finish packaging and release readiness** on macOS with **one** canonical distribution method (Path B: npm global from built repo), repeatable releases, and smoke-tested proof.

## Unified Context

Sprint B semantic/submission work is **done**. The programme is in **distribution readiness**: a fresh user must run IMPACT **without improvising** commands. CTO preference: **Path B** first unless binary packaging is trivial. **#23** is **superseded** by this issue for all packaging acceptance.

## Sprint B.1 ticket breakdown (CTO)

| ID | Deliverable |
| -- | ----------- |
| **B7.1** | Choose and implement **one** primary install path — **Path B** locked: `npm ci` → `npm run build` → `npm install -g ./apps/cli` → `impact scan` |
| **B7.2** | [docs/release-checklist.md](https://github.com/sovereignsquad/impact/blob/main/docs/release-checklist.md) |
| **B7.3** | [docs/smoke-test-macos.md](https://github.com/sovereignsquad/impact/blob/main/docs/smoke-test-macos.md) + handoff evidence on first RC |
| **B7.4** | README, `install-macos.md`, `current-state.md` aligned — **no contradictory** quick starts |
| **B7.5** | Board: **#27 → Done** when verified; **#23 closed** as superseded |

## Based On

- [docs/install-macos.md](https://github.com/sovereignsquad/impact/blob/main/docs/install-macos.md)
- [docs/release-checklist.md](https://github.com/sovereignsquad/impact/blob/main/docs/release-checklist.md)
- [docs/smoke-test-macos.md](https://github.com/sovereignsquad/impact/blob/main/docs/smoke-test-macos.md)
- `npm run verify:release` (root `package.json`)

## Problem

Multiple half-documented install paths confuse onboarding and block CTO sign-off on “shippable v0.x.”

## Goal

One **canonical** macOS path; **documented** release + smoke; **#27** moves **Done** after merge + evidence.

## Scope

In scope: docs, npm scripts, board closeout comments.

Out of scope: benchmarks, GUI, Windows parity, npmjs.org publish (future subsection in smoke doc).

## Execution Prompt

1. Merge docs to `main`; run `npm run verify:release` on CI.  
2. Execute [smoke-test-macos.md](https://github.com/sovereignsquad/impact/blob/main/docs/smoke-test-macos.md); paste evidence in comment.  
3. First release: follow [release-checklist.md](https://github.com/sovereignsquad/impact/blob/main/docs/release-checklist.md).  
4. Close **#23** superseded; set **#27** Done.

## Constraints

- **No** second “official” install path until Path A (binary) is implemented end-to-end.

## Acceptance Checks

- [x] Canonical Path B documented in README + install-macos only
- [x] `verify:release` passes in CI (local + workflow on `main`)
- [x] Smoke test executed; evidence in [docs/smoke-test-macos.md](https://github.com/sovereignsquad/impact/blob/main/docs/smoke-test-macos.md) verification log (2026-04-03)
- [x] #23 closed superseded; #27 Done (after push: set board Status + close on GitHub)

## Dependencies

- **Supersedes:** #23

## Risks

- Global `npm install -g` permissions — document `npx`/`sudo` only as troubleshooting, not canonical

## Delivery Artifact

- Commits on `main` for listed docs + `verify:release`

## Developer Notes

- [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498) card quality bar
