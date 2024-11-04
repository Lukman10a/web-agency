import React from "react";
import Arrow from "./icons/arrow";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const TopBanner = () => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "bg-[#081348] p-3 text-center font-mono",
        pathname !== "/" && "hidden"
      )}
    >
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
