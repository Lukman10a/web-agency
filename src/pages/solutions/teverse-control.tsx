import React from "react";

import BookDemoSection from "@/components/book-demo";
import InterpretDataSection from "@/components/data-section";
import SoftwareFAQ from "@/components/software-faq";
import TeverseControlHero from "@/components/teverse-control";

const TeverseControl = () => {
  return (
    <main>
      <TeverseControlHero />
      <InterpretDataSection />
      <SoftwareFAQ />
      <BookDemoSection />
    </main>
  );
};

export default TeverseControl;
