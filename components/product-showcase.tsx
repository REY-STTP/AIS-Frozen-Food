"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { categories, posterGroupsByCategory, type CategoryId } from "@/lib/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [active, setActive] = useState<CategoryId>("dimsum");
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const groups = posterGroupsByCategory(active);

  return (
    <section
      id="produk"
      className="scroll-mt-24 border-y border-sand-300 bg-cream-50 px-4 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-600">
            Katalog Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso-800 sm:text-4xl">
            Pilihan Frozen Food
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Lima kelompok produk siap saji. Pilih kategori untuk melihat
            isinya, lalu tanyakan produk lewat WhatsApp.
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Kategori produk"
          className="flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "bg-cocoa-600 text-cream-50 shadow-sm"
                    : "border border-cocoa-200 bg-transparent text-espresso-800 hover:border-cocoa-400 hover:bg-cocoa-100",
                )}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm text-ink-muted" aria-live="polite">
          {categories.find((c) => c.id === active)?.blurb}
        </p>

        {/* Poster group cards — centered, one card per poster */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {groups.map((g) => (
              <article
                key={g.imageNo}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-sand-300 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden border-b border-sand-300/70">
                  <Image
                    src={`/products/produk-${g.imageNo}.jpg`}
                    alt={`Poster produk ${g.title} AIS Frozen Food`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-espresso-800">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {g.description}
                  </p>

                  {g.variants.length > 0 && (
                    <>
                      <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa-500">
                        Varian rasa
                      </span>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {g.variants.map((v) => (
                          <li
                            key={v}
                            className="rounded-full bg-sand-200 px-3 py-1 text-[11px] font-medium text-espresso-800"
                          >
                            {v}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <Link
                    href={waLink(
                      WA_MESSAGES.product(
                        g.variants.length > 0
                          ? `${g.title} (${g.variants.join(", ")})`
                          : g.title,
                      ),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 self-start rounded-full border-2 border-cocoa-600 px-5 text-sm font-bold uppercase tracking-wider text-cocoa-600 transition-all duration-300 hover:bg-cocoa-600 hover:text-cream-50 active:scale-[0.97]"
                  >
                    <WhatsappLogo size={20} weight="fill" aria-hidden />
                    Tanya Produk
                  </Link>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
