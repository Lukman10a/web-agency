import React from "react";

import Resources from "@/components/resources";
import BenefitsSection from "@/components/shared/cloud-card";
import FAQ from "@/components/shared/FAQ";
import FeaturesSection from "@/components/shared/features";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

// Data for BenefitsSection
const benefitsData = {
  tag: true,
  title: "Measure Your Architecture and Know Exactly Where You Stand",
  description:
    "Teverse Cloud Score shows you exactly what you want to know about your AWS environmental health and helps you keep tabs on it. See at a glance your adherence to best practices and learn what you need to do if you’re out of alignment with any.",
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

// Data for FeaturesSection
const featuresData = {
  title: "Features",
  features: [
    {
      icon: "/assets/targetpoint.png",
      heading: "Rely On Trusted Tooling and Precise Answers",
      description:
        "The Teverse Cloud Score is generated using a proprietary algorithm we've honed through working with hundreds of customers. It combines data from your environment and AWS's own tooling to generate a score to measure the viability of your environment across each of the well-architected pillars.",
    },
    {
      icon: "/assets/targetpoint.png",
      heading: "Authoritative Insights",
      description:
        "We rely on some of the most accurate and widely trusted tools for measuring your environmental health on AWS. Your Teverse Cloud Score is calculated using AWS Trusted Advisor, AWS Security Hub, and AWS Compute Optimizer checks.",
    },
    {
      icon: "/assets/cloudstrikes.png",
      heading: "See Which Resources Are Impacted",
      description:
        "When something impacts your score, you can see the exact resources which have triggered the missed check and even download this list to use with other tools.",
    },
    {
      icon: "/assets/clock.png",
      heading: "A Feed of Your Most Recent Changes",
      description:
        "Every time a check's status changes, you'll get a notification in our activity feed, so you can see exactly what caused the change.",
    },
  ],
};

const CloudScore = () => {
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        imgSrc="/svg/cloud-score.svg"
        title="Teverse Cloud Score"
        description="Benchmark your environment against AWS best practices."
        buttonText="Get Started"
        buttonLink="/contact"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        imageSrc="/assets/server.png"
        tagText="Overview"
        title="DevOps Score Your Cloud Against AWS Best Practices Excellence, Visualized"
        mainDescription="With Teverse Cloud Score you can see how your architecture performs against the well-architected pillars that define best practices for AWS. Learn how your cost efficiency, operations, security, reliability, and performance rank and see any issues clearly enumerated."
        additionalDescription="Over time you can track and measure your score as your infrastructure changes, so that you can build with confidence, assured that you’ve architected with all of the measures AWS considers necessary for a state-of-the-art back-end."
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />

      {/* Features Section */}
      <FeaturesSection
        title={featuresData.title}
        features={featuresData.features}
      />

      <FAQ />
      <Resources />
      <ServicesCard
        imgSrc="/assets/teverse-control2.png"
        altText="Custom Alt Text"
        title="We have the tools to understand your cloud and the guidance to make the most of it."
        description="Schedule your demo with a Teverse Cloud Advisor and find out what Teverse Control can do for you."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Book your Demo"
        href={""}
      />
    </div>
  );
};

export default CloudScore;
