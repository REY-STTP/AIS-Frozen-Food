"use client";

type EventName = "whatsapp_click" | "tel_click" | "inquiry_submit" | "ab_view" | "page_view";

export function track(event: EventName, props?: Record<string, string | number>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, props);
  }

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
