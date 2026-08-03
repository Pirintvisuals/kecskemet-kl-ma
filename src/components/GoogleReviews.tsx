import { Star, ArrowUpRight, PenLine } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

/** Official four-colour Google "G". */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/**
 * Google Business Profile call-to-action. Sends visitors to the business's
 * Google listing to read existing reviews and leave a new one. Both links use
 * site.googleUrl (customer-provided listing URL).
 */
export default function GoogleReviews({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3">
          <GoogleG className="h-8 w-8 shrink-0" />
          <div>
            <h3 className="font-display text-sm font-bold text-white">
              Értékeljen a Google-on
            </h3>
            <p className="text-xs text-muted">Ossza meg a tapasztalatát.</p>
          </div>
        </div>
        <a
          href={site.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/95 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
        >
          <PenLine className="h-4 w-4" />
          Értékelés írása
        </a>
      </div>
    );
  }

  return (
    <section aria-label="Google értékelések" className="relative py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-navy-800/50 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl" />
            <GoogleG className="mx-auto h-12 w-12" />
            <span className="mt-5 flex justify-center gap-1">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Elégedett volt a munkánkkal?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
              A visszajelzése másoknak is segít megbízható klímaszerelőt találni.
              Nézze meg értékeléseinket, vagy írjon Ön is egyet a Google-on –
              köszönjük!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-navy-900 shadow-[0_18px_50px_-15px_rgba(255,255,255,0.5)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <PenLine className="h-5 w-5" />
                Értékelés írása a Google-on
              </a>
              <a
                href={site.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
              >
                Értékelések a Google-on
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
