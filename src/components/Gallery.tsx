import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const shots = [
  { label: "Split klíma – nappali", hint: "Beltéri egység telepítés", span: "sm:col-span-2 sm:row-span-2", minH: "min-h-[260px] sm:min-h-full" },
  { label: "Kültéri egység – homlokzat", hint: "Kondenzátor rögzítés", span: "", minH: "min-h-[200px]" },
  { label: "Rejtett vezetékezés", hint: "Esztétikus kivitel", span: "", minH: "min-h-[200px]" },
  { label: "Multi-split rendszer", hint: "Több beltéri egység", span: "", minH: "min-h-[200px]" },
  { label: "Karbantartás közben", hint: "Tisztítás, fertőtlenítés", span: "", minH: "min-h-[200px]" },
];

export default function Gallery() {
  return (
    <section id="referenciak" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Referenciák"
          title={
            <>
              Nézze meg a <span className="text-brand-300">munkáinkat</span>
            </>
          }
          subtitle="Ide a saját, valódi fotói kerülnek a beszerelt klímákról és a referenciamunkákról – hogy leendő ügyfelei lássák a minőséget."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal
              key={s.label}
              delay={(i % 3) * 0.08}
              className={`${s.span} h-full`}
            >
              <ImagePlaceholder
                label={s.label}
                hint={s.hint}
                minH="min-h-full"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <Camera className="h-4 w-4 text-brand-300" />
          Küldje el a fotókat, és beillesztjük őket ide.
        </p>
      </div>
    </section>
  );
}
