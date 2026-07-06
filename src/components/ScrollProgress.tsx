"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin "temperature" progress bar at the very top: fills cool→warm as the
 * visitor scrolls. Subtle, thematic, and makes the page feel alive.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg,#38bdf8,#7fd4ff 40%,#fdba74 75%,#f97316)",
        boxShadow: "0 0 12px rgba(249,115,22,0.45)",
      }}
    />
  );
}
