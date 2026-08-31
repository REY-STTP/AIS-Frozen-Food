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
    logo: `${SITE}/logo.png`,
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
    logo: `${SITE}/logo.png`,
    sameAs: [business.tiktokUrl, business.mapsUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
