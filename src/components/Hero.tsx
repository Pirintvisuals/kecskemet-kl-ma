"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Snowflake, Wind } from "lucide-react";
import AuroraBackground from "./AuroraBackground";
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ---------- Left: copy ---------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.div
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-brand-100"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Gyors kiszállás Kecskeméten és 30 km-es körzetében
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Tökéletes klíma
            <br className="hidden sm:block" />{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg,#b6e6ff,#74b2f7 35%,#0a6cd4 60%,#b6e6ff 90%)",
                backgroundSize: "220% 100%",
                animation: "shimmer 4s linear infinite",
              }}
            >
              minden évszakban
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.brand} – prémium klímaszerelés, karbantartás és javítás
            Kecskeméten. Telepítéstől a beüzemelésig, egy megbízható szakembertől,{" "}
            <span className="text-brand-100">garanciával és számlával.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.phoneHref}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(10,108,212,0.9)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
            <a
              href="#szolgaltatasok"
              className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-brand-50 transition-colors duration-200 hover:text-white cursor-pointer"
            >
              Szolgáltatásaink
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
          >
            {[
              { icon: ShieldCheck, label: "Garancia + számla" },
              { icon: Snowflake, label: "Márkafüggetlen szerviz" },
              { icon: Wind, label: "Átlátható ár" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-300" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---------- Right: animated visual ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          {/* Glow halo */}
          <div className="absolute inset-6 rounded-full bg-brand-500/30 blur-3xl" />

          {/* Orbiting rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-brand-400/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-ice shadow-[0_0_14px_4px_rgba(127,212,255,0.7)]" />
          </motion.div>
          <motion.div
            className="absolute inset-10 rounded-full border border-brand-300/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-300 shadow-[0_0_12px_3px_rgba(116,178,247,0.7)]" />
          </motion.div>

          {/* Central glass orb with logo */}
          <motion.div
            className="glass-strong absolute inset-[22%] flex items-center justify-center rounded-full"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(72,168,240,0.35),transparent_70%)]" />
            <Image
              src="/logo.png"
              alt="Kecskemét Klíma logó"
              width={150}
              height={150}
              priority
              className="relative h-[58%] w-[58%] object-contain drop-shadow-[0_8px_24px_rgba(10,108,212,0.6)]"
            />
          </motion.div>

          {/* Floating comfort card */}
          <motion.div
            className="glass-strong absolute -bottom-2 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/20 text-brand-200">
              <Snowflake className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-xl font-bold leading-none text-white">
                21°C
              </p>
              <p className="text-xs text-muted">Ideális komfort</p>
            </div>
          </motion.div>

          {/* Floating rating card */}
          <motion.div
            className="glass-strong absolute -right-3 top-4 rounded-2xl px-4 py-3 text-right"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <p className="font-display text-xl font-bold leading-none text-white">
              4.8★
            </p>
            <p className="text-xs text-muted">Google értékelés</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-brand-300/40 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-brand-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
