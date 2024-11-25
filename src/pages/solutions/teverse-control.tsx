import React from "react";

import BookDemoSection from "@/components/book-demo";
import InterpretDataSection from "@/components/data-section";
import SoftwareFAQ from "@/components/software-faq";
import TeverseControlHero from "@/components/teverse-control";
import ReusableComponent from "@/components/control-features";


const TeverseControl = () => {

  const sections = [
    {
      image: "/assets/dashboard.webp",
      title: "Mission Cloud Score",
      description:
        "Improve your environment by measuring your alignment to best practices.",
      buttonText: "Learn More",
      showButton: true,
      reverse: true,
      starsAnimation: true,
    },
    {
      image: "/assets/dashboard.webp",
      title: "Recommendations",
      description: "Identify opportunities to improve your environment with recommendations that are tailored to your specific business goals.",
      buttonText: "Discover Now",
      showButton: false,
      reverse: true,
      starsAnimation: false,
    },
    {
      image: "/assets/dashboard.webp",
      title: "Resources",
      description: "Monitor your most critical AWS resources in a single view. Evaluate resource-specific recommendations and monitor any resource-specific alerts.",
      buttonText: "Discover Now",
      showButton: false,
      reverse: true,
      starsAnimation: false,
    },
    {
      image: "/assets/dashboard.webp",
      title: "Support Ticketing and Chat",
      description: "IAccess real-time support for technical troubleshooting with our CloudOps team.",
      buttonText: "Discover Now",
      showButton: false,
      reverse: true,
      starsAnimation: false,
    },
  ];

  return (
    <main className="bg-main-gradient">
      <TeverseControlHero />
      <InterpretDataSection />
      <section className="font-medium text-left text-2xl space-y-6 py-10 mx-20">
        <h2 className=" font-semibold text-left border border-black rounded-lg p-1 inline mb-8">Features </h2>
        <p className=""> Visualize, Collaborate, Learn, Act </p>
        <p className=""> For every insight, alert, or data point we visualize, you’ll have access to an expert to help you understand what it means, why it matters, and how to act on it. </p>
      </section>
      <div>
        {sections.map((section, index) => (
          <ReusableComponent key={index} {...section} />
        ))}
      </div>
      <SoftwareFAQ />
      <BookDemoSection />
    </main>
  );
};

export default TeverseControl;
