import { ShieldCheck, Receipt, Clock } from "lucide-react";
import Photo from "./Photo";
import Reveal from "./Reveal";

/**
 * Human "at work" trust band — puts a real technician and a clean, finished
 * install on the homepage so the site reads as people-you-can-trust, not just
 * product boxes on a wall. Photos are commercial-licensed stock (Pexels).
 */
const points = [
  { icon: ShieldCheck, title: "Szakszerű, tiszta munka", text: "Pontos méretezés, esztétikus vezetékezés és rendezett kültéri egység – minden beszerelésnél." },
  { icon: Receipt, title: "Garancia és számla", text: "Minden munkára írásos garanciát és számlát adunk – nálunk ez alap, nem plusz szolgáltatás." },
  { icon: Clock, title: "Pontos, megbízható", text: "A megbeszélt időpontban érkezünk, és a végén bemutatjuk a klíma helyes használatát." },
];

export default function WorkBand() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* photos */}
          <Reveal>
            <div className="grid grid-cols-5 grid-rows-6 gap-4 sm:h-[30rem]">
              <Photo
                src="/photos/stock-szereles-1.jpg"
                alt="Klímaszerelő szakember munka közben, nyomásmérővel"
                className="col-span-3 row-span-6 h-full"
              />
              <Photo
                src="/photos/stock-nappali-1.jpg"
                alt="Modern nappaliba szerelt beltéri klíma egység"
                className="col-span-2 row-span-6 h-full"
              />
            </div>
          </Reveal>

          {/* copy */}
          <Reveal delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Emberek, akikre számíthat
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Egy szakember, aki személyesen áll a munkája mögött
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Nem alvállalkozókkal dolgozunk: ugyanaz a szakember méri fel,
                telepíti és üzemeli be a klímáját, akivel az elején beszél. Így
                minden lépésért egy felelős áll jót.
              </p>
              <ul className="mt-8 space-y-5">
                {points.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
