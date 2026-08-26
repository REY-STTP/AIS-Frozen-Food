import { MapPin, Clock, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/business";
import { WA_MESSAGES, waLink } from "@/lib/whatsapp";

export function SiteTopBar() {
  return (
    <div className="w-full border-b border-sand-300 bg-cream-100 px-4 py-2 text-xs uppercase tracking-wider text-cocoa-700 md:px-12">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} aria-hidden />
          {business.addressShort}
        </span>

        <div className="flex items-center gap-6">
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock size={14} aria-hidden />
            {business.hours}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={business.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TikTok ${business.tiktok}`}
              className="transition-colors hover:text-espresso-900"
            >
              <TiktokLogo size={16} aria-hidden />
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="transition-colors hover:text-espresso-900"
            >
              <WhatsappLogo size={16} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
