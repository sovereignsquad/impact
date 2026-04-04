# MLP execution plan (CTO) — tasks and order

**Purpose:** actionable checklist for the **first MLP execution cycle**, after programme definition in [mlp.md](mlp.md). **Board / issues:** [Project #2](https://github.com/users/moldovancsaba/projects/2); spine **[#44](https://github.com/moldovancsaba/impact/issues/44)–[#49](https://github.com/moldovancsaba/impact/issues/49)**.

**Rule:** Do **not** treat MLP implementation as fully underway until **[#34](https://github.com/moldovancsaba/impact/issues/34)** is **operationally closed** (publish, `npm view`, published-package smoke, evidence on the issue, **Done** on the board).

---

## Threshold already achieved (not “tasks”)

- MVP shipped  
- MLP defined in [mlp.md](mlp.md)  
- MLP issues on the board (**#44–#49**)  
- Public web shell live ([docs/web.md](web.md))  
- Vercel deployment working ([vercel.json](../vercel.json))  

**What is not done:** Gate **#34** and the execution items below.

---

## Gate 0 — Public install (**#34**)

| ID | Deliverable | Acceptance |
| --- | ----------- | ---------- |
| **T0.1** | Publish `@impact/cli`; `npm view @impact/cli`; published-package smoke; evidence on **#34**; **#34** → **Done** | Path C is **real** (registry), smoke uses **published** package not workspace-only install; README/install can promote Path C as primary |

---

## M1 — Public install and adoption (**#44**)

| ID | Priority | Deliverable | Acceptance |
| --- | --- | --- | --- |
| **T1.1** | P0 | Path C **default** everywhere: [README.md](../README.md), [install-macos.md](install-macos.md), [current-state.md](current-state.md), [apps/web](../apps/web/), [web.md](web.md) | No doc presents Path B as **primary**; web install matches **live** npm; smoke docs use public install |
| **T1.2** | P0 | Troubleshooting: Node version, npm global/perms, `command not found`, failed build / missing outputs | Normal technical user can recover without reading repo internals |
| **T1.3** | P1 | Document repeatable smoke: install from npm → scan → outputs → no unintended submission | — |

*(T1.2 also aligns with **#49** / M6.)*

---

## M2 — Report delight (**#45**)

| ID | Priority | Deliverable | Acceptance |
| --- | --- | --- | --- |
| **T2.1** | P0 | Top of `impact-report.html`: machine overview, runtime summary, model/tool highlights, plain-language interpretation | User understands result **before** tables |
| **T2.2** | P0 | **“What this means”** — inventory → meaning (experimentation, unreachable runtime, partial support, cloud-first for heavy flows) | No hype, no fake score; grounded in facts |
| **T2.3** | P0 | **“Next best action”** — 1–3 concrete steps (e.g. start Ollama, try small model, review npm docs) | Specific, conservative, useful |
| **T2.4** | P1 | **“Known limitations”** — not collected, partial, unknown; no community stats yet | — |

---

## M3 — Conservative recommendation engine (**#46**)

| ID | Priority | Deliverable | Acceptance |
| --- | --- | --- | --- |
| **T3.1** | P0 | Deterministic rules module → recommendations (e.g. 7B/8B starting point, lightweight local OK, unreachable runtime, cloud-first for agentic) | Deterministic, explainable, testable; **no** opaque scoring |
| **T3.2** | P0 | Each recommendation cites **evidence** (memory, runtime status, inventory, platform) | User sees **why** |
| **T3.3** | P0 | Fixture tests: low memory, Ollama reachable/unreachable, MLX partial, no runtimes, mixed states | — |

---

## M4 — Shareable layer (**#47**) — after M1–M3 underway

| ID | Priority | Deliverable |
| --- | --- | --- |
| **T4.1** | P1 | Share-safe summary card (machine class, key status, short interpretation, no sensitive IDs) |
| **T4.2** | P1 | Copy/export flow; same wording in report + web shell |

---

## M5 — Community visibility (**#48**)

| ID | Priority | Deliverable |
| --- | --- | --- |
| **T5.1** | P1 | Ingest MVP architecture: path, storage, validation, duplicates, privacy thresholds |
| **T5.2** | P1 | First aggregates: avg/median memory, top chip/runtime/tool/model family, platform share |
| **T5.3** | P1 | Stats page in web shell **only** when ingestion exists (replace placeholder) |

---

## M6 — Install polish (**#49**) — post-#34

| ID | Priority | Deliverable |
| --- | --- | --- |
| **T6.1** | P1 | One story: README, install docs, web shell, smoke docs |
| **T6.2** | P1 | Web shell troubleshooting page for common failures |

---

## Web shell — spine tasks (`apps/web`)

| ID | Priority | Deliverable |
| --- | --- | --- |
| **W1** | P0 | Sharpen hero; precise install truth; product truth; community stats clearly **planned** until live |
| **W2** | P0 | Dropped `impact-profile.json`: system summary, runtimes/tools/models, status/presence/confidence, simplified interpretation (**no upload**) |
| **W3** | P1 | Built-in redacted sample profile (“try without scanning”) |
| **W4** | P1 | Results explainer page: sections, reachable/partial/unknown, what to do next |

---

## Recommended order

1. **Close #34**  
2. **#44** (M1) — Path C default + troubleshooting + smoke notes  
3. **#45** (M2) — report summary / meaning / next / limitations  
4. **#46** (M3) — rules + evidence + tests  
5. Surface outcomes in **apps/web** (W1–W2 early)  
6. **#47**, **#49**  
7. **#48** — design ingest before shipping public stats  

---

## Constraints (whole cycle)

- No benchmark **scoring**  
- No CRUD / shell benchmark scope  
- No GUI / DMG  
- No **leaderboards**  
- No hype-driven claims  

---

## Developer message (CTO)

The project is now ready for the **first real MLP execution cycle**.

**Current state:** MVP shipped; web shell live and deployable; MLP doctrine and issue set exist; **active gate is still #34**.

**Immediate rule:** Do not treat MLP as fully underway until **#34** is closed with publish, verify, smoke, and issue evidence.

**Next execution order:** (1) Close **#34**. (2) **#44** — npm as default story, Path B fallback. (3) **#45** — strong top summary, “what this means”, “next best action”, “known limitations”; value before tables. (4) **#46** — deterministic, explainable, tested recommendations; no scores or fake precision.

**Web shell:** Use `apps/web` as public explainer — precise install truth; rich local profile preview (no upload); results explainer; community stats placeholder until M5 is real.

**Success:** Lower install friction; more rewarding first-run report; useful explainable recommendations; web shell makes IMPACT understandable for non-developers.
