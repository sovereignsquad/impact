# I.M.P.A.C.T. — architecture

**I.M.P.A.C.T.** v0.1 is a **TypeScript / Node.js** monorepo. A single **orchestrator** in `@impact/core` runs modular scanners, merges a typed profile, validates it against `@impact/schemas`, then `@impact/reporting` and `@impact/submission` handle exports and optional upload.

## Repository layout

```text
apps/cli                 CLI entry (`impact` command)
packages/core            Scan orchestration, merge, readiness hints
packages/schemas         Zod schema + types (`impact.v0.1`)
packages/scanner-host    OS / hardware coarse signals
packages/scanner-runtimes Ollama, MLX (pip), …
packages/scanner-tools   Curated PATH allowlist
packages/scanner-models  Models via runtime APIs (e.g. Ollama tags)
packages/privacy         Salt file, privacy block, denylist constants
packages/reporting       `impact-profile.json`, `impact-report.html`
packages/submission      Opt-in POST client, local receipt log
docs/                    Product spec, privacy policy, this file
fixtures/                Sample validated JSON profiles
scripts/                 Automation placeholders
```

## Data flow

```mermaid
flowchart LR
  CLI[apps/cli]
  CORE[@impact/core]
  H[scanner-host]
  R[scanner-runtimes]
  T[scanner-tools]
  M[scanner-models]
  P[@impact/privacy]
  S[@impact/schemas]
  REP[@impact/reporting]
  SUB[@impact/submission]

  CLI --> CORE
  CORE --> H
  CORE --> R
  CORE --> T
  CORE --> M
  CORE --> P
  CORE --> S
  CLI --> REP
  CLI --> SUB
  CORE --> REP
```

1. **Load/create salt** (`~/.impact/salt`) via `@impact/privacy`.  
2. **Parallel scans:** host, runtimes, tools.  
3. **Model enumeration** depends on runtime signals (e.g. Ollama reachability).  
4. **Merge + validate** → `ImpactProfileV01`.  
5. **Optional** coarse readiness string (conservative, not a benchmark).  
6. **Write** JSON + HTML; **optional** guided submission.

## Scanner contract

Scanners are plain modules exporting async functions that return structured slices. They **must not throw** for benign failures (timeouts, missing binaries); they return empty or partial data with `confidence: "unknown"` where appropriate.

## Privacy boundaries

- No raw hardware UUIDs or serials.  
- Fingerprint = **SHA-256** of canonical JSON of coarse host fields + **local salt**.  
- Submission requires **explicit** CLI confirmation; endpoint from `IMPACT_SUBMIT_URL`.

## Extension points

- **New runtime:** add `scanner-runtimes` detector + `scanner-models` enumerator.  
- **New tool:** extend `TOOL_ALLOWLIST` in `scanner-tools` (curated only).  
- **Schema bump:** new `schema_version` and Zod module alongside v0.1.

## Build & run

```bash
npm install
npm run build
npm run impact -- scan --no-submit -o ./reports
```

See [product.md](product.md) for MVP scope and [privacy-policy.md](privacy-policy.md) for collection boundaries.
