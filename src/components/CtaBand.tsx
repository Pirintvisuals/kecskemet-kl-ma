import { Phone, ArrowRight, Snowflake } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

// Deterministic frost positions (server-rendered, CSS-animated)
const FLAKES = [
  { left: "8%", top: "18%", size: 16, delay: "0s" },
  { left: "16%", top: "62%", size: 12, delay: "1.2s" },
  { left: "84%", top: "24%", size: 14, delay: "0.6s" },
  { left: "92%", top: "58%", size: 11, delay: "1.8s" },
  { left: "72%", top: "78%", size: 13, delay: "2.4s" },
];

export default function CtaBand({
  accent = "#38BDF8",
  title = "Kérjen ingyenes árajánlatot még ma",
  text = "Hívjon a leggyorsabb válaszért, vagy küldjön üzenetet – hamarosan felvesszük Önnel a kapcsolatot.",
}: {
  accent?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] border p-8 text-center sm:p-12"
            style={{
              borderColor: `${accent}33`,
              background:
                "linear-gradient(135deg, rgba(11,23,48,0.92), rgba(8,17,35,0.92))",
            }}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: `${accent}33` }}
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: `${accent}22` }}
            />
            {/* drifting frost */}
            {FLAKES.map((f, i) => (
              <Snowflake
                key={i}
                aria-hidden
                className="pointer-events-none absolute animate-[floatSlow_7s_ease-in-out_infinite] opacity-30"
                style={{
                  left: f.left,
                  top: f.top,
                  width: f.size,
                  height: f.size,
                  color: accent,
                  animationDelay: f.delay,
                }}
              />
            ))}
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
              {text}
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-warm-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
              <a
                href="/kapcsolat/"
                className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                Üzenetet küldök
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
