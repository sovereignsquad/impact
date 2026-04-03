# Install and run on macOS

**MVP v0.3.0 — canonical path (Path B):** *npm global install of the built CLI from a clean clone* — one primary method until a registry package or standalone binary ships ([#34](https://github.com/moldovancsaba/impact/issues/34), [#38](https://github.com/moldovancsaba/impact/issues/38)).

Do not mix multiple “official” flows; alternatives below are **secondary** only.

## Requirements

- **macOS** 13+ recommended  
- **Node.js 20+** ([nodejs.org](https://nodejs.org/) or `brew install node@20`)  
- **Git**

## Canonical install and run (Path B)

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
npm ci
npm run build
npm install -g ./apps/cli
mkdir -p ./reports
impact scan --no-submit -o ./reports
open ./reports/impact-report.html
```

### Optional: pin a released version

To match a **tagged** MVP build instead of moving `main`:

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
git checkout v0.3.0
npm ci
npm run build
npm install -g ./apps/cli
```

Use the latest [**v0.3.0** release](https://github.com/moldovancsaba/impact/releases/tag/v0.3.0) notes when auditing installs.

**Outputs (required for release acceptance):**

- `./reports/impact-profile.json`
- `./reports/impact-report.html`

**Submission:** not used above. Default scan does not upload anything. Optional flow: [submission-contract.md](submission-contract.md).

**Support boundaries:** [support-matrix.md](support-matrix.md) and the HTML report footer.

## Secondary: run without global install (repo developers only)

From repo root after `npm ci` and `npm run build`:

```bash
npm run impact -- scan --no-submit -o ./reports
```

Use only when you already have a dev clone and prefer not to touch global `node_modules`. **Onboarding and releases use the canonical Path B block above.**

## Versioning

`impact --version` comes from `@impact/cli` (`apps/cli/package.json`). For audits, record **git tag** or **commit SHA** with the version.

## Release QA

- [Release checklist](release-checklist.md)  
- [macOS smoke test](smoke-test-macos.md)

## Future (not canonical yet)

- **Published package:** `npm install -g @impact/cli` from npm — document here when live.  
- **Standalone binary (Path A):** document when implemented.
