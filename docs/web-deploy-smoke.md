# Public web shell — deploy and smoke checklist

**Purpose:** operational QA after each deploy of [`apps/web`](../apps/web/) (Vite build → `apps/web/dist/`). **SSOT for build/deploy:** [web.md](web.md). **Product constraints:** [mlp-status-cto.md](mlp-status-cto.md).

**When:** after merge to `main` (or before tagging a release that advertises the site).

---

## URLs to hit

Replace `ORIGIN` with production base (e.g. `https://impact.messmass.com`).

| Path | Check |
| ---- | ----- |
| `ORIGIN/` | Home: hero, truth banner (**Path B** until **#34**), CTAs, no npm-as-primary lie |
| `ORIGIN/install.html` | Path B first; Path C explicitly gated on [#34](https://github.com/moldovancsaba/impact/issues/34) |
| `ORIGIN/use.html` | Scan flow, status vocabulary, links work |
| `ORIGIN/submit.html` | Optional submission, privacy, no silent upload implication |
| `ORIGIN/data.html` | Three sections; **coming soon** / ingest + privacy thresholds clear; **no fake counts** |
| `ORIGIN/profile.html` | Nav works; drop or pick a real `impact-profile.json` → parses and shows runtimes + suggestions |

---

## Navigation

- [ ] Header nav links reach all six surfaces (plus GitHub).
- [ ] Active state highlights current page where applicable.
- [ ] Internal links use site-root paths (`/install.html`, …) suitable for static hosting.

---

## Copy / product truth

- [ ] **No** page implies **npm Path C** is live before **#34** is closed.
- [ ] **No** benchmark or “readiness score” claims beyond discovery scope.
- [ ] **Privacy** language explicit on submit + home FAQ.
- [ ] Historical data: aggregates **not** implied as live.

---

## Profile explorer

- [ ] Valid `impact-profile.json` (`impact.v0.3`) renders summary + runtimes table + suggested steps.
- [ ] Invalid JSON shows a clear error (no silent failure).

---

## Evidence (optional)

Paste checklist result + date into deploy notes, release PR, or a short comment on [#57](https://github.com/moldovancsaba/impact/issues/57) / Vercel deployment thread.

---

## After [#34](https://github.com/moldovancsaba/impact/issues/34) closes

Update **home** and **install** copy so **Path C** is **primary** and **Path B** is **fallback** — tracked under **[#44](https://github.com/moldovancsaba/impact/issues/44)**; re-run this smoke list for install-truth regression.
