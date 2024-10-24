import BusinessOffer from "@/components/business-offer";
import Hero from "@/components/hero";
import Testimonials from "@/components/what-client";
import SecurityCertifications from "@/components/certifications";
import KeyBenefits from "@/components/why-choose";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <KeyBenefits />
      <SecurityCertifications />
      <Testimonials />
    </main>
  );
}
