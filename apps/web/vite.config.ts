import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@impact/schemas": path.resolve(__dirname, "../../packages/schemas/src/index.ts"),
    },
  },
  server: {
    port: 5173,
  },
});
