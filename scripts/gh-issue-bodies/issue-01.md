## Objective

Establish and maintain the **authoritative product doctrine** for **IMPACT** in this repository and on the GitHub Project board, so every downstream workstream (scanner, benchmarks, submission, governance) aligns with a single north star.

## Unified Context

**IMPACT** means **(I)ndustrial (M)ulti-(P)latform (A)gent (C)onnector (T)est**: a **fully sovereign** stack for evaluating **system + tool + LLM** behaviour end-to-end. The programme targets a **rock-solid, globally useful foundation**—not a one-off demo.

The **v0.x discovery scanner** (local, privacy-first inventory of host, runtimes, tools, models) is the **first concrete delivery**: it grounds truth about what can run where, before any heavy benchmarking layer. Without a written doctrine, teams will optimize locally (nice CLI, nice HTML) while drifting from the sovereign benchmark mission.

**GitHub Issues are the SSOT** for intent, acceptance, dependencies, and delivery evidence. **Kanban state lives only in the Project “Status” field**—never encoded in issue titles (no `Backlog:`, `Todo:`, `Done` in titles).

## Based On

- Charter: sovereign **Industrial Multi-Platform Agent Connector Test**
- Open source delivery: [moldovancsaba/impact](https://github.com/moldovancsaba/impact)
- Prior v0.1 discovery MVP definition (inventory + export + consent)
- Programme phases indexed in issue #16

## Problem

- Product meaning was split between README, `docs/product.md`, and thin issues.
- Issue titles duplicated workflow state (`Roadmap:`, `Backlog:`, `Todo:`) instead of using the board.
- The **acronym and long-term benchmark scope** were not explicit enough for architects and contributors.

## Goal

- One clear statement of **what IMPACT is** (acronym + mission) and **what v0.x is for** (foundation toward benchmarks).
- Issues used as **living specifications** with the same structural rigour as mature programme tickets (objective, scope, acceptance, risks, delivery artifacts).
- Board **Status** is the only place for IDEABANK / Roadmap / Backlog / Todo / In Progress / Review / Done.

## Scope

In scope:

- Maintain this issue body as the **doctrine anchor**; update when scope shifts.
- Ensure `docs/product.md` and `README.md` stay consistent with this doctrine.
- Define non-goals for v0.x (e.g. no mandatory cloud, no accounts) vs later phases (atomic and capability benchmarks).

Out of scope (here):

- Implementation of specific scanners (tracked in dedicated issues).
- Server-side ingestion design (tracked under submission workstream).

## Execution Prompt

Keep this issue current: when doctrine changes, **edit the issue** and reference commits/PRs. Cross-link child workstreams (#6–#15, #2–#5) and phase index (#16).

## Constraints

- Titles must **not** embed kanban state.
- Privacy and sovereignty remain **non-negotiable defaults** for local discovery.
- Benchmark claims must not appear until the programme phase explicitly allows them.

## Acceptance Checks

- [ ] This issue states the **full IMPACT acronym** and **sovereign benchmark** mission.
- [ ] `docs/product.md` reflects the same doctrine and phase alignment.
- [ ] `README.md` opens with acronym + mission + pointer to v0.x discovery role.
- [ ] All related issues use **descriptive titles**; **Status** set only on the Project board.
- [ ] Architects can onboard from **Issues + board** without hunting Slack/docs.

## Dependencies

- **Blocks:** clarity for all P0/P1 workstreams.
- **Related:** #16 (phases index), #6 (foundation), #3 (architecture SSOT).

## Risks

- Doctrine drift between marketing language and shipped code.
- Over-scoping v0.x with benchmark features too early—undermines trust and delivery.

## Delivery Artifact

- Updated doctrine text **in this issue** (SSOT).
- Linked updates in `docs/product.md`, `README.md`, and `docs/architect-handoff.md`.

## Developer Notes

- Priority label **P0** reflects programme criticality, not board column.
- Reference example issue style: [mvp-factory-control#495](https://github.com/moldovancsaba/mvp-factory-control/issues/495).
