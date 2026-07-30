import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Photo from "./Photo";

const shots = [
  { src: "/photos/pexels-1.jpg", label: "Split klíma beltéri egység – hálószoba", span: "sm:col-span-2 sm:row-span-2", minH: "min-h-[300px] sm:min-h-full", pos: "center 28%" },
  { src: "/photos/pexels-5.jpg", label: "Kültéri egység telepítése – szakszerű bekötés", span: "sm:row-span-2", minH: "min-h-[300px] sm:min-h-full", pos: "center" },
  { src: "/photos/pexels-3.jpg", label: "Beltéri egység – nappali", span: "", minH: "min-h-[200px]", pos: "left 30%" },
  { src: "/photos/pexels-4.jpg", label: "Beltéri egység – üzlethelyiség", span: "", minH: "min-h-[200px]", pos: "center top" },
  { src: "/photos/pexels-6.jpg", label: "Kültéri egység javítása és karbantartása", span: "", minH: "min-h-[200px]", pos: "center" },
  { src: "/photos/pexels-2.jpg", label: "Beltéri egység – esztétikus elhelyezés", span: "", minH: "min-h-[200px]", pos: "right 25%" },
  { src: "/photos/pexels-7.jpg", label: "Kültéri egység – tisztítás és karbantartás", span: "sm:col-span-2", minH: "min-h-[200px]", pos: "center" },
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
                objectPosition={s.pos}
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
