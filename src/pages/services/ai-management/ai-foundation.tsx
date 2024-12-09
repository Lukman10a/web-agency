import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import AwsBuildCard from "@/components/shared/aws-build-card";
import NewHero from "@/components/shared/new-hero";

const fivePillars = [
  {
    id: 1,
    title:
      "AI solutions optimization, architecture guidance, and prompt engineering",
  },
  {
    id: 2,
    title: "Continuous cost optimization and ongoing financial management",
  },
  {
    id: 3,
    title:
      "Continuous guidance on foundational best practices and cloud governance",
  },
  {
    id: 4,
    title:
      "Round-the-clock Enterprise support, led by Teverse and backed by AWS",
  },
  {
    id: 5,
    title:
      "Cloud strategy for adopting technologies that transform your business",
  },
];

const yourTeam = [
  {
    id: 1,
    title: "Regular cadence reviews",
    description:
      "Regular cadence reviews with your team of Cloud Analysts and Technical Account Managers, for FinOps and InfraOps support for costs and performance.",
    imgSrc: "/svg/dollar.svg",
  },
  {
    id: 2,
    title: "Access to certified Solutions Architects",
    description:
      "Access to certified Solutions Architects to guide you on your initiatives and help you to build an actionable technology roadmap and fully leverage AWS.",
    imgSrc: "/svg/industrytime.svg",
  },
  {
    id: 3,
    title: "Follow-the-sun support",
    description:
      "A follow-the-sun support team of CloudOps Engineers available 24/7, with AWS Enterprise-level SLAs for technical help and troubleshooting.",
    imgSrc: "/svg/headphone.svg",
  },
  {
    id: 4,
    title: "FOR PURCHASE: On-call AI Engineers",
    description:
      "An on-call team of AI Engineers, with expertise spanning classical AI/ML techniques and generative AI, who will guide you on architectural decisions, maintenance, and performance.",
    imgSrc: "/svg/head.svg",
  },
];

const managementsData = [
  {
    id: 1,
    title: "OPERATIONAL IMPROVEMENTS",
    description:
      "We find opportunities to improve operational practices, like streamlining backups management, and increasing your cost awareness.",
  },
  {
    id: 2,
    title: "ARCHITECTURAL MODERNIZATION",
    description:
      "We teach you how to leverage AWS best practices to develop a cost-efficient, performant architecture.",
  },
  {
    id: 3,
    title: "ENVIRONMENTAL CLEANUP & RIGHT-SIZING",
    description:
      "Review your environment for over-provisioned and unused resources, like unattached EBS volumes or instances which exceed the needs of your workloads.",
  },
  {
    id: 4,
    title: "FINANCIAL ENGINEERING",
    description:
      "Create across-the-board savings via our Instant Discount Program (IDP), SP & RI Operations, and guidance on adopting PPAs / EDP.",
  },
  {
    id: 5,
    title: "CARBON FOOTPRINT TRACKING",
    description: "Insights on the environmental impact of your AI workloads.",
  },
];

const benefits = [
  {
    id: 1,
    imgSrc: "/svg/dollar.svg",
    description:
      "Increased cost efficiency and de-risked AWS purchasing commitments.",
  },
  {
    id: 2,
    imgSrc: "/svg/heart.svg",
    description:
      "Greater insight into your environment and infrastructural health.",
  },
  {
    id: 3,
    imgSrc: "/svg/target.svg",
    description:
      "AWS best practices for efficiency, reliability, and performance alignment.",
  },
  {
    id: 4,
    imgSrc: "/svg/settingsdollar.svg",
    description:
      "Ongoing support to modernize and optimize operations and spending.",
  },
];

const addionalatasks = [
  {
    id: 1,
    imgSrc: "/svg/dollar.svg",
    description:
      "Increased cost efficiency and de-risked AWS purchasing commitments.",
  },
  {
    id: 2,
    imgSrc: "/svg/industrytime.svg",
    description:
      "Guidance prompting best practices and prompt engineering to meet your performance criteria",
  },
  {
    id: 3,
    imgSrc: "/svg/target.svg",
    description:
      "Recommendations for AWS’s native services to support your AI solution",
  },
  {
    id: 4,
    imgSrc: "/svg/headphone.svg",
    description:
      "Consulting on your AI software stack, including recommendations for foundation models, vector stores, libraries and frameworks that will best support your use case",
  },
];

const AIFundation = () => {
  return (
    <div>
      <NewHero
        imgSrc="/svg/cloudstrike.svg"
        title="Teverse AI Foundation"
        description="Empower Your AI Journey with Expert Guidance"
        showButton={false}
        buttonText="Get Started"
        tagText="FOR EFFICIENT GROWTH AND AI BEST PRACTICES"
        buttonLink="/contact"
      />

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <p className="mb-4 font-sans text-xl lg:text-lg">
          Effective AI management is about ensuring you can maintain and improve
          your solutions and react to changes while staying efficient and
          cost-effective. We help you to do this while staying in accord with
          best practices, optimized for peak performance, and fully leveraging
          AWS’s many AI and ML native services.
        </p>
      </div>

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <h2 className="mb-6 w-[40%] font-sora text-4xl font-medium xl:w-[50%] lg:w-[100%] md:text-center md:text-3xl">
          Our Five Pillars of{" "}
          <span className="text-orange-600">Continuous</span> Engagement
        </h2>
        <div className="grid grid-cols-3 gap-6 2md:grid-cols-2 sm:grid-cols-1">
          {fivePillars.map((data) => (
            <div
              key={data.id}
              className="rounded-lg border border-[#808080] p-4 text-xl md:text-lg"
            >
              <span className="mb-4 block font-sora text-4xl font-semibold text-orange-600">
                0{data.id}
              </span>
              {data.title}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <h2 className="mb-2 w-[30%] font-sora text-4xl font-medium xl:w-[45%] lg:w-[55%] md:w-[100%] md:text-center md:text-3xl">
          Your team of
          <span className="text-orange-600"> Cloud</span> Expert
        </h2>
        <div className="mx-auto mb-16 w-full md:mb-12">
          <p className="mb-4 font-sans text-xl lg:text-lg md:text-base">
            Get regular guidance, support, and engineering to help you grow
            efficiently and take on new initiatives.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
          {yourTeam.map((data) => (
            <AwsBuildCard
              key={data.id}
              imgSrc={data.imgSrc}
              title={data.title}
              description={data.description}
              altText="Image"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <h2 className="mb-6 w-[35%] font-sora text-4xl font-medium xl:w-[45%] lg:w-[55%] md:w-[100%] md:text-center md:text-3xl">
          Teverse
          <span className="text-orange-600"> re:Invest</span> For Cost
          Management
        </h2>
        <p className="mb-4 font-sans text-xl lg:text-lg">
          <span className="font-bold">Teverse re:Invest</span> is our strategic
          spending methodology for helping you to better manage and understand
          your costs and uncover savings to reinvest in your business.
        </p>
        <p className="mb-10 font-sans text-xl lg:text-lg">
          With <span className="font-bold">Teverse Control</span>, our cloud
          services platform, in combination with the powers of{" "}
          <span className="font-bold">Amazon QuickSight</span>, and{" "}
          <span className="font-bold">Amazon Q</span>, you can visualize your
          spending exactly and according to your tagging strategy or based on
          our recommendations. Let Amazon Q help you develop formulas for custom
          reporting and ask questions of your data. And let our team of experts
          help you audit, predict, and comprehensively understand your spending
          so you can manage your costs proactively and grow efficiently.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
          {managementsData.map((data) => (
            <div
              key={data.id}
              className="2md:text rounded-lg border border-[#808080] p-8 text-xl 2md:p-4 md:text-lg"
            >
              <p className="mb-4 block font-sora text-2xl font-medium uppercase text-orange-600">
                {data.title}
              </p>

              <p className="mb-4 block text-lg">{data.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <h2 className="mb-6 w-[45%] font-sora text-4xl font-medium lg:w-[55%] md:w-[100%] md:text-center md:text-3xl">
          <span className="text-orange-600"> Benefits</span> of Teverse AI
          Foundation
        </h2>

        <div className="grid grid-cols-4 gap-3 2md:grid-cols-2 sm:grid-cols-1">
          {benefits.map((data) => (
            <AwsBuildCard
              key={data.id}
              imgSrc={data.imgSrc}
              description={data.description}
              altText="Image"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mb-12 w-[90%] max-w-[1200px] rounded-3xl border-2 border-[#808080] p-8 md:p-4">
        <p className="mb-2 font-sora text-xl font-medium lg:text-lg">
          FOR PURCHASE
        </p>
        <h2 className="mb-6 w-[45%] font-sora text-4xl font-medium text-orange-600 lg:w-[55%] md:w-[100%] md:text-3xl sm:mb-4 sm:text-2xl">
          Engineer Assist - AI
        </h2>
        <p className="mb-8 font-sora text-xl font-medium lg:text-lg">
          Engineer Assist allows you to make requests of your team of Teverse AI
          Engineers right from within Teverse Control. With an engagement model
          designed for modifications, maintenance, and consulting, Engineer
          Assist lets you pay-as-you-go for engineering support of your AI
          solutions.
        </p>
        <p className="font-sora text-xl font-medium lg:text-lg">
          Get regular guidance, support, and engineering to help you grow
          efficiently and take on new initiatives.
        </p>
      </div>

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px] md:mb-12">
        <h2 className="mb-6 w-full font-sora text-4xl font-light text-orange-600 md:text-center md:text-3xl">
          ADDITIONAL TASKS ENGINEER ASSIST - AI SUPPORT
        </h2>

        <div className="grid grid-cols-4 gap-3 2md:grid-cols-2 sm:grid-cols-1">
          {addionalatasks.map((data) => (
            <AwsBuildCard
              key={data.id}
              imgSrc={data.imgSrc}
              description={data.description}
              altText="Image"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mb-12 flex w-[90%] max-w-[1200px] gap-6 rounded-3xl border-2 border-[#808080] p-8 lg:flex-col md:p-4">
        <div className="">
          <h2 className="mb-6 w-[70%] font-sora text-4xl font-medium text-orange-600 md:w-[100%] md:text-3xl sm:mb-4 sm:text-2xl">
            Get Support For Your AI Solutions Today
          </h2>
          <p className="mb-8 font-sora text-xl font-medium lg:text-lg">
            Interested in how Teverse AI Foundation can support your teams and
            solutions? Reach out to us to learn more.
          </p>
          <p className="font-sora text-xl font-medium lg:text-lg">
            Teverse is a leading born-in-the-cloud managed services and
            consulting provider, offering end-to-end cloud services, innovative
            AI solutions, and software for AWS customers. As an AWS Premier Tier
            Partner, we help you manage your technology investments, improve
            performance and governance, scale to meet demand, safeguard your
            data, and innovate fearlessly. ing to help you grow efficiently and
            take on new initiatives.
          </p>
        </div>
        <div className="">
          <Button
            asChild
            className="bottom-10 mb-6 mt-6 flex w-fit items-center justify-center rounded-full bg-orange-600 px-[2.5em] py-[1em] font-normal text-white hover:bg-darkblue-950 2md:text-[12px]"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIFundation;
