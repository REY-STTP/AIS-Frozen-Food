import Link from "next/link";
import { WhatsappLogo, House, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/business";
import { categories } from "@/lib/products";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-cream-100 px-4 py-12 flex items-center justify-center md:px-12 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cocoa-600">404 — Halaman tidak ditemukan</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-espresso-800 sm:text-5xl">
          Ups, halaman ini tidak ada
        </h1>
        <p className="mt-4 text-base leading-relaxed text-espresso-700">
          Link mungkin salah ketik atau halaman sudah dipindahkan. Kembali ke beranda atau jelajahi kategori produk kami.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-cocoa-600 px-6 text-sm font-bold uppercase tracking-wider text-cream-50 transition-colors hover:bg-cocoa-700"
          >
            <House size={18} weight="fill" aria-hidden /> Kembali ke Beranda
          </Link>
          <Link
            href="/#produk"
            className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-cocoa-600 px-6 text-sm font-bold uppercase tracking-wider text-cocoa-600 transition-colors hover:bg-cocoa-600 hover:text-cream-50"
          >
            <ArrowLeft size={18} aria-hidden /> Lihat Produk
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa-500">Kategori produk</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/#produk`}
                className="rounded-full border border-sand-300 bg-white px-4 py-2 text-sm font-medium text-espresso-800 transition-colors hover:border-cocoa-300 hover:bg-cream-50"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-sand-300 bg-white p-6 text-left shadow-sm">
          <h2 className="font-display text-lg font-bold text-espresso-800">Butuh bantuan cepat?</h2>
          <p className="mt-1 text-sm text-espresso-700">
            Tim AIS Frozen Food siap di WhatsApp tiap hari {business.hours}. Klik tombol di bawah untuk chat langsung.
          </p>
          <Link
            href={waLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-cocoa-600 px-6 text-sm font-bold uppercase tracking-wider text-cream-50 transition-colors hover:bg-cocoa-700"
          >
            <WhatsappLogo size={20} weight="fill" aria-hidden /> Chat WhatsApp {business.whatsappDisplay}
          </Link>
        </div>
      </div>
    </section>
  );
}
