"use client";

import { useEffect } from "react";

/** Client-side redirect for static hosting (no server rewrites available). */
export default function Redirector({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}
