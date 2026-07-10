import type { Metadata } from "next";
import { ChevronRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import AuroraBackground from "@/components/AuroraBackground";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: { absolute: "Gyakori kérdések – GYIK | Kecskemét Klíma" },
  description:
    "Válaszok a klímaszerelés, karbantartás és javítás leggyakoribb kérdéseire. Mennyibe kerül? Milyen gyakran kell karbantartani? Kapok garanciát?",
  openGraph: {
    title: "Gyakori kérdések | Kecskemét Klíma",
    description: "A legfontosabb tudnivalók a klímaszerelésről, karbantartásról és javításról.",
    locale: "hu_HU",
  },
};

export default function GyikPage() {
  return (
    <>
      <Navbar />

      {/* ---- HERO ---- */}
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
            <span className="text-brand-300">GYIK</span>
          </nav>

          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              <HelpCircle className="h-3.5 w-3.5" />
              Gyakori kérdések
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Amit a legtöbben{" "}
              <span className="text-brand-300">kérdeznek</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              A legfontosabb tudnivalók klímaszerelésről, karbantartásról és
              javításról – mielőtt felvenné velünk a kapcsolatot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- FAQ ACCORDION ---- */}
      <Faq />

      {/* ---- CTA ---- */}
      <CtaBand
        title="Nem találta meg a választ?"
        text="Hívjon – röviden megválaszolunk minden kérdést, és ha kell, ingyenes árajánlatot is adunk."
      />

      <Footer />
    </>
  );
}
