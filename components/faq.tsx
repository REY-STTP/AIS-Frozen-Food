"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const faqs = [
  {
    q: "Apa saja produk AIS Frozen Food?",
    a: "Kami menyediakan dimsum (ayam, udang, cumi), aneka siap goreng seperti singkong keju, gemblong, dan timusku, aneka lumer pisang & nangka coklat, cilok, cimol, dan cireng, serta pelengkap seperti saus mentai, sushi nori, dan rice paper.",
  },
  {
    q: "Di mana lokasi toko AIS Frozen Food?",
    a: "Toko kami berada di Lumpur, Bumirejo, Kecamatan Margorejo, Kabupaten Pati, Jawa Tengah. Anda bisa datang langsung atau cek di Google Maps.",
  },
  {
    q: "Buka jam berapa?",
    a: "Kami buka setiap hari dari pukul 08.00 sampai 20.00 WIB, termasuk akhir pekan dan hari libur.",
  },
  {
    q: "Apakah melayani pesan antar?",
    a: "Ya, kami melayani pesan antar untuk area Pati–Kudus. Hubungi kami lewat WhatsApp untuk mengecek ketersediaan dan jadwal pengantaran.",
  },
  {
    q: "Apakah bisa ambil di toko?",
    a: "Tentu. Anda dapat langsung datang dan mengambil pesanan di toko kami di Margorejo, Pati. Stok harian selalu tersedia.",
  },
  {
    q: "Apakah menerima reseller atau grosir?",
    a: "Ya, kami terbuka untuk reseller dan toko dengan harga grosir untuk pembelian dalam jumlah banyak. Hubungi WhatsApp kami untuk informasi harga grosir.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "Cara termudah adalah menekan tombol WhatsApp di halaman ini. Kirimkan daftar produk yang diinginkan, dan kami akan balas secepatnya untuk konfirmasi harga dan ketersediaan.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="bg-cream-50 px-4 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-600">
            Tanya Jawab
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-espresso-800 sm:text-4xl">
            Pertanyaan yang Sering Dilontarkan
          </h2>
        </div>

        <dl className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-sand-300 bg-white">
                <dt className="m-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-bold text-espresso-800 transition-colors hover:text-cocoa-600"
                  >
                    {item.q}
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cocoa-100 text-cocoa-600"
                    >
                      +
                    </motion.span>
                  </button>
                </dt>
                <dd className="m-0">
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                        className="overflow-hidden"
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-espresso-700">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
