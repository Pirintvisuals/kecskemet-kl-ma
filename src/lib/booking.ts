/**
 * Booking (időpontfoglalás) configuration.
 * The booking page + form read everything from here, and the PHP endpoint
 * (public/book.php) mirrors the same recipient / labels.
 */

/** Selectable arrival time-windows shown as chips. */
export const timeSlots = [
  { id: "08-10", label: "8:00 – 10:00", hint: "Kora reggel" },
  { id: "10-12", label: "10:00 – 12:00", hint: "Délelőtt" },
  { id: "12-14", label: "12:00 – 14:00", hint: "Kora délután" },
  { id: "14-16", label: "14:00 – 16:00", hint: "Délután" },
  { id: "barmikor", label: "Rugalmas", hint: "Bármelyik időpont jó" },
] as const;

/**
 * Endpoint the booking form POSTs to. This is a plain PHP file served from
 * the site root on the cPanel host (it is copied verbatim from /public into
 * the static export). Keep the leading slash + trailing name in sync with the
 * file in public/book.php.
 */
export const BOOKING_ENDPOINT = "/book.php";

/** How many days ahead the earliest bookable date is (0 = today allowed). */
export const MIN_LEAD_DAYS = 1;

/** How far ahead visitors may pick a date. */
export const MAX_LEAD_DAYS = 60;

export const bookingBenefits = [
  "Ingyenes, kötelezettségmentes időpontfoglalás",
  "Visszaigazolás telefonon a megadott elérhetőségen",
  "Garancia és számla minden elvégzett munkára",
  "Gyors kiszállás Kecskeméten és 30 km-es körzetében",
] as const;
