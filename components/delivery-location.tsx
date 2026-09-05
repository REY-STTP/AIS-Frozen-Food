"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Storefront, Truck, Clock, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { business } from "@/lib/business";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export function DeliveryLocation() {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      queueMicrotask(() => setMapVisible(true));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          queueMicrotask(() => setMapVisible(true));
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="lokasi"
      className="scroll-mt-24 border-y border-sand-300 bg-sand-200 px-4 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">
        {/* Info column */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="flex w-full flex-col justify-center lg:w-[42%]"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-cocoa-600">Kunjungi Kami</span>
          <h2 className="mt-3 font-display text-3xl font-bold italic text-espresso-800 sm:text-4xl">
            Kunjungi Toko Kami
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-espresso-700">
            Datang langsung ke toko kami di Margorejo, Pati — atau pesan lewat WhatsApp dan pesanan
            diantar sampai depan rumah.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-start gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cocoa-100 text-cocoa-600">
                <Storefront size={22} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-espresso-800">Ambil di Toko</h3>
                <p className="mt-1 text-sm leading-relaxed text-espresso-700">{business.addressFull}</p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cocoa-100 text-cocoa-600">
                <Truck size={22} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-espresso-800">Pesan Antar</h3>
                <p className="mt-1 text-sm leading-relaxed text-espresso-700">
                  Melayani area {business.serviceArea}.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl bg-cream-50 p-5 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cocoa-100 text-cocoa-600">
                <Clock size={22} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-espresso-800">Jam Buka</h3>
                <p className="mt-1 text-sm leading-relaxed text-espresso-700">{business.hours}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <WhatsAppButton
              href={waLink(WA_MESSAGES.location)}
              size="md"
              className="w-full justify-center !px-3 !text-xs sm:!px-5 sm:!text-sm"
            >
              Tanya Lokasi
            </WhatsAppButton>
            <a
              href={business.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Petunjuk arah ke AIS Frozen Food di Google Maps"
              className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-2 border-cocoa-600 px-3 text-xs font-bold uppercase tracking-wider text-cocoa-600 transition-all duration-300 hover:bg-cocoa-600 hover:text-cream-50 sm:gap-2 sm:px-5 sm:text-sm"
            >
              <span className="whitespace-nowrap">Petunjuk Arah</span>
              <ArrowUpRight size={14} className="shrink-0 sm:size-4" aria-hidden />
            </a>
          </div>
        </motion.div>

        {/* Map column — GMaps iframe */}
        <motion.div
          ref={mapRef as unknown as React.RefObject<HTMLDivElement>}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="relative h-90 min-h-90 flex-1 overflow-hidden rounded-4xl border border-sand-300 bg-cream-50 shadow-md lg:h-140 lg:min-h-140"
        >
          {mapVisible ? (
            <iframe
              title="Peta lokasi toko AIS Frozen Food di Margorejo, Pati, Jawa Tengah"
              src={business.mapsEmbed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-sand-200">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-espresso-700 shadow">
                Memuat peta…
              </span>
            </div>
          )}
          <span className="pointer-events-none absolute bottom-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-espresso-800 shadow-sm backdrop-blur">
            <MapPin size={14} className="text-cocoa-600" aria-hidden />
            {business.addressShort}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
