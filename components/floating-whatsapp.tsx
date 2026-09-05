"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WA_MESSAGES, waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { trackTelClick, trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-5 z-40 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:bottom-7 md:right-7"
        >
          <div className="flex flex-col items-center gap-2">
            <Link
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp AIS Frozen Food"
              onClick={() => {
                try {
                  trackWhatsAppClick("floating");
                } catch {}
              }}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-cocoa-600 text-cream-50 shadow-lg transition-all duration-300 hover:bg-cocoa-700 active:scale-95 md:h-16 md:w-16"
            >
              <WhatsappLogo size={28} weight="fill" aria-hidden />
            </Link>
            <Link
              href={`tel:+${WHATSAPP_NUMBER}`}
              aria-label="Telepon AIS Frozen Food 0852-2612-2121"
              onClick={() => {
                try {
                  trackTelClick("floating");
                } catch {}
              }}
              className="hidden items-center justify-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-espresso-800 shadow md:inline-flex"
            >
              Tel: 0852-2612-2121
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
