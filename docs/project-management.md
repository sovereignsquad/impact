# Project management for IMPACT

This document defines how **roadmap**, **backlog**, and **todo** work is recorded for the IMPACT open source programme.

## Single board

**Canonical board:** [Impact — roadmap & backlog](https://github.com/users/moldovancsaba/projects/2/views/1)

GitHub Project URL (same project): `https://github.com/users/moldovancsaba/projects/2`

**Status columns** on the board include: `IDEABANK (SOMEDAY)`, `Roadmap (LATER)`, `Backlog (SOONER)`, `Todo (NEXT)`, `In Progress (NOW)`, `Review (ALMOST)`, `Done`, `Declined (NEVER)`.

### Critical rule: state lives on the board, not in titles

- **Do not** encode workflow state in issue titles — no `Roadmap:`, `Backlog:`, `Todo:`, `Done`, or open/closed wording in the title.
- **Do** set the **Status** field on the Project item. That is the **only** authoritative place for “where this card sits in the kanban.”
- **Priority** (e.g. P0/P1) may appear as **labels** and/or in the title as programme priority (see [mvp-factory-control#495](https://github.com/moldovancsaba/mvp-factory-control/issues/495) for the style bar).

### Issue bodies (SSOT)

Issues are the **system of record** for intent and delivery. Use a **rich structure**: Objective, Unified Context, Problem, Goal, Scope, Execution Prompt, Acceptance Checks, Dependencies, Risks, Delivery Artifacts, Developer Notes — same class of rigour as internal programme tickets.

Reproducible bulk bodies for refresh live under `scripts/gh-issue-bodies/`; after edit, **GitHub** remains authoritative.

All planning-oriented work should be visible on the board:

- **Roadmap** — themes spanning phases (e.g. doctrine #1, phase index #16).
- **Backlog** — prioritised upcoming work.
- **Todo** — next-up execution cards.
- **In Progress / Review / Done** — literal delivery state.

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
