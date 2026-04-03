# I.M.P.A.C.T.

**IMPACT** = **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est** — a programme for a **fully sovereign** evaluation stack (**system + tool + LLM**), evolving toward a **rigorous benchmark system** for serious, global use.

**What ships in this repo today (v0.x):** a **privacy-first local scanner** that inventories a machine’s AI-relevant environment (OS, coarse hardware, runtimes, curated tools, discovered models), writes **HTML + JSON** reports, and supports **optional, explicit-consent** anonymous submission. That discovery layer **feeds** later benchmark phases described in [docs/product.md](docs/product.md).

- **Repository:** [github.com/moldovancsaba/impact](https://github.com/moldovancsaba/impact)  
- **License:** [MIT](LICENSE)  
- **Doctrine / planning (SSOT):** [GitHub Issues](https://github.com/moldovancsaba/impact/issues) + [Project board](https://github.com/users/moldovancsaba/projects/2/views/1)  
- **Product spec:** [docs/product.md](docs/product.md)  
- **Architect handoff:** [docs/architect-handoff.md](docs/architect-handoff.md)  
- **Privacy:** [docs/privacy-policy.md](docs/privacy-policy.md)  
- **Architecture:** [docs/architecture.md](docs/architecture.md)

## Project board (roadmap & backlog)

Planning is tracked on **[Impact — roadmap & backlog](https://github.com/users/moldovancsaba/projects/2/views/1)**. Use GitHub Issues for discussion; use the board for priority and status.

Details: [docs/project-management.md](docs/project-management.md).

## Quick start

Requirements: **Node.js 20+**.

```bash
git clone https://github.com/moldovancsaba/impact.git
cd impact
npm install
npm run build
npm run impact -- scan --no-submit -o ./reports
```

Open `reports/impact-report.html` locally. JSON profile: `reports/impact-profile.json`.

### Optional submission

Set an endpoint and run **without** `--no-submit` on a TTY:

```bash
export IMPACT_SUBMIT_URL="https://example.com/api/ingest"
npm run impact -- scan -o ./reports
```

You will be prompted; you must confirm the payload. If `IMPACT_SUBMIT_URL` is unset, the client refuses to send (no silent network).

## Monorepo packages

| Package | Role |
| ------- | ---- |
| `@impact/cli` | `impact` command |
| `@impact/core` | Orchestration + merge + readiness hints |
| `@impact/schemas` | `impact.v0.1` Zod schema |
| `@impact/scanner-host` | Host / OS signals |
| `@impact/scanner-runtimes` | Ollama, MLX, … |
| `@impact/scanner-tools` | Allowlisted tools on `PATH` |
| `@impact/scanner-models` | Models from runtimes |
| `@impact/privacy` | Salt + privacy metadata |
| `@impact/reporting` | HTML + JSON writers |
| `@impact/submission` | Opt-in HTTP client + receipt log |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation index

| Document | Purpose |
| -------- | ------- |
| [docs/product.md](docs/product.md) | Programme + v0.x MVP definition |
| [docs/architect-handoff.md](docs/architect-handoff.md) | Architect onboarding & delivery summary |
| [docs/privacy-policy.md](docs/privacy-policy.md) | Data handling & submission |
| [docs/architecture.md](docs/architecture.md) | Code layout & data flow |
| [docs/project-management.md](docs/project-management.md) | Board = kanban; issues = SSOT |
| [CHANGELOG.md](CHANGELOG.md) | Release notes |
| [fixtures/baseline-profile.sample.json](fixtures/baseline-profile.sample.json) | Example validated `impact.v0.1` profile |

## Local delivery path

Maintainers may keep a working copy under `/Users/Shared/projects/impact` (or any path); the GitHub repo remains the source of truth.
