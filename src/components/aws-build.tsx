import React from "react";

import { motion } from "framer-motion";

import AwsBuildCard from "./shared/aws-build-card";
import { AnimatedGroup } from "./ui/animated/animated-groups";
import { HighlightedText } from "./ui/animated/highlight-text";

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
    <section className="mx-auto mb-24 w-[85%] max-w-7xl">
      <div className="mb-[1.5em] space-y-[.5em]">
        <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 font-sora text-xs text-[#808080] 2md:text-[10px]">
          {tag}
        </span>
        <motion.h3
          className="mb-[.5em] mt-4 w-[90%] font-sora text-3xl font-medium 2md:w-full md:mx-auto md:mb-[.4em] md:text-2xl sm:w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          // className="mb-4 text-4xl font-medium text-[#262626] sm:text-2xl"
        >
          <HighlightedText
            highlightColor="#faca4785"
            highlightHeight="40%"
            className=""
            highlightClassName="z-[-1]"
            delay={1.5}
          >
            {title}
          </HighlightedText>
          <span> for AWS Environments</span>
        </motion.h3>
        <p className="text-[#808080] lg:text-[14px] md:mx-auto">{subtitle}</p>
      </div>
      <AnimatedGroup
        className="grid w-full grid-cols-2 gap-6 2md:gap-4 md:grid-cols-1"
        viewport={{
          once: true,
          amount: 0.5,
          margin: "10px",
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
