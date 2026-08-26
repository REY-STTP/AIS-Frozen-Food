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

export default function HomePage() {
  return (
    <>
      <SiteTopBar />
      <Navbar />
      <main id="konten">
        <Hero />
        <WhyAIS />
        <ProductShowcase />
        <FeaturedProducts />
        <ResellerCTA />
        <DeliveryLocation />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
