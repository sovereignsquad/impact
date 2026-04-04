# Release checklist — IMPACT

Use this for **tagged releases** and **release candidates**. Execute in order; do not skip validation steps.

## Preconditions

- [ ] Default branch (`main`) is green in CI
- [ ] No open P0 defects blocking release

## Version and changelog

- [ ] Align **all** version layers per [current-state.md](current-state.md) **§ Versioning (SSOT)** — Git tag `vX.Y.Z`, npm `X.Y.Z` on every `@impact/*` workspace + pinned internal deps, profile `schema_version` if schema bumped, `impact --version` via `apps/cli/package.json`
- [ ] Bump **all** `@impact/*` workspace versions and **pinned** internal `dependencies` to the same semver (see `packages/*/package.json`, `apps/cli/package.json`)
- [ ] `npm install` at repo root (refresh lockfile)
- [ ] Update [CHANGELOG.md](../CHANGELOG.md) `[Unreleased]` → dated section with summary
- [ ] Commit: `chore(release): vX.Y.Z` (or merge PR)

## Build and quality gates (local or CI)

- [ ] `npm ci`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `npm run validate-fixtures`
- [ ] `npm run validate-invalid-fixtures`

## Packaging / distribution

**Path C (registry):** preferred for users — see [install-macos.md](install-macos.md).

- [ ] `npm run publish:npm:dry-run` — inspect tarballs (only `dist/` shipped)
- [ ] `npm login` and `npm run publish:npm` per [npm-publish.md](npm-publish.md) (order preserved in script)
- [ ] `npm view @impact/cli version` matches release
- [ ] **Path C** smoke in [smoke-test-macos.md](smoke-test-macos.md): `npm install -g @impact/cli` → scan → artefacts

**Path B (source):** always valid fallback.

- [ ] From clean clone: **Path B** in [smoke-test-macos.md](smoke-test-macos.md)
- [ ] Confirm `impact --version` and scan outputs

*(Path A — standalone binary: [#38](https://github.com/moldovancsaba/impact/issues/38).)*

## Git tag and GitHub

- [ ] `git tag -a vX.Y.Z -m "vX.Y.Z"`
- [ ] `git push origin vX.Y.Z`
- [ ] Create **GitHub Release** with notes (copy from CHANGELOG; link install + smoke-test docs)

## Post-release smoke

- [ ] On a **fresh macOS** environment (VM or clean user): run [smoke-test-macos.md](smoke-test-macos.md) against the **tag** or release archive
- [ ] Attach or paste evidence (commands + output paths) in release discussion or issue **#27**

## Optional submission sanity (non-default)

- [ ] Only if testing ingest: `IMPACT_SUBMIT_URL` set, TTY consent path — not part of default smoke

---

**Evidence:** paste smoke output on the active distribution issue (e.g. [#34](https://github.com/moldovancsaba/impact/issues/34)) or the GitHub Release discussion.
