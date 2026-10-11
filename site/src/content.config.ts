import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Pages written by `ee publish` from the Everything Ecosystem vault. Frontmatter varies by record type,
// so the schema passes everything through; the vault's own validator (ee validate) owns correctness.
const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({ type: z.string().optional() }).passthrough(),
});

export const collections = { docs };
