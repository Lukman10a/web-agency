import React from "react";

import Image from "next/image";

import image from "/public/assets/team.webp";
import icon from "/public/svg/recognize.svg";

import PartnersCard from "./shared/partners-card";

const DevOpsMethodology: React.FC = () => {
  return (
    <section className="mx-auto mb-24 w-[90%] max-w-[1200px]">
      <div className="mb-24">
        <h2 className="mb-8 font-sans text-3xl sm:text-2xl">
          Terverse Cloud Engage, our DevOps methodology
        </h2>
        <p className="text-2xl leading-relaxed sm:text-xl">
          Get pay-as-you-go DevOps support for ad-hoc tasks and engagements.
          Delegate modifications and troubleshooting to our team of DevOps
          experts just by opening a request.
        </p>
      </div>

      <div className="flex gap-24 xl:gap-16 2md:gap-8 md:flex-col md:gap-4">
        <div className="w-[40%] md:w-full">
          <Image
            src={image}
            alt="Companies icon"
            className="mx-auto mb-12 w-full max-w-[400px]"
            width={500}
            height={500}
          />

          <div>
            <p className="mb-4 self-start rounded-full bg-transparent font-bold tracking-wide md:text-sm">
              YOUR TEAM
            </p>
            <p className="mb-12 font-sora text-2xl font-bold">
              Every DevOps team consists of:
            </p>

            <ul className="ml-6 list-disc">
              <li>
                <p className="mb-4 text-2xl lg:text-xl">
                  1 Cloud Solutions Architect (CSA)
                </p>
              </li>
              <li>
                <p className="mb-4 text-2xl lg:text-xl">
                  2-4 DevOps Engineers (DOE)
                </p>
              </li>
              <li>
                <p className="mb-4 text-2xl lg:text-xl">
                  1 Project Manager (PM)
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[60%] md:w-full">
          <PartnersCard
            iconSrc={icon}
            buttonText="Read Full Story"
            buttonLink="#"
            quote="“The collaboration with Mission has resulted in tremendous benefits
            to our bottom line. Mission also goes the whole nine yards to
            provide end-to-end support and best practice recommendations. With
            Mission supporting our engineers, our service is more reliable than
            it's ever been. I wholeheartedly recommend Mission.”"
            authorName="John Kang"
            authorRole=" CHIEF OPERATING OFFICER AT ODK MEDIA"
          />
        </div>
      </div>
    </section>
  );
};

export default DevOpsMethodology;
