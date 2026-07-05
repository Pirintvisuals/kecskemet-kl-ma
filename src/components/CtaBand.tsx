import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

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
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
              {text}
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: accent,
                  boxShadow: `0 18px 50px -15px ${accent}`,
                }}
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
