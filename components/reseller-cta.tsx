"use client";

import { motion, useReducedMotion } from "motion/react";
import { Snowflake } from "@phosphor-icons/react/dist/ssr";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export function ResellerCTA() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-cream-100 px-4 py-12 md:px-12 md:py-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-espresso-800 px-6 py-14 text-center md:px-12"
      >
        {/* Decorative snowflakes */}
        <Snowflake
          aria-hidden
          size={120}
          className="pointer-events-none absolute -left-8 -top-8 text-cream-100/6"
        />
        <Snowflake
          aria-hidden
          size={160}
          className="pointer-events-none absolute -bottom-10 -right-10 text-cream-100/5"
        />

        <div className="relative mx-auto max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-300">
            Untuk Reseller &amp; Toko
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Mau ambil untuk <em className="italic">reseller</em> atau toko?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream-100/80 md:text-base">
            Hubungi kami untuk informasi produk dan pembelian dalam jumlah
            banyak dengan harga grosir.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              href={waLink(WA_MESSAGES.reseller)}
              size="lg"
              variant="cream"
            >
              Tanya Harga Grosir
            </WhatsAppButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
