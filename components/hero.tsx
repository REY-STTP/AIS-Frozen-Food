"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";
import { business } from "@/lib/business";
import { categories, products } from "@/lib/products";
import { useAB } from "@/lib/ab";

const stats = [
  { value: `${products.length}+`, label: "Produk pilihan" },
  { value: `${categories.length}`, label: "Kategori" },
  { value: business.serviceArea, label: "Area pesan antar" },
];

export function Hero() {
  const ctaCopy = useAB("hero-cta-copy", "Pesan via WhatsApp");
  const ctaColor = useAB("cta-color", "cocoa");
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -40]);
  return (
    <section id="top" className="relative w-full scroll-mt-24">
      <div className="relative min-h-[640px] overflow-hidden py-10 md:h-170 md:min-h-0 md:py-0">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/gallery/toko.jpg"
            alt="Suasana toko AIS Frozen Food dengan rak beku berisi aneka frozen food"
            fill
            loading="eager"
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Legibility scrim */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-espresso-950/90 via-espresso-950/45 to-espresso-950/35"
        />

        {/* Overlay content */}
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-3xl flex-col items-center justify-center px-4 py-6 text-center md:min-h-0 md:h-full md:py-0">
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="sr-only">AIS Frozen Food — </span>Frozen Food Favorit untuk{" "}
            <em className="italic text-cocoa-200">Rumah &amp; Usaha</em>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream-100/85 md:text-base">
            Beragam pilihan frozen food untuk kebutuhan rumah, toko, reseller,
            dan pembelian dalam jumlah banyak. Ambil di toko atau pesan antar
            area Pati–Kudus.
          </p>

          <motion.div
            animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
            transition={reduce ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 flex flex-wrap justify-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-espresso-900">
              ● Stok terbatas — fresh hari ini
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100/90 px-3 py-1 text-[11px] font-semibold text-espresso-800">
              Buka tiap hari 08.00–20.00
            </span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <WhatsAppButton href={waLink(WA_MESSAGES.hero)} size="lg" variant={ctaColor === "espresso" ? "primary" : "primary"} className={ctaColor === "espresso" ? "bg-espresso-800 hover:bg-espresso-900" : ""}>
                {ctaCopy}
              </WhatsAppButton>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="#produk"
                className="inline-flex h-13 cursor-pointer items-center justify-center rounded-full border-2 border-cream-100/70 px-7 text-base font-bold uppercase tracking-wider text-cream-100 transition-all duration-300 hover:bg-cream-100 hover:text-espresso-800 md:h-14"
              >
                Lihat Produk
              </Link>
            </motion.div>
          </motion.div>

          <dl className="mt-10 flex w-full flex-wrap items-start justify-center gap-x-10 gap-y-4 border-t border-cream-100/20 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="mb-1 text-center text-xs uppercase tracking-wider text-cream-100/70">{s.label}</dt>
                <dd className="text-center font-display text-2xl font-bold tracking-tight text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
