# I.M.P.A.C.T. v0.1 — product definition

**I.M.P.A.C.T.** (this repository) is a **privacy-first local scanner** that inventories a machine’s AI-relevant environment: installed runtimes, curated tools, and discovered models. It produces a **shareable anonymous profile** (JSON + HTML) and supports **optional, explicit-consent** submission.

This document is the canonical product spec for **v0.1 / MVP**. Planning tickets live on the [GitHub Project board](https://github.com/users/moldovancsaba/projects/2/views/1).

## MVP objective

Answer only:

> What AI-relevant environment does this computer have, and what local/cloud AI runtimes, tools, and models are available on it?

**In scope:** discovery and export. **Out of scope:** benchmarking, auto-fix, accounts, heavy agents, continuous telemetry.

## Recommended form (MVP)

- **Primary:** local **CLI** (desktop-first, developer-friendly).
- **Outputs:** single **HTML report** + **anonymised JSON** in the output directory.
- **Submission:** opt-in only, with preview of the exact payload.

Do **not** start with: cloud-first architecture, mandatory accounts, invasive permissions, background daemons, or auto-repair.

## Product principles

1. **Local-first** — scan works without network access.
2. **Explicit consent** — nothing leaves the machine without clear opt-in.
3. **Privacy by design** — no raw serial numbers, hardware UUIDs, usernames, hostnames, file contents, or environment secrets.
4. **Explainable output** — state what was found and confidence (detected / inferred / unknown).
5. **Conservative detection** — prefer “unknown” over fabrication.
6. **Low-friction install** — run a scan in minutes.

## MVP functional areas

| Area | Description |
| ---- | ----------- |
| Host | OS, arch, chip, memory, coarse disk, GPU hints where safe, machine class, salted coarse fingerprint |
| Runtimes | e.g. Ollama (install, version, reachability), MLX tooling where feasible |
| Tools | **Allowlist only** — editors, agents, runtime UIs, terminal tools |
| Models | Per supported runtime (e.g. Ollama API); locality and quantisation when exposed |
| Privacy & export | Denylist, anonymisation, JSON + HTML |
| Submission | Preview payload, confirm, optional POST to configured endpoint |

## Output schema

The machine-readable profile is versioned (`schema_version: "impact.v0.1"`). See `packages/schemas` and [fixtures/baseline-profile.sample.json](../fixtures/baseline-profile.sample.json).

## Roadmap phases (high level)

| Phase | Goal |
| ----- | ---- |
| **0** | Foundation — monorepo, schema, contracts, fixtures, privacy policy |
| **1** | MVP discovery scanner — host, runtimes, tools, models, reports, consent |
| **2** | Readiness hints — coarse rules, no benchmarks |
| **3** | Atomic benchmark foundation |
| **4** | Capability benchmarks |

## Definition of MVP done

A non-technical early adopter can:

1. Run the tool locally.
2. Complete a scan without deep AI knowledge.
3. See their AI-relevant environment summarised.
4. See detected models and tools (where supported).
5. Export a readable report.
6. Optionally submit an anonymous profile with informed consent.

## Command surface (v0.1)

```bash
impact scan
impact scan --no-submit
impact scan -o ./reports
```

(`impact export` / `impact submit` may be added later; `scan` is the primary flow for MVP.)

## Internal product statement

> I.M.P.A.C.T. v0.1 is a privacy-first local scanner that inventories a machine’s AI-relevant environment, installed runtimes, tools, and discovered models, then generates a shareable anonymous profile and optional consent-based submission.
