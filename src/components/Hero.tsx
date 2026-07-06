"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Snowflake, Wind } from "lucide-react";
import AuroraBackground from "./AuroraBackground";
import ClimatePanel from "./ClimatePanel";
import ImagePlaceholder from "./ImagePlaceholder";
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
            Tökéletes hőmérséklet
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
            Nyáron kellemes hűvös, télen otthonos meleg. Prémium
            klímaszerelés, karbantartás és javítás Kecskeméten – egy megbízható
            szakembertől,{" "}
            <span className="text-brand-100">garanciával és számlával.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.phoneHref}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-warm-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_-15px_rgba(249,115,22,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
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

          {/* Mobile: interactive panel */}
          <motion.div variants={item} className="mt-10 lg:hidden">
            <ClimatePanel />
          </motion.div>
        </motion.div>

        {/* ---------- Right: real-photo slot + floating interactive control ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <ImagePlaceholder
            label="Beszerelt klíma egy nappaliban"
            hint="Valódi referenciafotó a munkáiról"
            minH="min-h-[34rem]"
            align="top"
            className="w-full"
          />
          {/* floating live control over the photo's lower-left corner */}
          <div className="absolute -bottom-6 -left-8 w-[56%] min-w-[15rem]">
            <ClimatePanel />
          </div>
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
