import React from "react";
import Image from "next/image";
import Link from "next/link";


const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-[#FFF5F5] mx-4 sm:py-4 py-16 space-y-20 rounded-3xl font-sans">
      {/* First Section */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 md:grid-cols-1 md:mx-4 sm:gap-4 max-w-6xl sm:max-w-full mx-auto">
        {/* Image Placeholder for Left Card */}
        <div className="flex justify-center items-center sm:mx-4 bg-white rounded-lg order-2 md:order-1 ">
          <Image src="/assets/placeholder.png" alt="AI Solutions" width={150} height={250} />
        </div>

        {/* Left Card */}
        <div className="flex flex-col rounded-lg p-6 lg:p-8 order-1 justify-center sm:order-2 text-left text-neutral-500 leading-2">
          <h2 className="text-3xl sm:text-xl font-semibold text-neutral-900 mb-4">
            Validated expertise <span className="block sm:inline"> for reliable AI applications </span>
          </h2>
          <p className="mb-4 leading-2 text-lg sm:text-sm">
            Whether you&apos;re scaling your model for production or <span className="block sm:inline"> starting from scratch, we meet you where you are on</span> your journey and help you get your solution<span className="block sm:inline">  launched. 
            <Link href="#" className="underline ml-1">Learn more about our generative AI solutions.</Link></span>
          </p>
          <button className="mt-auto w-1/3 sm:w-full bg-orange-650 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600">
            See our Solutions
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 md:mx-4 gap-10 sm:gap-4 max-w-6xl mx-auto">
        {/* Image Placeholder for Right Card */}
        <div className="flex justify-center items-center sm:mx-4 bg-white rounded-lg order-1 sm:order-1">
          <Image className="" src="/assets/placeholder.png" alt="Security Solutions" width={150} height={250} />
        </div>

        {/* Right Card */}
        <div className="flex flex-col rounded-lg p-6 lg:p-8 order-2 justify-center sm:order-2 text-left text-neutral-500 leading-2">
          <h2 className="text-3xl sm:text-xl font-semibold text-neutral-900 mb-2">
            Harden security, manage <span className="block sm:inline"> risks, handle incidents </span>
          </h2>
          <p className="text-lg sm:text-sm mb-2 font-medium">
            Our partner for your security
          </p>
          <Image src="/assets/crowdstrike.png" width={150} height={150} alt="crowd strike" />
          <p className="mb-4 leading-2 text-lg sm:text-sm">
            With Mission Cloud One and CrowdStrike Falcon <span className="block sm:inline"> Complete, we handle the most common needs of</span>managing an AWS environment, including security.
          </p>
          <button className="mt-auto w-1/3 sm:w-full bg-orange-650 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600">
            See our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
