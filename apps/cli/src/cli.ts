#!/usr/bin/env node
import { homedir } from "node:os";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Command } from "commander";
import { runScan } from "@impact/core";
import { writeHtmlReport, writeJsonReport } from "@impact/reporting";
import {
  appendLocalReceipt,
  submitProfile,
  writePayloadPreview,
} from "@impact/submission";

const PREAMBLE = `
I.M.P.A.C.T. scans this computer for AI-relevant environment signals: OS, hardware
coarse class, optional GPU hints, detected runtimes (e.g. Ollama), curated tools
on PATH, and models exposed by supported runtimes.

We do not collect serial numbers, hardware UUIDs, usernames, hostnames, file
contents, or environment secrets. A salted coarse fingerprint may be included
for anonymous aggregation if you opt in to submission.
`.trim();

async function promptYesNo(rl: readline.Interface, question: string): Promise<boolean> {
  const a = (await rl.question(`${question} [y/N] `)).trim().toLowerCase();
  return a === "y" || a === "yes";
}

async function promptExact(rl: readline.Interface, question: string, token: string): Promise<boolean> {
  const a = (await rl.question(question)).trim();
  return a === token;
}

const program = new Command();
program.name("impact").description("I.M.P.A.C.T. — privacy-first local AI scanner").version("0.1.0");

program
  .command("scan")
  .description("Run local scan, write impact-profile.json and impact-report.html")
  .option("-o, --output-dir <dir>", "directory for reports", process.cwd())
  .option("--no-readiness", "omit coarse readiness section")
  .option("--no-submit", "do not prompt for anonymous submission")
  .option(
    "--yes-submit",
    "with first prompt accepted, skip typing SUBMIT (dangerous; automation only)"
  )
  .action(
    async (opts: {
      outputDir: string;
      readiness: boolean;
      submit: boolean;
      yesSubmit: boolean;
    }) => {
      const outDir = path.resolve(opts.outputDir);
      console.log(PREAMBLE);
      console.log("\nScanning…\n");

      const profile = await runScan({ includeReadiness: opts.readiness });

      const jsonPath = await writeJsonReport(outDir, profile);
      const htmlPath = await writeHtmlReport(outDir, profile);

      console.log(`Wrote ${jsonPath}`);
      console.log(`Wrote ${htmlPath}`);

      if (!opts.submit) {
        console.log("\nSkipping submission (--no-submit).");
        return;
      }

      const rl = readline.createInterface({ input, output });
      try {
        if (!input.isTTY) {
          console.log("\nNot a TTY: submission prompt skipped. Use IMPACT_SUBMIT_URL and a future flag if needed.");
          return;
        }

        const wants = await promptYesNo(rl, "\nSubmit anonymous profile to configured endpoint?");
        if (!wants) {
          console.log("Not submitting. Your local files are unchanged.");
          return;
        }

        const previewPath = await writePayloadPreview(outDir, profile);
        console.log(`\nExact payload preview written to:\n  ${previewPath}`);
        console.log("\nPayload is the same object as impact-profile.json (anonymised profile).");

        if (!opts.yesSubmit) {
          const ok = await promptExact(
            rl,
            'Type SUBMIT to confirm sending this payload (or press Enter to cancel): ',
            "SUBMIT"
          );
          if (!ok) {
            console.log("Cancelled. Nothing was sent.");
            return;
          }
        }

        const result = await submitProfile(profile);
        if (result.ok) {
          console.log(`\nSubmitted. receipt id: ${result.submission_id}`);
          await appendLocalReceipt(
            homedir(),
            `ok submission_id=${result.submission_id} run_id=${profile.run_id}`
          );
        } else {
          console.error(`\nSubmission failed: ${result.error}`);
          await appendLocalReceipt(homedir(), `fail run_id=${profile.run_id} ${result.error}`);
        }
      } finally {
        rl.close();
      }
    }
  );

program.parseAsync(process.argv);
