import { MapPin } from "lucide-react";
import { serviceAreas, site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ServiceArea() {
  return (
    <section id="terulet" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: copy + chips */}
          <div>
            <SectionHeading
              center={false}
              eyebrow="Hol dolgozunk"
              title={
                <>
                  Kecskemét és{" "}
                  <span className="text-brand-300">
                    {site.serviceRadiusKm} km-es körzete
                  </span>
                </>
              }
              subtitle="Helyi szakemberként gyorsan ott vagyunk. Ha a települése nincs a listán, hívjon – nagy eséllyel Önhöz is kimegyünk."
            />

            <Reveal className="mt-8">
              <ul className="flex flex-wrap gap-2.5">
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
          </div>

          {/* Right: radar visual */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center">
              <div className="absolute inset-0 rounded-full bg-brand-500/15 blur-3xl" />
              {[0, 1, 2, 3].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-brand-400/20"
                  style={{
                    inset: `${r * 12}%`,
                  }}
                />
              ))}
              {/* sweep */}
              <div
                className="absolute inset-[0%] animate-[spin_6s_linear_infinite] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(72,168,240,0.28) 40deg, transparent 90deg)",
                  maskImage: "radial-gradient(circle, #000 62%, transparent 63%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, #000 62%, transparent 63%)",
                }}
              />
              {/* center */}
              <div className="relative z-10 flex flex-col items-center gap-1 rounded-2xl bg-brand-500 px-5 py-3 text-white shadow-[0_16px_50px_-16px_rgba(10,108,212,0.95)]">
                <MapPin className="h-6 w-6" />
                <span className="font-display text-sm font-bold">Kecskemét</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
