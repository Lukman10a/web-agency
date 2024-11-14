import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
// import WhatIsTeverse from "@/components/what-is-teverse";
import WhatIsTeverse from "../../components/What-is-teverse";
import React from "react";

const TeverseGateway = () => {
  return (
    <div>
      <NewHero
        title={"Terverse Cloud Gateway"}
        description={
          "AWS guidance for efficient growth and foundational best practices"
        }
        buttonText={"See our Solutions"}
      />
      <WhatIsTeverse
        title={"What is Terverse Cloud Gateway?"}
        mainDescription={
          "Mission Cloud Gateway is our software platform for helping customers grow efficiently while staying aligned to foundational best practices."
        }
        additionalDescription={
          "Manage costs, improve governance, and adopt technologies that transform your business through a combination of AWS expertise, consultative guidance, and tooling. We support typical FinOps, InfraOps, and RI Ops needs according to Mission re:Invest, our strategic spending methodology for growth on AWS."
        }
      />
      <CardSection />
      <Benefits />
    </div>
  );
};

export default TeverseGateway;
