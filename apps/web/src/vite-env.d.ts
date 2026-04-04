/// <reference types="vite/client" />

/** Injected by Vite `define` in vite.config.ts — keep in sync with `apps/web/package.json` and profile schema. */
declare const __IMPACT_WEB_VERSION__: string;
declare const __IMPACT_PROFILE_SCHEMA_VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_STATS_API_BASE?: string;
}
