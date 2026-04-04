# Scripts

Project automation lives here (e.g. [`publish-npm-packages.sh`](publish-npm-packages.sh), GitHub issue body helpers under [`gh-issue-bodies/`](gh-issue-bodies/)). **Authority map:** [docs/ssot-map.md](../docs/ssot-map.md). **Versioning:** [current-state.md](../docs/current-state.md) § Versioning. Quick local CLI run after build:

```bash
npm ci
npm run build
npm run impact -- scan --no-submit -o ./reports
```
