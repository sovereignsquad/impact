## Objective

Enable **GitHub Discussions** (if appropriate) and **private vulnerability reporting** so security and Q&A have **proper channels** aligned with SECURITY.md.

## Unified Context

IMPACT handles **sensitive trust topics** (what leaves the machine, fingerprints, submission). Security reports must **not** be forced into public issues. Discussions can reduce issue noise for questions.

## Based On

- `SECURITY.md`
- GitHub repo settings (owner action required)

## Problem

- SECURITY.md references private reporting but repo settings may not enable it.
- No structured Q&A channel.

## Goal

- Turn on **Private vulnerability reporting** in repo settings (document confirmation in comment).
- Decide **yes/no** on Discussions; if yes, add category guidance in README.

## Scope

In scope: settings + short doc updates. Out of scope: full security programme.

## Execution Prompt

Repo owner: flip settings; maintainer: update docs + comment evidence on this issue.

## Constraints

- Do not publish exploit details in public issues.

## Acceptance Checks

- [ ] Private vulnerability reporting enabled **or** documented alternative contact with same intent.
- [ ] README / SECURITY aligned with actual process.
- [ ] If Discussions enabled: link and scope (“questions vs bugs”).

## Dependencies

- Owner access to repo settings.

## Risks

- Unmonitored Discussions—only enable if maintainers commit to triage.

## Delivery Artifact

- Comment on this issue with screenshots or checklist of settings + doc PR.

## Developer Notes

- Title is **descriptive only**; workflow state = board **Status**.
