# Ingest server — IMPACT profile submission (D1 MVP)

**Purpose:** optional **HTTP ingest** for anonymous `ImpactProfile` payloads so a **dashboard backend** can be built on real stored submissions. Implements [submission-contract.md](submission-contract.md).

**Code:** [`apps/ingest`](../apps/ingest/) (`@impact/ingest`, **private** workspace).

## What it does

- **POST** `Content-Type: application/json` — body is one **ImpactProfile** (`impact.v0.3`).
- **Validates** with `@impact/schemas` (`validateImpactProfile`).
- **Dedupes** on **raw body SHA-256** and **`run_id`** (UNIQUE in SQLite) — duplicates return **409** with existing `submission_id` per contract.
- **Persists** to **SQLite** (default `./data/ingest.db`, configurable).
- **Logs** one line per accept/duplicate at **info** (no full payload at info — see contract).

## Run

See [apps/ingest/README.md](../apps/ingest/README.md). Quick path:

```bash
npm run dev:ingest
```

## Relation to the dashboard tranche

**D1 / [#58](https://github.com/moldovancsaba/impact/issues/58)** — ingest, storage, dedupe, validation — is in this service.

**Read API & aggregates** — `GET` JSON under `/api/stats/*` reads validated profiles from SQLite, applies **privacy thresholds** (minimum bucket counts), and returns slice or full payloads. The static site can opt in via **`VITE_STATS_API_BASE`** when building [apps/web](../apps/web/). See [mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md).

### Stats `GET` endpoints

| Path | Purpose |
| ---- | ------- |
| `/api/stats/overview` | Submission count, global threshold flag, `min_bucket_count` |
| `/api/stats/full` | Full `impact.stats.v0.1` aggregate payload |
| `/api/stats/hardware` | Hardware slice (`impact.stats.hardware.v0.1`) |
| `/api/stats/tools` | Tools/runtimes slice |
| `/api/stats/models` | Models slice |

**Environment:** `IMPACT_STATS_MIN_BUCKET_COUNT` (default **5**) — minimum submissions globally and per published bucket; `IMPACT_STATS_CORS_ORIGIN` (default `*`) for browser access from another origin.

**CORS:** `OPTIONS` is answered with **204**; JSON responses include `Access-Control-Allow-*` headers.

## Hosted smoke (activation)

After deploy, verify (replace `INGEST_ORIGIN`):

```bash
curl -sS "$INGEST_ORIGIN/health"
curl -sS "$INGEST_ORIGIN/api/stats/overview" | head -c 400
curl -sS "$INGEST_ORIGIN/api/stats/full" | head -c 400
```

Expect **200** and JSON. Low submission count → `below_global_threshold: true` and empty dimension buckets is **correct**, not a failure.

Full checklist: [web-deploy-smoke.md](web-deploy-smoke.md) § *Live stats*; report-back list: [mlp-status-cto.md § Leadership view](mlp-status-cto.md#cto-acceptance-leadership-dashboard).

## Production notes

- Deploy behind **HTTPS**; set `IMPACT_SUBMIT_URL` on clients to the deployed base URL.
- Set **`IMPACT_INGEST_DB_PATH`** to a **persistent** volume; confirm **`better-sqlite3`** native binary for host **OS/arch** in the runtime image.
- Back up **`IMPACT_INGEST_DB_PATH`**; plan migrations as the storage model grows.
- **Signing / notarization** apply to **Mac CLI/DMG**, not this Node service.
