# Minimum Loveable Product (MLP) — IMPACT programme

**MLP** = **Minimum Loveable Product**: the smallest slice where the product feels **worth installing, finishing, understanding, and sharing** — not only correct.

**Authority:** This file is the in-repo **programme definition** for the MLP track. **Execution state** (Todo / In Progress / Done) lives on [Project #2](https://github.com/users/moldovancsaba/projects/2). **Operational snapshot** of MVP vs install gates: [current-state.md](current-state.md). **Routing when sources conflict:** [ssot-map.md](ssot-map.md).

---

## Status in MLP terms (today)

You have:

- a **working MVP**
- a **credible README / docs** layer
- a **verified Path B** install
- a **prepared Path C** npm path, waiting on the **final operational gate** ([#34](https://github.com/moldovancsaba/impact/issues/34))

So the product is **no longer blocked by architecture**. It is blocked by **adoption quality** and **emotional payoff**.

---

## What MLP means for IMPACT

For IMPACT, the minimum loveable product is **not** “more benchmark features.” It is:

> A user **installs IMPACT easily**, runs **one scan**, **immediately understands** what their machine is good for, gets **clear next steps**, and **feels** their result is **worth sharing**.

The MLP programme should optimise for:

- **easier install**
- **better first-run experience**
- **a more rewarding report**
- **actionable recommendations**
- **early community value**

---

## MLP sequence (phases)

### Phase 1 — Finish the install story

**Still the gate.**

**Required**

- Close **[#34](https://github.com/moldovancsaba/impact/issues/34)** (publish + smoke evidence).
- Make **Path C** the **public default** install path in docs and README.
- Keep **Path B** as fallback.
- Update **smoke test** and **install docs** to **published npm** reality.

**Outcome:** The product becomes **easier to try**.

---

### Phase 2 — Make the report feel useful

The report is likely **correct**; MLP needs it to feel **helpful**.

**Add**

- a strong **top summary** card
- a **“what this means”** section
- a **“best next step”** section
- clearer **“good for / not ideal for”** guidance
- **shareable redacted summary**

**Outcome:** Users finish the scan with **clarity and momentum**.

---

### Phase 3 — Conservative recommendation intelligence

First **delight** layer — **not** benchmarks, **not** fake scores: a **trustworthy interpretation** layer.

**Example outputs** (illustrative)

- “Good starting point for local 7B/8B models”
- “Ollama is installed but unreachable”
- “MLX tooling is present, but model inventory is not configured”
- “This machine is suitable for lightweight local AI experimentation”
- “For heavier multi-agent workflows, cloud-first is still likely better”

**Outcome:** IMPACT becomes a **guide**, not only an inventory tool.

---

### Phase 4 — Visible community value

What makes the product **socially compelling**.

**First community stats MVP** (examples)

- average / median memory
- most common chip
- most common runtime, tool, model family
- platform share

**Outcome:** Users can **situate themselves** relative to the crowd — where **loveability compounds**.

---

## MLP epics

### M1 — Public install and adoption

| Field | Detail |
| ----- | ------ |
| **Priority** | **P0** |
| **Goal** | Make IMPACT **easy enough to try** that install no longer suppresses adoption. |
| **Scope** | Finish **#34**; npm install as **public default**; Path B fallback; install + smoke docs; record **public package verification**. |
| **Done when** | `@impact/cli` **published**; install works **from docs alone**; **smoke evidence** exists; README quick start points at **public** install path. |

---

### M2 — Report delight and first-run payoff

| Field | Detail |
| ----- | ------ |
| **Priority** | **P0** |
| **Goal** | One completed scan feels **rewarding** and **informative**. |
| **Scope** | Redesigned **HTML report** summary: machine overview; runtime / tool / model highlights; **“what this means”**; **“next best action”**; **known limitations**; **shareable summary** block. |
| **Done when** | User can interpret results **without raw tables first**; report ends with **useful next steps**; HTML feels **curated**, not dumped. |

**M2 design requirements**

- Strong **top summary**
- **“What this means”**
- **“Next best action”**
- **“Known limitations”**
- Clearer **visual hierarchy** — useful **before** detailed tables

---

### M3 — Conservative recommendation engine

| Field | Detail |
| ----- | ------ |
| **Priority** | **P0** |
| **Goal** | Turn raw discovery into **actionable guidance**. |
| **Scope** | **Deterministic**, **explainable** rules producing: supported starting use cases; cautions; recommended next experiments; **local-first vs cloud-first** hints. |
| **Constraints** | No **opaque score**; no **fake precision**; every line **grounded in discovered facts**; **conservative** wording. |
| **Done when** | Recommendations are **deterministic**; users see **why** each line exists; no **overclaim**. |

**M3 example classes** (non-exhaustive)

- good starting point for local **7B/8B**-class models
- runtime **installed but unreachable**
- suitable for **lightweight** local AI experimentation
- **cloud-first** still reasonable for heavier flows

---

### M4 — Shareable result layer

| Field | Detail |
| ----- | ------ |
| **Priority** | **P1** |
| **Goal** | Easier to **share** and **discuss**. |
| **Scope** | Redacted **share summary** card; exportable concise summary; **share-safe** wording; optional **copy/share** block in report. |
| **Done when** | User can share **without sensitive detail**; shared snippet **stands alone** for readers. |

---

### M5 — Community visibility MVP

| Field | Detail |
| ----- | ------ |
| **Priority** | **P1** |
| **Goal** | Reason to care **beyond one machine**. |
| **Scope** | Ingest MVP; basic aggregation; **privacy thresholds**; simple **stats** surface. |
| **First metrics** | Average / median memory; top runtimes, tools, model families; platform distribution. |
| **Done when** | Public aggregates **visible**; **low-sample** groups **suppressed**; page **useful but conservative**. |

---

### M6 — Install polish after npm

| Field | Detail |
| ----- | ------ |
| **Priority** | **P1** |
| **Goal** | Less friction **after** Path C is live. |
| **Scope** | Clearer onboarding copy; **install/run failure** guidance; optional one-command quickstart; **troubleshooting** section. |
| **Done when** | Typical technical users install **without repo knowledge**; failure paths are **recoverable**. |

---

## What not to do for MLP

Do **not** spend the next cycle on:

- benchmark **scores**
- CRUD tests
- shell execution benchmarks
- **DMG**
- desktop **GUI**
- **leaderboards**
- “AI readiness score” **marketing**

Those are **not** the shortest path to loveability.

**Additional constraints**

- Do **not** start **benchmark product features** as the MLP spine.
- Do **not** add hype language or let recommendations **overclaim**.

---

## Priority order

**Immediate**

1. **Close #34**
2. Treat **M1 / M2 / M3** as the **active MLP spine** on the board (file issues or theme cards on [Project #2](https://github.com/users/moldovancsaba/projects/2) as needed).

**After that**

3. **M4**  
4. **M5**  
5. **M6**

---

## Board placement recommendation

Apply on [Project #2](https://github.com/users/moldovancsaba/projects/2) when MLP issues exist; **Status** is SSOT ([ssot-map.md](ssot-map.md)).

| Column | Items |
| ------ | ----- |
| **Todo (NEXT)** | **M1** — Public install and adoption · **M2** — Report delight · **M3** — Conservative recommendation engine |
| **Backlog (SOONER)** | **M4** — Shareable result layer · **M5** — Community visibility MVP · **M6** — Install polish after npm |
| **Roadmap (LATER)** | compare-my-machine vs crowd · benchmark portal · binary / desktop packaging · platform parity expansion |
| **IDEABANK (SOMEDAY)** | DMG · desktop GUI · leaderboards · account/profile layer |

---

## Definition of progress (MLP)

You are moving toward MLP when:

- **install friction** drops  
- the **report** becomes more rewarding  
- users leave with **clear next steps**  
- the result is **easier to share**  
- **community value** becomes visible  

---

## Message to developers

We are shifting from **MVP completion** to the **MLP track**.

**Product objective:** IMPACT should become not only **correct**, but **genuinely satisfying** to install, run, understand, and share.

**Execution order**

1. **First gate:** finish **#34** and make the **npm** install path **real**.  
2. **MLP spine:** **M1** → **M2** → **M3**.  
3. Then **M4**, **M5**, **M6**.

**Shortest path from solid MVP to a product people love:** install ease → report delight → recommendation intelligence → shareability → community stats.
