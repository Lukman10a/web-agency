import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
import WhatIsTeverse from "@/components/what-is-teverse";
import React from "react";

const TeverseGateway = () => {
  return (
    <div>
      <NewHero />
      <WhatIsTeverse />
      <CardSection />
      <Benefits />
    </div>
  );
};

export default TeverseGateway;
