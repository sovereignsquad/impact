# Platform support matrix

Conservative statement of what this repository attempts **today**. It complements the HTML report footer and the [README](../README.md) **support** summary.

## macOS

- **Tier:** supported primary target.
- **Host:** OS/arch/memory/chip from Node APIs; optional Metal hint; disk via `df` where available.
- **Runtimes:** Ollama PATH + local HTTP; MLX via `pip show` (partial — see product notes).
- **Tools:** allowlisted `which` + version CLI probes.

## Linux

- **Tier:** partial / best-effort.
- **Host:** same Node signals; disk via `df` when userland matches expectations.
- **Runtimes / tools:** same probes as macOS where binaries exist; behaviour depends on distro layout.
- **Expectation:** more `unknown` / `medium` confidence fields than on macOS; not parity.

## Windows

- **Tier:** experimental.
- **Host:** Node-derived signals; disk and shell-dependent probes may return `unknown` or low-confidence values.
- **Runtimes:** PATH and service patterns may be inconclusive — prefer `unknown` or `partial` over false certainty.
- **Expectation:** do not assume feature parity with macOS until explicitly documented.

## “Partial” (operational)

A runtime `status` of **`partial`** means only part of the product surface is implemented (e.g. MLX pip detection without model inventory). It must be paired with honest `capabilities.model_inventory` and notes.

## Unsupported / not attempted

Capabilities not listed here are **out of scope** for v0.x unless an issue explicitly lands probe code. Unknowns should remain **`unknown`** or low-confidence, not fabricated.
