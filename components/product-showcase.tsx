"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { categories, posterGroupsByCategory, type CategoryId } from "@/lib/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ProductShowcase() {
  const [active, setActive] = useState<CategoryId>("dimsum");
  const [isPending, setIsPending] = useState(false);
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const groups = posterGroupsByCategory(active);

  const handleTabChange = (id: CategoryId) => {
    if (id === active) return;
    setIsPending(true);
    window.setTimeout(() => {
      setActive(id);
      setIsPending(false);
    }, 320);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        nextIndex = index > 0 ? index - 1 : categories.length - 1;
        break;
      case "ArrowRight":
        e.preventDefault();
        nextIndex = index < categories.length - 1 ? index + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = categories.length - 1;
        break;
      default:
        return;
    }
    const nextCat = categories[nextIndex];
    if (nextCat) {
      handleTabChange(nextCat.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  useEffect(() => {
    // keep focus in sync when active changes via click
  }, [active]);

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
          <p className="mt-4 text-sm leading-relaxed text-espresso-700">
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
          {categories.map((cat, i) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleTabChange(cat.id)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={cn(
                  "cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa-600 focus-visible:ring-offset-2",
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

        <p className="mt-5 text-center text-sm text-espresso-700" aria-live="polite">
          {categories.find((c) => c.id === active)?.blurb}
        </p>

        {/* Poster group cards — centered, one card per poster */}
        {isPending ? (
          <div className="mt-10 flex flex-wrap justify-center gap-6" aria-busy="true" aria-label="Memuat produk">
            {[1, 2, 3].map((k) => (
              <div
                key={k}
                className="w-full animate-pulse overflow-hidden rounded-2xl border border-sand-300 bg-white sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="aspect-3/4 bg-sand-200" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 rounded bg-sand-200" />
                  <div className="h-3 w-full rounded bg-sand-200" />
                  <div className="h-3 w-5/6 rounded bg-sand-200" />
                  <div className="h-9 w-32 rounded-full bg-sand-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
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
                <div className="relative aspect-3/4 overflow-hidden border-b border-sand-300/70">
                  <Image
                    src={`/products/produk-${g.imageNo}.jpg`}
                    alt={`Poster produk ${g.title} AIS Frozen Food`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    <span className="rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-espresso-900">
                      Fresh hari ini
                    </span>
                    {g.imageNo % 2 === 0 && (
                      <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-espresso-800">
                        Stok terbatas
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-espresso-800">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-700">
                    {g.description}
                  </p>

                  <Script
                    type="application/ld+json"
                  >
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      "name": g.title,
                      "description": g.description,
                      "image": `/products/produk-${g.imageNo}.jpg`,
                      "offers": {
                        "@type": "Offer",
                        "priceRange": "Rp50.000 - Rp150.000",
                        "availability": "https://schema.org/InStock"
                      },
                      "brand": {
                        "@type": "Organization",
                        "name": "AIS Frozen Food"
                      },
                      "sku": `ISI-${g.imageNo}`
                    })}
                  </Script>

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
                    aria-label={`Tanya produk ${g.title} via WhatsApp`}
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
        )}
      </div>
    </section>
  );
}
