import React from "react";

import Image, { StaticImageData } from "next/image";

interface Detail {
  title: string;
  description: string;
  icon: string | StaticImageData;
}

interface OurCapabilitiesProps {
  detailsData: Detail[];
}

const OurCapabilities: React.FC<OurCapabilitiesProps> = ({ detailsData }) => {
  return (
    <div className="w-[90%] max-w-[1200px] mx-auto py-4">
      <h2 className="mb-[1em] mt-4 w-full font-sora text-3xl font-medium 2md:text-2xl 2md:w-full md:mx-auto sm:w-full sm:text-center">
        Our Capabilities
      </h2>

      <div className=" mb-32 grid grid-cols-3 2md:grid-cols-2 sm:grid-cols-1 w-full max-w-[1200px]  justify-center gap-4 2md:items-center md:mb-16 md:flex-col">
        {detailsData.map((detail, index) => (
          <div
            key={index}
            className="w-full max-w-[600px] rounded-xl p-6 border border-black sm:mx-auto"
          >
            <Image
              src={detail.icon}
              alt="image"
              className="w-10 mb-4"
              width={500}
              height={500}
            />
            <h4 className="mb-[.6em] font-sans text-xl font-medium">
              {detail.title}
            </h4>

            <p className="font-sans text-sm text-[#808080]">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCapabilities;
