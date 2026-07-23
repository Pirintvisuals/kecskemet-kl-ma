import type { Metadata } from "next";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  Receipt,
  UserCheck,
  Layers,
  Leaf,
  Quote,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import AboutVisual from "@/components/AboutVisual";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import CtaBand from "@/components/CtaBand";
import { differentiators, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Rólunk – Polyák Zoltán, klímaszerelő mester | Kecskemét Klíma" },
  description:
    "Ismerje meg a Kecskemét Klímát: Polyák Zoltán klímaszerelő mester, 15+ év tapasztalattal. Megbízható, márkafüggetlen klímaszerelés Kecskeméten, garanciával.",
  openGraph: {
    title: "Rólunk | Kecskemét Klíma",
    description: "Egy megbízható helyi szakember, aki személyesen áll a munkája mögött.",
    locale: "hu_HU",
  },
};

const valueIcons: LucideIcon[] = [
  ShieldCheck,
  Zap,
  Receipt,
  UserCheck,
  Layers,
  Leaf,
];

const quickFacts = [
  "Márkafüggetlen telepítés, karbantartás és javítás",
  "Garancia és számla minden elvégzett munkára",
  "Helyi szakember – gyors kiszállás Kecskeméten",
  "Átlátható árazás, meglepetések nélkül",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[88svh] items-center overflow-hidden pt-28 pb-16">
        <AuroraBackground />
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
              <span className="text-brand-300">Rólunk</span>
            </nav>

            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Rólunk
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                Egy megbízható szakember,{" "}
                <span className="text-brand-300">akire számíthat</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                A {site.brand} mögött {site.owner} klímaszerelő mester áll – több
                mint 15 év szakmai tapasztalattal a fűtés- és klímatechnika
                területén. Nálunk nem egy cég egyik ügyfele lesz, hanem egy
                szakember, aki személyesen felel a munkájáért.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-warm-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
                >
                  <Phone className="h-5 w-5" />
                  {site.phone}
                </a>
                <a
                  href="/kapcsolat/"
                  className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
                >
                  Kapcsolat
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hidden md:block">
            <AboutVisual />
          </div>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              A történetünk
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A fűtéstechnikától a tökéletes klímáig
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                A szakmát a fűtés- és gázkészülékek világában kezdtük, ahol a
                pontosság és a biztonság mindennél fontosabb. Az évek során
                természetes módon bővült a tevékenységünk a klímatechnika felé –
                hiszen a kényelmes otthon nyáron és télen is fontos.
              </p>
              <p>
                Ma már a klímaszerelés minden területével foglalkozunk: új
                készülékek telepítésével, rendszeres karbantartással, javítással
                és szakszerű beüzemeléssel. Márkafüggetlenül dolgozunk, így mindig
                az Ön igényeihez legjobban illő megoldást ajánljuk.
              </p>
              <p>
                A legfontosabb számunkra a bizalom. Ezért adunk minden munkára
                garanciát és számlát, ezért mondunk árat előre, és ezért állunk
                személyesen a munkánk mögött.
              </p>
            </div>
          </Reveal>

          {/* photo + quote + quick facts */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <Photo
                src="/photos/stock-szereles-2.jpg"
                alt="Klímaszerelő szakember munka közben, precíz beszerelés"
                className="aspect-[4/3]"
              />
              <div className="relative overflow-hidden rounded-3xl border border-brand-400/20 bg-navy-800/60 p-8">
                <Quote className="absolute -right-2 -top-2 h-20 w-20 text-brand-500/10" />
                <p className="relative font-display text-xl font-semibold leading-relaxed text-white">
                  „Személy szerint én állok a munkám mögött – ez nem szlogen,
                  hanem ahogy dolgozom.”
                </p>
                <p className="relative mt-4 text-sm text-brand-300">
                  {site.owner}, klímaszerelő mester
                </p>
              </div>

              <div className="rounded-3xl border border-white/8 bg-navy-800/40 p-6">
                <ul className="grid gap-3">
                  {quickFacts.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-brand-100/90">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <Stats />

      {/* ---------------- VALUES ---------------- */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Értékeink
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Amiben hiszünk
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Ezek az elvek vezérlik minden munkánkat – az első hívástól a garancia
              átadásáig.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {differentiators.map((d, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <Reveal key={d.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-2xl border border-white/8 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-navy-800/70">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {d.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              Amivel foglalkozunk
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <a
                  href={`/szolgaltatasok/${s.id}/`}
                  className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/8 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800/70 cursor-pointer"
                >
                  <div>
                    <h3 className="font-display font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.short}</p>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: s.accent }}
                  >
                    Részletek
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CtaBand title="Bízza szakemberre a klímáját" />

      <Footer />
    </>
  );
}
