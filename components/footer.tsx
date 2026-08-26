import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { TiktokLogo, MapPin, Clock, Phone } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/business";
import { WHATSAPP_DISPLAY, waLink, WA_MESSAGES } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-espresso-800 py-14 text-[#e2d5c4]">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Link
          href="#top"
          className="inline-flex items-center gap-3"
          aria-label={`${business.name} beranda`}
        >
          <Image
            src={logoImg}
            alt={business.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-display text-3xl font-bold tracking-widest text-white">
            FROZEN FOOD
          </span>
        </Link>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed opacity-80">
          Menyediakan aneka frozen food segar dan lezat untuk rumah, toko, dan
          reseller di Pati dan sekitarnya.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone size={16} className="shrink-0" aria-hidden />
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={business.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <TiktokLogo size={16} className="shrink-0" aria-hidden />
            {business.tiktok}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <MapPin size={16} className="shrink-0" aria-hidden />
            Google Maps
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-wider opacity-70">
          <Clock size={14} aria-hidden />
          {business.hours}
        </p>

        <div aria-hidden className="mx-auto my-6 h-px w-24 bg-[#e2d5c4]/30" />

        <p className="text-xs opacity-60">
          © 2026 {business.name}. {business.addressShort}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
