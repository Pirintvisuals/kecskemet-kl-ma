import type { Metadata } from "next";
import { ChevronRight, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import CtaBand from "@/components/CtaBand";
import { brandPages } from "@/lib/brands";

export const metadata: Metadata = {
  title: { absolute: "Klímamárkák Kecskeméten – Daikin, Mitsubishi, Gree, LG, Panasonic, AUX, Polár | Kecskemét Klíma" },
  description:
    "Márkafüggetlen prémium klímaszerelés Kecskeméten. Ismerje meg a telepített klímamárkákat és típusaikat: Daikin, Mitsubishi Electric, Gree (akár 10 év garancia), LG, Panasonic, AUX, Polár és társai.",
  openGraph: {
    title: "Klímamárkák | Kecskemét Klíma",
    description: "A legnépszerűbb klímamárkák telepítése és szervize Kecskeméten.",
    locale: "hu_HU",
  },
};

export default function BrandsIndex() {
  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <AuroraBackground />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <nav
            aria-label="Morzsamenü"
            className="mb-6 flex items-center justify-center gap-1.5 text-sm text-muted"
          >
            <a href="/" className="transition-colors hover:text-white cursor-pointer">
              Főoldal
            </a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-300">Márkák</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Klímamárkák
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Márkafüggetlen szerviz –{" "}
              <span className="text-brand-300">az Ön kedvenc márkája</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A legnépszerűbb gyártók készülékeit telepítjük, karbantartjuk és
              javítjuk. Válassza ki a márkát, és nézze meg, milyen típusokkal
              dolgozunk – vagy hívjon, és segítünk a döntésben.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BRAND GRID ---------------- */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {brandPages.map((b, i) => (
              <Reveal key={b.slug} delay={(i % 3) * 0.08}>
                <a
                  href={`/klimak/${b.slug}/`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-navy-800/50 p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/80 cursor-pointer"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${b.accent}33` }}
                  />
                  <div className="relative flex items-center justify-between gap-4">
                    <span className="flex h-16 w-32 items-center justify-center rounded-2xl bg-white/95 px-4 ring-1 ring-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={b.logo}
                        alt={`${b.name} klíma logó`}
                        loading="lazy"
                        className="max-h-10 w-auto max-w-full object-contain"
                      />
                    </span>
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                      style={{ backgroundColor: `${b.accent}1f`, color: b.accent }}
                    >
                      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <h2 className="relative mt-4 font-display text-2xl font-bold text-white">
                    {b.name}
                  </h2>
                  <p className="relative mt-1 text-sm font-medium" style={{ color: b.accent }}>
                    {b.tagline}
                  </p>
                  <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                    {b.intro.split(".")[0]}.
                  </p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {b.models.slice(0, 4).map((m) => (
                      <span
                        key={m.name}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-navy-950/50 px-2.5 py-1 text-xs text-brand-100/90"
                      >
                        <Check className="h-3 w-3" style={{ color: b.accent }} />
                        {m.name}
                      </span>
                    ))}
                    {b.models.length > 4 && (
                      <span className="rounded-full border border-white/10 bg-navy-950/50 px-2.5 py-1 text-xs text-muted">
                        +{b.models.length - 4}
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Nem tudja, melyik márkát válassza?" text="Hívjon, és segítünk kiválasztani az igényeihez és költségvetéséhez legjobban illő klímát." />

      <Footer />
    </>
  );
}
