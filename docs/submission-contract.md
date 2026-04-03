# Submission contract — IMPACT profile ingest (v0.x)

**Status:** normative for client behaviour in this repository. Server implementations should match this document or explicitly version-diverge.

**Related:** [privacy-policy.md](privacy-policy.md), `packages/submission`, issue [#13](https://github.com/moldovancsaba/impact/issues/13).

---

## Purpose

Define how the **optional** anonymous profile submission works over HTTP when `IMPACT_SUBMIT_URL` is set and the user has **explicitly consented** in the CLI.

---

## Request

| Aspect | Rule |
| ------ | ---- |
| Method | `POST` |
| URL | Value of `IMPACT_SUBMIT_URL` (HTTPS recommended in production) |
| Headers | `Content-Type: application/json` |
| Body | **Exactly** one JSON document: an `ImpactProfile` validating `impact.v0.2` schema (`packages/schemas`). No wrapping envelope unless a future version bumps this doc. |

### No-PII guarantee on the wire

The body **must** conform to the published schema and privacy rules:

- No raw hardware serial numbers or vendor UUIDs  
- No usernames, hostnames, or file contents  
- Fingerprint is **salted coarse hash** only, as emitted by the scanner  

Servers **must not** log full payloads at info level in shared systems without policy; clients **must not** add fields outside the schema without a schema bump.

---

## Response

| HTTP status | Meaning | Client behaviour |
| ----------- | ------- | ---------------- |
| `2xx` | Accepted | Parse body if JSON; extract id (below). Treat as success. |
| `400` | Bad payload | Do not retry without user intervention; local files unchanged. |
| `401` / `403` | Auth / forbidden | No retry unless credentials are added (out of scope for default client). |
| `409` | Conflict / duplicate | See **Duplicate handling**. |
| `429` | Rate limited | Retry with backoff (below). |
| `5xx` | Server error | Retry with backoff; local files unchanged. |

### Response body (recommended JSON)

```json
{
  "submission_id": "string",
  "received_at": "2026-04-03T12:00:00.000Z"
}
```

- **`submission_id`** (required): opaque string, stable for idempotency references.  
- **`id`** may be accepted as an alias for `submission_id` for compatibility.  
- If body is not JSON, client may synthesise `submission_id` from timestamp (current behaviour) — servers should prefer returning JSON.

---

## Client timeout policy

| Phase | Default |
| ----- | ------- |
| Connect + transfer | Use `fetch` default / platform; **recommended** upper bound **15s** total per attempt for v0.x (tighten in code when implemented). |

Until explicit timeout is wired in `packages/submission`, environments rely on system defaults — treat as **provisional**.

---

## Retry semantics

| Condition | Action |
| --------- | ------ |
| Network error, `408`, `429`, `5xx` | At most **3** attempts with exponential backoff (e.g. 0.5s, 2s, 8s) — **implementation follow-up** in submission package. |
| `400` | No retry. |
| Success | Stop; append **local receipt** (see below). |

---

## Duplicate handling

- Servers **may** deduplicate by `run_id` or content hash; if they return `409`, body should explain whether the prior `submission_id` stands.  
- Clients **must not** delete or alter local `impact-profile.json` on duplicate; they should surface the server message.

---

## Local receipt

On success or final failure after retries, the CLI may append a line to `~/.impact/submission-receipts.log` (see `packages/submission`). Receipts are **local audit**, not telemetry.

---

## Versioning

- **`schema_version`** inside the profile (`impact.v0.2` today) is independent of this HTTP contract revision.  
- Breaking HTTP changes should bump a `X-Impact-Contract-Version` header **or** a path version — not yet required for v0.x.

---

## Acceptance

This document satisfies Sprint A exit criteria for “submission behaviour fully documented” alongside the client implementation. Code-level timeout/retry enforcement may trail by one PR; track in issue #13.
