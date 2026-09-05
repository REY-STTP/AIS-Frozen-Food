import { business } from "@/lib/business";
import { products } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/site";

const SITE = SITE_URL;

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GroceryStore"],
    "@id": `${SITE}/#business`,
    name: business.name,
    description:
      "Toko frozen food di Margorejo, Pati yang menyediakan dimsum, singkong keju, gemblong, pisang coklat lumer, cilok & cireng, saus mentai, sushi nori, dan rice paper. Melayani ambil di toko, pesan antar area Pati–Kudus, serta reseller dan grosir.",
    url: SITE,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "$$",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, QRIS, Transfer Bank",
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE}/#logo`,
      url: `${SITE}/logo.png`,
      contentUrl: `${SITE}/logo.png`,
      width: 512,
      height: 512,
      caption: business.name,
    },
    image: Array.from(new Set(products.map((p) => `${SITE}${p.image}`))),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressFull,
      addressLocality: "Pati",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
      postalCode: "59165",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: business.serviceArea.split("–").map((s) => s.trim()),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [business.tiktokUrl, business.mapsUrl],
    hasMap: business.mapsUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: business.name,
    url: SITE,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE}/#logo`,
      url: `${SITE}/logo.png`,
      contentUrl: `${SITE}/logo.png`,
      width: 512,
      height: 512,
      caption: business.name,
    },
    image: {
      "@type": "ImageObject",
      "@id": `${SITE}/#image`,
      url: `${SITE}/logo.png`,
      contentUrl: `${SITE}/logo.png`,
      width: 512,
      height: 512,
      caption: business.name,
    },
    sameAs: [business.tiktokUrl, business.mapsUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id-ID"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: business.name,
    alternateName: ["AIS Frozen", "AIS Frozen Food Pati", "Toko AIS Frozen Food"],
    description:
      "Toko frozen food di Margorejo, Pati — dimsum, lumer, cilok & cireng, saus mentai. Ambil di toko atau pesan antar Pati–Kudus.",
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "id-ID",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
