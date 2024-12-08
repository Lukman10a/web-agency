import React from "react";

import BookDemoSection from "@/components/book-demo";
import ReusableComponent from "@/components/control-features";
import InterpretDataSection from "@/components/data-section";
import SoftwareFAQ from "@/components/software-faq";
import TeverseControlHero from "@/components/teverse-control-hero";

interface ReusableComponentProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  showButton?: boolean;
  reverse?: boolean;
  starsAnimation?: boolean;
  additionalImage?: string; // Optional for additional image
  additionalImagePosition?: {
    bottom: number;
    left: number;
    top: number;
    right: number;
  }; // Optional for position
}

const sections: ReusableComponentProps[] = [
  {
    image: "/assets/score.webp",
    additionalImage:
      "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Stars.svg", // Pass the animated image
    additionalImagePosition: { bottom: -20, left: -50, top: 0, right: 0 }, // Position for the animated image
    title: "Mission Cloud Score",
    description:
      "Improve your environment by measuring your alignment to best practices.",
    buttonText: "Learn More",
    showButton: true,
    reverse: true,
    starsAnimation: true,
  },
  {
    image: "/assets/recommendation.webp",
    additionalImage:
      "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Tablet.svg", // Different animated image
    additionalImagePosition: { bottom: -20, left: 400, top: 30, right: 0 }, // Custom position
    title: "Recommendations",
    description:
      "Identify opportunities to improve your environment with recommendations that are tailored to your specific business goals.",
    buttonText: "Discover Now",
    showButton: false,
    reverse: false,
    starsAnimation: true,
  },
  {
    image: "/assets/resources.webp",
    additionalImage:
      "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Portfolio.svg", // Another custom animated image
    additionalImagePosition: { bottom: -20, left: -50, top: 0, right: 0 },
    title: "Resources",
    description:
      "Monitor your most critical AWS resources in a single view. Evaluate resource-specific recommendations and monitor any resource-specific alerts.",
    buttonText: "Discover Now",
    showButton: false,
    reverse: true,
    starsAnimation: true,
  },
  {
    image: "https://www.missioncloud.com/hubfs/Support%20(1).svg",
    additionalImage:
      "https://www.missioncloud.com/hubfs/2024_illustrations/Illustrations_Chat.svg",
    additionalImagePosition: { bottom: -20, left: 400, top: 30, right: 0 },
    title: "Supports ticketing and chats",
    description:
      "Access real-time support for technical troubleshooting with our CloudOps team.",
    buttonText: "Discover Now",
    showButton: false,
    reverse: false,
    starsAnimation: true,
  },
];

const FeatureList: React.FC<{ sections: ReusableComponentProps[] }> = ({
  sections,
}) => (
  <div>
    {sections.map((section, index) => (
      <ReusableComponent key={index} {...section} />
    ))}
  </div>
);

const TeverseControl = () => {
  return (
    <main>
      <TeverseControlHero />
      <InterpretDataSection />
      <section className="my-4 space-y-6 bg-[#FFF4EE] px-20 py-10 text-left text-2xl font-medium sm:mx-5 sm:text-lg">
        <div className="space-y-4">
          <h2 className="mb-8 inline rounded-lg border border-black p-1 text-left font-semibold">
            Features
          </h2>
          <p>Visualize, Collaborate, Learn, Act</p>
          <p>
            For every insight, alert, or data point we visualize, you&apos;ll
            have access to an expert to help you understand what it means, why
            it matters, and how to act on it.
          </p>
        </div>
        <FeatureList sections={sections} />
      </section>
      <SoftwareFAQ />
      <BookDemoSection />
    </main>
  );
};

export default TeverseControl;
