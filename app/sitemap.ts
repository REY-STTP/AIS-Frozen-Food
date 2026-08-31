import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
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
      ],
    },
  ];
}