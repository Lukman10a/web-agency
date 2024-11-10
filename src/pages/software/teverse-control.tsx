import BookDemoSection from "@/components/book-demo";
import InterpretDataSection from "@/components/data-section";
import TeverseControlHero from "@/components/teverse-control";
import React from "react";

const TeverseControl = () => {
  return (
    <main>
      <TeverseControlHero />
      <InterpretDataSection />
      <BookDemoSection />
    </main>
  )
};

export default TeverseControl;
