# Project management for Impact

This document defines how **roadmap**, **backlog**, and **todo** work is recorded for the Impact open source project.

## Single board

**Canonical board:** [Impact — roadmap & backlog](https://github.com/users/moldovancsaba/projects/2/views/1)

GitHub Project URL (same project): `https://github.com/users/moldovancsaba/projects/2`

All planning-oriented work should be visible here:

- **Roadmap** — larger themes or milestones (often represented by issues with a “roadmap” or “epic” character, or by milestones).
- **Backlog** — prioritized but not-yet-started (or not-yet-finished) work, typically as issues on the board.
- **Todos** — concrete tasks; use sub-issues, checklist issues, or task-sized issues with Status on the board.

## Required habits for maintainers

1. **Create a GitHub Issue** for every meaningful unit of work (feature, bug, doc set, infra task).
2. **Add the issue to Project #2** (`gh project item-add` or the GitHub UI).
3. **Set Status** (and other fields) on the board so the default view reflects reality.
4. **Link PRs** to issues so the board and code history stay connected.

## GitHub CLI examples

Authenticated `gh` with `project` scope can manage the board from the terminal.

Add an existing issue to the project:

```bash
gh project item-add 2 --owner moldovancsaba \
  --url https://github.com/moldovancsaba/impact/issues/<number>
```

Create an issue and then add it (two steps):

```bash
gh issue create --repo moldovancsaba/impact --title "Short title" --body "Details..."
# Then copy the issue URL from the output and:
gh project item-add 2 --owner moldovancsaba --url "<issue URL>"
```

View the project:

```bash
gh project view 2 --owner moldovancsaba
```

## Visibility

The project is intended to be **public** so contributors and users can see the same roadmap and backlog as the core team. If you change visibility, document the reason in an issue.

## Relation to this repository

- **Code and deep technical docs** live in this repo under version control.
- **What we plan to do and in what order** lives on the GitHub Project board plus issues.

That split keeps the repo clean while keeping planning discoverable and participatory.
