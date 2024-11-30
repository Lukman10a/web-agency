import React from "react";

import { InView } from "../ui/animated/in-view";

interface StatsCardProps {
  stats: string; // Statistic value (e.g., "100+")
  description: string; // Short description
  details: string; // Additional details or explanation
}

const StatsCard: React.FC<StatsCardProps> = ({
  stats,
  description,
  details,
}) => {
  return (
    <div className="mx-auto mb-16 w-[90%] max-w-[1300px] rounded-2xl border border-black p-8 sm:px-2">
      <div className="mx-auto flex w-[90%] gap-48 text-xl lg:gap-24 2md:text-xl md:flex-col md:gap-8 md:text-lg">
        <div className="w-[40%] overflow-hidden md:w-full md:border-b md:pb-4">
          <InView
            variants={{
              hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="mb-[.5em] w-full font-sora text-4xl font-medium 2md:w-full md:mx-auto md:mb-[.3em] sm:w-full">
              {stats}
            </h2>
            <p className="text-[#808080] md:mx-auto">{description}</p>
          </InView>
        </div>

        <div className="w-[60%] md:w-full">
          <InView
            variants={{
              hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <p className="text-[#808080] md:mx-auto">{details}</p>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
