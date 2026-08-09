import type { MetadataRoute } from "next";
import { services } from "@/lib/site";
import { brandPages, modelPages } from "@/lib/brands";

export const dynamic = "force-static";

const BASE = "https://kecskemetklima.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/szolgaltatasok",
    "/hol-dolgozunk",
    "/gyik",
    "/rolunk",
    "/kapcsolat",
    "/klimak",
    "/blog",
    "/impresszum",
    "/adatkezeles",
  ];
  const servicePaths = services.map((s) => `/szolgaltatasok/${s.id}`);
  const brandPaths = brandPages.map((b) => `/klimak/${b.slug}`);
  const modelPaths = modelPages.map((m) => `/klimak/${m.brand}/${m.model}`);

  return [...staticPaths, ...servicePaths, ...brandPaths, ...modelPaths].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
