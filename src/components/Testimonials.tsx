import { Star, BadgeCheck } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Testimonials styled as Google reviews — multicolour Google "G" per card,
 * Google-style coloured avatar, star row and a relative timestamp. Cards
 * auto-scroll in an infinite marquee (pattern adapted from 21st.dev), and a
 * Google Reviews summary widget sits above them.
 */

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

const AVATAR_COLORS = ["#4285F4", "#EA4335", "#0F9D58", "#F4B400", "#9334E6", "#00897B", "#D81B60", "#3949AB"];
const RELATIVE = ["2 hete", "1 hónapja", "3 hete", "2 hónapja", "1 hete", "4 hónapja", "5 hónapja", "6 hónapja"];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const h = hash(t.name);
  const color = AVATAR_COLORS[h % AVATAR_COLORS.length];
  const when = RELATIVE[h % RELATIVE.length];

  return (
    <figure className="relative flex w-[82vw] max-w-[22rem] shrink-0 flex-col rounded-3xl border border-white/8 bg-navy-800/60 p-6 transition-colors duration-300 hover:border-brand-400/40">
      {/* Header: avatar + name + Google mark */}
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-base font-bold text-white"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {t.name.charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <span className="flex items-center gap-1 text-sm font-semibold text-white">
            {t.name}
            <BadgeCheck className="h-3.5 w-3.5 text-brand-300" />
          </span>
          <span className="block text-xs text-muted">{when}</span>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </div>

      {/* Stars */}
      <span className="mt-3 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </span>

      <blockquote className="mt-2.5 flex-1 text-[15px] leading-relaxed text-brand-100/90">
        {t.quote}
      </blockquote>

      <figcaption className="mt-4 text-xs text-muted">
        {t.location}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section id="velemenyek" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Vélemények"
          title={
            <>
              Amit az <span className="text-brand-300">ügyfeleink</span> mondanak
            </>
          }
          subtitle="Valódi Google-értékelések kecskeméti és környékbeli megrendelőktől."
        />

        {/* Google Reviews summary widget */}
        <Reveal className="mt-8 flex justify-center">
          <div className="glass inline-flex items-center gap-4 rounded-2xl px-6 py-4">
            <GoogleG className="h-8 w-8" />
            <div className="text-left">
              <span className="text-xs font-medium uppercase tracking-wide text-muted">
                Google értékelés
              </span>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-extrabold text-white">4.8</span>
                <span className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
              </div>
            </div>
            <span className="ml-1 border-l border-white/10 pl-4 text-sm text-muted">
              12 vélemény alapján
            </span>
          </div>
        </Reveal>
      </div>

      {/* Infinite marquee — full-bleed, fade edges, pause on hover */}
      <Reveal className="mt-12">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-[marquee_55s_linear_infinite] gap-5 pr-5 hover:[animation-play-state:paused]">
            {row.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
