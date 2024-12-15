import React from "react";

import Image from "next/image";

import CTAButton from "./shared/cta-button";

const AwsServicesHero: React.FC = () => {
  return (
    <header className="flex justify-center bg-main-gradient px-4 py-14 sm:flex-col">
      <div className="flex w-full max-w-7xl items-center justify-between gap-10 space-y-8 px-10 md:flex-col md:flex-wrap md:items-start">
        <div className="flex-1 space-y-6 text-left">
          <p className="inline-block rounded-full border border-gray-300 bg-white px-3 py-1 text-xs tracking-wide text-gray-500">
            AWS PREMIER SERVICES & SOFTWARE PARTNER
          </p>

          <h1 className="font-sora text-5xl font-medium leading-tight text-gray-800 md:text-2xl">
            The Expertise You Need for Your AWS Cloud Initiatives
          </h1>

          <p className="text-gray-600 sm:text-sm">
            We offer a comprehensive range of services for every challenge
            companies face on AWS. Our team of AWS-certified experts are ready
            to help you on your next project, whether it’s a migrating,
            managing, optimizing, or transforming a concept into a reality.
          </p>

          <div className="mx-auto flex justify-start gap-4 sm:flex-wrap">
            <CTAButton href={"#"} size="sm">
              Managed Services
            </CTAButton>
            <CTAButton
              href="/services/professional-services text-sm"
              size="sm"
              variant="outline"
            >
              Professional Services
            </CTAButton>
          </div>
        </div>

        {/* Right Placeholder for Image or Other Content */}
        <div className="flex flex-1 items-center justify-center sm:w-full">
          <Image
            src="/assets/cloud-foundation.png"
            width={700}
            height={700}
            alt="cloud"
          />
        </div>
      </div>
    </header>
  );
};

export default AwsServicesHero;
