# CTO — next execution and board management

**Audience:** developers executing **MLP activation** and maintaining **Project #2** hygiene. **Operational runbook:** [mlp-activation-path.md](mlp-activation-path.md). **Activation runbook is accepted** — the next step is **execution** plus **board hygiene**, not more repo framing.

**Internal note (maintainers):** prefer developer time on **activation** and **issue-quality cleanup**, not additional product prose.

---

## 1. What you do next

### Execute the activation runbook in order

Use **[mlp-activation-path.md](mlp-activation-path.md)** as the operational source of truth.

**First — close [#34](https://github.com/moldovancsaba/impact/issues/34)**

- `npm login`
- `npm run publish:npm`
- `npm view @impact/cli`
- **Clean-machine Path C** smoke from the published package
- Attach **evidence** to **#34**
- Move **#34** to **Done** when acceptance is met

**Then — dashboard activation path**

- Deploy **hosted ingest** ([`Dockerfile.ingest`](../Dockerfile.ingest), [ingest-server.md](ingest-server.md))
- Configure **persistent** **`IMPACT_INGEST_DB_PATH`**
- Verify **`/health`** and **`/healthz`** on the ingest origin
- Set **`IMPACT_INGEST_UPSTREAM`** on Vercel
- Keep **`VITE_STATS_API_BASE`** aligned ([web.md](web.md))
- Set **`IMPACT_SUBMIT_URL`** to the **real** ingest origin for clients
- **Seed** enough submissions for thresholds ([mlp-activation-path.md](mlp-activation-path.md) §4)
- Verify **`/api/stats/*`** (public same-origin path)
- Verify **`/data.html`** with **real** aggregates
- Close **[#58](https://github.com/moldovancsaba/impact/issues/58)–[#62](https://github.com/moldovancsaba/impact/issues/62)** in the **documented order**, with **[#62](https://github.com/moldovancsaba/impact/issues/62) last**

### Report back with proof, not summary

Use the **report-back** structure in [mlp-activation-path.md](mlp-activation-path.md) (end of file).

Expect in the handoff:

- Published **npm** version
- **`npm view`** result
- **Ingest host URL**
- **Health** output
- **Stats** endpoint samples
- **Threshold** value and current **submission volume**
- Proof **`/data.html`** shows **real** aggregates
- Explicit **recommendation** for which of **#34**, **#58–#62** are **Review**-ready or **Done**-ready

---

## 2. GitHub Project board management

### Workflow rule

- The **board** (Project #2 **Status**) is **workflow** truth.
- **Issue titles** are not workflow.
- **Issue bodies** are **scope / acceptance** truth ([ssot-map.md](ssot-map.md)).

### Status movement — keep now (baseline template)

Automated template: [`scripts/gh-issue-bodies/apply-status.sh`](../scripts/gh-issue-bodies/apply-status.sh) (re-run after drift).

| Issue(s) | Status |
| -------- | ------ |
| **#34** | **In Progress** |
| **#58** | **In Progress** |
| **#59–#62** | **Todo** |
| **#63–#66** | **Backlog** |

### After **#34** closes

- **#34** → **Done**

### During dashboard activation — low WIP

- Do **not** move **#59** to **In Progress** until **#58** is materially underway and **hosted ingest** is **real**.
- Move **#60** only when **aggregation** is truly underway in **hosted** context.
- Move **#61** only when **live endpoint** wiring is the **active** task.
- Move **#62** only when **public web verification** is the **active** task.

### Closure order (dashboard)

1. **#58** first  
2. Then **#59**  
3. Then **#60**  
4. Then **#61**  
5. **#62** last  

### Packaging track (**#63–#66**)

- Stay **Backlog** unless there is **real spare capacity**.
- Move forward only when activation allows.
- **DMG** is **last** — never the **first** packaging move.

### Board quality — required standard

All **active** issues must read as **real delivery contracts**, not thin task notes.

**Implementation issues** should include (aligned with [`scripts/gh-issue-bodies/README.md`](../scripts/gh-issue-bodies/README.md)):

1. Objective  
2. Unified Context  
3. Based On  
4. Problem  
5. Goal  
6. Scope  
7. Execution Prompt  
8. Scope / Non-Goals  
9. Constraints  
10. Acceptance Checks  
11. Dependencies  
12. Out of Scope  
13. Risks  
14. Delivery Artifact  
15. Developer Notes  

**Roadmap / horizon-marker issues** — at minimum:

- Objective  
- Unified Context  
- Theme / Goal  
- Why this matters  
- What it does not mean yet  
- Dependencies / downstream links  
- Risks of misunderstanding  
- Related execution issues  

### Special rule — active dashboard and distribution issues

For **#34**, **#44–#49**, **#58–#66**, each issue body must clearly separate:

- What is **already shipped** in repo  
- What is still **operational**  
- What qualifies for **Review**  
- What qualifies for **Done**  

### Board cleanup order

**First wave** — upgrade and sync bodies for:

- **#34**  
- **#44–#49**  
- **#58–#66**  

**Second wave** — upgrade and sync:

- **#29–#32**  
- **#50–#57**  
- Any still-visible **umbrella** issue that is too thin  

### Sync rule

1. **Rewrite** markdown in **`scripts/gh-issue-bodies/`** first (source of truth for issue text).  
2. **Sync GitHub** with **`apply-updates.sh`** so live issues match the repo.  
3. Adjust **Status** with **`apply-status.sh`** or the Project UI when workflow changes.

---

## 3. What not to do

- No more **status-doc churn** for its own sake  
- No **fake** community volume  
- No **production threshold weakening** for optics  
- No benchmark overlays  
- No GUI / leaderboard / account work  
- No bulk **In Progress** board noise  

---

## 4. Definition of success (this phase)

This phase **succeeds** when:

- **#34** is **truly closed** with **public install** proof  
- **Hosted ingest** is **live**  
- **Public stats** endpoints return **real** data (not only fallback)  
- **`/data.html`** shows **real** aggregates when thresholds allow  
- **#58–#62** are **closed** in the **right order**  
- The board stays **low-WIP** and **high-quality**  
- The active issue set reads like a **serious operating system**, not a messy backlog  
