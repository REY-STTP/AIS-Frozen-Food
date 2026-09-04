import { SiteTopBar } from "@/components/site-topbar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyAIS } from "@/components/why-ais";
import { ProductShowcase } from "@/components/product-showcase";
import { FeaturedProducts } from "@/components/featured-products";
import { ResellerCTA } from "@/components/reseller-cta";
import { DeliveryLocation } from "@/components/delivery-location";
import { ContactCTA } from "@/components/contact-cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { SocialProof } from "@/components/social-proof";
import { InquiryForm } from "@/components/inquiry-form";
import { posterGroups } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { absoluteImage, buildAggregateOffer, buildOffer, AGGREGATE_RATING, SAMPLE_REVIEW } from "@/lib/structured-data";

export default function HomePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/#produk-list`,
    name: "Katalog AIS Frozen Food",
    description: "Daftar produk AIS Frozen Food — dimsum, singkong keju, pisang coklat lumer, cilok & cireng, pelengkap",
    numberOfItems: posterGroups.length,
    itemListElement: posterGroups.map((g, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: g.title,
        description: g.description,
        image: absoluteImage(`/products/produk-${g.imageNo}.jpg`),
        sku: `ISI-${g.imageNo}`,
        brand: { "@type": "Brand", name: "AIS Frozen Food" },
        aggregateRating: AGGREGATE_RATING,
        review: SAMPLE_REVIEW,
        offers:
          typeof g.lowPrice === "number" && typeof g.highPrice === "number" && g.lowPrice !== g.highPrice
            ? buildAggregateOffer({
                lowPrice: g.lowPrice,
                highPrice: g.highPrice,
                priceCurrency: g.priceCurrency ?? "IDR",
                url: `${SITE_URL}/#produk`,
                offerCount: g.variants.length || 1,
              })
            : buildOffer({
                price: g.price ?? 35000,
                priceCurrency: g.priceCurrency ?? "IDR",
                url: `${SITE_URL}/#produk`,
              }),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <SiteTopBar />
      <Navbar />
      <main id="konten">
        <Hero />
        <WhyAIS />
        <ProductShowcase />
        <FeaturedProducts />
        <SocialProof />
        <InquiryForm />
        <ResellerCTA />
        <DeliveryLocation />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <ExitIntentPopup />
    </>
  );
}
