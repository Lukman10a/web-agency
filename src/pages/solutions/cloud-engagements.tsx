import React from "react";

import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import DevOpsMethodology from "@/components/devops";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";
import PartnersCard from "@/components/shared/partners-card";
import FeatureCard from "@/components/shared/feature-card";
import Image from "next/image";
const disciplines = [
  "Infrastructure as Code",
  "Application troubleshooting",
  "Microservices",
  "Secure Access Implementation",
  "Lifecycle policies",
  "Infrastructure & Networking",
  "CI/CD Pipelines",
  "Security",
  "Containerization",
  "Scripting",
];

const benefitData = {
  headTitle: "of Terverse Cloud Engagements - DevOps",
  items: [
    {
      title:
        "Surface risks to your initiatives before they become roadblocks or delay important work.",
    },
    {
      title:
        "Check the status of your DevOps team in real-time and get accurate, clear reporting.",
    },
    { title: "Transparency and accountability on all our work together." },
    {
      title:
        "One place to find everything you need to know about your DevOps engagement.",
    },
    {
      title:
        "Ensure your priorities are being met and quickly pivot when needed.",
    },
  ],
};

export default function CloudEngagements() {
  return (
    <div className="bg-gradient-to-br from-[#a7d2f1] via-[#eaf4ff] to-[#d8e8f3]">
      <NewHero
        ImgSrc="/svg/engagement.svg"
        title="Teverse Cloud Engagements DevOps"
        description="Get transparent reporting and live updates on your team’s status"
        buttonText="Get Started"
      />
      <WhatIsTeverse
        tag
        tagText="OVERVIEW"
        title="DevOps Excellence, Visualized"
        mainDescription="Teverse Cloud Engagements - DevOps, powered by Teverse Control, enables both you and Teverse to easily track and manage the work accomplished by your Teverse Cloud DevOps team. Visualize the status of your initiatives in real time and use Teverse Control’s observability and reporting tools to generate and prioritize a backlog of work while understanding its impact on your alignment to best practices."
        additionalDescription="With Engagements, our aim is simple: make the experience of accomplishing your projects with Teverse that much richer, more transparent, and accountable, so you can get your DevOps initiatives built to spec and launched quickly."
      />
      <CardSection />
      <section className="mx-auto mb-32 w-[90%] max-w-[1150px]">
        <h4 className="mb-16 text-5xl font-medium text-[#262626] 2md:text-4xl md:mb-8">
          A team equipped for all <span className="text-[#FF9557]">DevOps</span>{" "}
          disciplines
        </h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {disciplines.map((discipline) => (
            <ul key={discipline} className="ml-4 list-disc">
              <li>
                <p className="text-2xl">{discipline}</p>
              </li>
            </ul>
          ))}
        </div>
      </section>
      <Benefits headTitle={benefitData.headTitle} items={benefitData.items} />

      <PartnersCard
        iconSrc={icon}
        buttonText="Read Full Story"
        buttonLink="#"
        quote="“The collaboration with Teverse has resulted in tremendous benefits
            to our bottom line. Teverse also goes the whole nine yards to
            provide end-to-end support and best practice recommendations. With
            Teverse supporting our engineers, our service is more reliable than
            it's ever been. I wholeheartedly recommend Teverse.”"
        authorName="John Kang"
        authorRole=" CHIEF OPERATING OFFICER AT ODK MEDIA"
      />

      <div className="mx-auto mb-24 w-[90%] max-w-[1200px]">
        <p className="mb-12 text-3xl font-medium sm:ml-6">Features</p>

        <div className="mx-auto w-full max-w-[800px]">
          <Image
            src={image}
            alt="Companies icon"
            className="mb-12 w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto grid w-full grid-cols-3 gap-12 lg:gap-8 2md:grid-cols-2 sm:grid-cols-1">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.icon}
            />
          ))}
        </div>
      </div>

      <DevOpsMethodology />
      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText="Custom Alt Text"
        title="Get Started with Teverse Cloud Engagements"
        description="Looking to get flexible DevOps support for your next major initiative on AWS? Reach out today to learn more about how Teverse Cloud Engagements - DevOps can help you manage your projects and achieve your objectives."
        showTag={false}
        index={1}
        showButton={true}
        buttonText="Get Started"
      />
    </div>
  );
}
