import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  Check,
  Snowflake,
  Wrench,
  Sparkles,
  Stethoscope,
  Gauge,
  Wifi,
  Flame,
  Leaf,
  Wind,
  Thermometer,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import ClimateVisual from "@/components/ClimateVisual";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBand from "@/components/CtaBand";
import { brandPages, brandBySlug } from "@/lib/brands";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return brandPages.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;
  const b = brandBySlug(brand);
  if (!b) return {};
  return {
    title: { absolute: b.metaTitle },
    description: b.intro.slice(0, 155),
    openGraph: { title: b.metaTitle, description: b.tagline, locale: "hu_HU" },
  };
}

const serviceIcon: Record<string, LucideIcon> = {
  install: Wrench,
  maintain: Sparkles,
  repair: Stethoscope,
  commission: Gauge,
};

const techIcon: Record<string, LucideIcon> = {
  wifi: Wifi,
  flame: Flame,
  leaf: Leaf,
  wind: Wind,
  thermometer: Thermometer,
  volume: Volume2,
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const b = brandBySlug(brand);
  if (!b) notFound();

  const accent = b.accent;
  const others = brandPages.filter((x) => x.slug !== b.slug);

  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[86svh] items-center overflow-hidden pt-28 pb-16">
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
              <span style={{ color: accent }}>{b.name}</span>
            </nav>

            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-16 w-36 items-center justify-center rounded-2xl bg-white/95 px-5 ring-1 ring-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.logo}
                    alt={`${b.name} klíma logó`}
                    className="max-h-10 w-auto max-w-full object-contain"
                  />
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
                >
                  <Snowflake className="h-3.5 w-3.5" />
                  Klímamárka
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {b.name} klímák
                <span className="text-muted"> Kecskeméten</span>
              </h1>
              <p className="mt-3 text-lg font-medium" style={{ color: accent }}>
                {b.tagline}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                {b.intro}
              </p>

              {b.highlight && (
                <div
                  className="mt-6 flex items-start gap-3 rounded-2xl border p-4"
                  style={{ borderColor: `${accent}40`, background: `${accent}12` }}
                >
                  <span
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-xs font-bold"
                    style={{ backgroundColor: `${accent}26`, color: accent }}
                  >
                    10
                  </span>
                  <p className="text-[15px] leading-relaxed text-brand-50">{b.highlight}</p>
                </div>
              )}

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
                  Ingyenes árajánlat
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

      {/* ---------------- STRENGTHS ---------------- */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Miért jó választás a{" "}
              <span style={{ color: accent }}>{b.name}</span>?
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {b.strengths.map((str, i) => (
              <Reveal key={str} delay={(i % 2) * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-navy-800/50 p-5">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: `${accent}26`, color: accent }}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-brand-100/90">{str}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED SERIES (rich showcase) ---------------- */}
      {b.featuredSeries && (
        <section className="relative py-16">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
          />
          <div className="mx-auto max-w-7xl px-6">
            {/* header + hero image */}
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_0.95fr]">
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
                >
                  <Snowflake className="h-3.5 w-3.5" />
                  Kiemelt széria
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {b.name} {b.featuredSeries.name}
                </h2>
                <p className="mt-2 text-lg font-medium" style={{ color: accent }}>
                  {b.featuredSeries.tagline}
                </p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                  {b.featuredSeries.intro}
                </p>
                <a
                  href="/kapcsolat/"
                  className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ backgroundColor: accent }}
                >
                  Ajánlatot kérek a {b.featuredSeries.name} szériára
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>

              <Reveal delay={0.08}>
                {b.featuredSeries.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={b.featuredSeries.image}
                    alt={`${b.name} ${b.featuredSeries.name} klíma`}
                    className="w-full rounded-3xl object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    label={`${b.name} ${b.featuredSeries.name}`}
                    hint="A beltéri egység fényképe kerül ide"
                    minH="min-h-[300px]"
                  />
                )}
              </Reveal>
            </div>

            {/* capacity / kW variants */}
            <Reveal className="mt-14">
              <h3 className="font-display text-xl font-bold text-white">
                Elérhető teljesítmények
              </h3>
              <p className="mt-1 text-sm text-muted">
                A megfelelő méretet a helyiség alapján a felmérésen közösen választjuk ki – a szobaméret csak tájékoztató.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {b.featuredSeries.capacities.map((c, i) => (
                <Reveal key={c.model} delay={(i % 4) * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/80">
                    <span className="font-display text-3xl font-extrabold text-white">
                      {c.power}
                    </span>
                    <span className="mt-1 text-sm font-medium" style={{ color: accent }}>
                      {c.room}
                    </span>
                    <span className="mt-4 rounded-lg bg-navy-950/50 px-2.5 py-1 font-mono text-[11px] text-muted">
                      {c.model}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* technology blocks */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {b.featuredSeries.technologies.map((t, i) => {
                const Icon = techIcon[t.icon] ?? Check;
                return (
                  <Reveal key={t.title} delay={(i % 3) * 0.06}>
                    <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/40 p-6">
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl"
                        style={{ backgroundColor: `${accent}1a`, color: accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-4 font-display text-lg font-bold text-white">
                        {t.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">
                        {t.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* spec strip */}
            <Reveal className="mt-8">
              <div className="overflow-hidden rounded-3xl border border-white/8 bg-navy-800/40">
                <div className="border-b border-white/8 px-6 py-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    {b.name} {b.featuredSeries.name} – főbb jellemzők
                  </h3>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2">
                  {b.featuredSeries.specs.map((s, i) => (
                    <div
                      key={s.label}
                      className={`flex items-center justify-between gap-4 px-6 py-3.5 text-sm ${
                        i % 2 === 0 ? "sm:border-r sm:border-white/8" : ""
                      } border-b border-white/8`}
                    >
                      <dt className="text-muted">{s.label}</dt>
                      <dd className="text-right font-semibold text-brand-50">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- MODELS ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
            >
              Típusok
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {b.name} modellek, amiket telepítünk
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Segítünk kiválasztani az igényeihez és költségvetéséhez legjobban
              illő típust – majd szakszerűen telepítjük és karbantartjuk.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {b.models.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/50 p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/80">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {b.name} {m.name}
                    </h3>
                    <span
                      className="rounded-full px-2.5 py-1 text-xs font-semibold"
                      style={{ backgroundColor: `${accent}1f`, color: accent }}
                    >
                      {m.positioning}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                    {m.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-white/10 bg-navy-950/50 px-3 py-1 text-xs text-brand-100/90"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/kapcsolat/"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: accent }}
                  >
                    Érdeklődöm erről a típusról
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Nem találja a keresett típust? {b.name} készülékek széles választékát
            telepítjük –{" "}
            <a href={site.phoneHref} className="font-semibold" style={{ color: accent }}>
              hívjon
            </a>{" "}
            és segítünk a választásban.
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES FOR THIS BRAND ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-white">
              Teljes körű {b.name} szerviz egy helyen
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcon[s.icon];
              return (
                <Reveal key={s.id} delay={i * 0.06}>
                  <a
                    href={`/szolgaltatasok/${s.id}/`}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-white/8 bg-navy-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 cursor-pointer"
                  >
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                      style={{ backgroundColor: `${accent}1a`, color: accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display font-semibold text-white">
                      {s.title}
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CtaBand accent={accent} title={`Kérjen ajánlatot ${b.name} klímára`} />

      {/* ---------------- OTHER BRANDS ---------------- */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              További márkák
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.06}>
                <a
                  href={`/klimak/${o.slug}/`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-navy-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 cursor-pointer"
                >
                  <span className="font-display font-bold text-white">{o.name}</span>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: o.accent }}
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
