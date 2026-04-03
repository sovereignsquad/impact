## Objective

Detect **AI runtimes** (initially **Ollama** and **MLX Python package**) with **install state**, **version strings** when available, and **localhost reachability** for APIs—using **timeouts** so scans never hang.

## Unified Context

Runtimes are the **bridge** between bare metal and **model inventory**. IMPACT’s long-term benchmark layer assumes **honest runtime adapters**; this issue defines the **first adapters** and the **status model** (`installed`, `reachable`, `confidence`).

## Based On

- `packages/scanner-runtimes`
- Ollama HTTP `127.0.0.1:11434/api/tags` (local only)

## Problem

Declaring “installed” without reachability creates **false confidence** for model lists and future benchmarks.

## Goal

- Ollama: `ollama --version`, reachability probe.
- MLX: `python3 -m pip show mlx` parse.
- Clear extension pattern for **additional runtimes** (document in #3).

## Scope

In scope: above + error isolation. Out of scope: arbitrary endpoint scanning beyond documented adapters.

## Execution Prompt

Add new runtime → update schema if needed → tests → issue comment with evidence.

## Constraints

- Network calls **only to localhost** for MVP.
- No credential harvesting from config files.

## Acceptance Checks

- [ ] Ollama absent → `installed: false`, no throw.
- [ ] Ollama present, API down → `reachable: false`, scan continues.
- [ ] MLX detection does not require network.

## Dependencies

- **Depends on:** #6
- **Pairs with:** #10 (models)

## Risks

- **False negatives** on custom install paths—document and iterate.

## Delivery Artifact

- Code in `packages/scanner-runtimes` + example JSON snippet.

## Developer Notes

- **Status** on board only.

- Programme card quality bar: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498).
