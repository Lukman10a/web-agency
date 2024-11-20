import Image from "next/image";
import React from "react";

const DevOpsMethodology: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Teverse Cloud Engage, <br />
            <span className="text-gray-800">our DevOps methodology</span>
        </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Get pay-as-you-go DevOps support for ad-hoc tasks and engagements.
            Delegate modifications and troubleshooting to our team of DevOps
            experts just by opening a request.
          </p>
      <div className="flex justify-between items-start h-full mt-4">
        {/* Left Section */}
        <div className="">
          <p className="border rounded-full px-4 py-1 inline text-xs">YOUR TEAM</p>
          <div className="mt-4">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Every DevOps team <span className="block sm:inline">consists of</span>
            </h3>
            <ul className="list-decimal list-inside text-xl text-gray-700 space-y-2">
              <li>Cloud Solutions Architect (CSA)</li>
              <li>2-4 DevOps Engineers (DOE)</li>
              <li>1 Project Manager (PM)</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#FFF9F7] rounded-lg p-6 hover:shadow-md h-full w-1/3">
          <div className="flex items-center mb-4">
            <Image
              src="/assets/recognize.png" 
              alt="Recognize Logo"
              className="mr-2"
              width={200}
              height={100}
            />
          </div>
          <blockquote className="text-gray-700 mb-4">
            &quot;I feel like work done by Mission has been stellar, and I don&apos;t use
            that word lightly. Amazing project management, amazing
            documentation, amazing note-taking, amazing implementation—it&apos;s all
            been really, really good. And, as an engineer, I have a high bar for
            these things.&quot;
          </blockquote>
          <p className="text-sm text-gray-800 font-semibold">
            Peter Philips | CTO, Recognize
          </p>
          <a
            href="#"
            className="inline-block text-orange-500 font-medium mt-4"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevOpsMethodology;
