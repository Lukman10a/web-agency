import React from "react";

import Image from "next/image";

const GetInTouchSection: React.FC = () => {
  return (
    <section className="flex max-w-7xl items-center py-12 sm:flex-col">
      {/* Image Placeholder */}
      <div className="mb-0 flex w-1/2 items-center justify-end px-2 md:justify-center sm:w-full sm:px-4">
        <Image
          src="/assets/teverse-control2.png"
          height={600}
          width={500}
          alt="checkers image"
        />
      </div>

      {/* Text Content */}
      <div className="w-5/12 pl-12 text-left sm:w-full sm:px-4">
        {/* Badge */}
        <div className="mb-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-xs tracking-wide text-gray-500 sm:mt-5">
          GET IN TOUCH
        </div>

        {/* Title */}
        <h2 className="mb-4 text-4xl font-medium text-gray-800 md:text-xl sm:text-xl">
          Strengthen Your Security{" "}
          <span className="block sm:inline">Posture.</span>
        </h2>

        {/* Subtitle */}
        <p className="mb-6 text-gray-600 sm:text-sm">
          Connect with our security experts to learn how Teverse Cloud Secure
          can harden your AWS environment.
        </p>

        {/* Button */}
        <button className="rounded-full bg-[#FF9557] px-6 py-3 font-medium text-white transition duration-300 hover:bg-orange-600">
          schedule a call
        </button>
      </div>
    </section>
  );
};

export default GetInTouchSection;
