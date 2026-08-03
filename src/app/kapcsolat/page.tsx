import type { Metadata } from "next";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  User,
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  CalendarCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import BookingContactTabs from "@/components/BookingContactTabs";
import ServiceArea from "@/components/ServiceArea";
import MapEmbed from "@/components/MapEmbed";
import Photo from "@/components/Photo";
import GoogleReviews from "@/components/GoogleReviews";
import { processSteps, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Kapcsolat & időpontfoglalás – Kérjen ingyenes árajánlatot | Kecskemét Klíma",
  },
  description:
    "Foglaljon klímaszerelőt online, vagy kérjen ingyenes árajánlatot. Hívjon a +36 30 260 57 56 számon, válasszon időpontot a naptárból, vagy küldjön üzenetet – gyors kiszállás Kecskeméten és 30 km-es körzetében.",
  openGraph: {
    title: "Kapcsolat & időpontfoglalás | Kecskemét Klíma",
    description:
      "Foglaljon időpontot a naptárból, vagy írjon nekünk – ingyenes árajánlat, gyors kiszállás Kecskeméten.",
    locale: "hu_HU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Klímaszerelés – kapcsolat és időpontfoglalás",
  provider: { "@type": "HVACBusiness", name: site.brand, telephone: site.phone },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://kecskemetklima.hu/kapcsolat/",
    servicePhone: site.phone,
  },
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref, hint: "Leggyorsabb elérés" },
    { icon: Mail, label: "E-mail", value: site.email, href: site.emailHref, hint: "Írjon bármikor" },
    { icon: Clock, label: "Nyitvatartás", value: site.hours, hint: "Munkanapokon" },
    { icon: MapPin, label: "Cím", value: site.address, hint: "Kecskemét" },
    { icon: User, label: "Kapcsolattartó", value: site.owner, hint: "Klímaszerelő mester" },
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
            <span className="text-brand-300">Kapcsolat &amp; foglalás</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <CalendarCheck className="h-3.5 w-3.5" />
              Kapcsolat &amp; időpontfoglalás
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Foglaljon időpontot, vagy{" "}
              <span className="text-brand-300">kérjen árajánlatot</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Egy helyen minden: válasszon időpontot a naptárból, írjon nekünk
              üzenetet, vagy hívjon telefonon a leggyorsabb válaszért. A
              foglalást telefonon visszaigazoljuk.
            </p>

            {/* Quick actions */}
            <div className="mx-auto mt-9 flex max-w-xl flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="group flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-warm-500 px-6 py-4 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
              <a
                href="#foglalas"
                className="glass-strong flex flex-1 items-center justify-center gap-2.5 rounded-2xl px-6 py-4 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                <CalendarCheck className="h-5 w-5" />
                Időpontfoglalás
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BOOKING/CONTACT TABS + ASIDE ---------------- */}
      <section id="foglalas" className="relative scroll-mt-24 pb-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Tabs: calendar booking OR message form */}
          <Reveal>
            <BookingContactTabs />
          </Reveal>

          {/* Aside */}
          <div className="space-y-6">
            {/* Contact details */}
            <Reveal delay={0.05}>
              <div className="glass rounded-3xl p-6">
                <h2 className="font-display text-lg font-bold text-white">
                  Elérhetőségek
                </h2>
                <ul className="mt-4 space-y-3">
                  {details.map((d) => {
                    const Inner = (
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/20">
                          <d.icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wide text-muted">
                            {d.label}
                          </p>
                          <p className="font-semibold text-white">{d.value}</p>
                          <p className="text-xs text-brand-300">{d.hint}</p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={d.label}>
                        {d.href ? (
                          <a href={d.href} className="block cursor-pointer">
                            {Inner}
                          </a>
                        ) : (
                          Inner
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>

            {/* What happens next */}
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-lg font-bold text-white">
                  Mi történik ezután?
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

            {/* Assurances */}
            <Reveal delay={0.15}>
              <div className="glass rounded-3xl p-6">
                <ul className="space-y-2.5">
                  {[
                    "Ingyenes, kötelezettségmentes felmérés",
                    "Garancia és számla minden munkára",
                    "Átlátható árajánlat a munka előtt",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-brand-100/90">
                      {t.includes("Garancia") ? (
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      ) : (
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                      )}
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Real work photo */}
            <Reveal delay={0.18}>
              <Photo
                src="/photos/belteri-aux-nappali.jpg"
                alt="Saját beszerelésünk – beltéri klíma egység egy kecskeméti lakásban"
                className="aspect-[4/3]"
              />
            </Reveal>

            {/* Google reviews */}
            <Reveal delay={0.22}>
              <GoogleReviews compact />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- MAP ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Térkép
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Itt talál minket
            </h2>
          </Reveal>
          <Reveal>
            <MapEmbed />
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICE AREA ---------------- */}
      <ServiceArea />

      <Footer />
    </>
  );
}
