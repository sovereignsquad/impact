# GitHub issue bodies (refresh kit)

Markdown here mirrors the **structure and intent** of issues on [moldovancsaba/impact](https://github.com/moldovancsaba/impact). After `apply-updates.sh`, **GitHub issue bodies** are authoritative for scope/acceptance; **Project #2 Status** is authoritative for workflow ([`apply-status.sh`](apply-status.sh)). Full map: [docs/ssot-map.md](../../docs/ssot-map.md).

**Quality bar:** programme cards follow the same sections as [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498) — Objective, Unified Context, Based On, Problem, Goal, Scope, Execution Prompt, Scope / Non-Goals, Constraints, Acceptance Checks, Dependencies, Out of Scope, Risks, Delivery Artifact, Developer Notes.

- `issue-NN.md` — body for GitHub issue `#NN`
- **MLP:** `issue-44.md` … `issue-49.md` — [#44](https://github.com/moldovancsaba/impact/issues/44)–[#49](https://github.com/moldovancsaba/impact/issues/49) ([mlp.md](../../docs/mlp.md))
- `apply-updates.sh` — `gh issue edit … --body-file` + labels (bash)
- `apply-status.sh` — sets **Project #2 → Status** only (kanban truth)
- `gh-ensure-issues-on-project.sh` — add any repo issues missing from Project #2 (safe to re-run)
- `gh-sprint-b-board-bootstrap.sh` — one-off create Sprint B issues (do not re-run)

**Board column names** must not be pasted into issue titles. Use `apply-status.sh` or the UI.

**Sprint B:** Issues **#17–#28** are created from `issue-17.md` … `issue-28.md`. To bootstrap a **new** clone of the board rows, run **`scripts/gh-sprint-b-board-bootstrap.sh`** once (not idempotent). Then refresh **item IDs** in `apply-status.sh` via `gh project item-list 2 --owner moldovancsaba --format json`.

Re-fetch **item IDs** if GitHub ever re-links items (rare); IDs are baked into `apply-status.sh` for automation.
