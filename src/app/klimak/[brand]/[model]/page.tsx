import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  Check,
  Snowflake,
  Wifi,
  Flame,
  Leaf,
  Wind,
  Thermometer,
  Volume2,
  Globe,
  ShieldCheck,
  PiggyBank,
  Gauge,
  Sparkles,
  HelpCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import ClimateVisual from "@/components/ClimateVisual";
import CtaBand from "@/components/CtaBand";
import { modelPages, modelBySlug, brandBySlug } from "@/lib/brands";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return modelPages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}): Promise<Metadata> {
  const { brand, model } = await params;
  const found = modelBySlug(brand, model);
  if (!found) return {};
  const { brand: b, model: m } = found;
  const title = `${b.name} ${m.name} klíma Kecskeméten – telepítés, ár, jellemzők | Kecskemét Klíma`;
  return {
    title: { absolute: title },
    description: m.detail!.overview.slice(0, 155),
    openGraph: {
      title: `${b.name} ${m.name} klíma | Kecskemét Klíma`,
      description: m.detail!.tagline,
      locale: "hu_HU",
    },
  };
}

const detailIcon: Record<string, LucideIcon> = {
  wifi: Wifi,
  flame: Flame,
  leaf: Leaf,
  wind: Wind,
  thermometer: Thermometer,
  volume: Volume2,
  globe: Globe,
  shield: ShieldCheck,
  piggybank: PiggyBank,
  gauge: Gauge,
  sparkles: Sparkles,
  snowflake: Snowflake,
};

export default async function ModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand, model } = await params;
  const found = modelBySlug(brand, model);
  if (!found) notFound();

  const { brand: b, model: m } = found;
  const d = m.detail!;
  const accent = b.accent;
  const otherModels = b.models.filter((x) => x.slug && x.slug !== m.slug);

  const faqJsonLd =
    d.faq && d.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: d.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(60% 50% at 80% 20%, ${accent}22, transparent 70%)` }}
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div>
            <nav
              aria-label="Morzsamenü"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted"
            >
              <a href="/" className="transition-colors hover:text-white cursor-pointer">
                Főoldal
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <a href="/klimak/" className="transition-colors hover:text-white cursor-pointer">
                Márkák
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <a
                href={`/klimak/${b.slug}/`}
                className="transition-colors hover:text-white cursor-pointer"
              >
                {b.name}
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span style={{ color: accent }}>{m.name}</span>
            </nav>

            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-14 w-32 items-center justify-center rounded-2xl bg-white/95 px-4 ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.logo}
                    alt={`${b.name} klíma logó`}
                    className="max-h-9 w-auto max-w-full object-contain"
                  />
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
                >
                  <Snowflake className="h-3.5 w-3.5" />
                  {m.positioning}
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {b.name} {m.name}
                <span className="text-muted"> klíma Kecskeméten</span>
              </h1>
              <p className="mt-3 text-lg font-medium" style={{ color: accent }}>
                {d.tagline}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {d.overview}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {m.features.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-950/50 px-3 py-1 text-xs text-brand-100/90"
                  >
                    <Check className="h-3 w-3" style={{ color: accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-warm-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
                >
                  <Phone className="h-5 w-5" />
                  {site.phone}
                </a>
                <a
                  href="/kapcsolat/"
                  className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
                >
                  Ingyenes árajánlat erre a típusra
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hidden md:block">
            <ClimateVisual accent={accent} />
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHTS ---------------- */}
      <section className="relative py-16">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
            >
              Főbb előnyök
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Miért a {b.name} {m.name}?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.highlights.map((h, i) => {
              const Icon = detailIcon[h.icon] ?? Check;
              return (
                <Reveal key={h.title} delay={(i % 4) * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/80">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{ backgroundColor: `${accent}1a`, color: accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {h.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- BEST FOR + SPECS ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* best for */}
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/40 p-7 sm:p-8">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: `${accent}1a`, color: accent }}
                >
                  <Users className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-white">
                  Kinek ajánljuk?
                </h2>
                <ul className="mt-5 space-y-3">
                  {d.bestFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-100/90">
                      <span
                        className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
                        style={{ backgroundColor: `${accent}26`, color: accent }}
                      >
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* specs */}
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-white/8 bg-navy-800/40">
                <div className="border-b border-white/8 px-7 py-5">
                  <h2 className="font-display text-2xl font-bold text-white">
                    {b.name} {m.name} – főbb jellemzők
                  </h2>
                </div>
                <dl>
                  {d.specs.map((s, i) => (
                    <div
                      key={s.label}
                      className={`flex items-center justify-between gap-4 px-7 py-3.5 text-sm ${
                        i !== d.specs.length - 1 ? "border-b border-white/8" : ""
                      }`}
                    >
                      <dt className="text-muted">{s.label}</dt>
                      <dd className="text-right font-semibold text-brand-50">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            A pontos teljesítményt és konfigurációt a helyiség alapján, az ingyenes
            felmérésen közösen választjuk ki.
          </p>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      {d.faq && d.faq.length > 0 && (
        <section className="relative py-16">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
          />
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
              >
                <HelpCircle className="h-3.5 w-3.5" />
                GYIK
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Gyakori kérdések – {b.name} {m.name}
              </h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {d.faq.map((item, i) => (
                <Reveal key={item.q} delay={(i % 3) * 0.06}>
                  <details className="group rounded-2xl border border-white/8 bg-navy-800/50 p-5 open:bg-navy-800/80 sm:p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-white">
                      {item.q}
                      <ChevronRight
                        className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-90"
                        style={{ color: accent }}
                      />
                    </summary>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- CTA ---------------- */}
      <CtaBand accent={accent} title={`Kérjen ajánlatot a ${b.name} ${m.name} típusra`} />

      {/* ---------------- OTHER MODELS ---------------- */}
      {otherModels.length > 0 && (
        <section className="relative pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="mb-8 font-display text-2xl font-bold text-white">
                További {b.name} modellek
              </h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {otherModels.map((o, i) => (
                <Reveal key={o.slug} delay={(i % 3) * 0.06}>
                  <a
                    href={`/klimak/${b.slug}/${o.slug}/`}
                    className="group flex h-full flex-col rounded-2xl border border-white/8 bg-navy-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-lg font-bold text-white">
                        {b.name} {o.name}
                      </span>
                      <ArrowRight
                        className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: accent }}
                      />
                    </div>
                    {o.summary && (
                      <span className="mt-2 text-sm text-muted">{o.summary}</span>
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              <a href={`/klimak/${b.slug}/`} className="font-semibold" style={{ color: accent }}>
                ← Vissza az összes {b.name} modellhez
              </a>
            </p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
