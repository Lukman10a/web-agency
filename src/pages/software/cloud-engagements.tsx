import React from "react";

import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
import WhatIsTeverse from "@/components/What-is-teverse";
import DevOpsMethodology from "@/components/devops";
import ServicesCard from "@/components/shared/services-card";
import Benefits from "@/components/benefits";

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
    { title: "Surface risks to your initiatives before they become roadblocks or delay important work." },
    { title: "Check the status of your DevOps team in real-time and get accurate, clear reporting." },
    { title: "Transparency and accountability on all our work together." },
    { title: "One place to find everything you need to know about your DevOps engagement." },
    { title: "Ensure your priorities are being met and quickly pivot when needed." },
  ],
};



export default function CloudEngagements() {
  return (
    <div>
      <NewHero
        ImgSrc="/assets/checkers.png"
        tag
        title="Mission Cloud Engagements DevOps"
        description="Get transparent reporting and live updates on your team’s status"
        buttonText="Get Started"
      />
      <WhatIsTeverse
        tag
        title="DevOps Excellence, Visualized"
        mainDescription="Mission Cloud Engagements - DevOps, powered by Mission Control, enables both you and Mission to easily track and manage the work accomplished by your Mission Cloud DevOps team. Visualize the status of your initiatives in real time and use Mission Control’s observability and reporting tools to generate and prioritize a backlog of work while understanding its impact on your alignment to best practices."
        additionalDescription="With Engagements, our aim is simple: make the experience of accomplishing your projects with Mission that much richer, more transparent, and accountable, so you can get your DevOps initiatives built to spec and launched quickly."
      />
      <CardSection />
      <section className="my-16 grid grid-cols-2 p-20 md:grid-cols-1 md:p-12 sm:p-8">
        <h4 className="mb-8 text-5xl font-medium text-[#262626]">
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
      <DevOpsMethodology />
      
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
}
