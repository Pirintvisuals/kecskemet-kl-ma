import {
  Award,
  GraduationCap,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { credentials } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Credentials / trust strip. Displays the real qualifications and guarantees
 * (F-gas licence, master certification, warranty, brand-independent service)
 * as icon badges — the "Trust & Authority" pattern for trade businesses.
 */
const iconMap: Record<string, LucideIcon> = {
  cert: Award,
  master: GraduationCap,
  warranty: ShieldCheck,
  brands: Layers,
};

export default function Credentials() {
  return (
    <section aria-label="Képesítések és garanciák" className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-4 rounded-3xl border border-white/8 bg-navy-800/40 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            {credentials.map((c) => {
              const Icon = iconMap[c.icon] ?? ShieldCheck;
              return (
                <div
                  key={c.title}
                  className="flex items-start gap-3.5 rounded-2xl p-4 transition-colors duration-200 hover:bg-navy-800/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {c.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
