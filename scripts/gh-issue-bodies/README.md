# GitHub issue bodies (refresh kit)

Markdown here mirrors the **structure and intent** of issues on [moldovancsaba/impact](https://github.com/moldovancsaba/impact). **GitHub Issues remain the SSOT** after any refresh.

**Quality bar:** programme cards follow the same sections as [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498) — Objective, Unified Context, Based On, Problem, Goal, Scope, Execution Prompt, Scope / Non-Goals, Constraints, Acceptance Checks, Dependencies, Out of Scope, Risks, Delivery Artifact, Developer Notes.

- `issue-NN.md` — body for GitHub issue `#NN`
- `apply-updates.sh` — `gh issue edit … --body-file` + labels (bash)
- `apply-status.sh` — sets **Project #2 → Status** only (kanban truth)
- `gh-ensure-issues-on-project.sh` — add any repo issues missing from Project #2 (safe to re-run)
- `gh-sprint-b-board-bootstrap.sh` — one-off create Sprint B issues (do not re-run)

**Board column names** must not be pasted into issue titles. Use `apply-status.sh` or the UI.

**Sprint B:** Issues **#17–#28** are created from `issue-17.md` … `issue-28.md`. To bootstrap a **new** clone of the board rows, run **`scripts/gh-sprint-b-board-bootstrap.sh`** once (not idempotent). Then refresh **item IDs** in `apply-status.sh` via `gh project item-list 2 --owner moldovancsaba --format json`.

Re-fetch **item IDs** if GitHub ever re-links items (rare); IDs are baked into `apply-status.sh` for automation.
