"use client";

type EventName = "whatsapp_click" | "tel_click" | "inquiry_submit" | "ab_view" | "web_vital";

export function track(event: EventName, props?: Record<string, string | number>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, props);
  }

  // Vercel Analytics custom events (utama)
  try {
    const va = (window as unknown as { va?: { track?: (n: string, p?: Record<string, string | number>) => void } }).va;
    if (va?.track) va.track(event, props);
  } catch {}
  // Fallback: @vercel/analytics track (dinamis, tidak break jika belum load)
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@vercel/analytics") as { track?: typeof track };
    if (mod?.track && mod.track !== track) mod.track(event, props as never);
  } catch {}

  // gtag (jika ada)
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    try {
      gtag("event", event, props);
    } catch {}
  }

  // dataLayer fallback
  const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dl)) {
    try {
      dl.push({ event, ...props });
    } catch {}
  }
}

export function trackWhatsAppClick(source: string) {
  track("whatsapp_click", { source });
}

export function trackTelClick(source: string) {
  track("tel_click", { source });
}
