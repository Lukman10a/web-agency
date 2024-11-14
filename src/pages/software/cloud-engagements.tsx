import CardSection from "@/components/card-section";
import NewHero from "@/components/shared/new-hero";
import WhatIsTeverse from "@/components/What-is-teverse";
import React from "react";

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

export default function CloudEngagements() {
  return (
    <div>
      <NewHero
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
    </div>
  );
}
