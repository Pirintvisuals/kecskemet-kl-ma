import {
  ShieldCheck,
  Zap,
  Receipt,
  UserCheck,
  Layers,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { differentiators } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons: LucideIcon[] = [ShieldCheck, Zap, Receipt, UserCheck, Layers, Leaf];
const iconColors = ["#38bdf8", "#38bdf8", "#38bdf8", "#38bdf8", "#38bdf8", "#38bdf8"];

export default function WhyUs() {
  return (
    <section id="miert-mi" className="relative py-24 sm:py-28">
      {/* soft divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Miért minket válasszon?"
          title={
            <>
              Nem csak beszerelünk –{" "}
              <span className="text-brand-300">mögötte is állunk</span>
            </>
          }
          subtitle="Egy megbízható helyi szakember, aki személyesen felel a munkájáért. Ez a különbség, amit érezni fog."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => {
            const Icon = icons[i % icons.length];
            const c = iconColors[i % iconColors.length];
            return (
              <Reveal key={d.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-white/8 bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-navy-800/70">
                  <div
                    className="mb-4 grid h-12 w-12 place-items-center rounded-xl ring-1"
                    style={{ backgroundColor: `${c}1f`, color: c, boxShadow: `inset 0 0 0 1px ${c}33` }}
                  >
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
  );
}
