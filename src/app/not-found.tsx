import Link from "next/link";
import { Home, Phone, Snowflake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="relative flex min-h-[80svh] items-center overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
          <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25">
            <Snowflake className="h-8 w-8" />
          </span>
          <p className="font-display text-6xl font-extrabold text-white">404</p>
          <h1 className="mt-3 font-display text-2xl font-bold text-white">
            Ez az oldal lehűlt és eltűnt
          </h1>
          <p className="mt-3 text-muted">
            A keresett oldal nem található. Térjen vissza a főoldalra, vagy hívjon
            minket bizalommal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Home className="h-5 w-5" />
              Vissza a főoldalra
            </Link>
            <a
              href={site.phoneHref}
              className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-warm-400 transition-colors hover:text-white cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
