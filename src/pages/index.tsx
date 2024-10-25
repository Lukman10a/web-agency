import BusinessOffer from "@/components/business-offer";
import SecurityCertifications from "@/components/certifications";
import Hero from "@/components/hero";
import Testimonials from "@/components/what-client";
import FAQSection from "@/components/FAQ";
import WhyChooseUs from "@/components/why-choose-us";
import Booking from "@/components/booking";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />
      <Testimonials />
      <FAQSection />
      <Booking />
    </main>
  );
}
