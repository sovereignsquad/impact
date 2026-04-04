# @impact/ingest — submission ingest server (D1 MVP)

HTTP service that implements [submission-contract.md](../../docs/submission-contract.md): **POST** JSON `ImpactProfile`, **validate**, **dedupe** (`payload_sha256` + `run_id`), **SQLite** persistence.

**Private** workspace — not published to npm.

## Run locally

From repo root (after `npm ci` and build):

```bash
npm run build -w @impact/schemas && npm run build -w @impact/ingest
npm run start -w @impact/ingest
```

Or: `npm run dev:ingest`

Default: `http://127.0.0.1:8787/`, DB at `./data/ingest.db` (gitignored).

## Environment

| Variable | Default | Purpose |
| -------- | ------- | ------- |
| `PORT` | `8787` | Listen port |
| `HOST` | `127.0.0.1` | Bind address |
| `IMPACT_INGEST_DB_PATH` | `<cwd>/data/ingest.db` | SQLite file |
| `IMPACT_STATS_MIN_BUCKET_COUNT` | `5` | Min submissions for publishing aggregates (global + per bucket) |
| `IMPACT_STATS_CORS_ORIGIN` | `*` | `Access-Control-Allow-Origin` for dashboard / web |

## Endpoints

| Method | Path | Purpose |
| ------ | ---- | ------- |
| `GET` | `/health`, `/healthz` | Liveness |
| `POST` | `/`, `/ingest` | Accept profile (see contract) |
| `GET` | `/api/stats/overview` | Overview (counts + threshold metadata) |
| `GET` | `/api/stats/full` | Full aggregate JSON |
| `GET` | `/api/stats/hardware`, `/api/stats/tools`, `/api/stats/models` | Slices |
| `OPTIONS` | `*` | CORS preflight |

## CLI submission

```bash
export IMPACT_SUBMIT_URL=http://127.0.0.1:8787/
impact scan --yes-submit -o ./reports
```

(Requires consent flow / `SUBMIT` unless `--yes-submit` for automation.)

## Docs

[ingest-server.md](../../docs/ingest-server.md)
