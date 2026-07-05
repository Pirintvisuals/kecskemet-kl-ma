import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { services, serviceAreas, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.brand,
  description:
    "Prémium klímaszerelés, karbantartás, javítás és beüzemelés Kecskeméten és 30 km-es körzetében.",
  telephone: site.phone,
  email: site.email,
  founder: site.owner,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Számadó u. 25.",
    addressLocality: "Kecskemét",
    postalCode: "6000",
    addressCountry: "HU",
  },
  areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHours: "Mo-Fr 08:00-17:00",
  priceRange: "$$",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.short },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <span id="top" />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Stats />
        <WhyUs />
        <Process />
        <ServiceArea />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />

      {/* Sticky mobile call button */}
      <a
        href={site.phoneHref}
        aria-label="Hívás most"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 font-semibold text-white shadow-[0_16px_40px_-12px_rgba(10,108,212,0.95)] transition-transform duration-200 hover:-translate-y-0.5 lg:hidden cursor-pointer"
      >
        <Phone className="h-5 w-5" />
        Hívás
      </a>
    </>
  );
}
