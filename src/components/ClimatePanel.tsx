"use client";

import { motion } from "framer-motion";
import { Snowflake, Flame, Sun, Power, Fan } from "lucide-react";

/**
 * Hero visual: an unmistakable CLIMATE-CONTROL panel.
 * A temperature dial with a warm→cool gradient (fűtés ↔ hűtés), mode chips,
 * and "meleg kint / hűvös bent" story chips. Warm + cool = the brand duality.
 */

const DIAL_GRADIENT = `conic-gradient(from 180deg,
  transparent 0deg 22deg,
  #ea580c 22deg,
  #fb923c 55deg,
  #fdba74 92deg,
  #b6e6ff 140deg,
  #38bdf8 172deg,
  #0a6cd4 180deg,
  #38bdf8 188deg,
  #b6e6ff 220deg,
  #fdba74 268deg,
  #fb923c 305deg,
  #ea580c 338deg,
  transparent 338deg 360deg)`;

export default function ClimatePanel() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* ambient glows: cool left, warm right */}
      <div className="absolute -left-6 top-6 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-warm-500/25 blur-3xl" />

      {/* Sun (heat outside) */}
      <motion.div
        className="absolute -right-1 top-2 z-20 flex items-center gap-2 rounded-2xl border border-warm-400/30 bg-navy-900/70 px-3 py-2 backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-warm-400"
        >
          <Sun className="h-5 w-5" />
        </motion.span>
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wide text-muted">Kint</p>
          <p className="text-sm font-bold text-white">+34°C</p>
        </div>
      </motion.div>

      {/* Snowflake (cool inside) */}
      <motion.div
        className="absolute -left-2 bottom-6 z-20 flex items-center gap-2 rounded-2xl border border-brand-400/30 bg-navy-900/70 px-3 py-2 backdrop-blur"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <span className="text-brand-300">
          <Snowflake className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-wide text-muted">Bent</p>
          <p className="text-sm font-bold text-white">21°C</p>
        </div>
      </motion.div>

      {/* Control panel card */}
      <motion.div
        className="glass-strong absolute inset-[6%] flex flex-col items-center justify-center rounded-[2.2rem] px-6 py-7"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* header */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-500/20 text-brand-300">
              <Power className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-brand-100">Klímavezérlő</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aktív
          </span>
        </div>

        {/* Dial */}
        <div className="relative my-5 grid h-52 w-52 place-items-center">
          {/* gradient ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: DIAL_GRADIENT,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 16px), #000 calc(100% - 15px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 16px), #000 calc(100% - 15px))",
            }}
          />
          {/* current marker at top (comfort zone) */}
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-navy-900 bg-white shadow-[0_0_14px_4px_rgba(127,212,255,0.8)]" />

          {/* inner readout */}
          <div className="grid h-36 w-36 place-items-center rounded-full bg-navy-950/80 ring-1 ring-white/10">
            <div className="text-center">
              <p className="font-display text-5xl font-extrabold leading-none text-white">
                21<span className="align-top text-2xl text-brand-300">°C</span>
              </p>
              <p className="mt-1.5 text-xs font-medium text-muted">Ideális komfort</p>
            </div>
          </div>
        </div>

        {/* mode chips */}
        <div className="grid w-full grid-cols-2 gap-3">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-500/20 px-3 py-2.5 ring-1 ring-brand-400/40">
            <Snowflake className="h-4 w-4 text-brand-300" />
            <span className="text-sm font-semibold text-white">Hűtés</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-navy-950/50 px-3 py-2.5 ring-1 ring-warm-400/25">
            <Flame className="h-4 w-4 text-warm-400" />
            <span className="text-sm font-semibold text-brand-100/80">Fűtés</span>
          </div>
        </div>

        {/* fan row */}
        <div className="mt-3 flex w-full items-center justify-between rounded-xl bg-navy-950/40 px-3 py-2">
          <span className="flex items-center gap-2 text-xs text-muted">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-brand-300"
            >
              <Fan className="h-4 w-4" />
            </motion.span>
            Ventilátor
          </span>
          <div className="flex items-end gap-1">
            {[6, 10, 14].map((h, i) => (
              <motion.span
                key={i}
                className="w-1.5 rounded-full bg-brand-400"
                style={{ height: h }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.4, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
