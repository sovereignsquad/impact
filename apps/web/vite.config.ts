import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        install: path.resolve(__dirname, "install.html"),
        use: path.resolve(__dirname, "use.html"),
        submit: path.resolve(__dirname, "submit.html"),
        data: path.resolve(__dirname, "data.html"),
        profile: path.resolve(__dirname, "profile.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@impact/schemas": path.resolve(__dirname, "../../packages/schemas/src/index.ts"),
      "@impact/reporting/recommendations": path.resolve(
        __dirname,
        "../../packages/reporting/src/recommendations.ts"
      ),
    },
  },
  server: {
    port: 5173,
  },
});
