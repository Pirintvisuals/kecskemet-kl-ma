import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/**
 * Testimonials with infinite marquee — pattern adapted from 21st.dev
 * ("Testimonials with Marquee" by @serafim): auto-scrolling cards,
 * pause on hover, gradient fade edges. Re-skinned to our design system.
 */

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="relative flex w-[22rem] shrink-0 flex-col rounded-3xl border border-white/8 bg-navy-800/60 p-6 transition-colors duration-300 hover:border-brand-400/40">
      <Quote className="absolute right-5 top-5 h-7 w-7 text-brand-500/15" />
      <span className="mb-3 flex gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </span>
      <blockquote className="flex-1 text-[15px] leading-relaxed text-brand-100/90">
        „{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500/20 font-display text-sm font-bold text-brand-200 ring-1 ring-brand-400/25">
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-white">{t.name}</span>
          <span className="block text-xs text-muted">{t.location}</span>
        </span>
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
          subtitle="Valódi tapasztalatok kecskeméti és környékbeli megrendelőktől."
        />

        {/* Google rating badge */}
        <Reveal className="mt-8 flex justify-center">
          <div className="glass inline-flex items-center gap-3 rounded-2xl px-5 py-3">
            <span className="font-display text-2xl font-extrabold text-white">4.8</span>
            <span>
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-xs text-muted">Google értékelés</span>
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
