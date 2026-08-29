"use client";

import { useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { waLink } from "@/lib/whatsapp";

export function InquiryForm() {
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [note, setNote] = useState("");

  const href = waLink(
    `Halo AIS Frozen Food, saya ${name || "[Nama]"} (${wa || "[WA]"}) ingin tanya: ${note || "cek produk & harga"}. Mohon info.`,
  );

  return (
    <section className="bg-cream-100 px-4 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-sand-300 bg-white p-6 shadow-sm md:p-8">
        <h2 className="font-display text-2xl font-bold text-espresso-800">Tanya stok & harga</h2>
        <p className="mt-2 text-sm leading-relaxed text-espresso-700">
          Isi form singkat, lalu kami buka WhatsApp dengan pesan otomatis — tinggal kirim.
        </p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="inq-name" className="text-xs font-semibold uppercase tracking-wider text-cocoa-600">
              Nama
            </label>
            <input
              id="inq-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="mt-1 w-full rounded-xl border border-sand-300 bg-cream-50 px-4 py-3 text-sm text-espresso-800 placeholder:text-espresso-700/60 focus:border-cocoa-400 focus:outline-none focus:ring-2 focus:ring-cocoa-200"
            />
          </div>
          <div>
            <label htmlFor="inq-wa" className="text-xs font-semibold uppercase tracking-wider text-cocoa-600">
              No. WhatsApp
            </label>
            <input
              id="inq-wa"
              value={wa}
              onChange={(e) => setWa(e.target.value)}
              placeholder="08xx..."
              inputMode="numeric"
              className="mt-1 w-full rounded-xl border border-sand-300 bg-cream-50 px-4 py-3 text-sm text-espresso-800 placeholder:text-espresso-700/60 focus:border-cocoa-400 focus:outline-none focus:ring-2 focus:ring-cocoa-200"
            />
          </div>
          <div>
            <label htmlFor="inq-note" className="text-xs font-semibold uppercase tracking-wider text-cocoa-600">
              Catatan / produk yang ditanya
            </label>
            <textarea
              id="inq-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Mis: dimsum 2 pack, singkong keju 1kg, bisa ambil jam 5 sore?"
              rows={3}
              className="mt-1 w-full rounded-xl border border-sand-300 bg-cream-50 px-4 py-3 text-sm text-espresso-800 placeholder:text-espresso-700/60 focus:border-cocoa-400 focus:outline-none focus:ring-2 focus:ring-cocoa-200"
            />
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-cocoa-600 px-6 text-sm font-bold uppercase tracking-wider text-cream-50 transition-colors hover:bg-cocoa-700 active:scale-[0.98]"
          >
            <WhatsappLogo size={18} weight="fill" aria-hidden /> Kirim ke WhatsApp
          </a>
          <p className="text-center text-xs text-espresso-700">Data tidak disimpan — hanya membuat link WhatsApp.</p>
        </form>
      </div>
    </section>
  );
}
