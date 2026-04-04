# IMPACT documentation

Start on the repo **[README.md](../README.md)** for value proposition, quick start, trust, and scope.

**When docs disagree:** [ssot-map.md](ssot-map.md) — which source wins (Project #2, issues, `current-state`, code).

## For users

| Document | Why read it |
| -------- | ----------- |
| [web.md](web.md) | **Public web shell** (`apps/web`) — multi-page site, install/run/submit/data IA, profile preview |
| [web-deploy-smoke.md](web-deploy-smoke.md) | **Post-deploy checklist** — six URLs, nav, copy truth, profile parse |
| [install-macos.md](install-macos.md) | **Path C** (npm) + **Path B** (source) + **Path D** (DMG) install and outputs |
| [macos-distribution.md](macos-distribution.md) | **macOS packaging decision** — npm vs `.app` / DMG, signing follow-ups |
| [privacy-for-users.md](privacy-for-users.md) | **Plain-language** trust: what is collected, what is not, consent |
| [privacy-policy.md](privacy-policy.md) | Formal **privacy policy** |
| [support-matrix.md](support-matrix.md) | **macOS / Linux / Windows** behaviour and expectations |
| [current-state.md](current-state.md) | **Operational truth** + **versioning SSOT** (tag, npm, `schema_version`, CLI) |
| [user-expectations-mvp.md](user-expectations-mvp.md) | **Honest MVP scope** — local vs crowd stats, install vs DMG |

## Programme & product

| Document | Why read it |
| -------- | ----------- |
| [ssot-map.md](ssot-map.md) | **Authority routing** — Project Status vs issues vs `current-state` vs code |
| [mlp.md](mlp.md) | **Minimum Loveable Product** — post-MVP phases M1–M6, priorities, constraints |
| [mlp-status-cto.md](mlp-status-cto.md) | **MLP CTO assessment** — what shipped, #34 gate, next developer tasks |
| [mlp-execution.md](mlp-execution.md) | **MLP execution plan** — Gate #34, tasks, web spine, order |
| [mlp-next-delivery-tranche.md](mlp-next-delivery-tranche.md) | **Next tranche** — dashboard ingest→API→web (**#58–#62**); macOS packaging **#63–#66** |
| [product.md](product.md) | **Product definition**, v0.x scope, principles |
| [project-management.md](project-management.md) | **Project #2** column semantics and contributor workflow |
| [submission-contract.md](submission-contract.md) | Optional **HTTP submission** (normative) |

## Builders & maintainers

| Document | Why read it |
| -------- | ----------- |
| [architecture.md](architecture.md) | Code layout and data flow |
| [architect-handoff.md](architect-handoff.md) | Architect onboarding summary |
| [release-checklist.md](release-checklist.md) | Maintainer **release** steps |
| [npm-publish.md](npm-publish.md) | Publish `@impact/*` to npm (order, login, dry-run) |
| [smoke-test-macos.md](smoke-test-macos.md) | Fresh-mac **QA** |
| [docs-alignment-after-packaging.md](docs-alignment-after-packaging.md) | **D6** — reconcile README/install after packaging |

## Reference

| Document | Why read it |
| -------- | ----------- |
| [schema-semantics-v0.3.md](schema-semantics-v0.3.md) | **`status`** vs **`presence`** vs provenance |
| [confidence-rules.md](confidence-rules.md) | Deterministic **confidence** rules |

## Assets

| Path | Purpose |
| ---- | ------- |
| [assets/impact-report-sample.png](assets/impact-report-sample.png) | README sample **screenshot** (regenerate when UI changes) |
| [assets/impact-profile-redacted.excerpt.json](assets/impact-profile-redacted.excerpt.json) | **Redacted** JSON excerpt for docs |

Regenerate the screenshot (from repo root, after `npm run build`):

```bash
npm run impact -- scan --no-submit -o /tmp/impact-shot
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --window-size=1200,900 \
  --screenshot=docs/assets/impact-report-sample.png \
  "file:///tmp/impact-shot/impact-report.html"
```

Adjust the Chrome path on non-macOS hosts.
