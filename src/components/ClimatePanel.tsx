"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, Minus, Plus, Fan, Power } from "lucide-react";

const MIN = 16;
const MAX = 30;
const HEAT_THRESHOLD = 23; // above this → heating mode

// dial geometry — a 260° arc with the gap centred at the bottom
const R = 82; // ring radius inside a 200×200 viewBox
const START = -130; // degrees, 0 = top, clockwise positive
const END = 130;
const SWEEP = END - START;

// Round to 3 decimals so SSR (Node) and client (browser) produce byte-identical
// strings — Math.cos/sin can differ by 1 ULP across engines → hydration mismatch.
const r3 = (n: number) => Math.round(n * 1000) / 1000;

// polar point on the ring (deg: 0 = top, clockwise)
const polar = (deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [r3(100 + R * Math.cos(rad)), r3(100 + R * Math.sin(rad))] as const;
};

// SVG arc path between two angles (always clockwise)
const arc = (from: number, to: number) => {
  const [x1, y1] = polar(from);
  const [x2, y2] = polar(to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2}`;
};

export default function ClimatePanel() {
  const [temp, setTemp] = useState(21);
  const [fan, setFan] = useState(2);

  const mode = temp > HEAT_THRESHOLD ? "heat" : "cool";
  // two clean, discrete accents — never a muddy in-between
  const accent = mode === "cool" ? "#38bdf8" : "#f97316";
  const accentSoft = mode === "cool" ? "rgba(56,189,248," : "rgba(249,115,22,";
  // marker angle across the top arc (avoids bottom gap)
  const angle = START + ((temp - MIN) / (MAX - MIN)) * SWEEP;
  const [knobX, knobY] = polar(angle);

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

          <div className="relative grid h-44 w-44 shrink-0 place-items-center">
            {/* dial ring — SVG guarantees a perfectly round, even arc */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="dialTrack" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#fdba74" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              {/* full spectrum track */}
              <path
                d={arc(START, END)}
                fill="none"
                stroke="url(#dialTrack)"
                strokeWidth={12}
                strokeLinecap="round"
                opacity={0.85}
              />
              {/* progress arc in the active mode colour */}
              <motion.path
                fill="none"
                stroke={accent}
                strokeWidth={12}
                strokeLinecap="round"
                initial={false}
                animate={{ d: arc(START, angle) }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              />
              {/* knob */}
              <motion.circle
                r={9}
                fill="#fff"
                stroke="#0b1220"
                strokeWidth={3}
                initial={false}
                animate={{ cx: knobX, cy: knobY }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                style={{ filter: `drop-shadow(0 0 6px ${accentSoft}0.85))` }}
              />
            </svg>

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

        {/* auto mode indicator */}
        <div
          className="mt-5 flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-500"
          style={{
            backgroundColor: `${accentSoft}0.12)`,
            boxShadow: `inset 0 0 0 1px ${accentSoft}0.35)`,
          }}
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <motion.span
              key={mode}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ color: accent }}
            >
              {mode === "cool" ? <Snowflake className="h-4 w-4" /> : <Flame className="h-4 w-4" />}
            </motion.span>
            {mode === "cool" ? "Hűtés" : "Fűtés"}
          </span>
          <span className="text-xs text-muted">
            {mode === "cool" ? `≤ ${HEAT_THRESHOLD}°C` : `> ${HEAT_THRESHOLD}°C`}
          </span>
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
