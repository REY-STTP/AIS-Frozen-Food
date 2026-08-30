import { SITE_URL } from "@/lib/site";
import { business } from "@/lib/business";

const SITE = SITE_URL;

export const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "10000",
    currency: "IDR",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "ID",
    addressRegion: ["Jawa Tengah"],
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 2,
      unitCode: "DAY",
    },
  },
  transitTimeLabel: "Pati–Kudus 1–2 hari",
};

export const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "ID",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteWindow",
  merchantReturnDays: 7,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};

export const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
  worstRating: "1",
};

export const SAMPLE_REVIEW = {
  "@type": "Review",
  author: { "@type": "Person", name: "Pelanggan AIS Frozen Food - Pati" },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody:
    "Frozen food segar, pengiriman cepat area Pati–Kudus, cocok untuk stok rumah dan reseller. Rasa dimsum dan pisang coklat lumer favorit keluarga.",
};

export function buildOffer({
  price,
  priceCurrency = "IDR",
  availability = "https://schema.org/InStock",
  url = `${SITE}/#produk`,
  sellerName = business.name,
}: {
  price: number;
  priceCurrency?: string;
  availability?: string;
  url?: string;
  sellerName?: string;
}) {
  const priceStr = String(price);
  return {
    "@type": "Offer" as const,
    url,
    priceCurrency,
    price: priceStr,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: priceStr,
      priceCurrency,
      priceType: "https://schema.org/SalePrice",
    },
    itemCondition: "https://schema.org/NewCondition",
    availability,
    seller: {
      "@type": "Organization",
      name: sellerName,
      url: SITE,
    },
    shippingDetails: SHIPPING_DETAILS,
    hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
  };
}

export function buildAggregateOffer({
  lowPrice,
  highPrice,
  priceCurrency = "IDR",
  availability = "https://schema.org/InStock",
  url = `${SITE}/#produk`,
}: {
  lowPrice: number;
  highPrice: number;
  priceCurrency?: string;
  availability?: string;
  url?: string;
}) {
  const offerCount = 3;
  return {
    "@type": "AggregateOffer" as const,
    url,
    priceCurrency,
    lowPrice: String(lowPrice),
    highPrice: String(highPrice),
    offerCount,
    availability,
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: business.name,
      url: SITE,
    },
    shippingDetails: SHIPPING_DETAILS,
    hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
  };
}

export function absoluteImage(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE}${path}`;
}
