import React from "react";

import Image from "next/image";

const ProfessionalServices: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl items-center gap-10 px-10 py-12 md:flex-col">
      {/* Image Placeholder */}
      <div className="mb-0 flex w-1/2 items-center md:w-full md:justify-center">
        <Image
          src="/assets/checkers.png"
          height={600}
          width={500}
          alt="checkers image"
          className="w-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-5/12 text-left md:w-full">
        <div className="mb-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-xs tracking-wide text-gray-500 sm:mt-5">
          PROFESSIONAL SERVICES
        </div>

        <h2 className="mb-4 text-4xl font-medium text-gray-800 md:text-2xl">
          Find the Expertise You Need{" "}
          <span className="block md:inline"> for Your AWS Cloud </span>{" "}
          Initiatives.
        </h2>

        <p className="mb-6 text-gray-600 sm:text-sm">
          Our AWS-certified engineers can guide and lead your development on the
          cloud. We’ll help you identify the tools and AWS services you need
          while implementing robust, scalable cloud-native solutions.
        </p>
      </div>
    </section>
  );
};

export default ProfessionalServices;
