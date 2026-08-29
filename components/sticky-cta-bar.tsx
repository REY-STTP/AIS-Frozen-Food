"use client";

import Link from "next/link";
import { WhatsappLogo, Phone } from "@phosphor-icons/react/dist/ssr";
import { WA_MESSAGES, waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-300 bg-white/95 px-3 py-3 shadow-[0_-8px_24px_rgba(42,23,17,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <Link
          href={`tel:+${WHATSAPP_NUMBER}`}
          aria-label="Telepon AIS Frozen Food"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-cocoa-600 text-cocoa-600 active:scale-95"
        >
          <Phone size={20} weight="fill" aria-hidden />
        </Link>
        <Link
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cocoa-600 px-5 text-sm font-bold uppercase tracking-wider text-cream-50 shadow-md active:scale-[0.98]"
        >
          <WhatsappLogo size={18} weight="fill" aria-hidden /> Chat WhatsApp
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" aria-hidden />
    </div>
  );
}
