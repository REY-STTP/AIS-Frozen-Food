import Image from "next/image";
import Link from "next/link";
import { Snowflake } from "@phosphor-icons/react/dist/ssr";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";
import { business } from "@/lib/business";
import { categories, products } from "@/lib/products";

const stats = [
  { value: `${products.length}+`, label: "Produk pilihan" },
  { value: `${categories.length}`, label: "Kategori" },
  { value: business.serviceArea, label: "Area pesan antar" },
];

export function Hero() {
  return (
    <section id="top" className="relative w-full scroll-mt-24">
      <div className="relative h-140 overflow-hidden md:h-170">
        <Image
          src="/gallery/toko.jpg"
          alt="Suasana toko AIS Frozen Food dengan rak beku berisi aneka frozen food"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        {/* Legibility scrim */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-espresso-950/90 via-espresso-950/45 to-espresso-950/35"
        />

        {/* Overlay content */}
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 bg-espresso-950/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-cream-100 backdrop-blur-sm">
            <Snowflake size={14} weight="fill" aria-hidden />
            {business.hours}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Frozen Food Favorit untuk{" "}
            <em className="italic text-cocoa-200">Rumah &amp; Usaha</em>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream-100/85 md:text-base">
            Beragam pilihan frozen food untuk kebutuhan rumah, toko, reseller,
            dan pembelian dalam jumlah banyak. Ambil di toko atau pesan antar
            area Pati–Kudus.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <WhatsAppButton href={waLink(WA_MESSAGES.hero)} size="lg">
              Pesan via WhatsApp
            </WhatsAppButton>
            <Link
              href="#produk"
              className="inline-flex h-13 cursor-pointer items-center justify-center rounded-full border-2 border-cream-100/70 px-7 text-base font-bold uppercase tracking-wider text-cream-100 transition-all duration-300 hover:bg-cream-100 hover:text-espresso-800 md:h-14"
            >
              Lihat Produk
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-4 border-t border-cream-100/20 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold tracking-tight text-white">
                  {s.value}
                </dd>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-cream-100/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
