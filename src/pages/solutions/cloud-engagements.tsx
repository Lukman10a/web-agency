import React from "react";

import Features from "@/components/Benefit";
// import icon from "/public/svg/forcura.svg";
import Benefits from "@/components/benefits";
import CardSection from "@/components/card-section";
import DevOpsMethodology from "@/components/devops";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";
import WhatIsTeverse from "@/components/What-is-teverse";

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

const devOpsCard = [
  {
    title: "Weekly Leadership Check-In",
    description:
      "Your PM reviews progress on your goals through documented tasks and defined acceptance criteria; we quickly address any blockers; we course correct, even mid-sprint if necessary.",
  },
  {
    title: "Bi-weekly Sprint Ceremony",
    description:
      "Your CSA and PM collaborate with you to prioritize work, optimize development velocity, demo completed work, and debrief previous sprints; your feedback becomes the input for new iterations.",
  },
  {
    title: "Quarterly Technical Roadmapping",
    description:
      "Your CSA and PM check in to align on your evolving business roadmap and identify a backlog for future sprints; together, we set objectives to ensure your team is positioned for your priorities.",
  },
];

export default function CloudEngagements() {
  return (
    <div>
      <NewHero
        imgSrc="/svg/engagement.svg"
        title="Mission Cloud Engagements DevOps"
        description="Get transparent reporting and live updates on your team’s status"
        buttonText="Get Started"
      />
      <WhatIsTeverse
        title="DevOps Excellence, Visualized"
        mainDescription="Mission Cloud Engagements - DevOps, powered by Mission Control, enables both you and Mission to easily track and manage the work accomplished by your Mission Cloud DevOps team. Visualize the status of your initiatives in real time and use Mission Control’s observability and reporting tools to generate and prioritize a backlog of work while understanding its impact on your alignment to best practices."
        additionalDescription="With Engagements, our aim is simple: make the experience of accomplishing your projects with Mission that much richer, more transparent, and accountable, so you can get your DevOps initiatives built to spec and launched quickly."
        tag={true}
        tagText="Overview"
      />
      <CardSection />

      <section className="my-16 grid grid-cols-2 p-20 md:grid-cols-1 md:p-12 sm:p-8">
        <h4 className="mb-8 font-sora text-5xl font-medium text-[#262626]">
          A team equipped for all <span className="text-[#FF9557]">DevOps</span>{" "}
          disciplines
        </h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {disciplines.map((discipline) => (
            <div
              key={discipline}
              className="flex items-center justify-center rounded-lg border border-[#262626] p-8 font-medium text-[#262626]"
            >
              {discipline}
            </div>
          ))}
        </div>
      </section>

      <Benefits headTitle={benefitData.headTitle} items={benefitData.items} />

      <Features />

      <DevOpsMethodology />

      <div className="mx-auto mb-24 w-[90%] max-w-7xl">
        <div className="mb-24">
          <h2 className="mb-8 font-sora text-4xl font-medium sm:text-3xl">
            Transparent DevOps Management
          </h2>
          <p className="text-xl leading-relaxed text-[#808080] md:text-base">
            Using Teverse Cloud Engagements - DevOps, your PM monitors the
            progress of your initiatives, alerts you to blockers, risks, or
            issues, and guides your team ceremonies, giving you full visibility
            into the backlog, sprint planning, and critical documentation.
          </p>
        </div>

        <p className="mb-8 font-sora text-4xl leading-relaxed sm:text-3xl">
          Our Agile Cadence
        </p>

        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 lg:gap-4 md:grid-cols-1">
          {devOpsCard.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#FF9557] px-10 py-12 xl:px-6"
            >
              <p className="mb-4 text-2xl">{card.title}</p>
              <p className="text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <ServicesCard
        imgSrc="/assets/checkers.png"
        altText="Custom Alt Text"
        title="Get Started with Teverse Cloud Engagements"
        description="Looking to get flexible DevOps support for your next major initiative on AWS? Reach out today to learn more about how Teverse Cloud Engagements - DevOps can help you manage your projects and achieve your objectives."
        showTag={false}
        index={1}
        showButton={true}
        buttonText="Get Started"
        href={""}
      />
    </div>
  );
}
