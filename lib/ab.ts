"use client";

import { useEffect, useState } from "react";

type ExperimentId = "hero-cta-copy" | "cta-color" | "hero-image";

type VariantMap = {
  "hero-cta-copy": "Pesan via WhatsApp" | "Chat Sekarang — Balas Cepat";
  "cta-color": "cocoa" | "espresso";
  "hero-image": "toko" | "produk";
};

const STORAGE_PREFIX = "ais-ab-";

function pickVariant<E extends ExperimentId>(id: E): VariantMap[E] {
  const variants: Record<ExperimentId, string[]> = {
    "hero-cta-copy": ["Pesan via WhatsApp", "Chat Sekarang — Balas Cepat"],
    "cta-color": ["cocoa", "espresso"],
    "hero-image": ["toko", "produk"],
  };
  const pool = variants[id] as VariantMap[E][];
  // deterministic per session: random once then persist
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
}

export function useAB<E extends ExperimentId>(experimentId: E, defaultVariant: VariantMap[E]): VariantMap[E] {
  const [variant, setVariant] = useState<VariantMap[E]>(defaultVariant);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const stored = localStorage.getItem(STORAGE_PREFIX + experimentId) as VariantMap[E] | null;
        if (stored) {
          setVariant(stored);
          return;
        }
        const picked = pickVariant(experimentId);
        localStorage.setItem(STORAGE_PREFIX + experimentId, picked);
        setVariant(picked);
      } catch {
        setVariant(pickVariant(experimentId));
      }
    });
  }, [experimentId]);

  return variant;
}

// helper untuk tracking (console + Vercel Analytics)
export function trackABView(experimentId: ExperimentId, variant: string) {
  if (typeof window !== "undefined") {
    if (process.env.NODE_ENV !== "production") console.debug(`[AB] view ${experimentId}=${variant}`);
    try {
      const va = (window as unknown as { va?: { track?: (n: string, p?: Record<string, string>) => void } }).va;
      va?.track?.("ab_view", { experiment: experimentId, variant });
    } catch {}
  }
}
