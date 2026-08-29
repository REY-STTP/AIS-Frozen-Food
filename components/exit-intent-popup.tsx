"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

const STORAGE_KEY = "ais-exit-intent-dismissed";
const SHOW_DELAY_MS = 3000;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const hasFiredRef = useRef(false);

  const isDismissed = useCallback(() => {
    try {
      return !!sessionStorage.getItem(STORAGE_KEY);
    } catch {
      return hasFiredRef.current;
    }
  }, []);

  const dismiss = useCallback(() => {
    hasFiredRef.current = true;
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }, []);

  useEffect(() => {
    if (isDismissed()) return;
    const t = window.setTimeout(() => setReady(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [isDismissed]);

  useEffect(() => {
    if (!ready || open || hasFiredRef.current || isDismissed()) return;

    let lastY = window.scrollY;

    const trigger = () => {
      if (hasFiredRef.current || isDismissed()) return;
      hasFiredRef.current = true;
      setOpen(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 8 && window.scrollY > 100) trigger();
    };

    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY - 60;
      const scrolledEnough = y > 600;
      if (goingUp && scrolledEnough) trigger();
      lastY = y;
    };

    const onMouseLeave = (e: MouseEvent) => {
      const fromTop = e.clientY <= 0;
      if (fromTop && window.scrollY > 200) trigger();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ready, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-espresso-950/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-sand-300 bg-white p-6 shadow-xl md:p-7"
          >
            <button
              onClick={dismiss}
              aria-label="Tutup popup"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream-100 text-espresso-700 transition-colors hover:bg-sand-200"
            >
              <X size={16} weight="bold" aria-hidden />
            </button>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa-600">Tunggu dulu!</p>
            <h2 id="exit-intent-title" className="mt-2 font-display text-2xl font-bold text-espresso-800">
              Mau tanya stok dulu?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-espresso-700">
              Chat WhatsApp sekarang — balas cepat tiap hari 08.00–20.00. Bisa ambil di toko Pati atau pesan antar Pati–Kudus.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cocoa-600 px-6 text-sm font-bold uppercase tracking-wider text-cream-50 transition-colors hover:bg-cocoa-700"
              >
                <WhatsappLogo size={18} weight="fill" aria-hidden /> Chat WhatsApp Sekarang
              </Link>
              <button
                onClick={dismiss}
                className="inline-flex h-11 items-center justify-center rounded-full border border-sand-300 bg-white px-6 text-sm font-semibold text-espresso-700 hover:bg-cream-50"
              >
                Lanjut lihat produk
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
