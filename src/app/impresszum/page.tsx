import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Impresszum | Kecskemét Klíma" },
  description: "A Kecskemét Klíma üzemeltetőjének adatai.",
  robots: { index: true, follow: true },
};

const rows: { label: string; value: string }[] = [
  { label: "Szolgáltató neve", value: site.owner + " e.v." },
  { label: "Székhely", value: site.address },
  { label: "Adószám", value: "[kitöltendő]" },
  { label: "Nyilvántartási szám", value: "[kitöltendő]" },
  { label: "E-mail", value: site.email },
  { label: "Telefon", value: site.phone },
  { label: "Tárhelyszolgáltató", value: "webhelye.hu [pontos cégadat kitöltendő]" },
];

export default function ImpresszumPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted">
            <a href="/" className="transition-colors hover:text-white">Főoldal</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-300">Impresszum</span>
          </nav>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
            Impresszum
          </h1>
          <p className="mt-4 text-muted">
            A {site.brand} weboldal üzemeltetőjének és a szolgáltatás nyújtójának
            adatai.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/8">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[220px_1fr] ${
                  i % 2 ? "bg-navy-800/30" : "bg-navy-800/50"
                }`}
              >
                <span className="text-sm font-semibold text-brand-200">
                  {r.label}
                </span>
                <span className="text-brand-100/90">{r.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            A `[kitöltendő]` mezőket kérjük a tényleges vállalkozói adatokkal
            pótolni a közzététel előtt.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
