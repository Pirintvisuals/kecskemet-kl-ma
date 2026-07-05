"use client";

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

/**
 * Signature animated visual: a wall-mounted split AC unit blowing cold air.
 * `accent` tints the air streams / glow so each service page feels distinct.
 */

const FLAKES = [
  { x: 62, y: 60, s: 14, d: 6, delay: 0 },
  { x: 78, y: 52, s: 10, d: 7.5, delay: 1.1 },
  { x: 70, y: 74, s: 12, d: 6.8, delay: 0.6 },
  { x: 86, y: 68, s: 9, d: 8, delay: 1.8 },
  { x: 55, y: 80, s: 11, d: 7, delay: 2.3 },
];

export default function ClimateVisual({ accent = "#38BDF8" }: { accent?: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* accent glow */}
      <div
        className="absolute inset-8 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${accent}33, transparent 65%)` }}
      />

      <svg
        viewBox="0 0 400 360"
        className="relative h-full w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        role="img"
        aria-label="Falra szerelt klíma, amint hűs levegőt fúj"
      >
        <defs>
          <linearGradient id="unitBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#dbe9fb" />
          </linearGradient>
          <linearGradient id="airStream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0" />
            <stop offset="0.5" stopColor={accent} stopOpacity="0.9" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* AC unit body */}
        <g>
          <rect
            x="52"
            y="46"
            width="296"
            height="82"
            rx="20"
            fill="url(#unitBody)"
          />
          {/* top vent slits */}
          <line x1="80" y1="64" x2="320" y2="64" stroke="#c3d7ef" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="74" x2="320" y2="74" stroke="#d3e2f4" strokeWidth="3" strokeLinecap="round" />
          {/* louver / air outlet */}
          <rect x="70" y="104" width="260" height="12" rx="6" fill={accent} opacity="0.85" />
          {/* status dot */}
          <circle cx="316" cy="92" r="4" fill={accent} />
        </g>

        {/* Cold air streams (animated) */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${110 + i * 70} 128
                C ${90 + i * 70} 190, ${150 + i * 70} 230, ${118 + i * 70} 300`}
            fill="none"
            stroke="url(#airStream)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0.2, opacity: 0 }}
            animate={{
              pathLength: [0.15, 1, 0.15],
              opacity: [0, 0.9, 0],
              y: [0, 14, 0],
            }}
            transition={{
              duration: 3.2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating snowflakes */}
      {FLAKES.map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${f.x}%`, top: `${f.y}%`, color: accent }}
          animate={{ y: [0, 18, 0], opacity: [0.2, 0.9, 0.2], rotate: [0, 40, 0] }}
          transition={{ duration: f.d, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Snowflake style={{ width: f.s, height: f.s }} />
        </motion.div>
      ))}

      {/* small comfort chip */}
      <motion.div
        className="glass-strong absolute bottom-2 left-2 flex items-center gap-2 rounded-xl px-3 py-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Snowflake className="h-4 w-4" style={{ color: accent }} />
        <span className="text-sm font-semibold text-white">Hűs, tiszta levegő</span>
      </motion.div>
    </div>
  );
}
