import React from "react";

import clock from "/public/svg/awsBuild.svg";
import finOps from "/public/svg/finOps.svg";
import headphone from "/public/svg/headphone.svg";
import industry from "/public/svg/industry.svg";
import infraOps from "/public/svg/infraOps.svg";
import palm from "/public/svg/palm.svg";

import AwsBuild from "@/components/aws-build";
import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import FAQSection from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import VegaCard from "@/components/vega-card";

const cardData = [
  {
    title: "Efficiency You Need",
    description:
      "Running your environment efficiently is an evolving problem which takes strategy and expertise. It’s critical to monitor your costs, tag your infrastructure appropriately, actively manage it, and ensure you’re architected in a way to maximize your performance while minimizing your overhead. With our FinOps and InfraOps support, you'll get experts trained to do exactly that.",
    icon: clock,
  },
  {
    title: "Your Industry’s Best Practices",
    description:
      "Our teams work with some of the largest AWS environments in every industry. We understand not only best practices for AWS itself, but for industry-specific needs, like compliance, governance, monitoring, logging, containerizing, and the architectures that make all of these possible. We’ve worked with hundreds of customers across thousands of deployments to help their environments scale and perform.",
    icon: clock,
  },
  {
    title: "Support You Can Trust",
    description:
      "Our 24/7 support is backed by Enterprise SLAs and AWS itself. This means that when an issue arises, or a critical service goes down, you’re not on your own for figuring out a fix. With live chat and ticketing, you get responses in minutes, so you can get back up and running without losing customers or breaching a secure system.",
    icon: headphone,
  },
  {
    title: "Peace of Mind",
    description:
      "How do you know if you’ve made the right choices for your long-term growth? What about keeping your environment secure or meeting a compliance benchmark? With our experts alongside you every step of the way, you can have confidence that you’re aligned to best practices, secure, and designed for the scale you need.",
    icon: palm,
  },
];

const cardDataTwo = [
  {
    title: "FinOps",
    description:
      "Regularly review your environment for cost, performance, reliability, and efficiency, helping you better align with AWS best practices. Right-size your infrastructure, develop tagging strategies for your budgets, identify your cost centers, improve your RI and SP purchasing strategies for greater coverage, and get guidance on PPAs and EDPs.",
    icon: finOps,
  },
  {
    title: "InfraOps",
    description:
      "Identify opportunities to modernize, improve your governance and overall infrastructure health, and analyze your tickets and alerts for underlying issues. Ensure that any changes made for cost efficiency don’t degrade performance, or vice versa.",
    icon: infraOps,
  },
  {
    title: "24/7 Enterprise Support ",
    description:
      "Find rapid support anytime you need it. Our CloudOps team operates on a follow-the-sun model with industry-leading SLAs. We’re backed by AWS Enterprise Support and are always available for technical help and troubleshooting.",
    icon: headphone,
  },
  {
    title: "Industry-Leading Tools",
    description:
      "Get a rich understanding of your environment top to bottom. Identify your opportunities to optimize and better align to best practices by leveraging our tooling, including Vega Cloud and Mission Control.",
    icon: industry,
  },
];

const CloudFoundation = () => {
  return (
    <main>
      <NewHero
        ImgSrc="/public/assets/contact.png"
        title="Mission Cloud Foundation"
        description="Manage costs, support your teams, and build to scale."
        buttonText="Get Started"
      />

      <ServicesCard
        imgSrc="/public/assets/contact.png"
        altText="Custom Alt Text"
        title="Align Your Environment to AWS Best Practices"
        description="Mission Cloud Foundation is our cloud managed service for foundational best practices. Optimize, modernize, and fearlessly take on new initiatives with 24/7 support."
        showTag={true}
        tagText="Overview"
        index={1}
        href={""}
      />

      <AwsBuild
        cards={cardData}
        tag="BENEFITS"
        title="Everything You Need to Build on AWS"
        subtitle="By taking care of the fundamental concerns of building on AWS—costs, support, best practices, and scalability—you can build your business with confidence."
      />

      <AwsBuild
        cards={cardDataTwo}
        tag="FEATURES"
        title="Manage Costs, Support Your Teams, and Build to Scale"
        subtitle="Improve your efficiency, governance, and environmental visibility while aligning with best practices."
      />

      <VegaCard />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Custom Alt Text"
        title="Our Cloud Services Platform Is Tailor-built for AWS"
        description="Get visibility into your cloud environment with Mission Control, paired with our CloudOps and Cloud Analyst teams to help you act on its insights. We contextualize our suggestions to your specific goals, situations and needs while tracking the historical performance and costs of your environment."
        showTag={true}
        tagText="MISSION CLOUD"
        index={1}
        showButton={true}
        buttonText="Learn More"
        href={""}
      />
      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Custom Alt Text"
        title="Book a Free AWS Cost Assessment"
        description="Ready to optimize your AWS environment for spend and performance? Schedule a free AWS cost assessment with a Mission Cloud Analyst today."
        index={2}
        showButton={true}
        buttonText="Schedule Assessment"
        href={""}
      />

      <Preverity />

      <FAQSection />

      <Resources />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Custom Alt Text"
        title="Strengthen Your Security Posture"
        description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Schedule a call"
        href={""}
      />
    </main>
  );
};

export default CloudFoundation;
