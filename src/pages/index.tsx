import BusinessOffer from "@/components/business-offer";
import SecurityCertifications from "@/components/certifications";
import Hero from "@/components/hero";
import Testimonials from "@/components/what-client";
import FAQSection from "@/components/FAQ";
import WhyChooseUs from "@/components/why-choose-us";
import MoreClients from "@/components/more-clients";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col">
      <Hero />
      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />
      <Testimonials />
      <FAQSection />
    </main>
  );
}
