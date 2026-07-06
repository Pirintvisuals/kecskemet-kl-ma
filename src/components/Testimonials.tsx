import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="velemenyek" className="relative py-24 sm:py-28">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-white/8 bg-navy-800/50 p-7">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-brand-500/15" />
                <span className="mb-4 flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-brand-100/90">
                  „{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500/20 font-display text-sm font-bold text-brand-200 ring-1 ring-brand-400/25">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-muted">{t.location}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
