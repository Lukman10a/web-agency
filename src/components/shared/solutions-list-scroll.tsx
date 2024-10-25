import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import securityImg from "/public/assets/securityImg.png";
import Image from "next/image";

const content = [
  {
    title: "Migrate my existing solution to the cloud",
    description:
      "As an experienced cloud partner, we prepare the target infrastructure, make the cloud adoption process smooth, less risky and help you make your services cloud-ready before you hop on.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Migrate my existing solution to the cloud
      </div>
    ),
  },
  {
    title: "Optimize my current cloud infrastructure",
    description:
      "Many cloud users face technical or economical challenges. We help you reduce excessive costs, unexpected downtimes, scaling problems or bumpy process when releasing new features.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={securityImg}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Kickstart my new cloud project",
    description:
      "In early stages you work with limited resources to make the MVP fly. Focus on your core business and our experienced crew will manage the cloud super-efficiently, as it plays a big part in your success.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
