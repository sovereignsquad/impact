# Contributing to Impact

Thank you for your interest in **Impact**. This project is open source under the [MIT License](LICENSE).

## Principles

- **Transparency:** Planning and priorities are visible on the GitHub Project board.
- **Issues first:** Substantive work should have (or get) an issue for discussion and traceability.
- **Small, reviewable changes:** Prefer focused pull requests linked to an issue.

## Where work is tracked

| What | Where |
| ---- | ----- |
| Roadmap themes, epics, sequencing | [GitHub Project #2 — board view](https://github.com/users/moldovancsaba/projects/2/views/1) |
| Bug reports, feature requests, design discussion | [GitHub Issues](https://github.com/moldovancsaba/impact/issues) |
| Code review | Pull requests |

**Rule of thumb:** If it belongs on a roadmap, backlog, or todo list for Impact, it should exist as a **GitHub Issue** (or linked PR) and be **on the project board** with the right Status and fields. Avoid parallel trackers that drift out of sync.

See [docs/project-management.md](docs/project-management.md) for maintainers’ workflow details.

## Build from source

```bash
npm install
npm run build
npm test
npm run impact -- scan --no-submit -o ./reports
```

## How to contribute

1. **Open or pick an issue** — describe the problem or goal; maintainers may add it to the project board.
2. **Fork and branch** — use a short branch name related to the issue (e.g. `fix-login-redirect`, `add-api-docs`).
3. **Implement and test** — follow existing patterns in the repo; add or update tests when applicable.
4. **Open a PR** — reference the issue (`Fixes #123` or `Refs #123`); link the PR to the board item if one exists.
5. **Respond to review** — keep changes scoped to the agreed issue.

## Code of conduct

Be respectful and constructive in issues and PRs. For a formal policy, we can adopt a standard contributor covenant via a follow-up issue on the board.

## Questions

Use [Discussions](https://github.com/moldovancsaba/impact/discussions) if enabled, or open an issue labeled appropriately once label conventions exist.
