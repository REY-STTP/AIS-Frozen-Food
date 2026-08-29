"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "ais-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(KEY, "declined");
    } catch {}
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand-300 bg-white/95 p-4 shadow-lg backdrop-blur md:bottom-4 md:left-1/2 md:w-full md:max-w-xl md:-translate-x-1/2 md:rounded-2xl md:border">
      <p className="text-sm leading-relaxed text-espresso-700">
        Kami pakai cookie/analytics minimal (Plausible) untuk ukur kunjungan. Tidak ada iklan tracking.{" "}
        <Link href="/#produk" className="font-semibold text-cocoa-600 underline">
          Pelajari
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button onClick={accept} className="flex-1 rounded-full bg-cocoa-600 px-4 py-2.5 text-sm font-bold text-cream-50">
          Terima
        </button>
        <button onClick={decline} className="flex-1 rounded-full border border-sand-300 bg-white px-4 py-2.5 text-sm font-semibold text-espresso-700">
          Tolak
        </button>
      </div>
    </div>
  );
}
