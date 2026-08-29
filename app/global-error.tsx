"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="antialiased overflow-x-hidden bg-cream-100">
        <section className="min-h-screen py-12 px-4 flex items-center justify-center text-center">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-bold text-espresso-800 mb-4">
              Maaf, Terjadi Kesalahan
            </h2>
            <p className="text-cocoa-600 text-lg leading-relaxed mb-8">
              Maaf, kami mengalami kendala teknis. Tim kami sudah diberitahu dan akan segera
              memperbaikinya.
            </p>
            <button
              onClick={reset}
              className="inline-block px-6 py-3 bg-espresso-600 text-white font-bold uppercase tracking-wider rounded-full transition-colors hover:bg-espresso-700"
            >
              Coba Lagi
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}