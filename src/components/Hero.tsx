"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Snowflake, Wind, CalendarCheck, BadgeCheck } from "lucide-react";
import AuroraBackground from "./AuroraBackground";
import ClimatePanel from "./ClimatePanel";
import Photo from "./Photo";
import { WavyBackground } from "./ui/wavy-background";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <AuroraBackground dense />

      {/* Flowing "airflow" waves along the bottom (21st.dev / Aceternity Wavy Background) */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-[34svh] opacity-70 [mask-image:radial-gradient(130%_110%_at_25%_100%,#000_25%,transparent_72%)]">
        <WavyBackground
          containerClassName="absolute inset-0 h-full"
          colors={["#0a6cd4", "#38bdf8", "#7fd4ff", "#fb923c"]}
          backgroundFill="#050b18"
          waveWidth={34}
          blur={7}
          speed="slow"
          waveOpacity={0.65}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        {/* ---------- Left: copy ---------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Tökéletes{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg,#fb923c,#fdba74 18%,#b6e6ff 38%,#38bdf8 52%,#0a6cd4 64%,#b6e6ff 78%,#fdba74 90%,#fb923c)",
                backgroundSize: "250% 100%",
                animation: "shimmer 7s linear infinite",
              }}
            >
              hőmérséklet
              <br className="hidden sm:block" /> minden évszakban
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Nyáron <span className="font-semibold text-ice">kellemes hűvös</span>,
            télen <span className="font-semibold text-warm-400">otthonos meleg</span>.
            Prémium klímaszerelés, klímatisztítás és javítás Kecskeméten – egy
            megbízható szakembertől,{" "}
            <span className="text-brand-100">garanciával és számlával, akár 10 év
            klímagaranciával.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <span className="relative inline-flex">
              {/* pulsing halo */}
              <span className="absolute inset-0 animate-[pulseGlow_3s_ease-in-out_infinite] rounded-full bg-warm-500/40 blur-xl" />
              <a
                href={site.phoneHref}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-warm-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </span>
            <a
              href="/idopontfoglalas/"
              className="glass-strong group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-all duration-200 hover:border-brand-400/60 hover:text-white cursor-pointer"
            >
              <CalendarCheck className="h-5 w-5 text-brand-300" />
              Időpontfoglalás
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
          >
            {[
              { icon: BadgeCheck, label: "Akár 10 év garancia" },
              { icon: ShieldCheck, label: "Garancia + számla" },
              { icon: Snowflake, label: "Prémium, márkafüggetlen klímaszerviz" },
              { icon: Wind, label: "Átlátható ár" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-300" />
                {label}
              </li>
            ))}
          </motion.ul>

          {/* Quick stats — instant credibility */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/8 pt-6"
          >
            {[
              { value: "500+", label: "telepített klíma" },
              { value: "4.8★", label: "Google értékelés" },
              { value: "15+", label: "év tapasztalat" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-extrabold text-white">
                  {s.value}
                </span>
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Mobile/tablet: interactive panel */}
          <motion.div variants={item} className="mt-10 md:hidden">
            <ClimatePanel />
          </motion.div>
        </motion.div>

        {/* ---------- Right: real-photo slot + floating interactive control ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative hidden md:block"
        >
          <Photo
            src="/photos/belteri-aux-nappali.jpg"
            alt="Beszerelt AUX beltéri klíma egység egy kecskeméti lakásban"
            priority
            className="h-[34rem] w-full"
          />
          {/* floating live control over the photo's lower-left corner */}
          <div className="absolute -bottom-6 -left-8 w-[56%] min-w-[15rem]">
            <ClimatePanel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
