import React from "react";

import Image from "next/image";

import vega from "/public/svg/vega.svg";

import { InView } from "./ui/animated/in-view";

const VegaCard = () => {
  return (
    <div className="mx-auto mb-24 flex w-[85%] max-w-[1200px] gap-6 overflow-hidden sm:mb-12 sm:flex-col">
      <div className="w-[40%] self-center sm:mx-auto sm:w-[60%]">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={vega}
            alt="vega"
            className="mb-4 inline-block w-[70%] self-center sm:w-full"
            width={500}
            height={500}
          />
        </InView>
      </div>
      <div className="w-[60%] sm:w-full">
        <InView
          variants={{
            hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="mb-[.5em] mt-4 w-full font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-[.3em] sm:w-full sm:text-xl">
            Cloud Optimization & Foundational Best Practices
          </h2>
          <p className="mb-[1.5em] text-[#808080] lg:text-[14px] md:mx-auto">
            We use the leading cloud management platform, Vega Cloud, to analyze
            your environment for cost savings opportunities. These tools give
            you greater visibility and control of costs, and we supercharge them
            by contextualizing their suggestions to your specific goals,
            situation, and needs.
          </p>
        </InView>
      </div>
    </div>
  );
};

export default VegaCard;
