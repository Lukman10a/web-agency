import React from "react";

import Image from "next/image";
import Link from "next/link";

import icon from "/public/svg/odk.svg";

import { Button } from "@/components/ui/button";

import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import FeatureCard from "@/components/shared/feature-card";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";

import WhatIsTeverse from "../../components/What-is-teverse";

const TeverseGateway = () => {
  const benefitData = {
    headTitle: "of Mission Teverse Gateway",
    items: [
      { title: "Take the guesswork out of billing, usage, and forecasting" },
      {
        title:
          "Track your infrastructural health so you can see exactly how new initiatives are making an impact",
      },
      { title: "Inform your planning and cloud strategy with AWS expertise" },
      {
        title:
          "Adopt the best practices and native services that maximize your investment in AWS",
      },
      {
        title:
          "Get a team of experts to help you manage the day-to-day tasks of keeping an AWS environment running smoothly",
      },
    ],
  };

  const featureCardData = [
    {
      imageSrc: "/assets/feature1.webp",
      title: "Mission Cloud Score",
      description:
        "Improve your environment by measuring your alignment to best practices across cost, operations, security, reliability, and performance.",
      fullImage: true,
    },
    {
      imageSrc: "/assets/feature2.webp",
      title: "Engineer Assist: DevOps",
      description:
        "Get pay-as-you-go DevOps support for ad-hoc tasks and engagements. Delegate modifications and troubleshooting to our team of DevOps experts just by opening a request.",
      fullImage: true,
    },
    {
      imageSrc: "/assets/targetpoint.png",
      title: "Recommendations",
      description:
        "Identify opportunities to improve your environment with recommendations that are tailored to your specific business goals.",
    },
    {
      imageSrc: "/assets/efficiency.png",
      title: "Mission Cloud re:Invest",
      description:
        "Mission Cloud re:Invest is our strategic spending methodology for cost management and growth on AWS. By combining support for FinOps, InfraOps, RI Ops, and DevOps, we help you grow efficiently, align to best practices, and adopt the right technologies for your objectives on AWS.",
    },
    {
      imageSrc: "/assets/targetpoint.png",
      title: "Reserved Instance Operations (RIO)",
      description:
        "Effective management of reserved spend requires constant vigilance, specialized expertise, and tooling. Mission Cloud RIO manages your Reserved Instances (RIs) and Savings Plans (SPs) purchasing while de-risking your commitments and freeing up capital to go back to where it belongs—driving growth.",
    },
    {
      imageSrc: "/assets/cloudstrikes.png",
      title: "Preferred Pricing",
      description:
        "We co-invest in your cloud strategy with preferred pricing on qualified professional services projects. Accelerate new initiatives and reinvest your savings to make your AWS footprint even more efficient.",
    },
    {
      imageSrc: "/svg/headphone.svg",
      title: "Guidance and Implementation",
      description:
        "Cloud Analysts, Solutions Architects, and DevOps Engineers coordinate to guide you on best practices and modernization. Ensure that each initiative you undertake makes the impact you need while preserving performance and improving your development lifecycle.",
    },
  ];

  return (
    <section className="bg-secondary-gradient">
      <NewHero
        ImgSrc="/svg/gatewayillust.svg"
        title={"Teverse Cloud Gateway"}
        description={
          "AWS guidance for efficient growth and foundational best practices"
        }
        buttonText={"Get Started"}
      />
      <WhatIsTeverse
        title={"What is Teverse Cloud Gateway?"}
        mainDescription={
          "Mission Cloud Gateway is our software platform for helping customers grow efficiently while staying aligned to foundational best practices."
        }
        additionalDescription={
          "Manage costs, improve governance, and adopt technologies that transform your business through a combination of AWS expertise, consultative guidance, and tooling. We support typical FinOps, InfraOps, and RI Ops needs according to Mission re:Invest, our strategic spending methodology for growth on AWS."
        }
        tag={true}
        tagText="OVERVIEW"
      />
      <CardSection />
      <Benefits headTitle={benefitData.headTitle} items={benefitData.items} />

      <div className="mx-auto mb-24 w-[90%] max-w-[1150px] rounded-[3rem] border-2 border-black py-16">
        <div className="mx-auto w-[85%]">
          <Image
            src={icon}
            alt="image"
            className="mb-4 inline-block w-[30%] lg:w-[40%] md:block md:w-[60%]"
            width={500}
            height={500}
          />

          <Button
            asChild
            className="mb-4 w-fit bg-none px-4 font-sora text-xl font-medium text-black underline md:px-0"
          >
            <Link href="#">Read Full Story</Link>
          </Button>

          <p className="mb-6 text-3xl leading-relaxed 2md:text-2xl sm:text-xl">
            “The collaboration with Mission has resulted in tremendous benefits
            to our bottom line. Mission also goes the whole nine yards to
            provide end-to-end support and best practice recommendations. With
            Mission supporting our engineers, our service is more reliable than
            it&apos;s ever been. I wholeheartedly recommend Mission.”
          </p>

          <p className="mb-4 text-xl font-semibold">John Kang</p>

          <p className="font-sora text-base font-semibold">
            CHIEF OPERATING OFFICER AT ODK MEDIA
          </p>
        </div>
      </div>

      <div className="mx-auto mb-24 w-full max-w-[1200px]">
        <p className="mb-12 text-3xl font-medium sm:ml-6">Features</p>
        <div className="mx-auto grid w-[90%] grid-cols-2 gap-16 2md:gap-6 sm:grid-cols-1">
          {featureCardData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              fullImage={feature.fullImage}
            />
          ))}
        </div>
      </div>

      <ServicesCard
        altText="Custom Alt Text"
        title="Get Started with Teverse Cloud Gateway"
        description="Do you want help with the day-to-day needs and management of your AWS environment? Reach out today to learn more about Teverse Cloud Gateway."
        showTag={false}
        index={1}
        showButton={true}
        buttonText="Schedule a call"
        imgSrc={""}
      />
    </section>
  );
};

export default TeverseGateway;
