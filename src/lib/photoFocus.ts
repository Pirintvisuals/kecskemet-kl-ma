/**
 * Per-photo focal points for object-cover crops.
 *
 * Every install photo is a portrait phone shot with the AC unit high in the
 * frame, so a centered cover-crop slices the unit off and shows empty floor.
 * These values keep the actual air-conditioner in view at any aspect ratio.
 * Format: CSS object-position ("x% y%").
 */
export const PHOTO_FOCUS: Record<string, string> = {
  // --- real own-work photos (portrait, unit high in frame) ---
  "/photos/belteri-aux-nappali.jpg": "center 30%",
  "/photos/belteri-aux-halo.jpg": "center 30%",
  "/photos/belteri-polar-nyitott.jpg": "center 27%",
  "/photos/belteri-polar-fal.jpg": "center 27%",
  "/photos/belteri-polar-nappali.jpg": "40% 25%",
  "/photos/kulteri-aux-homlokzat.jpg": "center 27%",
  "/photos/kulteri-aux-oldal.jpg": "center 32%",
  "/photos/kulteri-polar-eresz.jpg": "center 33%",
  "/photos/kulteri-polar-kozeli.jpg": "center 40%",
  "/photos/kulteri-polar-tavoli.jpg": "center 42%",
  // --- stock (landscape) photos, unit off to one side ---
  "/photos/klima-belteri-nappali.jpg": "18% 22%",
  "/photos/klima-belteri-halo.jpg": "28% 20%",
  "/photos/klima-belteri-szoba.jpg": "72% 18%",
  "/photos/klima-szereles.jpg": "center 30%",
  "/photos/klima-karbantartas.jpg": "center center",
  "/photos/klima-javitas.jpg": "center center",
};

/** Focal point for a photo src, defaulting to centre when unknown. */
export function focusFor(src: string): string {
  return PHOTO_FOCUS[src] ?? "center center";
}
