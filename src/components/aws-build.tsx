import React from "react";

import AwsBuildCard from "./shared/aws-build-card";
import { AnimatedGroup } from "./ui/animated/animated-groups";

type Card = {
  title: string;
  description: string;
  icon: string; // Assuming the icon is a string representing a path or URL
};

type AwsBuildProps = {
  cards: Card[];
  tag: string;
  title: string;
  subtitle: string;
};

const AwsBuild: React.FC<AwsBuildProps> = ({ cards, tag, title, subtitle }) => {
  return (
    <section className="mx-auto mb-24 w-[85%] max-w-[1200px]">
      <div className="mb-[1.5em] space-y-[.5em]">
        <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 font-sora text-xs text-[#808080] 2md:text-[10px]">
          {tag}
        </span>
        <h3 className="mb-[.5em] mt-4 w-[90%] font-sora text-3xl font-medium 2md:w-full md:mx-auto md:mb-[.4em] md:text-2xl sm:w-full">
          {title}
        </h3>
        <p className="text-[#808080] lg:text-[14px] md:mx-auto">{subtitle}</p>
      </div>
      <AnimatedGroup
        className="grid w-full grid-cols-2 gap-6 2md:gap-4 md:grid-cols-1"
        viewport={{
          once: false, // Animation repeats each time
          amount: 0.5, // Trigger when 50% visible
          margin: "10px", // Start animation 100px before entering viewport
        }}
       
        preset="scale"
      >
        {cards.map((card, index) => (
          <AwsBuildCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.icon}
            altText="awsBuild card image"
          />
        ))}
      </AnimatedGroup>
    </section>
  );
};

export default AwsBuild;
