import React from "react";

import Image from "next/image";

const ProfessionalServices: React.FC = () => {
  return (
    <section className="flex sm:flex-col items-center py-12 max-w-7xl">
      {/* Image Placeholder */}
      <div className="w-1/2 sm:w-full sm:px-4 flex items-center mb-0 justify-end md:justify-center px-2">
        <Image
          src="/assets/checkers.png"
          height={600}
          width={500}
          alt="checkers image"
        />
      </div>

      {/* Text Content */}
      <div className=" w-5/12 sm:w-full text-left pl-12 sm:px-4">
        {/* Badge */}
        <div className="text-xs text-gray-500 tracking-wide px-3 py-1 sm:mt-5 border border-gray-300 rounded-full inline-block mb-4">
          PROFESSIONAL SERVICES
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-xl md:text-xl font-medium text-gray-800 mb-4">
          Find the Expertise You Need{" "}
          <span className="block sm:inline"> for Your AWS Cloud </span>{" "}
          Initiatives.
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 sm:text-sm">
          Our AWS-certified engineers can guide and lead your development on the
          cloud. We’ll help you identify the tools and AWS services you need
          while implementing robust, scalable cloud-native solutions.
        </p>
      </div>
    </section>
  );
};

export default ProfessionalServices;
