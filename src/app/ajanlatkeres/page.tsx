import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  BadgeCheck,
  Star,
  Clock,
  Wind,
  MapPin,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import BookingBar from "@/components/BookingBar";
import {
  services,
  stats,
  differentiators,
  testimonials,
  serviceAreas,
  site,
} from "@/lib/site";

/**
 * Standalone lead-gen landing page (fully decoupled from the main site).
 *
 * Purpose: a single-focus conversion page for paid traffic (Google / Meta ads).
 * It has its own minimal top bar and slim footer instead of the site Navbar/
 * Footer, keeps outbound links to a minimum, and repeats one CTA — the booking
 * form + the phone number. It is intentionally `noindex` so it never competes
 * with the homepage in organic search; for the same reason it is NOT in the
 * sitemap.
 */
export const metadata: Metadata = {
  title: {
    absolute:
      "Kérjen ingyenes klíma árajánlatot Kecskeméten – gyors, kötelezettségmentes | Kecskemét Klíma",
  },
  description:
    "Klíma telepítés, karbantartás, javítás és beüzemelés Kecskeméten és 30 km-es körzetében. Kérjen ingyenes, kötelezettségmentes árajánlatot – visszahívjuk. Garancia + számla minden munkára.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Kérjen ingyenes klíma árajánlatot | Kecskemét Klíma",
    description:
      "Gyors, kötelezettségmentes árajánlat klímaszerelésre Kecskeméten. Hagyja itt az adatait – visszahívjuk.",
    locale: "hu_HU",
  },
};

const promises = [
  { icon: BadgeCheck, text: "Ingyenes, kötelezettségmentes felmérés" },
  { icon: ShieldCheck, text: "Garancia és számla minden munkára" },
  { icon: Clock, text: "Gyors kiszállás – rövid határidővel" },
  { icon: Star, text: "4.8★ Google értékelés" },
];

export default function LandingPage() {
  return (
    <>
      {/* ---------------- MINIMAL TOP BAR (no site nav) ---------------- */}
      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Kecskemét Klíma logó"
              width={38}
              height={38}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Kecskemét <span className="text-brand-300">Klíma</span>
            </span>
          </span>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-warm-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 sm:inline-flex cursor-pointer"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
        </div>
      </header>

      <main>
        {/* ---------------- HERO + FORM ---------------- */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32">
          <AuroraBackground dense />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                <Wind className="h-3.5 w-3.5" />
                Klímaszerelés Kecskeméten és 30 km-es körzetében
              </span>
              <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
                Kérjen ingyenes{" "}
                <span className="text-brand-300">klíma árajánlatot</span> pár perc
                alatt
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Telepítés, karbantartás, javítás vagy beüzemelés – hagyja itt az
                adatait, és rövid határidővel visszahívjuk. Kötelezettség nélkül,
                átlátható árral, garanciával és számlával.
              </p>

              <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-brand-100/90">
                {promises.map((p) => (
                  <li key={p.text} className="inline-flex items-center gap-2">
                    <p.icon className="h-4 w-4 text-brand-300" />
                    {p.text}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Booking form — high on the page, above the fold */}
            <Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
              <BookingBar
                title="Kérjen visszahívást és árajánlatot"
                subtitle="Adja meg az adatait – felmérjük az igényét és pontos árat mondunk."
              />
            </Reveal>
          </div>
        </section>

        {/* ---------------- STATS / TRUST ---------------- */}
        <section className="relative py-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl px-4 py-5 text-center"
                >
                  <div className="font-display text-2xl font-extrabold text-brand-300 sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WHAT WE DO ---------------- */}
        <section className="relative py-12">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-bold text-white">
                Amiben segítünk
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                A felméréstől a próbaüzemig egy tapasztalt szakember végzi a
                munkát – márkafüggetlenül.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.05}>
                  <div className="glass h-full rounded-2xl p-5">
                    <h3 className="font-display text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-200">{s.short}</p>
                    <ul className="mt-3 space-y-2">
                      {s.points.slice(0, 3).map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WHY US ---------------- */}
        <section className="relative py-12">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-bold text-white">
                Miért minket válasszon?
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentiators.slice(0, 6).map((d, i) => (
                <Reveal key={d.title} delay={i * 0.04}>
                  <div className="glass flex h-full gap-3.5 rounded-2xl p-5">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                    <div>
                      <h3 className="font-semibold text-white">{d.title}</h3>
                      <p className="mt-1 text-sm text-muted">{d.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- TESTIMONIALS ---------------- */}
        <section className="relative py-12">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-bold text-white">
                Amit ügyfeleink mondanak
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.slice(0, 3).map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05}>
                  <figure className="glass flex h-full flex-col rounded-2xl p-6">
                    <div className="flex gap-0.5 text-warm-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-100/90">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500/15 font-display text-xs font-bold text-brand-300 ring-1 ring-brand-400/20">
                        {t.initials}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {t.name}
                        </span>
                        <span className="block text-xs text-muted">
                          {t.location}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SERVICE AREA ---------------- */}
        <section className="relative py-10">
          <div className="mx-auto max-w-5xl px-6">
            <div className="glass rounded-3xl p-6 text-center sm:p-8">
              <h2 className="flex items-center justify-center gap-2 font-display text-xl font-bold text-white">
                <MapPin className="h-5 w-5 text-brand-300" />
                Hol dolgozunk
              </h2>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {serviceAreas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-white/10 bg-navy-800/40 px-3 py-1.5 text-sm text-brand-100/90"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FINAL CTA ---------------- */}
        <section className="relative py-14">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="mb-8 text-center">
              <h2 className="font-display text-3xl font-bold text-white">
                Készen áll a hűs nyárra?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                Hagyja itt az adatait, és pár percen belül elindul a folyamat –
                vagy hívjon most, és azonnal beszélünk.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-warm-500 px-6 py-3 font-semibold text-white shadow-[0_16px_40px_-16px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <BookingBar
                title="Kérjen visszahívást még ma"
                subtitle="Telepítés, karbantartás, javítás vagy beüzemelés – visszahívjuk."
              />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------------- SLIM FOOTER ---------------- */}
      <footer className="border-t border-white/8 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.brand} · {site.owner} ·{" "}
            {site.address}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-brand-300 hover:text-white cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a
              href="/impresszum/"
              className="hover:text-white cursor-pointer"
            >
              Impresszum
            </a>
            <a
              href="/adatkezeles/"
              className="hover:text-white cursor-pointer"
            >
              Adatkezelés
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile call button */}
      <a
        href={site.phoneHref}
        aria-label="Hívás most"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-warm-500 px-5 py-3.5 font-semibold text-white shadow-[0_16px_40px_-12px_rgba(249,115,22,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 sm:hidden cursor-pointer"
      >
        <Phone className="h-5 w-5" />
        Hívás
      </a>
    </>
  );
}
