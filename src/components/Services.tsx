import {
  Wrench,
  Sparkles,
  Stethoscope,
  Gauge,
  Check,
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

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Szolgáltatások"
          title={
            <>
              Mindent egy helyről a{" "}
              <span className="text-brand-300">tökéletes klímáért</span>
            </>
          }
          subtitle="A megfelelő készülék kiválasztásától a beüzemelésen át a rendszeres karbantartásig – egy megbízható szakembertől."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.id} delay={i * 0.08} className="h-full">
                <a
                  href={`/szolgaltatasok/${s.id}/`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-navy-800/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-navy-800/80 cursor-pointer"
                  style={{ ["--accent" as string]: s.accent }}
                >
                  {/* hover glow (accent-tinted) */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${s.accent}33` }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${s.accent}26`,
                        color: s.accent,
                        boxShadow: `inset 0 0 0 1px ${s.accent}40`,
                      }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {s.title}
                      </h3>
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
                    className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: s.accent }}
                  >
                    Részletek megtekintése
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
