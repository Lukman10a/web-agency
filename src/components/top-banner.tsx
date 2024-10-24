import React from "react";
import Arrow from "./icons/arrow";

const TopBanner = () => {
  return (
    <div className="bg-[#081348] p-3 text-center font-mono">
      <p className="flex gap-3 items-center justify-center  md:flex-wrap md:text-sm">
        <span className="text-white">
          Need help with cloud or security solutions?
        </span>{" "}
        <span className="text-orange-650 flex gap-2 items-center">
          Chat with us now <Arrow fill="#FF9557" />
        </span>
      </p>
    </div>
  );
};

export default TopBanner;
