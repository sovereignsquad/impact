# GitHub issue bodies (refresh kit)

Markdown here mirrors the **structure and intent** of issues on [moldovancsaba/impact](https://github.com/moldovancsaba/impact). **GitHub Issues remain the SSOT** after any refresh.

- `issue-NN.md` — body for GitHub issue `#NN`
- `apply-updates.sh` — `gh issue edit … --body-file` + labels (bash)
- `apply-status.sh` — sets **Project #2 → Status** only (kanban truth)

**Board column names** must not be pasted into issue titles. Use `apply-status.sh` or the UI.

Re-fetch **item IDs** if GitHub ever re-links items (rare); IDs are baked into `apply-status.sh` for automation.
