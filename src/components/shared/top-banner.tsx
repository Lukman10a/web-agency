import React from "react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Arrow from "../icons/arrow";

const TopBanner = () => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "bg-[#081348] p-3 text-center font-mono",
        pathname !== "/" && "hidden",
      )}
    >
      <p className="flex items-center justify-center gap-3 md:flex-wrap md:text-sm">
        <span className="text-white">
          Need help with cloud or security solutions?
        </span>{" "}
        <span className="flex items-center gap-2 text-orange-650">
          Chat with us now <Arrow fill="#FF9557" />
        </span>
      </p>
    </div>
  );
};

export default TopBanner;
