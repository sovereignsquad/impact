## Objective

Publish **`@impact/cli`** to the **npm registry** so users can `npm install -g @impact/cli` without cloning.

## Scope

- Package naming, `files` / `bin`, provenance
- Update [docs/install-macos.md](https://github.com/moldovancsaba/impact/blob/main/docs/install-macos.md), README Quick start, [smoke-test-macos.md](https://github.com/moldovancsaba/impact/blob/main/docs/smoke-test-macos.md)
- [release-checklist.md](https://github.com/moldovancsaba/impact/blob/main/docs/release-checklist.md) for publish flow
- [npm-publish.md](https://github.com/moldovancsaba/impact/blob/main/docs/npm-publish.md) + `scripts/publish-npm-packages.sh`

## Acceptance

- [x] Repo: all `@impact/*` at **0.3.0**, `files: ["dist"]`, `publishConfig.access: public`, pinned internal deps, `prepublishOnly`
- [x] `npm run publish:npm:dry-run` passes locally (CI optional — no token)
- [x] Public install documented as **Path C** (registry-first); Path B co-documented
- [ ] **Maintainer:** `npm login` → `npm run publish:npm` (requires `@impact` scope on npm)
- [ ] **Path C** smoke on clean macOS; paste evidence in comment below

## Based on

[Issue #1](https://github.com/moldovancsaba/impact/issues/1) — Todo track.
