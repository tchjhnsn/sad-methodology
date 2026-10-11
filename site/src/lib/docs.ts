import { getCollection, type CollectionEntry } from "astro:content";
export type Doc = CollectionEntry<"docs">;
export const all = () => getCollection("docs");
export const byType = async (t: string) => (await all()).filter((d) => d.data.type === t);
export const url = (d: Doc) => `/${d.id}/`;
export function assumed(d: Doc): string {
  const a = Object.values((d.data as any).answers ?? {}) as { basis: string }[];
  return a.length ? `${a.filter((x) => x.basis === "assumed").length} of ${a.length} answers assumed` : "no answers recorded";
}
export const list = (v: unknown) => (Array.isArray(v) ? v.join(", ") : String(v ?? ""));
