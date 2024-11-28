import React from "react";

import Link from "next/link";

const AwsServicesHero: React.FC = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#EAF8FF] to-[#FFF3E5] px-4 py-14 sm:flex-col">
      <div className="flex w-full max-w-5xl items-center justify-between space-y-8 sm:flex-col sm:flex-wrap sm:items-start">
        {/* Left Content */}
        <div className="order-1 max-w-md space-y-6 text-left sm:text-left">
          {/* Top Badge */}
          <p className="inline-block rounded-full border border-gray-300 bg-white px-3 py-1 text-xs tracking-wide text-gray-500">
            AWS PREMIER SERVICES & SOFTWARE PARTNER
          </p>

          {/* Title */}
          <h1 className="text-5xl font-medium leading-tight text-gray-800 sm:text-2xl">
            The Expertise You Need for Your AWS Cloud Initiatives
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 sm:text-sm">
            We offer a comprehensive range of services for every challenge
            companies face on AWS. Our team of AWS-certified experts are ready
            to help you on your next project, whether it’s a migrating,
            managing, optimizing, or transforming a concept into a reality.
          </p>

          {/* Buttons */}
          <div className="mx-auto flex justify-start gap-4 sm:flex-wrap">
            <button className="rounded-full bg-orange-650 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
              <Link href="#">Managed Services</Link>
            </button>
            <button className="rounded-full bg-orange-650 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
              <Link href="/services/professional-services">
                Professional Services
              </Link>
            </button>
          </div>
        </div>

        {/* Right Placeholder for Image or Other Content */}
        <div className="order-2 h-full min-h-36 w-1/3 rounded-xl bg-white shadow-md sm:h-24 sm:w-full"></div>
      </div>
    </div>
  );
};

export default AwsServicesHero;
