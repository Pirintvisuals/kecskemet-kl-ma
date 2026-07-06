import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Custom Google Map — keyless embed (works on static hosting, no API key).
 * Dark-themed via CSS filter to match the site, with an address card overlay
 * and a directions button.
 */
export default function MapEmbed() {
  const q = encodeURIComponent(site.address);
  const embedSrc = `https://www.google.com/maps?q=${q}&z=14&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900">
      {/* Map */}
      <iframe
        title="Kecskemét Klíma – térkép"
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[24rem] w-full sm:h-[30rem]"
        style={{
          border: 0,
          filter: "invert(0.92) hue-rotate(185deg) brightness(0.95) contrast(0.9)",
        }}
      />

      {/* Address card overlay */}
      <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-sm">
        <div className="glass-strong pointer-events-auto rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-200 ring-1 ring-brand-400/25">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-bold text-white">{site.brand}</p>
              <p className="text-sm text-muted">{site.address}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-2 text-sm">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-brand-100 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand-300" />
              {site.phone}
            </a>
            <span className="inline-flex items-center gap-2 text-muted">
              <Clock className="h-4 w-4 text-brand-300" />
              {site.hours}
            </span>
          </div>

          <a
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-warm-500 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
          >
            <Navigation className="h-4 w-4" />
            Útvonaltervezés
          </a>
        </div>
      </div>
    </div>
  );
}
