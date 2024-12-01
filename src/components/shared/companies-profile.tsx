import React from "react";

import { InView } from "../ui/animated/in-view";
import CompaniesCard from "./companies-card";

interface CompaniesProfileProps {
  heading: string;
  paragraph: string;
  cards: {
    imageSrc: string;
    content: string;
    author: string;
  };
}

const CompaniesProfile: React.FC<CompaniesProfileProps> = ({
  heading,
  paragraph,
  cards,
}) => {
  return (
    <div className="mx-auto mb-24 w-[90%] max-w-[1300px] rounded-2xl bg-orange-100 py-16 sm:py-12">
      <div className="mx-auto flex w-[90%] gap-16 xl:gap-8 md:flex-col">
        <div className="w-[60%] self-center overflow-hidden 2md:w-[50%] md:w-full">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="mb-[.5em] mt-4 w-full font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-[.3em] sm:w-full sm:text-xl">
              {heading}
            </h2>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <p className="mb-[.7em] text-[#808080] lg:text-[14px] md:mx-auto">
              {paragraph}
            </p>
          </InView>
        </div>
        <div className="w-[40%] 2md:w-[50%] md:w-full">
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <CompaniesCard
              imageSrc={cards.imageSrc}
              content={cards.content}
              author={cards.author}
            />
          </InView>
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfile;
