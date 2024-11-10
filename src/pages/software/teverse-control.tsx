import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
import WhyTeverse from "@/components/why-teverse";
import React from "react";

const TeverseControl = () => {
  return (
    <div>
      <NewHero />
      <WhyTeverse />
      <CardSection />
      <Benefits />
    </div>
  );
};

export default TeverseControl;
