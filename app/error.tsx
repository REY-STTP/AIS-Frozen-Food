"use client";

import { business } from "@/lib/business";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      className="min-h-screen bg-cream-100 py-12 px-4 flex items-center justify-center text-center"
    >
      <div className="max-w-lg">
        <h2 className="font-display text-3xl font-bold text-espresso-800 mb-4">
          Maaf, Halaman Tidak Ditemukan
        </h2>

        <p className="text-cocoa-600 text-lg leading-relaxed mb-8">
            Terjadi kesalahan saat memproses permintaan Anda.
        </p>

        <button
          onClick={reset}
          className="inline-block px-6 py-3 bg-espresso-600 text-white font-bold uppercase tracking-wider rounded-full transition-colors hover:bg-espresso-700"
        >
          Kembali ke Beranda
        </button>
      </div>
    </section>
  );
}