import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { business } from "@/lib/business";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { LocalBusinessJsonLd, OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo";
import { SITE_URL, BING_SITE_VERIFICATION } from "@/lib/site";
import { WebVitals } from "@/components/web-vitals";
import { CookieConsent } from "@/components/cookie-consent";
import { PwaRegister } from "@/components/pwa-register";
import { Analytics } from "@vercel/analytics/react";

const SITE = SITE_URL;

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
  metadataBase: new URL(SITE),
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
    languages: {
      "id-ID": SITE,
      "x-default": SITE,
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description:
      "Toko frozen food di Pati: dimsum, singkong keju, pisang coklat lumer, cilok & cireng, saus mentai. Ambil di toko atau pesan antar Pati–Kudus. Buka tiap hari 08.00–20.00 WIB.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${business.name} — ${business.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description:
      "Toko frozen food di Pati: dimsum, lumer, cilok & cireng, saus mentai. Pesan via WhatsApp.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "food",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "ndkQkr971m_t4mvZTzgt4EZk4Pzpi0AiTU14zF3ckAw",
    other: {
      "msvalidate.01": BING_SITE_VERIFICATION,
    },
  },
  other: {
    "geo.region": "ID-JT",
    "geo.placename": "Pati",
    "geo.position": "-6.7850225;110.9860776",
    ICBM: "-6.7850225, 110.9860776",
  },
};

export const viewport: Viewport = {
  themeColor: "#5D4037",
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
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.fonts.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM context" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLM full context" />
      </head>
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
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <WebVitals />
        <CookieConsent />
        <PwaRegister />
        <Analytics />
        <Script
          id="breadcrumb-jsonld"
          type="application/ld+json"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Beranda",
                "item": `${SITE}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Produk",
                "item": `${SITE}/#produk`
              }
            ]
          })}
        </Script>
        <Script
          id="speakable-jsonld"
          type="application/ld+json"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE}/#webpage`,
            url: SITE,
            name: `${business.name} — ${business.tagline}`,
            isPartOf: { "@id": `${SITE}/#business` },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["#produk", "#faq", "h1"],
            },
            inLanguage: "id-ID",
          })}
        </Script>
      </body>
    </html>
  );
}
