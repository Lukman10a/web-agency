import React from "react";

import Image from "next/image";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import FAQSection from "@/components/shared/FAQ";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import ToolCard from "@/components/shared/Tool-card";

const toolsData = [
  {
    title: "Cloud Optimization & Foundational Best Practices",
    description:
      "We use the leading cloud management platform, Vega Cloud, to analyze your environment for cost savings opportunities. These tools give you greater visibility and control of costs, and we supercharge them by contextualizing their suggestions to your specific goals, situation, and needs.",
    logo: "/assets/vega.png",
    altText: "Vega Logo",
  },
  {
    title: "Comprehensive AWS Operational Support",
    description:
      "Our AWS-certified CloudOps team mitigates operational issues and helps drive continuous improvement by analyzing key performance metrics and trends in ticketing and alerts. Using New Relic One, we monitor your infrastructure and track its changes over time, tune your alerts to ensure the right items get attention, and conduct root cause analysis when incidents occur.",
    logo: "/assets/new-relic.png",
    altText: "New Relic Logo",
  },
  {
    title: "24/7 Managed Detection & Response",
    description:
      "Our AWS-certified CloudOps team mitigates operational issues and helps drive continuous improvement by analyzing key performance metrics and trends in ticketing and alerts. Using Crowdstrike, we monitor your infrastructure and track its changes over time, tune your alerts to ensure the right items get attention, and conduct root cause analysis when incidents occur.",
    logo: "/assets/crowdstrikeblack.png",
    altText: "Crowdstrike Logo",
  },
];

const AIManagement = () => {
  return (
    <main>
      <NewHero
        imgSrc="/assets/AI-management.png"
        title="AI Management Services"
        description="Keep your AI solutions up-to-date and operating efficiently"
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Custom Alt Text"
        title="What is AI Management?"
        description="At Teverse, we know that getting an AI solution launched is not a one-and-done effort but an ongoing journey—solutions must be able to evolve with the growth of datasets, business requirements, or user behavior or adoption."
        showTag={true}
        tagText="Overview"
        index={1}
        href="3"
      />

      <section>
        <div className="mx-auto mb-24 flex w-[90%] max-w-[1200px] justify-between gap-16 lg:gap-8 md:flex-col-reverse md:gap-4">
          <div className="w-5/6 md:w-full">
            <p className="mb-4 font-sans text-xl text-[#808080] lg:text-lg sm:text-base">
              Effective AI management is about ensuring you can maintain and
              improve your solutions and react to changes while staying
              efficient and cost-effective. We help you to do this while staying
              in accord with best practices, optimized for peak performance, and
              fully leveraging AWS’s many AI and ML native services.
            </p>
            <p className="md:text-sm">
              Chris Sullivan, VP, Channels & Alliances, Americas at Amazon Web
              Services
            </p>
          </div>
          <div className="w-1/6 md:w-full">
            <Image
              className="mx-auto w-full max-w-36"
              src="/svg/awspartner.svg"
              height={50}
              width={50}
              alt="card image"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mb-24 w-[90%] max-w-[1200px] bg-white">
        <div className="mx-auto">
          <div className="mb-8 text-left">
            <span className="tag mb-2 inline-block rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
              FEATURES - TOOLING
            </span>

            <h1 className="mt-2 font-sora text-3xl font-medium md:text-2xl">
              Industry-Leading Tools
            </h1>
            <p className="mt-4 text-gray-600">
              All Teverse Cloud One customers get access to industry-leading
              tools such as Vega Cloud and New Relic. We manage all of these{" "}
              <span className="block sm:inline">
                {" "}
                tools for you, instrumenting your environment with them,
                configuring them for your needs, and tuning their alerts to show
                only{" "}
              </span>{" "}
              what you need to see.
            </p>
          </div>
          <div className="space-y-8">
            {toolsData.map((tool, index) => (
              <ToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                logo={tool.logo}
                altText={tool.altText}
              />
            ))}
          </div>
        </div>
      </section>

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="The Cloud Services Platform That's Purpose Built for AWS"
        description="Get visibility into your cloud environment with Teverse Control, paired with our CloudOps and Cloud Analyst teams to help you act on its insights. We contextualize our suggestions to your specific goals, situations, and needs while tracking the historical performance and costs of your environment."
        showTag={true}
        tagText="TEVERSE CONTROL"
        index={1}
        showButton={true}
        buttonText="Learn More"
        href="/solutions/teverse-control"
      />

      <Preverity />

      <FAQSection />

      <Resources />

      <ServicesCard
        imgSrc="/assets/contact.png"
        altText="Custom Alt Text"
        title="Strengthen Your Security Posture"
        description="Connect with our security experts to learn how Teverse Cloud Secure can harden your AWS environment."
        showTag={true}
        tagText="GET IN TOUCH"
        index={1}
        showButton={true}
        buttonText="Schedule a call"
        href="/contact"
      />
    </main>
  );
};

export default AIManagement;
