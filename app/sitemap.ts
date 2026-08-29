import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Hanya homepage yang ada sebagai route — section lain (#produk dkk) adalah hash anchor di "/"
// Jangan tambah /produk /tentang /lokasi /kontak ke sitemap karena akan 404.
// Siapkan struktur untuk halaman produk depan jika nanti ada dynamic route /produk/[slug]
const pages: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: new Date("2026-08-29"),
    changeFrequency: "weekly",
    priority: 1,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages;
}