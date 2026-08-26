import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { LocalBusinessJsonLd } from "@/components/seo";
import { SITE_URL } from "@/lib/site";

const SITE = SITE_URL;
const OG_IMAGE = `${SITE}/products/produk-1.jpg`;

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aisfrozenfood.id"),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s · ${business.name}`,
  },
  description:
    "Beragam pilihan frozen food untuk kebutuhan rumah, toko, reseller, dan pembelian dalam jumlah banyak. Ambil di toko di Pati atau pesan antar area Pati–Kudus.",
  keywords: [
    "frozen food Pati",
    "dimsum Pati",
    "reseller frozen food",
    "grosir frozen food",
    "AIS Frozen Food",
    "cemilan beku",
  ],
  authors: [{ name: business.name }],
  applicationName: business.name,
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    type: "website",
    url: SITE,
    locale: "id_ID",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description:
      "Toko frozen food di Pati: dimsum, singkong keju, pisang coklat lumer, cilok & cireng, saus mentai. Ambil di toko atau pesan antar Pati–Kudus. Buka tiap hari 08.00–20.00 WIB.",
    images: [{ url: OG_IMAGE, width: 905, height: 1280, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description:
      "Toko frozen food di Pati: dimsum, lumer, cilok & cireng, saus mentai. Pesan via WhatsApp.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "food",
  other: {
    "geo.region": "ID-JT",
    "geo.placename": "Pati",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${poppins.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-cocoa-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Lewati ke konten
        </a>
        {children}
        <FloatingWhatsApp />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
