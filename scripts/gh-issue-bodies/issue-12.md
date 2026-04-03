## Objective

Generate **offline-readable** and **machine-readable** artefacts from the canonical profile: **`impact-profile.json`** and **`impact-report.html`**, with sections for host, runtimes, tools, models, privacy, and optional readiness—**no server required** for HTML.

## Unified Context

Reports are the **human interface** for a programme that will grow into **benchmarks**. HTML must **explain confidence** and **privacy** in plain language so non-experts globally can understand what was detected.

## Based On

- `packages/reporting`
- `ImpactProfileV01` shape

## Problem

Divergence between JSON and HTML erodes trust; missing `mkdir` caused early friction—fixed, must stay tested.

## Goal

- Deterministic writers: create output dir, write UTF-8 files.
- HTML **escapes** user-controlled strings.
- Tables mirror JSON content.

## Scope

In scope: templates + writers. Out of scope: hosted dashboard (future).

## Execution Prompt

UI tweaks via PRs; benchmark sections appear only when schema supports them.

## Constraints

- No external CDN dependencies in HTML (offline).

## Acceptance Checks

- [ ] Open `impact-report.html` via `file://` works.
- [ ] JSON validates against schema post-write.
- [ ] Large lists remain readable (basic table layout OK for v0.x).

## Dependencies

- **Depends on:** #6, #11

## Risks

- XSS if escaping regresses—add test snapshots (#15).

## Delivery Artifact

- Example HTML/JSON paths in comment after each major UI change.

## Developer Notes

- Board **Status** for polish vs done.
