"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import logoImg from "@/public/logo.png";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";
import { business } from "@/lib/business";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Produk", href: "#produk" },
  { label: "Lokasi", href: "#lokasi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-300 bg-cream-100/95 shadow-sm backdrop-blur-md">
      <nav className="flex h-20 items-center justify-between px-4 md:h-24 md:px-12">
        {/* Brand block */}
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${business.name} beranda`}
        >
          <Image
            src={logoImg}
            alt={business.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"
          />
          <span className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-cocoa-600">
              Segar &amp; Siap Saji
            </span>
            <span className="font-display text-xl font-bold tracking-wide text-espresso-800 md:text-2xl">
              FROZEN FOOD
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-cocoa-500">
              Pati · Jawa Tengah
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-espresso-800 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-cocoa-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton href={waLink(WA_MESSAGES.general)} size="md">
            Pesan Sekarang
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full text-espresso-800 transition-colors hover:bg-sand-200 lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-sand-300 bg-cream-100 lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-sand-300/60 py-3.5 text-sm font-semibold uppercase tracking-wider text-espresso-800 transition-colors hover:text-cocoa-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <WhatsAppButton
                href={waLink(WA_MESSAGES.general)}
                size="md"
                className="w-full"
              >
                Pesan Sekarang
              </WhatsAppButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
