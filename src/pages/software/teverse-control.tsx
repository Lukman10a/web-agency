import BookDemoSection from "@/components/book-demo";
import InterpretDataSection from "@/components/data-section";
import SoftwareFAQ from "@/components/software-faq";
import TeverseControlHero from "@/components/teverse-control";
import React from "react";

const TeverseControl = () => {
  return (
    <main>
      <TeverseControlHero />
      <InterpretDataSection />
      <SoftwareFAQ />
      <BookDemoSection />
    </main>
  )
};

export default TeverseControl;
