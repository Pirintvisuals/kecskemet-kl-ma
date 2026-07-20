import { brandLogos } from "@/lib/site";

export default function TrustBar() {
  const row = [...brandLogos, ...brandLogos];
  return (
    <section
      aria-label="Szervizelt klímamárkák"
      className="relative border-y border-white/5 bg-navy-900/60 py-7"
    >
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wider text-muted">
        Márkafüggetlen prémium klímaszerviz – a legnépszerűbb gyártók készülékeihez
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-5 pr-5 hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <span
              key={`${b.name}-${i}`}
              title={b.name}
              className="flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl bg-white/95 px-5 shadow-sm ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.src}
                alt={`${b.name} klíma logó`}
                loading="lazy"
                className="max-h-10 w-auto max-w-full object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
