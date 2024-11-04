import BusinessOffer from "@/components/business-offer";
import SecurityCertifications from "@/components/certifications";
import Hero from "@/components/hero";
import Testimonials from "@/components/what-client";

import SecurityCertifications from "@/components/certifications";
import KeyBenefits from "@/components/why-choose";
import FAQSection from "@/components/FAQ";

import WhyChooseUs from "@/components/why-choose-us";
import PartnershipSection from "@/components/partnerships";


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <KeyBenefits />
      <SecurityCertifications />
      <Testimonials />
      <FAQSection />

      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />
      <Testimonials />
<<<<<<< Updated upstream
=======
      <FAQSection />
      <PartnershipSection />
>>>>>>> Stashed changes
    </main>
  );
}
