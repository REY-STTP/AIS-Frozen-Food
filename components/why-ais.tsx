import Image from "next/image";
import Link from "next/link";
import { Snowflake } from "@phosphor-icons/react/dist/ssr";
import { productImage } from "@/lib/images";

const highlights = [
  {
    title: "Dimsum Premium",
    blurb:
      "Dimsum ayam & udang dengan isian lumer, siap kukus untuk camilan atau lauk keluarga.",
    image: productImage(2),
    alt: "Dimsum ayam ori AIS Frozen Food",
  },
  {
    title: "Cilok & Cireng",
    blurb:
      "Cilok, cimol, dan cireng khas Sunda yang kenyal dan renyah — camilan favorit semua usia.",
    image: productImage(5),
    alt: "Cilok dan cireng kenyal siap saji",
  },
  {
    title: "Aneka Lumer",
    blurb:
      "Cemilan lumer keju & coklat yang manis gurih, diminati anak sampai dewasa.",
    image: productImage(4),
    alt: "Pisang coklat lumer AIS Frozen Food",
  },
];

export function WhyAIS() {
  return (
    <section id="keunggulan" className="scroll-mt-24 bg-cream-100 px-4 py-20 md:px-12 md:py-24">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span aria-hidden className="h-px w-12 bg-cocoa-600" />
          <Snowflake size={24} weight="fill" className="text-cocoa-600" aria-hidden />
          <span aria-hidden className="h-px w-12 bg-cocoa-600" />
        </div>
        <h2 className="font-display text-3xl font-bold text-espresso-800 sm:text-4xl">
          Kenapa Memilih Kami?
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-ink-muted">
          Kami menyediakan frozen food pilihan dengan kualitas terjaga — tetap
          beku dan segar sampai di tangan Anda. Cocok untuk stok rumah maupun
          dagangan reseller.
        </p>
      </div>

      {/* Arch cards */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col items-center overflow-hidden rounded-t-full rounded-b-2xl bg-sand-200 pb-8 shadow-sm transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-t-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold text-espresso-800">
              {item.title}
            </h3>
            <p className="mb-6 px-6 text-center text-xs leading-relaxed text-ink-muted">
              {item.blurb}
            </p>
            <Link
              href="#produk"
              className="rounded-full border-2 border-cocoa-600 px-6 py-2 text-xs font-bold uppercase tracking-wider text-cocoa-600 transition-all duration-300 hover:bg-cocoa-600 hover:text-cream-50"
            >
              Lihat Produk
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
