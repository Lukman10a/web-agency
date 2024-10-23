import { ArrowRight } from "lucide-react";
import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-[#081348] p-3 text-center font-mono">
      <p className="flex gap-3 items-center justify-center">
        <span>Need help with cloud or security solutions?</span>{" "}
        <span className="text-[#FF9557] flex gap-2">
          Chat with us now <ArrowRight />
        </span>
      </p>
    </div>
  );
};

export default TopBanner;
