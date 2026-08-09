/**
 * Egyszeri migráció: a src/lib/brands.ts tartalmát JSON-ba exportálja a PHP
 * katalógusmotorhoz.
 *
 *   - public/klimak/data/brands.json         → márkaszintű tartalom (fix)
 *   - public/klimak/data/models/<brand>.json → modellek (Zoltán szerkeszti)
 *
 * A modellek gazdag `detail` adatait egy olvasható, szerkeszthető markdown
 * `body` szöveggé alakítjuk, hogy a blog-szerű egyszerű szerkesztőben módosítható
 * legyen – tartalomvesztés nélkül.
 *
 * Futtatás:  npx tsx scripts/export-brands.ts
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { brandPages, type BrandModel } from "../src/lib/brands";

const OUT = join(process.cwd(), "public", "klimak", "data");
const MODELS_DIR = join(OUT, "models");
mkdirSync(MODELS_DIR, { recursive: true });

function modelBody(m: BrandModel): string {
  const d = m.detail;
  const parts: string[] = [];
  if (d?.overview) parts.push(d.overview);

  if (d?.highlights?.length) {
    parts.push("## Főbb előnyök");
    parts.push(d.highlights.map((h) => `- **${h.title}:** ${h.text}`).join("\n"));
  }
  if (d?.bestFor?.length) {
    parts.push("## Kinek ajánljuk?");
    parts.push(d.bestFor.map((b) => `- ${b}`).join("\n"));
  }
  if (d?.specs?.length) {
    parts.push("## Főbb jellemzők");
    parts.push(d.specs.map((s) => `- **${s.label}:** ${s.value}`).join("\n"));
  }
  if (d?.faq?.length) {
    parts.push("## Gyakori kérdések");
    for (const f of d.faq) {
      parts.push(`### ${f.q}`);
      parts.push(f.a);
    }
  }
  return parts.join("\n\n");
}

const brandsMeta = brandPages.map((b) => ({
  slug: b.slug,
  name: b.name,
  logo: b.logo,
  accent: b.accent,
  tagline: b.tagline,
  metaTitle: b.metaTitle,
  intro: b.intro,
  strengths: b.strengths,
  highlight: b.highlight ?? null,
  video: b.video ?? null,
  infoSections: b.infoSections ?? null,
  faq: b.faq ?? null,
  featuredSeries: b.featuredSeries ?? null,
  photos: b.photos ?? null,
}));

writeFileSync(
  join(OUT, "brands.json"),
  JSON.stringify(brandsMeta, null, 2),
  "utf8",
);

// Windows fenntartott eszköznevek nem lehetnek fájlnevek (pl. aux.json) → "_".
const RESERVED = new Set([
  "con", "prn", "aux", "nul",
  "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9",
  "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9",
]);
const modelFileName = (slug: string) =>
  (RESERVED.has(slug.toLowerCase()) ? slug + "_" : slug) + ".json";

let modelCount = 0;
for (const b of brandPages) {
  const models = b.models.map((m, i) => ({
    id: m.slug ?? `${b.slug}-${i + 1}`,
    slug: m.slug ?? `${b.slug}-${i + 1}`,
    name: m.name,
    positioning: m.positioning,
    summary: m.summary ?? "",
    features: m.features ?? [],
    image: "",
    body: modelBody(m),
    order: i,
    published: true,
  }));
  modelCount += models.length;
  writeFileSync(
    join(MODELS_DIR, modelFileName(b.slug)),
    JSON.stringify(models, null, 2),
    "utf8",
  );
}

console.log(
  `Kész: ${brandsMeta.length} márka -> brands.json, ${modelCount} modell -> models/*.json`,
);
