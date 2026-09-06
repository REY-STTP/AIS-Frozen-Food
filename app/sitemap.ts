import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "@/lib/site";

const FALLBACK_DATE = "2026-05-11T00:00:00+07:00";
const REPO_ROOT = process.cwd();

// Waktu commit terakhir yang menyentuh file-file sumber (null jika git tak tersedia).
function gitLastModified(paths: string[]): Date | null {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      cwd: REPO_ROOT,
      encoding: "utf-8",
      timeout: 10_000,
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!out) return null;
    const date = new Date(out);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}

// mtime terbaru di antara file-file sumber (null jika file tak terbaca).
function mtimeNewest(paths: string[]): Date | null {
  try {
    let newest = 0;
    for (const p of paths) {
      const m = statSync(join(/*turbopackIgnore: true*/ REPO_ROOT, p)).mtimeMs;
      if (m > newest) newest = m;
    }
    return newest > 0 ? new Date(newest) : null;
  } catch {
    return null;
  }
}

function lastModified(paths: string[]): Date {
  return gitLastModified(paths) ?? mtimeNewest(paths) ?? new Date(FALLBACK_DATE);
}

// File sumber yang menentukan "kapan konten route ini terakhir berubah".
const HOME_SOURCES = [
  "app/page.tsx",
  "app/layout.tsx",
  "lib/products.ts",
  "lib/business.ts",
  "lib/structured-data.ts",
  "components/product-showcase.tsx",
  "components/featured-products.tsx",
  "components/faq.tsx",
  "components/seo.tsx",
  "components/social-proof.tsx",
];

function docSources(file: string, extra: string[] = []): string[] {
  return [file, ...extra];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastModified(HOME_SOURCES),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/products/produk-1.jpg`,
        `${SITE_URL}/products/produk-2.jpg`,
        `${SITE_URL}/products/produk-3.jpg`,
        `${SITE_URL}/products/produk-4.jpg`,
        `${SITE_URL}/products/produk-5.jpg`,
        `${SITE_URL}/products/produk-6.jpg`,
        `${SITE_URL}/products/produk-7.jpg`,
        `${SITE_URL}/products/produk-8.jpg`,
        `${SITE_URL}/gallery/toko.jpg`,
        `${SITE_URL}/logo.png`,
        `${SITE_URL}/og-image.png`,
      ],
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: lastModified(docSources("public/llms.txt", ["lib/products.ts", "lib/business.ts"])),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastModified: lastModified(docSources("public/llms-full.txt", ["lib/products.ts", "lib/business.ts"])),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
