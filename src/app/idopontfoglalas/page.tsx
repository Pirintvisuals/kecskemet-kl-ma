import type { Metadata } from "next";
import { CalendarCheck } from "lucide-react";
import Redirector from "@/components/Redirector";

/**
 * The dedicated booking page has been merged into /kapcsolat/ (Kapcsolat &
 * időpontfoglalás). This page now only redirects there, so any old/external or
 * ad links keep working. Kept out of the sitemap and marked noindex.
 */
const TARGET = "/kapcsolat/#foglalas";

export const metadata: Metadata = {
  title: { absolute: "Időpontfoglalás | Kecskemét Klíma" },
  robots: { index: false, follow: true },
  alternates: { canonical: "/kapcsolat/" },
};

export default function BookingRedirectPage() {
  return (
    <>
      <Redirector to={TARGET} />
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div className="max-w-md">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/20">
            <CalendarCheck className="h-7 w-7" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-bold text-white">
            Átirányítjuk az időpontfoglaláshoz…
          </h1>
          <p className="mt-3 text-muted">
            Az időpontfoglalás mostantól a Kapcsolat oldalon érhető el.
          </p>
          <a
            href={TARGET}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-warm-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-warm-600 cursor-pointer"
          >
            <CalendarCheck className="h-5 w-5" />
            Tovább a foglaláshoz
          </a>
        </div>
      </main>
    </>
  );
}
