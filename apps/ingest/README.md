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

## Endpoints

| Method | Path | Purpose |
| ------ | ---- | ------- |
| `GET` | `/health`, `/healthz` | Liveness |
| `POST` | `/`, `/ingest` | Accept profile (see contract) |

## CLI submission

```bash
export IMPACT_SUBMIT_URL=http://127.0.0.1:8787/
impact scan --yes-submit -o ./reports
```

(Requires consent flow / `SUBMIT` unless `--yes-submit` for automation.)

## Docs

[ingest-server.md](../../docs/ingest-server.md)
