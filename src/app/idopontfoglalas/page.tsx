import type { Metadata } from "next";
import {
  CalendarCheck,
  ChevronRight,
  Phone,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Wind,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import BookingForm from "@/components/BookingForm";
import { bookingBenefits } from "@/lib/booking";
import { processSteps, serviceAreas, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Időpontfoglalás – Foglaljon klímaszerelőt online | Kecskemét Klíma",
  },
  description:
    "Foglaljon időpontot klímatelepítésre, karbantartásra vagy javításra pár kattintással. Válasszon szolgáltatást, dátumot és idősávot – gyors visszaigazolás telefonon. Kecskemét és 30 km-es körzete.",
  openGraph: {
    title: "Időpontfoglalás | Kecskemét Klíma",
    description:
      "Foglaljon klímaszerelőt online – szolgáltatás, dátum és idősáv pár kattintással.",
    locale: "hu_HU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Klímaszerelés időpontfoglalás",
  provider: { "@type": "HVACBusiness", name: site.brand, telephone: site.phone },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://kecskemetklima.hu/idopontfoglalas/",
    servicePhone: site.phone,
  },
};

export default function BookingPage() {
  const assurances = [
    { icon: BadgeCheck, text: "Ingyenes, kötelezettségmentes foglalás" },
    { icon: Phone, text: "Visszaigazolás telefonon, a pontos időpontról" },
    { icon: ShieldCheck, text: "Garancia és számla minden munkára" },
    { icon: Clock, text: "Gyors kiszállás – rövid határidővel" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-32 pb-14">
        <AuroraBackground dense />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <nav
            aria-label="Morzsamenü"
            className="mb-6 flex items-center justify-center gap-1.5 text-sm text-muted"
          >
            <a href="/" className="transition-colors hover:text-white cursor-pointer">
              Főoldal
            </a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-300">Időpontfoglalás</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <CalendarCheck className="h-3.5 w-3.5" />
              Online időpontfoglalás
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Foglaljon klímaszerelőt{" "}
              <span className="text-brand-300">pár kattintással</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Válassza ki a szolgáltatást, a kényelmes dátumot és idősávot, adja
              meg az elérhetőségét – a többit ránk bízhatja. A foglalást
              telefonon visszaigazoljuk, és egyeztetjük a pontos időpontot.
            </p>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-brand-100/90">
              {assurances.map((a) => (
                <li key={a.text} className="inline-flex items-center gap-2">
                  <a.icon className="h-4 w-4 text-brand-300" />
                  {a.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FORM + ASIDE ---------------- */}
      <section className="relative pb-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Form */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">
                Időpontfoglalás
              </h2>
              <p className="mt-2 mb-7 text-muted">
                Töltse ki az űrlapot – jellemzően egy munkanapon belül
                jelentkezünk a megerősítéssel.
              </p>
              <BookingForm />
            </div>
          </Reveal>

          {/* Aside */}
          <div className="space-y-6">
            {/* Call card */}
            <Reveal delay={0.05}>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-lg font-bold text-white">
                  Inkább telefonálna?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Sürgős esetben vagy ha kérdése van, hívjon minket bátran –
                  munkanapokon a leggyorsabb elérés.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2.5 rounded-2xl bg-warm-500 px-5 py-3.5 font-semibold text-white shadow-[0_16px_40px_-16px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
                >
                  <Phone className="h-5 w-5" />
                  {site.phone}
                </a>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {site.hours}
                </p>
              </div>
            </Reveal>

            {/* What happens next */}
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-lg font-bold text-white">
                  Mi történik a foglalás után?
                </h3>
                <ol className="mt-4 space-y-4">
                  {processSteps.map((s) => (
                    <li key={s.step} className="flex gap-3.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 font-display text-sm font-bold text-brand-300 ring-1 ring-brand-400/20">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{s.title}</p>
                        <p className="text-sm text-muted">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                  <Wind className="h-5 w-5 text-brand-300" />
                  Miért minket válasszon?
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {bookingBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-brand-100/90">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Service quick-links */}
        <div className="mx-auto mt-14 max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="text-sm uppercase tracking-wider text-muted">
              Mire foglalhat időpontot?
            </p>
            <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`/szolgaltatasok/${s.id}/`}
                  className="group rounded-2xl border border-white/8 bg-navy-800/40 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400/40 cursor-pointer"
                >
                  <span className="block font-semibold text-white">{s.title}</span>
                  <span className="mt-1 block text-xs text-muted">{s.short}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-300">
                    Részletek
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
