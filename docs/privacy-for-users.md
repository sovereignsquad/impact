# Privacy & trust — for users

**Plain-language guide.** Authoritative legal-style wording: [privacy-policy.md](privacy-policy.md). Technical wire format: [submission-contract.md](submission-contract.md).

---

## What IMPACT collects

When you run a **scan**, the tool looks at **your computer** in a bounded way:

- **Operating system** type and version (as the OS reports).
- **Hardware class** in coarse terms — for example CPU architecture, approximate memory, generic CPU model string, approximate free disk space where the OS allows it.
- **GPU / acceleration hints** only where the implementation can report them conservatively (e.g. Metal on Apple systems).
- **Allowlisted command-line tools** on your `PATH` and their versions, when those tools respond to version commands.
- **Supported AI runtimes** (e.g. Ollama) — install/version and, when reachable on **localhost**, models the runtime exposes via its API.

Each field in the machine-readable **profile** records **how** it was obtained (**probe**, **source**) and **confidence** — so you can see what is solid vs uncertain.

---

## What IMPACT does not collect

By design, the scanner does **not** intentionally collect or send:

- Raw **hardware serial numbers** or vendor UUIDs  
- **Usernames**, real **hostnames**, or home directory paths as identifiers  
- Contents of **arbitrary files**  
- **Clipboard**, keystrokes, or screen captures  
- Broad **environment variables** (the implementation avoids secret-bearing env)

---

## When data leaves your machine

**By default: never.** A normal scan with `--no-submit` writes files **only** to the folder you choose (e.g. `impact-profile.json`, `impact-report.html`).

**Optional submission** only happens if **all** of the following are true:

1. You set a submission endpoint (e.g. `IMPACT_SUBMIT_URL`).  
2. You run without `--no-submit` and go through the **interactive** consent flow.  
3. You **confirm** after seeing what will be sent.

Before any HTTP request, the CLI can write **`impact-submission-preview.json`** — that file is the **exact** JSON body that would be posted. Open it and verify before you confirm.

After an attempt, **`impact-submission-receipt.json`** (and a small local log under `~/.impact/`) records **outcome** for your audit trail. Your original profile and HTML report are **not** modified by submission.

---

## Fingerprinting (anonymous aggregation)

If you submit, the payload may include a **coarse fingerprint** derived from non-identifying host facts plus a **random salt** stored **only on your machine** (`~/.impact/salt`). It supports anonymous aggregation; it is **not** your hardware serial.

---

## Short FAQ

**Can I run IMPACT without internet?**  
Yes for the default scan. Detection uses local APIs and localhost services only. Upload requires you to configure an endpoint and consent.

**Is my chat or model content uploaded?**  
No. The scanner inventories **environment** signals (runtimes, tools, model names exposed by APIs), not prompts or generations.

**What if I disagree with a field?**  
The JSON shows **provenance** and **confidence**. Prefer **`unknown`** or **low confidence** over wrong certainty — [support-matrix.md](support-matrix.md) explains platform limits.

**Where is the formal policy?**  
[privacy-policy.md](privacy-policy.md).
