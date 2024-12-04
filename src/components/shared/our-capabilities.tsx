import React from "react";

import Image, { StaticImageData } from "next/image";

import { LucideIcon } from "lucide-react";

interface Detail {
  title: string;
  description: string;
  icon: string | StaticImageData | LucideIcon;
}

interface OurCapabilitiesProps {
  detailsData: Detail[];
}

const OurCapabilities: React.FC<OurCapabilitiesProps> = ({ detailsData }) => {
  return (
    <div className="mx-auto w-[90%] max-w-7xl py-4">
      <h2 className="mb-[1em] mt-4 w-full font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto sm:w-full sm:text-center">
        Our Capabilities
      </h2>

      <div className="mb-32 grid w-full max-w-7xl grid-cols-3 justify-center gap-4 2md:grid-cols-2 2md:items-center md:mb-16 md:flex-col sm:grid-cols-1">
        {detailsData.map((detail, index) => {
          let IconComponent: React.ReactNode;

          if (typeof detail.icon === "string") {
            // If the icon is a string (image URL)
            IconComponent = (
              <Image
                src={detail.icon}
                alt={detail.title}
                width={40}
                height={40}
              />
            );
          } else if ((detail.icon as StaticImageData).src) {
            // If the icon is StaticImageData
            IconComponent = (
              <Image
                src={detail.icon as StaticImageData}
                alt={detail.title}
                width={40}
                height={40}
              />
            );
          } else {
            // If the icon is a LucideIcon component
            const Icon = detail.icon as LucideIcon;
            IconComponent = <Icon size={40} />;
          }

          return (
            <div
              key={index}
              className="w-full max-w-[600px] rounded-xl border border-black p-6 sm:mx-auto"
            >
              {IconComponent}
              <h4 className="mb-[.6em] font-sans text-xl font-medium">
                {detail.title}
              </h4>
              <p className="font-sans text-sm text-[#808080]">
                {detail.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCapabilities;
