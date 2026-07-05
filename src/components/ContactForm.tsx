"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/site";

/**
 * Reusable contact form. Builds a prefilled mailto: on submit so it works
 * on static hosting (no server needed). `withService` adds a service dropdown.
 */
export default function ContactForm({
  withService = false,
}: {
  withService?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = service ? ` – ${service}` : "";
    const subject = encodeURIComponent(
      `Klíma árajánlatkérés${svc} – ${name || "weboldal"}`
    );
    const body = encodeURIComponent(
      `Név: ${name}\nTelefon: ${phone}\n${
        service ? `Szolgáltatás: ${service}\n` : ""
      }\nÜzenet:\n${message}`
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-white placeholder:text-muted/60 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-brand-100">
          Név
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Az Ön neve"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-brand-100">
          Telefonszám
        </label>
        <input
          id="cf-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+36 30 000 0000"
          className={field}
        />
      </div>

      {withService && (
        <div>
          <label htmlFor="cf-service" className="mb-1.5 block text-sm font-medium text-brand-100">
            Melyik szolgáltatás érdekli?
          </label>
          <select
            id="cf-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${field} cursor-pointer`}
          >
            <option value="">Válasszon…</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Egyéb / nem tudom">Egyéb / nem tudom</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-brand-100">
          Miben segíthetünk?
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Pl. 2 db klíma telepítése egy 3 szobás lakásba…"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 font-semibold text-white shadow-[0_16px_40px_-14px_rgba(10,108,212,0.9)] transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
      >
        <Send className="h-4 w-4" />
        Üzenet küldése
      </button>
      <p className="text-center text-xs text-muted">
        A gomb megnyitja levelezőjét az előre kitöltött üzenettel.
      </p>
    </form>
  );
}
