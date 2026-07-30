"use client";

import { useState } from "react";
import { CalendarCheck, MessageSquare } from "lucide-react";
import BookingForm from "./BookingForm";
import ContactForm from "./ContactForm";

type Tab = "calendar" | "message";

/**
 * Merged booking + contact panel: a segmented control that switches between the
 * full calendar booking (BookingForm) and the free-text message / quote form
 * (ContactForm). Lets the visitor pick their preferred channel on a single page.
 */
export default function BookingContactTabs() {
  const [tab, setTab] = useState<Tab>("calendar");

  const tabBtn = (active: boolean) =>
    `flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
      active
        ? "bg-brand-500/20 text-white ring-1 ring-brand-400/40"
        : "text-brand-100/70 hover:text-white"
    }`;

  return (
    <div className="glass-strong rounded-3xl p-4 sm:p-6">
      {/* Segmented control */}
      <div
        role="tablist"
        aria-label="Foglalás módja"
        className="mb-6 grid grid-cols-2 gap-2 rounded-2xl bg-navy-950/60 p-1.5"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "calendar"}
          onClick={() => setTab("calendar")}
          className={tabBtn(tab === "calendar")}
        >
          <CalendarCheck className="h-4 w-4" />
          Időpontfoglalás
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "message"}
          onClick={() => setTab("message")}
          className={tabBtn(tab === "message")}
        >
          <MessageSquare className="h-4 w-4" />
          Üzenet / árajánlat
        </button>
      </div>

      <p className="mb-6 text-sm text-muted">
        {tab === "calendar"
          ? "Válasszon szolgáltatást, dátumot és idősávot – a foglalást telefonon visszaigazoljuk."
          : "Írja le pár szóban, miben segíthetünk – minél több részletet ad meg, annál pontosabb árajánlatot tudunk adni."}
      </p>

      {tab === "calendar" ? <BookingForm /> : <ContactForm withService detailed />}
    </div>
  );
}
