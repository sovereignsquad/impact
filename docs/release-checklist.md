# Release checklist — IMPACT

Use this for **tagged releases** and **release candidates**. Execute in order; do not skip validation steps.

## Preconditions

- [ ] Default branch (`main`) is green in CI
- [ ] No open P0 defects blocking release

## Version and changelog

- [ ] Bump version in `apps/cli/package.json` (and root if versioned there later)
- [ ] Update [CHANGELOG.md](../CHANGELOG.md) `[Unreleased]` → dated section with summary
- [ ] Commit: `chore(release): vX.Y.Z` (or merge PR)

## Build and quality gates (local or CI)

- [ ] `npm ci`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`
- [ ] `npm run validate-fixtures`
- [ ] `npm run validate-invalid-fixtures`

## Packaging / distribution (Sprint B.1 — Path B)

Canonical path is **npm global install from built workspace** — see [install-macos.md](install-macos.md).

- [ ] From clean clone: follow **Canonical install (Path B)** in [smoke-test-macos.md](smoke-test-macos.md)
- [ ] Confirm `impact --version` matches released version
- [ ] Confirm `impact scan --no-submit -o ./reports` produces `impact-profile.json` and `impact-report.html`

*(Path A — standalone binary: add steps here when implemented.)*

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

**First packaged release:** complete this checklist once and link the evidence comment on [#27](https://github.com/moldovancsaba/impact/issues/27).
