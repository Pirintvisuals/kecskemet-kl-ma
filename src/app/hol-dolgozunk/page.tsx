import type { Metadata } from "next";
import { MapPin, ChevronRight, Clock, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import MapEmbed from "@/components/MapEmbed";
import CtaBand from "@/components/CtaBand";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Hol dolgozunk – Kecskemét és 30 km-es körzete | Kecskemét Klíma" },
  description:
    "Klímaszerelés Kecskeméten és környékén: Lajosmizse, Kerekegyháza, Kiskunfélegyháza és más helységekben. Gyors kiszállás, megbízható időpontok.",
  openGraph: {
    title: "Hol dolgozunk | Kecskemét Klíma",
    description: "Kecskemét és 30 km-es körzete – gyors kiszállás, megbízható időpontok.",
    locale: "hu_HU",
  },
};

const highlights = [
  {
    icon: Zap,
    title: "Gyors kiszállás",
    text: "Kecskeméten és a közelben rövid határidővel érkezünk.",
  },
  {
    icon: Clock,
    title: "Rugalmas időpontok",
    text: "Hétfőtől péntekig 8–17 óra között, Önnek megfelelő időpontban.",
  },
  {
    icon: MapPin,
    title: "Helyi szakember",
    text: "Helyiként gyorsan ott vagyunk – nincs felesleges várakozás.",
  },
];

export default function HolDolgozunkPage() {
  return (
    <>
      <Navbar />

      {/* ---- HERO ---- */}
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
            <span className="text-brand-300">Hol dolgozunk</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <MapPin className="h-3.5 w-3.5" />
              Kiszállási terület
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Kecskemét és{" "}
              <span className="text-brand-300">{site.serviceRadiusKm} km-es körzete</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Helyi szakemberként gyorsan ott vagyunk. Ha a települése nincs a
              listán, hívjon – nagy eséllyel Önhöz is kimegyünk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- HIGHLIGHTS ---- */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-navy-800/40 p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- RADAR + CITIES ---- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Cities */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Helységek
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ezekbe a helységekbe járunk ki
              </h2>
              <p className="mt-3 text-muted">
                Ha a listán nem szerepel a települése, akkor is hívjon bátran –
                a {site.serviceRadiusKm} km-es körzeten belül szívesen kimegyünk.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-800/60 px-3.5 py-2 text-sm text-brand-100 transition-colors hover:border-brand-400/40 hover:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-300" />
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Radar */}
            <Reveal delay={0.15}>
              <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
                <div className="absolute inset-0 rounded-full bg-brand-500/15 blur-3xl" />
                {[0, 1, 2, 3].map((r) => (
                  <div
                    key={r}
                    className="absolute rounded-full border border-brand-400/20"
                    style={{ inset: `${r * 12}%` }}
                  />
                ))}
                <div
                  className="absolute inset-[0%] animate-[spin_6s_linear_infinite] rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, rgba(72,168,240,0.28) 40deg, transparent 90deg)",
                    maskImage: "radial-gradient(circle, #000 62%, transparent 63%)",
                    WebkitMaskImage: "radial-gradient(circle, #000 62%, transparent 63%)",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-1 rounded-2xl bg-brand-500 px-5 py-3 text-white shadow-[0_16px_50px_-16px_rgba(10,108,212,0.95)]">
                  <MapPin className="h-6 w-6" />
                  <span className="font-display text-sm font-bold">Kecskemét</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- MAP ---- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ahol megtalál minket
            </h2>
          </Reveal>
          <Reveal>
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <CtaBand
        title="Nem tudja, hogy kijövünk-e Önhöz?"
        text="Hívjon, és azonnal megmondjuk – a legtöbb környékbeli helységbe gyorsan tudunk menni."
      />

      <Footer />
    </>
  );
}
