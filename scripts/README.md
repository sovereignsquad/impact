# Scripts

Project automation lives here (e.g. [`publish-npm-packages.sh`](publish-npm-packages.sh), GitHub issue body helpers under [`gh-issue-bodies/`](gh-issue-bodies/)). **Authority map:** [docs/ssot-map.md](../docs/ssot-map.md). **Versioning:** [current-state.md](../docs/current-state.md) § Versioning. Quick local CLI run after build:

```bash
npm ci
npm run build
npm run impact -- scan --no-submit -o ./reports
```

**Ingest + real submit (no TTY):** after `npm run build`, run [`local-e2e-submit.sh`](local-e2e-submit.sh) — starts **`@impact/ingest`** on port **19887**, runs **`impact scan --yes-submit`** with **`IMPACT_SUBMIT_NON_INTERACTIVE=1`**, prints **`/api/stats/overview`**.

**Hosted ingest + Vercel upstream:** [`deploy-ingest-fly-and-wire-vercel.sh`](deploy-ingest-fly-and-wire-vercel.sh) (Fly deploy + **`IMPACT_INGEST_UPSTREAM`** + **`vercel --prod`**) when **`flyctl`** is authenticated; or GitHub Actions [`.github/workflows/deploy-ingest-fly.yml`](../.github/workflows/deploy-ingest-fly.yml) then [`vercel-wire-ingest-upstream.sh`](vercel-wire-ingest-upstream.sh) `https://<app>.fly.dev`. Config: root [`fly.ingest.toml`](../fly.ingest.toml).
