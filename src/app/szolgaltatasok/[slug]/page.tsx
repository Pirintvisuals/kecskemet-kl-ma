import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Snowflake,
  Wind,
  Sparkles,
  BadgeCheck,
  CircleDot,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ClimateVisual from "@/components/ClimateVisual";
import ServiceFaq from "@/components/ServiceFaq";
import CtaBand from "@/components/CtaBand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AuroraBackground from "@/components/AuroraBackground";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.id === slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.heroLead,
    openGraph: { title: s.metaTitle, description: s.heroLead, locale: "hu_HU" },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.id === slug);
  if (!s) notFound();

  const accent = s.accent;
  const otherServices = services.filter((x) => x.id !== s.id);

  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        {/* accent wash */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(60% 50% at 80% 20%, ${accent}22, transparent 70%)`,
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            {/* Breadcrumb */}
            <nav
              aria-label="Morzsamenü"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted"
            >
              <a href="/" className="transition-colors hover:text-white cursor-pointer">
                Főoldal
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <a
                href="/#szolgaltatasok"
                className="transition-colors hover:text-white cursor-pointer"
              >
                Szolgáltatások
              </a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span style={{ color: accent }}>{s.title}</span>
            </nav>

            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: accent,
                  backgroundColor: `${accent}1a`,
                  border: `1px solid ${accent}40`,
                }}
              >
                <Snowflake className="h-3.5 w-3.5" />
                {s.heroKicker}
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                {s.title}
                <span className="text-muted"> Kecskeméten</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {s.heroLead}
              </p>

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

              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                {[
                  { icon: ShieldCheck, label: "Garancia + számla" },
                  { icon: Snowflake, label: "Márkafüggetlen" },
                  { icon: Wind, label: "Átlátható ár" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" style={{ color: accent }} />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <ClimateVisual accent={accent} />
          </div>
        </div>
      </section>

      {/* ---------------- OVERVIEW + BENEFITS ---------------- */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {s.overviewTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{s.overview}</p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-white/8 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70">
                  <div
                    className="mb-4 grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: `${accent}1f`, color: accent }}
                  >
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INCLUDED + SIGNALS ---------------- */}
      <section className="relative py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          {/* Included */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/8 bg-navy-800/50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: `${accent}1f`, color: accent }}
                >
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {s.includedTitle}
                </h3>
              </div>
              <ul className="grid gap-3">
                {s.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-100/90">
                    <span
                      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                      style={{ backgroundColor: `${accent}26`, color: accent }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Signals + price */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-white/8 bg-navy-800/50 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{ backgroundColor: `${accent}1f`, color: accent }}
                  >
                    <CircleDot className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {s.signalsTitle}
                  </h3>
                </div>
                <ul className="grid gap-3">
                  {s.signals.map((sig) => (
                    <li key={sig} className="flex items-start gap-3 text-brand-100/90">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      {sig}
                    </li>
                  ))}
                </ul>
              </div>

              {/* price note */}
              <div
                className="rounded-3xl border p-6"
                style={{
                  borderColor: `${accent}33`,
                  background: `linear-gradient(135deg, ${accent}14, transparent)`,
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>
                  Árazás
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-brand-100/90">
                  {s.priceNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WORK PHOTOS ---------------- */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-white">
              Így néz ki egy {s.title.toLowerCase()}
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <ImagePlaceholder
                label="Előtte"
                hint={`Fotó a ${s.title.toLowerCase()} előtt`}
                minH="min-h-[260px]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ImagePlaceholder
                label="Utána"
                hint="A kész, elvégzett munka"
                minH="min-h-[260px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: accent, backgroundColor: `${accent}1a`, border: `1px solid ${accent}40` }}
            >
              Így zajlik
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Egyszerű, átlátható folyamat
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div
              className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
            />
            <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {s.steps.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <li className="relative flex flex-col items-center text-center">
                    <div
                      className="relative z-10 mb-5 grid h-14 w-14 place-items-center rounded-full font-display text-lg font-bold text-white"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 0 0 6px ${accent}22, 0 16px 40px -14px ${accent}`,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                      {p.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Gyakori kérdések – {s.title.toLowerCase()}
            </h2>
          </Reveal>
          <div className="mt-12">
            <ServiceFaq items={s.faqs} accent={accent} />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CtaBand
        accent={accent}
        title={`Szüksége van rá? ${s.title} gyorsan, garanciával`}
      />

      {/* ---------------- OTHER SERVICES ---------------- */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              További szolgáltatásaink
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {otherServices.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.06}>
                <a
                  href={`/szolgaltatasok/${o.id}/`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-navy-800/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 cursor-pointer"
                  style={{ ["--a" as string]: o.accent }}
                >
                  <div>
                    <h3 className="font-display font-bold text-white">{o.title}</h3>
                    <p className="text-sm text-muted">{o.short}</p>
                  </div>
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
