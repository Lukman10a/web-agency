import React from "react";

import Image from "next/image";

const DevOpsMethodology: React.FC = () => {
  return (
    <section className="mx-auto w-[90%] max-w-7xl bg-white py-10">
      <h2 className="mb-4 font-sora text-3xl font-medium text-gray-900 lg:w-[60%] md:mx-auto md:w-full md:text-center">
        Teverse Cloud Engage, our DevOps methodology
      </h2>
      <p className="mb-6 text-lg text-gray-600">
        Get pay-as-you-go DevOps support for ad-hoc tasks and engagements.
        Delegate modifications and troubleshooting to our team of DevOps experts
        just by opening a request.
      </p>
      <div className="mt-10 flex h-full items-start justify-between md:flex-col md:gap-8">
        {/* Left Section */}
        <div className="">
          <p className="inline rounded-full border px-4 py-1 text-xs">
            YOUR TEAM
          </p>
          <div className="mt-4">
            <h3 className="mb-4 text-3xl font-semibold text-gray-800">
              Every DevOps team <span className="sm:inline">consists of</span>
            </h3>
            <ul className="list-inside list-decimal space-y-2 text-xl text-gray-700">
              <li>Cloud Solutions Architect (CSA)</li>
              <li>2-4 DevOps Engineers (DOE)</li>
              <li>1 Project Manager (PM)</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-full w-1/3 rounded-lg bg-[#FFF9F7] p-6 hover:shadow-md md:w-full">
          <div className="mb-4 flex items-center">
            <Image
              src="/assets/recognize.png"
              alt="Recognize Logo"
              className="mr-2"
              width={200}
              height={100}
            />
          </div>
          <blockquote className="mb-4 text-gray-700">
            &quot;I feel like work done by Teverse has been stellar, and I
            don&apos;t use that word lightly. Amazing project management,
            amazing documentation, amazing note-taking, amazing implementation
            it&apos;s all been really, really good. And, as an engineer, I have
            a high bar for these things.&quot;
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">
            Peter Philips | CTO, Recognize
          </p>
          <a href="#" className="mt-4 inline-block font-medium text-orange-500">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevOpsMethodology;
