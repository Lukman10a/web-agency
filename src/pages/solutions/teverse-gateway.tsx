import React from "react";

// import WhatIsTeverse from "@/components/what-is-teverse";
import WhatIsTeverse from "../../components/What-is-teverse";
import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
import Features from "@/components/Benefit";
import ServicesCard from "@/components/shared/services-card";
import BenefitsSection from "@/components/shared/cloud-card";


const TeverseGateway = () => {

  const benefitData = {
    headTitle: "of Mission Terverse Gateway",
    items: [
      { title: "Take the guesswork out of billing, usage, and forecasting" },
      { title: "Track your infrastructural health so you can see exactly how new initiatives are making an impact" },
      { title: "Inform your planning and cloud strategy with AWS expertise" },
      { title: "Adopt the best practices and native services that maximize your investment in AWS" },
      { title: "Get a team of experts to help you manage the day-to-day tasks of keeping an AWS environment running smoothly" },
    ],
  };
  

  const benefitsData = {
    tag: true,
    title: "Measure Your Architecture and Know Exactly Where You Stand",
    description:
      "Mission Cloud Score shows you exactly what you want to know about your AWS environmental health and helps you keep tabs on it. See at a glance your adherence to best practices and learn what you need to do if you’re out of alignment with any.",
    benefits: [
      {
        icon: "/assets/heart-rate.png",
        heading: "Your Health at a Glance",
        text: "When launching a new initiative, you can check to see how your score is impacted. Learn when you’ve created a security concern or repaired an operational gap in real-time.",
      },
      {
        icon: "/assets/efficiency.png",
        heading: "Pinpoint Problems",
        text: "We list and quantify every issue detracting from your score, so you can see every open concern and get a clear sense for its level of urgency.",
      },
      {
        icon: "/assets/champion.png",
        heading: "Graph Your Growth",
        text: "As your score changes, we’ll chart the difference, showing when your architecture is moving in the right direction or when an initiative needs support or re-working.",
      },
    ],
  };

  return (
    <div>
      <NewHero
        ImgSrc="/assets/checkers.png"
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
      <Benefits headTitle={benefitData.headTitle} items={benefitData.items} />
      <Features />
      
       <BenefitsSection {...benefitsData} />

      <ServicesCard
          imgSrc="/assets/checkers.png"
          altText="Custom Alt Text"
          title="Strengthen Your Security Posture"
          description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
          showTag={true}
          tagText="GET IN TOUCH"
          index={1}
          showButton={true}
          buttonText="Schedule a call"
      
      />
    </div>
  );
};

export default TeverseGateway;
