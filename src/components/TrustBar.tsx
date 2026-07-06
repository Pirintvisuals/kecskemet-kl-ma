import { brands } from "@/lib/site";

export default function TrustBar() {
  const row = [...brands, ...brands];
  return (
    <section
      aria-label="Szervizelt márkák"
      className="relative border-y border-white/5 bg-navy-900/60 py-6"
    >
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted">
        Márkafüggetlen szerviz – a legnépszerűbb gyártók készülékeihez
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-12 pr-12 hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-lg font-semibold whitespace-nowrap text-brand-100/50 transition-colors hover:text-brand-100"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
