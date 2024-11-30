import BenefitsSection from "@/components/shared/cloud-card";
import NewHero from "@/components/shared/new-hero";
import WhatIsTeverse from "@/components/What-is-teverse";
import React from "react";
import FAQ from "@/components/shared/FAQ";
import Resources from "@/components/resources";
import ServicesCard from "@/components/shared/services-card";
import DynamicSection from "@/components/profesional-services";

const GenerativeAI = () => {
  // Data for BenefitsSection
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

  const ProfessionalServices = [
    {
      icon: "/assets/softwareCloud2.png",
      title: "AWS Migrations",
      description:
        "Assess your infrastructure, Mobilize to establish your workloads, Migrate & Modernize all remaining workloads, tune for production",
      link: "/services/aws-migrations",
    },
    {
      icon: "/assets/serviceGrid2.png",
      title: "AWS Modernization",
      description:
        "Improve deployments and operations with containerization, serverless computing, microservices",
      link: "/services/aws-modernization",
    },
    {
      icon: "/assets/softwareCloud3.png",
      title: "Data, Analytics & AI/ML",
      description:
        "Data engineering and analytics, visualization, data science, generative AI and ML algorithms, AI/ML operations",
      link: "/services/data-analytics",
    },
    {
      icon: "/assets/serviceGrid4.png",
      title: "DevOps",
      description:
        "Streamline and secure your development pipeline with Infrastructure as Code, CI/CD",
      link: "/services/devops",
    },
]

  // Return statement
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/checkers.png"
        tag
        title="Mission Cloud Score"
        description="Benchmark your environment against AWS best practices."
        buttonText="Get Started"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        title="DevOps Score Your Cloud Against AWS Best Practices Excellence, Visualized"
        mainDescription="With Mission Cloud Score you can see how your architecture performs against the well-architected pillars that define best practices for AWS. Learn how your cost efficiency, operations, security, reliability, and performance rank and see any issues clearly enumerated."
        additionalDescription="Over time you can track and measure your score as your infrastructure changes, so that you can build with confidence, assured that you’ve architected with all of the measures AWS considers necessary for a state-of-the-art back-end."
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />

      <DynamicSection
        title="Get Engineering And Support For Every Initiative"
        subtitle="Enlist trusted expertise to guide you through the design and implementation of robust, scalable cloud-native solutions. Capitalize on all that AWS offers — enhanced speed, performance, reliability, and cost efficiency — with our engineers and architects."
        description=""
        buttonVisible={true}
        buttonText="Learn More"
        cards={ProfessionalServices}
      />

      <FAQ />
      <Resources />
      <ServicesCard
          imgSrc="/assets/checkers.png"
          altText="Custom Alt Text"
          title="We have the tools to understand your cloud and the guidance to make the most of it."
          description="Schedule your demo with a Mission Cloud Advisor and find out what Mission Control can do for you."
          showTag={true}
          tagText="GET IN TOUCH"
          index={1}
          showButton={true}
          buttonText="Book your Demo"
      
      />
    </div>
  );
};

export default GenerativeAI;
