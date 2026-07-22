import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Photo from "./Photo";

const shots = [
  { src: "/photos/belteri-aux-nappali.jpg", label: "AUX beltéri egység – lakótér", span: "sm:col-span-2 sm:row-span-2", minH: "min-h-[300px] sm:min-h-full" },
  { src: "/photos/kulteri-aux-homlokzat.jpg", label: "AUX kültéri egység – homlokzat", span: "", minH: "min-h-[200px]" },
  { src: "/photos/kulteri-polar-eresz.jpg", label: "Kültéri egység – eresz alatti rögzítés", span: "", minH: "min-h-[200px]" },
  { src: "/photos/belteri-polar-nyitott.jpg", label: "Polár beltéri egység", span: "", minH: "min-h-[200px]" },
  { src: "/photos/kulteri-polar-tavoli.jpg", label: "Polár kültéri egység – homlokzat", span: "", minH: "min-h-[200px]" },
  { src: "/photos/belteri-polar-fal.jpg", label: "Polár beltéri egység – nappali", span: "", minH: "min-h-[200px]" },
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
          subtitle="Valódi, saját munkáink Kecskemétről és környékéről – beltéri és kültéri egységek, esztétikus, szakszerű kivitelben."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal
              key={s.label}
              delay={(i % 3) * 0.08}
              className={`${s.span} ${s.minH} h-full`}
            >
              <Photo
                src={s.src}
                alt={s.label}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted">
          <Camera className="h-4 w-4 text-brand-300" />
          Minden fotó saját beszerelésünkről készült – garanciával és számlával.
        </p>
      </div>
    </section>
  );
}
