# macOS smoke test — IMPACT (release candidate)

**Purpose:** Prove the **canonical Path B** install works on a **clean** macOS machine (no prior clone, no guessed steps).

**Non-goals:** This test does **not** enable submission unless you explicitly add submission steps (default is `--no-submit`).

## Environment

- macOS 13+ (Apple Silicon or Intel)
- [Node.js 20+](https://nodejs.org/) (`node -v`)
- [Git](https://git-scm.com/)

## Canonical install (Path B — npm global from built repo)

Sprint B.1 locks **one** primary path: **clone → reproducible install → build → global CLI → scan**.

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
npm ci
npm run build
npm install -g ./apps/cli
```

Verify CLI:

```bash
impact --version
```

Expected: version string from `@impact/cli` (e.g. **`0.3.0`** on **v0.3.0** tag).

## Run scan (no submission)

```bash
mkdir -p ~/impact-smoke-out
impact scan --no-submit -o ~/impact-smoke-out
```

## Acceptance checks

| Check | How |
| ----- | --- |
| JSON written | `test -f ~/impact-smoke-out/impact-profile.json` |
| HTML written | `test -f ~/impact-smoke-out/impact-report.html` |
| No silent upload | Did **not** set `IMPACT_SUBMIT_URL`; used `--no-submit` |
| Docs match commands | Same sequence as [install-macos.md](install-macos.md) and README Quick start |

Open the report:

```bash
open ~/impact-smoke-out/impact-report.html
```

## Handoff evidence (paste in #27 or Release)

Record:

1. `node -v` and `npm -v`
2. `impact --version`
3. `ls -la ~/impact-smoke-out/impact-profile.json ~/impact-smoke-out/impact-report.html`
4. Optional: one-line `jq .schema_version ~/impact-smoke-out/impact-profile.json` (expect `impact.v0.3`)

## Teardown

```bash
npm uninstall -g @impact/cli
rm -rf ~/impact-smoke-out
# optional: rm -rf impact clone
```

## Verification log (maintainers)

Record each **fresh-clone** Path B run here after `main` changes that affect install or CLI output.

| Date | Clone source | `node -v` | `impact --version` | `schema_version` (from profile) | Result |
| ---- | ------------ | --------- | ------------------ | --------------------------------- | ------ |
| 2026-04-03 | Fresh `git clone` of `https://github.com/moldovancsaba/impact` @ `55f01a6` (`main`) | v25.8.2 | `0.1.0` | `impact.v0.3` | PASS — pre-release CLI semver |

## Future: published npm package

When `@impact/cli` is published to the registry, add a **second** subsection here for `npm install -g @impact/cli` and mark it canonical in [install-macos.md](install-macos.md) — until then, **global install from `./apps/cli` after build** is the only supported Path B.
