"use client";

import Image from "next/image";
import Script from "next/script";
import { motion, useReducedMotion } from "motion/react";
import { categories, featuredProducts, type CategoryId } from "@/lib/products";

const categoryName = (id: CategoryId) =>
  categories.find((c) => c.id === id)?.name ?? "";

export function FeaturedProducts() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream-100 px-4 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-600">
            Pilihan Pelanggan
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso-800 sm:text-4xl">
            Produk Unggulan
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-espresso-700">
            Delapan pilihan terbaik yang paling sering dicari pelanggan.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          }}
        >
          {featuredProducts.map((p) => (
            <motion.article
              key={p.id}
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="group rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md will-change-transform"
            >
              <div className="relative mb-4 h-56 overflow-hidden rounded-xl lg:h-64">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.description} AIS Frozen Food`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-espresso-900">
                  Fresh
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa-500">
                {categoryName(p.category)}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-espresso-800">
                {p.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-espresso-700">
                {p.description}
              </p>
              <a
                href={`https://wa.me/6285226122121?text=${encodeURIComponent(`Halo AIS Frozen Food, saya tertarik dengan produk ${p.name}. Mohon info harga.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Tanya produk ${p.name} kategori ${categoryName(p.category)} via WhatsApp`}
                className="mt-3 inline-flex text-xs font-bold uppercase tracking-wider text-cocoa-600 hover:text-cocoa-800"
              >
                Tanya {p.name} →
              </a>

              <Script
                type="application/ld+json"
              >
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": p.name,
                  "description": p.description,
                  "image": p.image,
                  "offers": {
                    "@type": "Offer",
                    "priceRange": "Rp50.000 - Rp150.000",
                    "availability": "https://schema.org/InStock"
                  },
                  "brand": {
                    "@type": "Organization",
                    "name": "AIS Frozen Food"
                  },
                  "sku": `FRD-${p.id}`
                })}
              </Script>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
