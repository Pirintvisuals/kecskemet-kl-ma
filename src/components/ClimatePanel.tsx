"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, Minus, Plus, Fan, Power } from "lucide-react";

/**
 * INTERACTIVE thermostat — the hero's "wow": visitors can change the target
 * temperature (+/-), toggle Hűtés/Fűtés (which recolours everything), and
 * cycle fan speed. Reads unmistakably as an air-conditioning control.
 */

const MIN = 16;
const MAX = 30;

export default function ClimatePanel() {
  const [temp, setTemp] = useState(21);
  const [mode, setMode] = useState<"cool" | "heat">("cool");
  const [fan, setFan] = useState(2);

  const accent = mode === "cool" ? "#38bdf8" : "#f97316";
  const accentSoft = mode === "cool" ? "rgba(56,189,248," : "rgba(249,115,22,";
  // marker angle across the top arc (avoids bottom gap)
  const angle = -130 + ((temp - MIN) / (MAX - MIN)) * 260;

  const dec = () => setTemp((t) => Math.max(MIN, t - 1));
  const inc = () => setTemp((t) => Math.min(MAX, t + 1));

  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* ambient glow follows the mode */}
      <div
        className="absolute inset-6 rounded-full blur-3xl transition-colors duration-500"
        style={{ background: `${accentSoft}0.25)` }}
      />

      <div className="glass-strong relative rounded-[2rem] px-6 py-6">
        {/* header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-lg transition-colors"
              style={{ backgroundColor: `${accentSoft}0.18)`, color: accent }}
            >
              <Power className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-brand-100">Klímavezérlő</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {mode === "cool" ? "Hűtés" : "Fűtés"}
          </span>
        </div>

        {/* Dial + steppers */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={dec}
            aria-label="Hőmérséklet csökkentése"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-950/60 text-white ring-1 ring-white/10 transition-all hover:bg-navy-950 hover:ring-white/25 active:scale-95 cursor-pointer"
          >
            <Minus className="h-5 w-5" />
          </button>

          <div className="relative grid h-44 w-44 place-items-center">
            {/* spectrum ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from 180deg,
                  transparent 0deg 24deg,
                  #ea580c 24deg, #fb923c 58deg, #fdba74 95deg,
                  #b6e6ff 145deg, #38bdf8 175deg, #0a6cd4 185deg,
                  #38bdf8 195deg, #b6e6ff 225deg, #fdba74 270deg,
                  #fb923c 305deg, #ea580c 336deg,
                  transparent 336deg 360deg)`,
                mask: "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                opacity: 0.85,
              }}
            />
            {/* moving marker */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: angle }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div
                className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-navy-900 bg-white"
                style={{ boxShadow: `0 0 14px 4px ${accentSoft}0.85)` }}
              />
            </motion.div>

            {/* readout */}
            <div className="grid h-32 w-32 place-items-center rounded-full bg-navy-950/85 ring-1 ring-white/10">
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold leading-none text-white">
                  {temp}
                  <span
                    className="align-top text-xl transition-colors"
                    style={{ color: accent }}
                  >
                    °C
                  </span>
                </p>
                <p className="mt-1 text-[11px] font-medium text-muted">
                  Cél hőmérséklet
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={inc}
            aria-label="Hőmérséklet növelése"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-950/60 text-white ring-1 ring-white/10 transition-all hover:bg-navy-950 hover:ring-white/25 active:scale-95 cursor-pointer"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* mode toggle */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setMode("cool")}
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all cursor-pointer"
            style={
              mode === "cool"
                ? { backgroundColor: "rgba(56,189,248,0.2)", color: "#fff", boxShadow: "inset 0 0 0 1px rgba(56,189,248,0.5)" }
                : { backgroundColor: "rgba(5,11,24,0.5)", color: "#9fb2cc" }
            }
          >
            <Snowflake className="h-4 w-4" style={{ color: "#38bdf8" }} />
            Hűtés
          </button>
          <button
            type="button"
            onClick={() => setMode("heat")}
            className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all cursor-pointer"
            style={
              mode === "heat"
                ? { backgroundColor: "rgba(249,115,22,0.2)", color: "#fff", boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.5)" }
                : { backgroundColor: "rgba(5,11,24,0.5)", color: "#9fb2cc" }
            }
          >
            <Flame className="h-4 w-4" style={{ color: "#f97316" }} />
            Fűtés
          </button>
        </div>

        {/* fan speed */}
        <button
          type="button"
          onClick={() => setFan((f) => (f % 3) + 1)}
          className="mt-3 flex w-full items-center justify-between rounded-xl bg-navy-950/40 px-3 py-2.5 transition-colors hover:bg-navy-950/70 cursor-pointer"
        >
          <span className="flex items-center gap-2 text-xs text-muted">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 4 - fan, repeat: Infinity, ease: "linear" }}
              style={{ color: accent }}
            >
              <Fan className="h-4 w-4" />
            </motion.span>
            Ventilátor
          </span>
          <span className="flex items-end gap-1">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className="w-1.5 rounded-full transition-all"
                style={{
                  height: 5 + n * 4,
                  backgroundColor: n <= fan ? accent : "rgba(159,178,204,0.25)",
                }}
              />
            ))}
          </span>
        </button>

        {/* interactive hint */}
        <p className="mt-3 text-center text-[11px] text-muted/80">
          Próbálja ki: állítsa a hőmérsékletet és a módot ↑
        </p>
      </div>
    </div>
  );
}
