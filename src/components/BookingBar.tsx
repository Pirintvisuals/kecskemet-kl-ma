"use client";

import { useMemo, useState } from "react";
import { CalendarCheck, Loader2, CheckCircle2, Phone } from "lucide-react";
import { BOOKING_ENDPOINT, MIN_LEAD_DAYS, MAX_LEAD_DAYS } from "@/lib/booking";
import { services, site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * Compact booking form used at the bottom of every page (Footer) and higher up
 * on the homepage. Posts to the same PHP endpoint as the full BookingForm.
 */
export default function BookingBar({
  title = "Foglaljon időpontot pár másodperc alatt",
  subtitle = "Hagyja itt az adatait – visszahívjuk és egyeztetjük a pontos időpontot.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const today = useMemo(() => new Date(), []);
  const minDate = useMemo(() => toISODate(addDays(today, MIN_LEAD_DAYS)), [today]);
  const maxDate = useMemo(() => toISODate(addDays(today, MAX_LEAD_DAYS)), [today]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, date, company, message: "Gyors foglalás (weboldal alján)" }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json().catch(() => ({ ok: res.ok }));
      if (!data.ok) throw new Error();
      setStatus("success");
    } catch {
      // Fallback: open a prefilled e-mail so the request is never lost.
      const subject = encodeURIComponent(`Időpontfoglalás – ${name || "weboldal"}`);
      const body = encodeURIComponent(
        `Név: ${name}\nTelefon: ${phone}\n${service ? `Szolgáltatás: ${service}\n` : ""}Kért dátum: ${date}`
      );
      window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-white placeholder:text-muted/60 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30";

  if (status === "success") {
    return (
      <div className="glass-strong flex flex-col items-center gap-3 rounded-3xl p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint/15 text-mint ring-1 ring-mint/30">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="font-display text-xl font-bold text-white">
          Köszönjük, megkaptuk a foglalását!
        </h3>
        <p className="max-w-md text-sm text-muted">
          Hamarosan felhívjuk a megadott számon, és egyeztetjük a pontos időpontot.
        </p>
        <a
          href={site.phoneHref}
          className="mt-1 inline-flex items-center gap-2 rounded-full bg-warm-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-warm-600 cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          Inkább most hívom
        </a>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white">
            <CalendarCheck className="h-5 w-5 text-brand-300" />
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        </div>
        <a
          href="/idopontfoglalas/"
          className="mt-2 text-sm font-medium text-brand-300 transition-colors hover:text-white sm:mt-0 cursor-pointer"
        >
          Részletes foglalás →
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-xs font-medium text-brand-100" htmlFor="bb-name">Név</label>
          <input id="bb-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Az Ön neve" className={field} />
        </div>
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-xs font-medium text-brand-100" htmlFor="bb-phone">Telefon</label>
          <input id="bb-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+36 30 000 0000" className={field} />
        </div>
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-xs font-medium text-brand-100" htmlFor="bb-service">Szolgáltatás</label>
          <select id="bb-service" value={service} onChange={(e) => setService(e.target.value)} className={`${field} cursor-pointer`}>
            <option value="">Válasszon…</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="Egyéb / nem tudom">Egyéb / nem tudom</option>
          </select>
        </div>
        <div className="lg:col-span-1">
          <label className="mb-1.5 block text-xs font-medium text-brand-100" htmlFor="bb-date">Kért dátum</label>
          <input id="bb-date" type="date" required min={minDate} max={maxDate} value={date} onChange={(e) => setDate(e.target.value)} className={`${field} [color-scheme:dark] cursor-pointer`} />
        </div>

        {/* honeypot */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <input type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex items-center justify-center gap-2 rounded-xl bg-warm-500 px-5 py-3 font-semibold text-white shadow-[0_16px_40px_-16px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 disabled:opacity-70 lg:col-span-1 cursor-pointer"
        >
          {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <CalendarCheck className="h-5 w-5" />}
          Foglalok
        </button>
      </form>
      <p className="mt-3 text-xs text-muted">
        Ingyenes, kötelezettségmentes · vagy hívjon:{" "}
        <a href={site.phoneHref} className="font-medium text-brand-300 hover:text-white cursor-pointer">{site.phone}</a>
      </p>
    </div>
  );
}
