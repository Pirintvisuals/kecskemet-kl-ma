import { processSteps } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const stepColors = ["#0a6cd4", "#0a6cd4", "#0a6cd4", "#0a6cd4"];

export default function Process() {
  return (
    <section id="folyamat" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Hogyan dolgozunk"
          title={
            <>
              Egyszerű folyamat, <span className="text-brand-300">nulla stressz</span>
            </>
          }
          subtitle="A hívástól a garancia átadásáig – négy átlátható lépésben."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => {
              const c = stepColors[i % stepColors.length];
              return (
              <Reveal key={p.step} delay={i * 0.1}>
                <li className="relative flex flex-col items-center text-center">
                  <div
                    className="relative z-10 mb-5 grid h-14 w-14 place-items-center rounded-full font-display text-lg font-bold text-white"
                    style={{
                      backgroundColor: c,
                      boxShadow: `0 0 0 6px ${c}22, 0 16px 40px -14px ${c}`,
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </li>
              </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
