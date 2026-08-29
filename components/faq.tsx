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
          {faqs.map((item) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-sand-300 bg-white"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg font-bold text-espresso-800 transition-colors group-hover:text-cocoa-600">
                  {item.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cocoa-100 text-cocoa-600 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-espresso-700">
                  {item.a}
                </p>
              </details>
            </div>
          ))}
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
