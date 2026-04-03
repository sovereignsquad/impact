## Objective

Deliver a **macOS-first** distribution story so a serious scanner does not require contributors to reverse-engineer `npm workspaces` just to run a scan on a primary supported platform.

## Unified Context

IMPACT’s **support matrix** centres macOS. Adoption friction is a **product risk**: the engineering may be correct while the **path to first report** is too steep. B7 is the packaging track—not a GUI, not npm Inc publication requirement in v1, but a **documented, reproducible** happy path (clone → build → run, and/or global CLI install from path).

Without B7:

- field trials stall on “how do I run this?”
- version pinning for releases is informal
- CTO cannot sign off on “macOS-first” as shipped

## Based On

- Sprint B — B7 (Todo until release path is verified end-to-end)
- [docs/install-macos.md](https://github.com/moldovancsaba/impact/blob/main/docs/install-macos.md) (seed doc — extend with release checklist)
- [docs/support-matrix.md](https://github.com/moldovancsaba/impact/blob/main/docs/support-matrix.md)
- [README.md](https://github.com/moldovancsaba/impact/blob/main/README.md)
- [docs/submission-contract.md](https://github.com/moldovancsaba/impact/blob/main/docs/submission-contract.md)
- [docs/schema-semantics-v0.3.md](https://github.com/moldovancsaba/impact/blob/main/docs/schema-semantics-v0.3.md)
- [docs/confidence-rules.md](https://github.com/moldovancsaba/impact/blob/main/docs/confidence-rules.md)

## Problem

“Works on my machine” is insufficient for programme governance.

## Goal

Pick **one** primary path for v0.x closeout:

- **A)** Packaged CLI binary artefact per release, **or**
- **B)** `npm install -g ./apps/cli` (or documented equivalent) + tagged source releases

Deliver **fresh Mac** instructions, **versioned** usage, verified **`impact-profile.json`** + **`impact-report.html`**.

## Scope

In scope: docs, release checklist, optional CI artefact job (future).

Out of scope: Windows installer; App Store; auto-update daemon.

## Execution Prompt

Execute Sprint B.1 with #27; consolidate duplicate packaging tickets; attach evidence comment (commands + output paths) when done.

## Scope / Non-Goals

Non-goals: benchmark runners; Docker-as-only-interface.

## Constraints

- Must not claim Windows/Linux **parity** in packaging docs

## Acceptance Checks

- [ ] Fresh macOS verification logged (comment or doc)
- [ ] Version/tag discipline documented
- [ ] `impact-report.html` + `impact-profile.json` produced via documented path
- [ ] Support boundaries unchanged

## Dependencies

- **Superseded / paired with:** #27 (Sprint B.1 umbrella)
- **Depends on:** CI green (#2)

## Out of Scope

- Notarization / Apple notary service (unless explicitly scheduled)

## Risks

- npm global install path confusion — document Node version gate

## Delivery Artifact

- install doc + optional release script
- GitHub Release with notes (when tagging)

## Developer Notes

- Style reference: [mvp-factory-control#498](https://github.com/moldovancsaba/mvp-factory-control/issues/498)
- **Board Status:** Todo until acceptance met; then Done
