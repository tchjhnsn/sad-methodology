import { defineConfig } from "astro/config";

// Generated content lives in src/content/docs (written by `ee publish`, never edited by hand).
export default defineConfig({
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
});
