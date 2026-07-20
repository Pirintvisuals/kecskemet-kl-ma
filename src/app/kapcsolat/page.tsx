import type { Metadata } from "next";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  User,
  ChevronRight,
  ShieldCheck,
  Zap,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import ContactForm from "@/components/ContactForm";
import ServiceArea from "@/components/ServiceArea";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kapcsolat – Kérjen ingyenes árajánlatot | Kecskemét Klíma" },
  description:
    "Lépjen kapcsolatba a Kecskemét Klímával. Hívjon a +36 30 260 57 56 számon, vagy küldjön üzenetet – gyors kiszállás Kecskeméten és 30 km-es körzetében.",
  openGraph: {
    title: "Kapcsolat | Kecskemét Klíma",
    description: "Hívjon vagy írjon – ingyenes árajánlat, gyors kiszállás Kecskeméten.",
    locale: "hu_HU",
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

  const promises = [
    { icon: Zap, text: "Gyors kiszállás, megbízható időpontokkal" },
    { icon: ShieldCheck, text: "Garancia és számla minden munkára" },
    { icon: MessageSquare, text: "Átlátható árajánlat a munka előtt" },
  ];

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
            <span className="text-brand-300">Kapcsolat</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <Phone className="h-3.5 w-3.5" />
              Kapcsolat
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Lépjen velünk <span className="text-brand-300">kapcsolatba</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Kérdése van, vagy ingyenes árajánlatot szeretne? Hívjon telefonon a
              leggyorsabb válaszért, vagy küldjön üzenetet az űrlapon – hamarosan
              felvesszük Önnel a kapcsolatot.
            </p>

            {/* Big quick actions */}
            <div className="mx-auto mt-9 flex max-w-xl flex-col gap-4 sm:flex-row">
              <a
                href={site.phoneHref}
                className="group flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-warm-500 px-6 py-4 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="glass-strong flex flex-1 items-center justify-center gap-2.5 rounded-2xl px-6 py-4 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                E-mail írása
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DETAILS + FORM ---------------- */}
      <section className="relative py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2">
          {/* Left: details */}
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Elérhetőségek
              </h2>
              <p className="mt-2 text-muted">
                Minden csatorna egy helyen – ahogy Önnek a legkényelmesebb.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {details.map((d) => {
                  const Inner = (
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-white/8 bg-navy-800/50 p-4 transition-colors hover:border-brand-400/40">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-400/20">
                        <d.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wide text-muted">
                          {d.label}
                        </p>
                        <p className="font-semibold text-white">{d.value}</p>
                        <p className="text-xs text-brand-300">{d.hint}</p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} className="cursor-pointer">
                      {Inner}
                    </a>
                  ) : (
                    <div key={d.label}>{Inner}</div>
                  );
                })}
              </div>

              {/* Promises */}
              <div className="mt-6 rounded-2xl border border-white/8 bg-navy-800/40 p-6">
                <ul className="grid gap-3">
                  {promises.map((p) => (
                    <li key={p.text} className="flex items-center gap-3 text-brand-100/90">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
                        <p.icon className="h-4 w-4" />
                      </span>
                      {p.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-7 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">
                Írjon nekünk
              </h2>
              <p className="mt-2 mb-6 text-muted">
                Töltse ki az űrlapot – minél több részletet ad meg, annál
                pontosabb árajánlatot tudunk adni. Hamarosan jelentkezünk.
              </p>
              <ContactForm withService detailed />
            </div>
          </Reveal>
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
