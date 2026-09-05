"use client";

import { useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";

function CountUp({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) queueMicrotask(() => setDisplay(value));
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(eased * value);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const formatted = decimals ? display.toFixed(decimals) : Math.round(display).toString();
  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const testimonials = [
  {
    name: "Siti — Pati",
    text: "Dimsumnya enak, anak-anak suka. Pesan via WhatsApp dibalas cepat, bisa ambil di toko.",
    rating: 5,
  },
  {
    name: "Warung Bu Yani — Kudus",
    text: "Ambil grosir untuk warung, harga cocok dan stok selalu ready. Langganan tiap minggu.",
    rating: 5,
  },
  {
    name: "Rina — Margorejo",
    text: "Pisang lumernya lumer beneran, pengiriman ke rumah tepat waktu. Recommended!",
    rating: 5,
  },
] as const;

const resellerLogos = ["Warung Pati", "Toko Kudus", "Kantin Sekolah", "Cafe Jepara", "UMKM Pati"] as const;

export function SocialProof() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-cream-50 px-4 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-600">Dipercaya pelanggan</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso-800">Apa kata pelanggan</h2>
          <p className="mt-3 text-sm leading-relaxed text-espresso-700">
            Ratusan pembeli rumah & reseller di Pati–Kudus sudah langganan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-44 flex-col rounded-2xl border border-sand-300 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-amber-500" role="img" aria-label={`Rating ${t.rating} dari 5`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} weight="fill" aria-hidden />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso-800">“{t.text}”</p>
              <p className="mt-4 border-t border-sand-100 pt-3 text-xs font-semibold uppercase tracking-wider text-cocoa-600">
                {t.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-sand-300 pt-8">
          <span className="w-full text-center text-xs uppercase tracking-[0.2em] text-cocoa-500 md:w-auto">Reseller & langganan</span>
          {resellerLogos.map((logo) => (
            <span key={logo} className="rounded-full border border-sand-300 bg-white px-4 py-2 text-xs font-semibold text-espresso-700">
              {logo}
            </span>
          ))}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-center"
        >
          <div>
            <div className="font-display text-2xl font-bold text-espresso-800">
              <CountUp value={4.9} decimals={1} suffix="/5" />
            </div>
            <div className="text-xs uppercase tracking-wider text-cocoa-600">Rating pelanggan</div>
          </div>
          <div className="h-10 w-px bg-sand-300" aria-hidden />
          <div>
            <div className="font-display text-2xl font-bold text-espresso-800">
              <CountUp value={500} suffix="+" />
            </div>
            <div className="text-xs uppercase tracking-wider text-cocoa-600">Transaksi / bulan</div>
          </div>
          <div className="h-10 w-px bg-sand-300" aria-hidden />
          <div>
            <div className="font-display text-2xl font-bold text-espresso-800">
              <CountUp value={50} suffix="+" />
            </div>
            <div className="text-xs uppercase tracking-wider text-cocoa-600">Reseller aktif</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
