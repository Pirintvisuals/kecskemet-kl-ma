import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { navLinks, services, site } from "@/lib/site";
import BookingBar from "./BookingBar";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/8 bg-navy-950 pt-16 pb-8">
      {/* Booking form on every page */}
      <div className="mx-auto mb-16 max-w-7xl px-6">
        <BookingBar />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Kecskemét Klíma logó"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-bold text-white">
                Kecskemét <span className="text-brand-300">Klíma</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Prémium klímaszerelés, karbantartás és javítás Kecskeméten és
              környékén – garanciával és számlával.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
              Oldal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-white cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
              Szolgáltatások
            </h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/szolgaltatasok/${s.id}/`}
                    className="text-sm text-muted transition-colors hover:text-white cursor-pointer"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
              Kapcsolat
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white cursor-pointer"
                >
                  <Phone className="h-4 w-4 text-brand-300" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white cursor-pointer"
                >
                  <Mail className="h-4 w-4 text-brand-300" />
                  {site.email}
                </a>
              </li>
              <li className="text-sm text-muted">{site.address}</li>
              <li className="text-sm text-muted">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>
            © {year} {site.brand} · {site.owner}. Minden jog fenntartva.
          </p>
          <nav className="flex items-center gap-4">
            <a href="/impresszum/" className="transition-colors hover:text-white cursor-pointer">
              Impresszum
            </a>
            <a href="/adatkezeles/" className="transition-colors hover:text-white cursor-pointer">
              Adatkezelési tájékoztató
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
