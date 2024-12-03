import React from "react";

import Writeable from "/public/svg/writeable.svg";

import CloudModernization from "@/components/cloud-modernization";
import Resources from "@/components/resources";
import BenefitsSection from "@/components/shared/cloud-card";
import FAQ from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import PartnersCard from "@/components/shared/partners-card";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

// Data for BenefitsSection
const benefitsData = {
  tag: true,
  title: "Benefits of AWS Modernization with Mission",
  description:
    "Modernization allows you to realize more benefits from your applications and infrastructure. With Mission’s cloud modernization services, receive expert support in configuring and managing your cloud in a modern environment and enjoy a cloud environment centered around reliability, cost efficiency, performance, and elasticity. Below are more benefits of a modernized environment:",
  benefits: [
    {
      icon: "/assets/heart-rate.png",
      heading: "Resiliency & Reliability",
      text: "When availability or fault-tolerance are a concern, modernizing ensures your applications are safe, secure, and backed up with proper failover procedures in place should there be an incident.",
    },
    {
      icon: "/assets/dollar.png",
      heading: "Cost Efficiency",
      text: "With AWS’s consumption-based pricing model, you’re only charged for what you use—modernizing gives you greater clarity, granularity, and control  when optimizing for cost without compromising performance.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Enhanced Performance",
      text: "Modernized workloads rely on the AWS services, design patterns, and features native to the cloud that can scale performance with greater flexibility, control, and reliability.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Support Evolving Business Models",
      text: "Modernized workloads can enable a transition from a traditional software licensing model to a SaaS model, better serving both your customers and your business.",
    },
    {
      icon: "/assets/champion.png",
      heading: "Meet Compliance Benchmarks",
      text: "Modernized workloads are easier to secure and audit, aiding your efforts to meet CPRA, GDPR, HIPAA, and other government or industry regulations and compliance regimes.",
    },
  ],
};

const AwsModernization = () => {
  return (
    <div>
      {/* Hero Section */}
      <NewHero
        ImgSrc="/assets/checkers.png"
        title=" Modernization"
        description="Your infrastructure in a modern cloud environment"
        buttonText="Get Started"
      />

      {/* What Is Teverse Section */}
      <WhatIsTeverse
        tag
        tagText="OVERVIEW"
        title="Streamline Deployments, Improve Resiliency, and Harden Security"
        mainDescription="Modernizing your applications and infrastructure allows you to realize all the benefits of AWS: scalability, availability, reliability, 
            deployability, observability, and cost efficiency. But modernizing 
            your infrastructure can add complexity if designs aren’t carefully considered. 
            With our expertise we can help you advance to a native, seamless, and decoupled 
            infrastructure while retaining the flexibility you need to innovate and streamlining your developer experience."
        additionalDescription=""
      />

      {/* Benefits Section */}
      <BenefitsSection {...benefitsData} />

      <CloudModernization />

      <PartnersCard
        iconSrc={Writeable}
        buttonText="Read Full Story"
        buttonLink="#"
        quote="“All of the tasks we’ve collaborated on with Mission demonstrate just how wide their expertise spans. They are an ideal partner for building and supporting our AWS environment to ensure applications continue to meet the needs of our customers. I can also step out of the hands-on DevOps role and focus on the bigger picture — I now spend less time in the weeds solving technical problems and more time enhancing our applications.”"
        authorName="Shawn Hempel"
        authorRole="CTO at Writable"
      />

      <FAQ />
      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText=""
        title="Modernize Your Data Infrastructure With Mission"
        description="Schedule a free consultation call to learn how modernization can accelerate your business. Our cloud advisor team can walk you through the modernization process and answer your questions."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Get Started"
        href={""}
      />
      <Resources />
    </div>
  );
};

export default AwsModernization;
