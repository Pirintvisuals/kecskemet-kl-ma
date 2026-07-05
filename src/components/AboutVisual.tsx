"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Award, Layers } from "lucide-react";

/**
 * About-page hero visual: a glass "founder" card with the brand mark and
 * floating credential chips. Used in place of a photo (none available yet).
 */

const CHIPS = [
  { icon: ShieldCheck, label: "Engedélyes szakember", pos: "-left-6 top-10", delay: 0.4 },
  { icon: Award, label: "15+ év tapasztalat", pos: "-right-4 top-24", delay: 0.9 },
  { icon: Layers, label: "Márkafüggetlen", pos: "-left-2 bottom-10", delay: 1.3 },
];

export default function AboutVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* glow */}
      <div className="absolute inset-8 rounded-full bg-brand-500/25 blur-3xl" />

      {/* orbiting ring */}
      <motion.div
        className="absolute inset-2 rounded-full border border-brand-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ice shadow-[0_0_12px_3px_rgba(127,212,255,0.7)]" />
      </motion.div>

      {/* central founder card */}
      <motion.div
        className="glass-strong absolute inset-[14%] flex flex-col items-center justify-center rounded-[2rem] p-6 text-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative mb-4 grid h-24 w-24 place-items-center rounded-full bg-navy-950/70 ring-1 ring-brand-400/30">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(72,168,240,0.35),transparent_70%)]" />
          <Image
            src="/logo.png"
            alt="Kecskemét Klíma logó"
            width={64}
            height={64}
            className="relative h-14 w-14 object-contain"
          />
        </div>
        <p className="font-display text-xl font-bold text-white">Polyák Zoltán</p>
        <p className="text-sm text-brand-300">Klímaszerelő mester</p>
        <div className="mt-3 flex items-center gap-1 text-brand-200">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 text-sm text-muted">4.8</span>
        </div>
      </motion.div>

      {/* floating credential chips */}
      {CHIPS.map((c) => (
        <motion.div
          key={c.label}
          className={`glass-strong absolute ${c.pos} flex items-center gap-2 rounded-xl px-3 py-2`}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <c.icon className="h-4 w-4 text-brand-300" />
          <span className="text-sm font-medium text-white">{c.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
