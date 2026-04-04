# Publishing `@impact/cli` to npm

**Audience:** maintainers executing [#34](https://github.com/moldovancsaba/impact/issues/34).

**Version SSOT:** before publishing, confirm tag, npm semver, `schema_version`, and CLI version match [current-state.md](current-state.md) — **§ Versioning (SSOT)**. **Broader authority map:** [ssot-map.md](ssot-map.md).

## Prerequisites

1. **npm account** with permission to publish the **`@impact`** scope. If the org does not exist, create it at [npmjs.com](https://www.npmjs.com/) and add your user.
2. **Login:** `npm login`
3. **Verify:** `npm whoami`

## What gets published

Ten workspace packages (same **0.3.0** semver), in order:

`@impact/schemas` → `@impact/privacy` → scanners → `@impact/core` → `@impact/reporting` → `@impact/submission` → `@impact/cli`

Each tarball includes only **`dist/`** (see `files` in each `package.json`).

## Commands

From repository root, after merging to `main` and bumping versions if needed:

```bash
npm ci
npm run verify:release
npm run publish:npm:dry-run   # sanity — inspect each package contents
npm run publish:npm           # real publish (no dry-run)
```

Script: [`scripts/publish-npm-packages.sh`](../scripts/publish-npm-packages.sh).

## After publish

1. Confirm: `npm view @impact/cli version`
2. Run the **registry** section in [smoke-test-macos.md](smoke-test-macos.md) on a clean machine (or clean global prefix).
3. Update [CHANGELOG.md](../CHANGELOG.md) if you cut a new version.
4. GitHub **Release** notes may link to `https://www.npmjs.com/package/@impact/cli`.

## Version bumps

Internal `@impact/*` dependencies are pinned to the **same** version as the workspace (e.g. `0.3.0`). For **0.3.1**, bump **all** `package.json` versions and internal `dependencies` in one commit, then publish in order again.
