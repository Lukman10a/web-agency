import BusinessOffer from "@/components/business-offer";
import Hero from "@/components/hero";
import Testimonials from "@/components/what-client";
import SecurityCertifications from "@/components/certifications";
import FAQSection from "@/components/FAQ";
import WhyChooseUs from "@/components/why-choose-us";
import MoreClients from "@/components/more-clients";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col">
import PartnershipSection from "@/components/partnerships";


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />
      <Testimonials />
      <FAQSection />
      <PartnershipSection />
    </main>
  );
}
