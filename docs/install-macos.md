# Install and run on macOS

**MVP v0.3.0** supports two **supported** paths:

| Path | When |
| ---- | ---- |
| **Path C — npm registry** | **Preferred** once `@impact/cli` is published (lowest friction). |
| **Path B — source** | Always works: clone, build, `npm install -g ./apps/cli`. |

Maintainer publish flow: [npm-publish.md](npm-publish.md). Binary spike: [#38](https://github.com/moldovancsaba/impact/issues/38).

## Requirements

- **macOS** 13+ recommended  
- **Node.js 20+** ([nodejs.org](https://nodejs.org/) or `brew install node@20`)  
- **Git** (required only for **Path B**)

---

## Path C — npm registry (preferred)

**No clone.** Requires `@impact/cli` to exist on the public registry (see [npmjs.com/package/@impact/cli](https://www.npmjs.com/package/@impact/cli)).

```bash
npm install -g @impact/cli
mkdir -p ./reports
impact scan --no-submit -o ./reports
open ./reports/impact-report.html
```

If `npm install` returns **404**, the package is not published yet — use **Path B** below.

### Troubleshooting

| Symptom | Likely cause | What to try |
| ------- | ------------ | ----------- |
| `npm ERR! 404 Not Found` for `@impact/cli` | Package not on the registry yet | Use **Path B**; track [#34](https://github.com/moldovancsaba/impact/issues/34). |
| `EACCES` / permission errors on `npm install -g` | Global prefix not writable | Use a [Node version manager](https://github.com/nvm-sh/nvm) or configure `npm prefix` to a user-owned directory (see [npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)). |
| `command not found: impact` after global install | `PATH` missing npm’s global bin | Re-open the shell, or add the directory printed by `npm bin -g` to `PATH`. |
| Scan writes files but HTML looks sparse | Runtimes offline / no models | Start local runtimes (e.g. Ollama) and re-run; see **Suggested next steps** in `impact-report.html`. |

**Outputs:** `./reports/impact-profile.json`, `./reports/impact-report.html`

**Submission:** default scan does not upload. Optional: [submission-contract.md](submission-contract.md).

**Support:** [support-matrix.md](support-matrix.md) and the HTML report footer.

---

## Path B — build from clone

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

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
git checkout v0.3.0
npm ci
npm run build
npm install -g ./apps/cli
```

Release notes: [**v0.3.0**](https://github.com/moldovancsaba/impact/releases/tag/v0.3.0).

---

## Secondary: run without global install (repo developers only)

From repo root after `npm ci` and `npm run build`:

```bash
npm run impact -- scan --no-submit -o ./reports
```

**Onboarding and releases** use **Path C** (when live) or **Path B**, not this shortcut.

---

## Versioning

`impact --version` reads `@impact/cli`’s `package.json`. For audits, record **npm version**, **git tag**, or **commit SHA**.

## Release QA

- [Release checklist](release-checklist.md)  
- [macOS smoke test](smoke-test-macos.md)  
- [npm publish (maintainers)](npm-publish.md)
