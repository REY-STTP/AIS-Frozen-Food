import { business } from "@/lib/business";
import { products } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/site";

const SITE = SITE_URL;

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#business`,
    name: business.name,
    description:
      "Toko frozen food di Margorejo, Pati yang menyediakan dimsum, singkong keju, gemblong, pisang coklat lumer, cilok & cireng, saus mentai, sushi nori, dan rice paper. Melayani ambil di toko, pesan antar area Pati–Kudus, serta reseller dan grosir.",
    url: SITE,
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "$$",
    image: Array.from(new Set(products.map((p) => `${SITE}${p.image}`))),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressShort,
      addressLocality: "Margorejo",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
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
