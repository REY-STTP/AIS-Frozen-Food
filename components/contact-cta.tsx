"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WA_MESSAGES, waLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function ContactCTA() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-cream-100 px-4 py-20 md:px-12 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-2xl text-center"
      >
        <div aria-hidden className="mb-4 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-cocoa-600" />
          <span className="h-2 w-2 rotate-45 bg-cocoa-600" />
          <span className="h-px w-12 bg-cocoa-600" />
        </div>
        <h2 className="font-display text-3xl font-bold italic leading-tight text-espresso-800 sm:text-4xl md:text-5xl">
          Siap pesan frozen food?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-espresso-700 md:text-base">
          Hubungi AIS Frozen Food untuk cek produk, harga, dan ketersediaan.
          Kami balas secepatnya setiap hari.
        </p>
        <motion.div
          className="mt-9 flex flex-col items-center gap-4"
          animate={reduce ? undefined : { scale: [1, 1.015, 1] }}
          transition={reduce ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        >
          <WhatsAppButton href={waLink(WA_MESSAGES.contact)} size="lg">
            Chat WhatsApp
          </WhatsAppButton>
          <p className="text-sm tracking-wide text-espresso-700">
            {WHATSAPP_DISPLAY}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
