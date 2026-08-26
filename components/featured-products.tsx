"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { categories, featuredProducts, type CategoryId } from "@/lib/products";
import { cn } from "@/lib/utils";

const categoryName = (id: CategoryId) =>
  categories.find((c) => c.id === id)?.name ?? "";

export function FeaturedProducts() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

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
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Delapan pilihan terbaik yang paling sering dicari pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.06,
                ease,
              }}
              className="group rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="relative mb-4 h-56 overflow-hidden rounded-xl lg:h-64">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa-500">
                {categoryName(p.category)}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-espresso-800">
                {p.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                {p.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
