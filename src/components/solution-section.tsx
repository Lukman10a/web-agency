import React from "react";
import Image from "next/image";
import Link from "next/link";

const SolutionsSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl space-y-20 rounded-3xl bg-[#FFF5F5] py-16 font-sans md:mx-4 sm:py-4">
      {/* First Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:mx-4 md:grid-cols-1 sm:max-w-full sm:grid-cols-1 sm:gap-4">
        {/* Image Placeholder for Left Card */}
        <div className="order-2 flex items-center justify-center rounded-lg bg-white md:order-1 sm:mx-4">
          <Image
            src="/assets/placeholder.png"
            alt="AI Solutions"
            width={150}
            height={250}
          />
        </div>

        {/* Left Card */}
        <div className="leading-2 order-1 flex flex-col justify-center rounded-lg p-6 text-left text-neutral-500 lg:p-8 sm:order-2">
          <h2 className="mb-4 text-3xl font-semibold text-neutral-900 sm:text-xl">
            Validated expertise{" "}
            <span className="block sm:inline">
              {" "}
              for reliable AI applications{" "}
            </span>
          </h2>
          <p className="leading-2 mb-4 text-lg sm:text-sm">
            Whether you&apos;re scaling your model for production or{" "}
            <span className="block sm:inline">
              {" "}
              starting from scratch, we meet you where you are on
            </span>{" "}
            your journey and help you get your solution
            <span className="block sm:inline">
              {" "}
              launched.
              <Link href="#" className="ml-1 underline">
                Learn more about our generative AI solutions.
              </Link>
            </span>
          </p>
          <button className="mt-auto w-1/3 rounded-full bg-orange-650 px-4 py-2 font-medium text-white hover:bg-orange-600 sm:w-full">
            See our Solutions
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:mx-4 md:grid-cols-1 sm:grid-cols-1 sm:gap-4">
        {/* Image Placeholder for Right Card */}
        <div className="order-1 flex items-center justify-center rounded-lg bg-white sm:order-1 sm:mx-4">
          <Image
            className=""
            src="/assets/placeholder.png"
            alt="Security Solutions"
            width={150}
            height={250}
          />
        </div>

        {/* Right Card */}
        <div className="leading-2 order-2 flex flex-col justify-center rounded-lg p-6 text-left text-neutral-500 lg:p-8 sm:order-2">
          <h2 className="mb-2 text-3xl font-semibold text-neutral-900 sm:text-xl">
            Harden security, manage{" "}
            <span className="block sm:inline">risks, handle incidents </span>
          </h2>
          <p className="mb-2 text-lg font-medium sm:text-sm">
            Our partner for your security
          </p>
          <Image
            src="/assets/crowdstrike.png"
            width={150}
            height={150}
            alt="crowd strike"
          />
          <p className="leading-2 mb-4 text-lg sm:text-sm">
            With Mission Cloud One and CrowdStrike Falcon{" "}
            <span className="block sm:inline">
              {" "}
              Complete, we handle the most common needs of
            </span>
            managing an AWS environment, including security.
          </p>
          <button className="mt-auto w-1/3 rounded-full bg-orange-650 px-4 py-2 font-medium text-white hover:bg-orange-600 sm:w-full">
            See our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
