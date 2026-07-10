import type { Metadata } from "next";
import {
  Wrench,
  Sparkles,
  Stethoscope,
  Gauge,
  Check,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { services, type Service } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Szolgáltatások – Klímaszerelés, karbantartás, javítás | Kecskemét Klíma" },
  description:
    "Klíma telepítés, karbantartás, javítás és beüzemelés Kecskeméten és 30 km-es körzetében. Garanciával és számlával – egy megbízható szakembertől.",
  openGraph: {
    title: "Szolgáltatások | Kecskemét Klíma",
    description: "Klíma telepítés, karbantartás, javítás, beüzemelés – Kecskeméten, garanciával.",
    locale: "hu_HU",
  },
};

const iconMap: Record<Service["icon"], LucideIcon> = {
  install: Wrench,
  maintain: Sparkles,
  repair: Stethoscope,
  commission: Gauge,
};

export default function ServicesPage() {
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
            <span className="text-brand-300">Szolgáltatások</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Szolgáltatások
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Mindent egy helyről,{" "}
              <span className="text-brand-300">garanciával</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A megfelelő készülék kiválasztásától a beüzemelésen és karbantartáson
              át a javításig – egy megbízható kecskeméti szakembertől, számlával.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- SERVICE CARDS ---- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <Reveal key={s.id} delay={i * 0.08}>
                  <a
                    href={`/szolgaltatasok/${s.id}/`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-navy-800/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-navy-800/80 cursor-pointer"
                    style={{ ["--accent" as string]: s.accent }}
                  >
                    {/* hover glow */}
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: `${s.accent}2a` }}
                    />

                    <div className="relative flex items-start gap-4">
                      <div
                        className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                        style={{
                          backgroundColor: `${s.accent}22`,
                          color: s.accent,
                          boxShadow: `inset 0 0 0 1px ${s.accent}44`,
                        }}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-white">
                          {s.title}
                        </h2>
                        <p className="text-sm font-medium" style={{ color: s.accent }}>
                          {s.short}
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-5 text-[15px] leading-relaxed text-muted">
                      {s.description}
                    </p>

                    <ul className="relative mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-brand-100/90"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: s.accent }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <span
                      className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-white"
                      style={{ color: s.accent }}
                    >
                      Részletek és GYIK
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- PROCESS ---- */}
      <Process />

      {/* ---- CTA ---- */}
      <CtaBand title="Nem tudja, melyik szolgáltatásra van szüksége?" text="Hívjon, és segítünk felmérni – ingyenes tanácsadással és átlátható árajánlattal." />

      <Footer />
    </>
  );
}
