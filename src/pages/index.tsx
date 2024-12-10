import BusinessOffer from "@/components/business-offer";
import SecurityCertifications from "@/components/certifications";
import Hero from "@/components/hero";
import PartnershipSection from "@/components/partnerships";
import FAQSection from "@/components/shared/FAQ";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    // <main className="mx-auto flex flex-col">
    <main className="flex flex-col gap-8">
      <Hero />
      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />
      {/* <Testimonials /> */}
      <FAQSection />
      <PartnershipSection />
    </main>
  );
}
