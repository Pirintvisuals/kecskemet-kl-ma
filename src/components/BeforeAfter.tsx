"use client";

import { ImagePlus, Snowflake, ChevronsLeftRight } from "lucide-react";
import {
  ImageComparison,
  ImageComparisonPanel,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";

/**
 * Interactive before/after slider (21st.dev Image Comparison under the hood).
 * Ships with obvious photo-placeholder panels; when real photos arrive,
 * swap the panels for ImageComparisonImage elements.
 */
export default function BeforeAfter({
  beforeLabel = "Előtte",
  afterLabel = "Utána",
  hint = "Húzza a csúszkát",
}: {
  beforeLabel?: string;
  afterLabel?: string;
  hint?: string;
}) {
  return (
    <div>
      <ImageComparison
        className="aspect-[16/9] w-full rounded-3xl border border-white/10"
        enableHover
        springOptions={{ bounce: 0.28 }}
      >
        {/* BEFORE — dingy, warm-grey "old unit" placeholder */}
        <ImageComparisonPanel
          position="right"
          className="bg-[linear-gradient(140deg,#2a2622,#1c1a17)]"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_10px,transparent_10px,transparent_20px)]" />
          <span className="absolute left-4 top-4 rounded-md bg-black/50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-200/90">
            {beforeLabel}
          </span>
          <div className="absolute left-6 bottom-6 flex items-center gap-2 text-sm text-white/45">
            <ImagePlus className="h-4 w-4" />
            Fotó helye – a munka előtt
          </div>
        </ImageComparisonPanel>

        {/* AFTER — fresh, cool "new install" placeholder */}
        <ImageComparisonPanel
          position="left"
          className="bg-[linear-gradient(140deg,#0b1730,#0c2b54)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_30%,rgba(72,168,240,0.25),transparent_70%)]" />
          <span className="absolute right-4 top-4 rounded-md bg-brand-500/30 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-ice-bright">
            {afterLabel}
          </span>
          <div className="absolute right-6 bottom-6 flex items-center gap-2 text-sm text-brand-100/70">
            <Snowflake className="h-4 w-4 text-brand-300" />
            Fotó helye – a kész munka
          </div>
        </ImageComparisonPanel>

        {/* Slider with handle */}
        <ImageComparisonSlider className="w-1 bg-white/70 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-[0_6px_24px_rgba(0,0,0,0.45)]">
            <ChevronsLeftRight className="h-5 w-5" />
          </div>
        </ImageComparisonSlider>
      </ImageComparison>

      <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-muted">
        <ChevronsLeftRight className="h-3.5 w-3.5 text-brand-300" />
        {hint} – így fog kinézni az előtte/utána összehasonlítás a valódi fotókkal
      </p>
    </div>
  );
}
