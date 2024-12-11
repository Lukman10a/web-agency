import BusinessOffer from "@/components/business-offer";
import SecurityCertifications from "@/components/certifications";
import Hero from "@/components/hero";
import PartnershipSection from "@/components/partnerships";
import FAQSection from "@/components/shared/FAQ";
import ServicesCard from "@/components/shared/services-card";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    // <main className="mx-auto flex flex-col">
    <main className="flex flex-col gap-8">
      <Hero />
      <BusinessOffer />
      <WhyChooseUs />
      <SecurityCertifications />

      <FAQSection />
      <ServicesCard
        imgSrc="/assets/contact.png"
        altText="Custom Alt Text"
        title="Strengthen Your Security Posture"
        description="Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Schedule a call"
        href="/contact"
      />
      <PartnershipSection />
    </main>
  );
}
