"use client";

import { useReportWebVitals } from "next/web-vitals";
import { track } from "@/lib/analytics";

const BUDGETS = { LCP: 2500, CLS: 0.1, INP: 200, FCP: 1800, TTFB: 800 } as const;

export function WebVitals() {
  useReportWebVitals((metric) => {
    const budget = BUDGETS[metric.name as keyof typeof BUDGETS];
    const pass = budget ? (metric.name === "CLS" ? metric.value <= budget : metric.value <= budget) : true;
    const style = pass ? "color: #2e7d32" : "color: #c62828; font-weight:bold";
    console.log(`%c[web-vitals] ${metric.name}: ${Math.round(metric.value * 100) / 100} (budget ${budget ?? "-"}) ${pass ? "✓" : "✗ OVER"}`, style);

    track("page_view", { metric: metric.name, value: String(Math.round(metric.value)), rating: metric.rating });
  });
  return null;
}
