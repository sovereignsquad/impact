import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import Database from "better-sqlite3";
import { createIngestServer } from "./http-server.js";

const dbPath = process.env.IMPACT_INGEST_DB_PATH?.trim() || resolve(process.cwd(), "data", "ingest.db");
mkdirSync(dirname(dbPath), { recursive: true });
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");

const port = Number(process.env.PORT || "8787");
const host = process.env.HOST || "127.0.0.1";
const server = createIngestServer(db);
server.listen(port, host, () => {
  console.log(`impact-ingest listening on http://${host}:${port} (db: ${dbPath})`);
});
