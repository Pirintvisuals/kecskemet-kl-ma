import {
  Wrench,
  Sparkles,
  Stethoscope,
  Gauge,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap: Record<Service["icon"], LucideIcon> = {
  install: Wrench,
  maintain: Sparkles,
  repair: Stethoscope,
  commission: Gauge,
};

/** Real own-work photo per service type — shown on the card. */
const cardPhoto: Record<Service["icon"], string> = {
  install: "/photos/belteri-aux-nappali.jpg",
  maintain: "/photos/belteri-polar-nyitott.jpg",
  repair: "/photos/kulteri-aux-oldal.jpg",
  commission: "/photos/kulteri-polar-eresz.jpg",
};

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Klíma szolgáltatások"
          title={
            <>
              Minden, ami <span className="text-brand-300">klíma</span> – egy
              megbízható kézből
            </>
          }
          subtitle="Klímatelepítés, karbantartás, javítás és beüzemelés – egy megbízható szakembertől Kecskeméten és környékén."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.id} delay={i * 0.08} className="h-full">
                <a
                  href={`/szolgaltatasok/${s.id}/`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-navy-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-navy-800/80 cursor-pointer"
                  style={{ ["--accent" as string]: s.accent }}
                >
                  {/* real work photo */}
                  <div className="relative h-44 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cardPhoto[s.icon]}
                      alt={`${s.title} – saját munkánk`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/30 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-navy-900/70 text-brand-200 ring-1 ring-brand-400/25 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5 sm:p-7">
                    <h3 className="font-display text-xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-300">{s.short}</p>

                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {s.description}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-200 transition-colors group-hover:text-white">
                      Részletek megtekintése
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
