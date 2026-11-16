# Project board review and manual movement / Scrum journal

Reviewed: 2026-11-16 UTC. Repository: sovereignsquad/impact.

Canonical board: [project board](https://github.com/orgs/sovereignsquad/projects/4). **The board is the owner's source of truth and is read-only. Never add, remove, reorder or move cards or edit project fields.** This file records observations and conditional proposals for manual owner decisions only.

## Verified coverage and limitations

- Repository collection: 82 entries, including 81 issues and 1 pull requests; 47 issues are open.
- Board: all 81 returned items were read; totalCount matches the captured item count.
- Linked issue-state / Done-status discrepancies: 4. Open issues absent from this board snapshot: 0. Absence here does not prove absence from every board and does not authorize creating a card.
- Exact title-and-body duplicate groups among open issues: 0. Similar titles alone were not treated as duplicates.
- Issue and board reads succeeded. No access failure was observed for these captured collections. No board write was attempted.
- This is a documentation-only review. No runtime suite, production flow, user data mutation, external message, dependency upgrade or deployment action was performed. Source presence and previous Done status are not fresh acceptance evidence.

## Source observations and work clusters

### Documentation assumptions superseded by source

The MVP expectations page says no aggregation service or ingest pipeline exists in the repository. Current source contains SQLite HTTP ingest, schema validation/deduplication, aggregate statistics, and Mongo-backed serverless ingest/statistics helpers. Treat that absence claim as stale; do not recreate the pipeline from scratch. Its presence does not establish hosted activation, actual aggregate data, privacy threshold correctness or deployment readiness.

### Release and deployment work remains gated

Open #34 concerns npm publication, #58 dashboard ingest activation and #65 signing/notarization. Existing scripts or historical scanner delivery do not fulfill their external acceptance evidence. Keep registry install smoke, durable hosted storage, configured service availability and signing credentials as independent verification gates. No publishing, submission, scan, deployment or credential setup was performed here.

### Preserve discovery versus evaluation scope

The scanner inventories local capabilities; it is not a validated benchmark programme. Modern model APIs can supply discovery signals behind existing adapters but do not justify a capability score without repeatable workload/evaluation evidence. Future benchmark work should retain provenance, explicit unknowns and versioned profile contracts.

### Privacy and operational ideas need bounded experiments

Historical trends, dataset exports and anti-abuse proposals remain separate product decisions. Reuse existing schema/aggregate/consent boundaries and verify minimum bucket behavior before any release. Do not interpret an idea-bank column or modern tooling availability as authorization to collect new data.

Tracking #83 was created after this issue snapshot. This documentation-only change was checked for complete snapshot coverage, valid source paths and whitespace; no runtime suite was run.

Inspected sources: [README.md](../README.md), [docs/current-state.md](../docs/current-state.md), [docs/user-expectations-mvp.md](../docs/user-expectations-mvp.md), [apps/ingest/src/http-server.ts](../apps/ingest/src/http-server.ts), [apps/ingest/src/handle-submit.ts](../apps/ingest/src/handle-submit.ts), [api/stats-core.ts](../api/stats-core.ts), [api/ingest-core.ts](../api/ingest-core.ts), [api/_mongo.ts](../api/_mongo.ts). Documentation paths and register coverage were checked before publication. No new technology is selected or installed by this assessment.

## Per-card review register

A destination is a proposal, never an executed move. Historical closed cards stay historical; migrated or not-planned closures do not prove feature delivery. Open work remains subject to its issue's acceptance criteria and owner decision.

| Issue / card | Title | Issue state / reason | Observed current column | Proposed destination / next evidence | Owner decision / manual execution |
| --- | --- | --- | --- | --- | --- |
| [#66](https://github.com/sovereignsquad/impact/issues/66) | IMPACT P1: macOS M4 — DMG packaging (after M1–M3) | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#74](https://github.com/sovereignsquad/impact/issues/74) | IMPACT P2: Ideabank — Public dataset export / research snapshot | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#73](https://github.com/sovereignsquad/impact/issues/73) | IMPACT P2: Ideabank — Release channel governance | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#70](https://github.com/sovereignsquad/impact/issues/70) | IMPACT P2: Ideabank — Enterprise / self-hosted deployment pack | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#1](https://github.com/sovereignsquad/impact/issues/1) | IMPACT P0: Product doctrine — Industrial Multi-Platform Agent Connector Test | closed / completed | In Progress (NOW) | Owner review required; do not choose a target until closure/migration and acceptance evidence are reconciled. | Pending / not executed |
| [#2](https://github.com/sovereignsquad/impact/issues/2) | IMPACT P0: CI/CD, lint, and release hygiene | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#3](https://github.com/sovereignsquad/impact/issues/3) | IMPACT P1: Architecture and operations SSOT in-repo | closed / completed | In Progress (NOW) | Owner review required; do not choose a target until closure/migration and acceptance evidence are reconciled. | Pending / not executed |
| [#4](https://github.com/sovereignsquad/impact/issues/4) | IMPACT P1: Contributor Covenant code of conduct | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#5](https://github.com/sovereignsquad/impact/issues/5) | IMPACT P1: Discussions and private vulnerability reporting | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#6](https://github.com/sovereignsquad/impact/issues/6) | IMPACT P0: Monorepo foundation and schema-first delivery | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#7](https://github.com/sovereignsquad/impact/issues/7) | IMPACT P0: Host scanner — coarse machine and OS signals | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#8](https://github.com/sovereignsquad/impact/issues/8) | IMPACT P0: Runtime scanner — Ollama, MLX, and adapters | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#9](https://github.com/sovereignsquad/impact/issues/9) | IMPACT P1: AI tool allowlist scanner (PATH and versions) | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#10](https://github.com/sovereignsquad/impact/issues/10) | IMPACT P0: Model inventory across supported runtimes | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#11](https://github.com/sovereignsquad/impact/issues/11) | IMPACT P0: Privacy pipeline — salt, denylist, consent, submission gate | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#12](https://github.com/sovereignsquad/impact/issues/12) | IMPACT P0: JSON and offline HTML reporting | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#13](https://github.com/sovereignsquad/impact/issues/13) | IMPACT P1: Anonymous submission client and server contract | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#14](https://github.com/sovereignsquad/impact/issues/14) | IMPACT P1: Readiness hints without benchmark claims | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#15](https://github.com/sovereignsquad/impact/issues/15) | IMPACT P0: Automated tests, fixtures, and failure isolation | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#16](https://github.com/sovereignsquad/impact/issues/16) | IMPACT P0: Programme phases 0–4 — discovery through capability benchmarks | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#17](https://github.com/sovereignsquad/impact/issues/17) | IMPACT P0: Separate operational state from discovery semantics in schema | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#18](https://github.com/sovereignsquad/impact/issues/18) | IMPACT P0: Define deterministic confidence assignment rules | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#19](https://github.com/sovereignsquad/impact/issues/19) | IMPACT P0: Add report rendering tests for degraded and partial states | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#20](https://github.com/sovereignsquad/impact/issues/20) | IMPACT P0: Expand fixture scenario matrix and invalid-fixture rejection | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#21](https://github.com/sovereignsquad/impact/issues/21) | IMPACT P0: Implement submission timeout, bounded retry, and local receipt | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#22](https://github.com/sovereignsquad/impact/issues/22) | IMPACT P1: Add explicit submission payload preview artifact | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#23](https://github.com/sovereignsquad/impact/issues/23) | IMPACT P1: macOS-first packaging and release path | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#24](https://github.com/sovereignsquad/impact/issues/24) | IMPACT P1: Add support diagnostics block to report and CLI summary | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#25](https://github.com/sovereignsquad/impact/issues/25) | IMPACT P1: Document support matrix and degraded platform behaviour | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#26](https://github.com/sovereignsquad/impact/issues/26) | IMPACT P1: Add merge-path tests for multi-entity scan orchestration | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#27](https://github.com/sovereignsquad/impact/issues/27) | IMPACT P1: Complete macOS-first packaging and release path | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#28](https://github.com/sovereignsquad/impact/issues/28) | IMPACT P1: Implement explicit duplicate-submission handling for 409 responses | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#29](https://github.com/sovereignsquad/impact/issues/29) | IMPACT P1: Programme roadmap — benchmark phases and evaluation ladder | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#30](https://github.com/sovereignsquad/impact/issues/30) | IMPACT P1: Programme roadmap — anonymous submission and ingest services | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#31](https://github.com/sovereignsquad/impact/issues/31) | IMPACT P1: Programme roadmap — platform parity and runtime coverage | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#32](https://github.com/sovereignsquad/impact/issues/32) | IMPACT P1: Programme roadmap — release/distribution and adoption surface | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#33](https://github.com/sovereignsquad/impact/issues/33) | IMPACT P1: Post-MVP release hardening (tag, wording, distribution decision) | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#34](https://github.com/sovereignsquad/impact/issues/34) | IMPACT P1: Publish @impact/cli to npm registry | open / unspecified | In Progress (NOW) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#35](https://github.com/sovereignsquad/impact/issues/35) | IMPACT P1: Anonymous ingest service MVP | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#36](https://github.com/sovereignsquad/impact/issues/36) | IMPACT P1: Community aggregates — governance, pipeline, metric definitions | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#37](https://github.com/sovereignsquad/impact/issues/37) | IMPACT P1: Public stats surface (dashboard or API) | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#38](https://github.com/sovereignsquad/impact/issues/38) | IMPACT P1: Standalone binary packaging — investigation | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#39](https://github.com/sovereignsquad/impact/issues/39) | IMPACT P1: Programme — signed releases and desktop-style macOS distribution | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#40](https://github.com/sovereignsquad/impact/issues/40) | IMPACT P1: Programme — public benchmark portal and compare vs crowd | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#41](https://github.com/sovereignsquad/impact/issues/41) | IMPACT P1: Programme — cross-platform parity for install and analytics | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#42](https://github.com/sovereignsquad/impact/issues/42) | IMPACT P2: Ideabank — DMG drag-drop installer | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#43](https://github.com/sovereignsquad/impact/issues/43) | IMPACT P2: Ideabank — native GUI, accounts, leaderboards, auto-update | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#44](https://github.com/sovereignsquad/impact/issues/44) | IMPACT P0: MLP M1 — Public install and adoption | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#45](https://github.com/sovereignsquad/impact/issues/45) | IMPACT P0: MLP M2 — Report delight and first-run payoff | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#46](https://github.com/sovereignsquad/impact/issues/46) | IMPACT P0: MLP M3 — Conservative recommendation engine | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#47](https://github.com/sovereignsquad/impact/issues/47) | IMPACT P1: MLP M4 — Shareable result layer | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#48](https://github.com/sovereignsquad/impact/issues/48) | IMPACT P1: MLP M5 — Community visibility MVP | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#49](https://github.com/sovereignsquad/impact/issues/49) | IMPACT P1: MLP M6 — Install polish after npm | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#50](https://github.com/sovereignsquad/impact/issues/50) | IMPACT P0: MLP Web H1 — Historical data information architecture | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#51](https://github.com/sovereignsquad/impact/issues/51) | IMPACT P0: MLP Web H2 — Historical hardware dataset MVP | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#52](https://github.com/sovereignsquad/impact/issues/52) | IMPACT P0: MLP Web H3 — Historical tools/runtimes dataset MVP | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#53](https://github.com/sovereignsquad/impact/issues/53) | IMPACT P0: MLP Web H4 — Historical LLM/model dataset MVP | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#54](https://github.com/sovereignsquad/impact/issues/54) | IMPACT P0: MLP Web H5 — Install / download page | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#55](https://github.com/sovereignsquad/impact/issues/55) | IMPACT P0: MLP Web H6 — Launch / use page | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#56](https://github.com/sovereignsquad/impact/issues/56) | IMPACT P0: MLP Web H7 — Submit result page | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#57](https://github.com/sovereignsquad/impact/issues/57) | IMPACT P0: MLP Web H8 — Homepage rework (four pillars) | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#58](https://github.com/sovereignsquad/impact/issues/58) | IMPACT P0: Dashboard D1 — Ingest MVP | open / unspecified | In Progress (NOW) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#59](https://github.com/sovereignsquad/impact/issues/59) | IMPACT P0: Dashboard D2 — Aggregation model | closed / completed | Todo (NEXT) | Owner review required; do not choose a target until closure/migration and acceptance evidence are reconciled. | Pending / not executed |
| [#60](https://github.com/sovereignsquad/impact/issues/60) | IMPACT P0: Dashboard D3 — Privacy thresholds | closed / completed | Todo (NEXT) | Owner review required; do not choose a target until closure/migration and acceptance evidence are reconciled. | Pending / not executed |
| [#61](https://github.com/sovereignsquad/impact/issues/61) | IMPACT P0: Dashboard D4 — Dashboard read API | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#62](https://github.com/sovereignsquad/impact/issues/62) | IMPACT P0: Dashboard D5 — Wire webapp to real aggregates | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#63](https://github.com/sovereignsquad/impact/issues/63) | IMPACT P1: macOS M1 — Distribution decision (binary vs app) | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#64](https://github.com/sovereignsquad/impact/issues/64) | IMPACT P1: macOS M2 — Packaging pipeline & clean-Mac smoke | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#65](https://github.com/sovereignsquad/impact/issues/65) | IMPACT P1: macOS M3 — Signing & notarization plan | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#67](https://github.com/sovereignsquad/impact/issues/67) | IMPACT P2: Ideabank — Compare my machine vs community cohort | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#68](https://github.com/sovereignsquad/impact/issues/68) | IMPACT P2: Ideabank — Public demo dataset / sandbox dashboard mode | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#69](https://github.com/sovereignsquad/impact/issues/69) | IMPACT P2: Ideabank — Raw-profile reprocessing and schema migration pipeline | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#71](https://github.com/sovereignsquad/impact/issues/71) | IMPACT P2: Ideabank — Submission anti-abuse and reputation controls | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#72](https://github.com/sovereignsquad/impact/issues/72) | IMPACT P2: Ideabank — Historical trends and time-series dashboard | open / unspecified | IDEABANK (SOMEDAY) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#76](https://github.com/sovereignsquad/impact/issues/76) | IMPACT P2: GDS G0 — Governance, adapter doc, and CSS freeze | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#77](https://github.com/sovereignsquad/impact/issues/77) | IMPACT P2: GDS G1 — Mantine root runtime in @impact/web | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#78](https://github.com/sovereignsquad/impact/issues/78) | IMPACT P2: GDS G2 — Public shell and page header contracts | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#79](https://github.com/sovereignsquad/impact/issues/79) | IMPACT P2: GDS G3 — Migrate install, use, submit pages | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#80](https://github.com/sovereignsquad/impact/issues/80) | IMPACT P2: GDS G4 — Migrate data and profile surfaces | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#81](https://github.com/sovereignsquad/impact/issues/81) | IMPACT P2: GDS G5 — Homepage migration and legacy CSS deletion | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |
| [#82](https://github.com/sovereignsquad/impact/issues/82) | IMPACT P2: GDS G6 — GDS enforcement and CI validation | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |

## Append-only Scrum / manual movement journal

| Date / Scrum reference | Board and issue | Verified current column | Proposed destination | Evidence / rationale | Dependency / blocker | Owner decision | Manual execution / person | Verified new column | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-16 review | Board and issues above | Snapshot above | No automatic move | Recorded source/issue/board review | See unresolved requirements | Pending | Not executed | Snapshot only | Preserve history |
| YYYY-MM-DD / meeting link | Board URL + issue URL | Exact observed value | Exact proposed value or remain | Acceptance link | Specific condition | Pending | Not executed | Not verified | — |

Read the issue and actual board before each future proposal. Retain previous observations when a decision changes. Record execution only after the owner performs it and the result is read back. Documentation rollback requires no product or board rollback.
