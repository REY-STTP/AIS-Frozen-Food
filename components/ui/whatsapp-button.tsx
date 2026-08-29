"use client";

import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { trackWhatsAppClick } from "@/lib/analytics";

type Variant = "primary" | "outline" | "cream";

const variants: Record<Variant, string> = {
  /* Solid cocoa — the main CTA style */
  primary:
    "bg-cocoa-600 text-cream-50 hover:bg-cocoa-700 active:scale-[0.97]",
  /* Outline cocoa — secondary actions */
  outline:
    "border-2 border-cocoa-600 text-cocoa-600 hover:bg-cocoa-600 hover:text-cream-50 active:scale-[0.97]",
  /* For use on dark espresso surfaces */
  cream:
    "bg-cream-100 text-espresso-800 hover:bg-white active:scale-[0.97]",
};

type Size = "md" | "lg";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base md:h-14",
};

export function WhatsAppButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  trackSource,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  trackSource?: string;
}) {
  const handleClick = () => {
    try {
      trackWhatsAppClick(trackSource ?? href.slice(0, 48));
    } catch {}
    onClick?.();
  };
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
      onClick={handleClick}
    >
      <WhatsappLogo size={20} weight="fill" aria-hidden />
      <span className="whitespace-nowrap">{children}</span>
    </Link>
  );
}
