"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-close when viewport becomes desktop (lg)
  useEffect(() => {
    if (!open) return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    // Defer to avoid react-hooks/set-state-in-effect
    if (mql.matches) {
      queueMicrotask(() => setOpen(false));
    }
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [open]);

  return (
    <motion.header
      animate={
        reduce
          ? undefined
          : scrolled
            ? { y: 0, boxShadow: "0 4px 20px rgba(42,23,17,0.08)" }
            : { y: 0, boxShadow: "0 1px 4px rgba(42,23,17,0.06)" }
      }
      initial={false}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
      className="sticky top-0 z-50 w-full border-b border-sand-300 bg-cream-100/95 shadow-sm backdrop-blur-md"
    >
      <nav className="flex h-20 items-center justify-between px-4 md:h-24 md:px-12">
        {/* Brand block */}
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${business.name} beranda`}
          onClick={() => setOpen(false)}
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
              AIS FROZEN FOOD
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

      {/* Mobile menu — overlay (does not push page down, background remains scrollable) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-sand-300 bg-cream-100 shadow-lg md:max-h-[calc(100dvh-6rem)] lg:hidden"
            role="dialog"
            aria-modal="true"
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
                  onClick={() => setOpen(false)}
                >
                  Pesan Sekarang
                </WhatsAppButton>
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
