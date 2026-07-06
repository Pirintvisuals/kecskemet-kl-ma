"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

/**
 * Lightweight, non-blocking cookie/privacy notice (EU/HU expectation once a
 * Google Maps embed is present). Dismissal stored in localStorage.
 */
export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("kk-cookie-ack")) setShow(true);
  }, []);

  if (!show) return null;

  const dismiss = () => {
    localStorage.setItem("kk-cookie-ack", "1");
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md">
      <div className="glass-strong flex items-start gap-3 rounded-2xl p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/20 text-brand-200">
          <Cookie className="h-5 w-5" />
        </span>
        <div className="text-sm text-brand-100/90">
          Weboldalunk a működéshez szükséges sütiket, valamint a térkép
          megjelenítéséhez a Google Maps szolgáltatását használja.{" "}
          <a href="/adatkezeles/" className="font-semibold text-brand-300 underline underline-offset-2 hover:text-white">
            Részletek
          </a>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={dismiss}
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 cursor-pointer"
            >
              Rendben
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Bezárás"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
