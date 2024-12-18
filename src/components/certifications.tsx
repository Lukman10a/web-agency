import React from "react";

import Image from "next/image";

// import Link from "next/link";
import { cn } from "@/lib/utils";

import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import data from "../../public/assets/data.png";
import devops from "../../public/assets/devops.png";
import netlq_ima from "../../public/assets/netlq_ima.png";
import okta_admin from "../../public/assets/okta_admin.png";
import okta_certificate from "../../public/assets/okta_certificate.png";
import okta_consultant from "../../public/assets/okta_consultant.png";
import okta_developer from "../../public/assets/okta_developer.png";
import pingaccess from "../../public/assets/pingaccess.png";
import sailpoint_certificate from "../../public/assets/sailpoint_certificate.png";
import sailpoint_engineer from "../../public/assets/sailpoint_engineer.png";
// import saviynt_iga from "../../public/assets/saviynt_iga.webp";
import security from "../../public/assets/security.png";
import star from "../../public/assets/starfour.png";
import sysops from "../../public/assets/sysops.png";
// import ArrowIcon from "./icons/arrow";
import { AnimatedGroup } from "./ui/animated/animated-groups";
import { InView } from "./ui/animated/in-view";

// import { Button } from "./ui/button";

const SecurityCertifications: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="relative mx-auto flex flex-col items-center gap-10 bg-darkblue-900 px-10 py-24 text-center text-white md:flex-wrap">
        <div className="mb-8 space-y-4 overflow-hidden">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="font-sora text-4xl font-bold md:text-3xl">
              We are certified professionals
            </h2>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="mx-auto mt-4 font-sans text-lg md:text-sm">
              Your security is our priority. We hold top industry certifications
              including ISO, AWS, CISSP, and more.
            </p>
          </InView>
        </div>

        {/* Certifications Badges */}
        <div className="mx-auto flex items-center justify-center gap-12 px-5 lg:space-y-0 2md:flex-col md:gap-8">
          <AnimatedGroup
            // className="grid grid-cols-6 place-items-center gap-5 md:grid-cols-3"
            className="flex flex-wrap justify-center gap-16"
            viewport={{
              once: false,
              amount: 0.5,
              margin: "10px",
            }}
            preset="scale"
          >
            <Image
              width={500}
              height={500}
              src={sysops}
              alt={"Sysops  Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={devops}
              alt={"Devops  Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={cloud}
              alt={"Cloud Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={data}
              alt={"Data Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={security}
              alt={"Security Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={archi}
              alt={"Archi Badge"}
              className="w-32 md:size-24"
            />
            <Image
              width={500}
              height={500}
              src={okta_certificate}
              alt={"Okta Certificate Badge"}
              className="w-32 md:size-24"
            />

            <Image
              width={500}
              height={500}
              src={okta_admin}
              alt="AWS Security Badge"
              className="w-32 md:h-24 md:w-24"
            />
            <Image
              width={500}
              height={500}
              src={okta_developer}
              alt="Okta Developer Badge"
              className="w-32 md:h-24 md:w-24"
            />
            <Image
              width={500}
              height={500}
              src={okta_consultant}
              alt="AWS Solutions Architect Badge"
              className="w-32 md:h-24 md:w-24"
            />
            <Image
              width={500}
              height={500}
              src={sailpoint_certificate}
              alt="AWS DevOps Engineer Badge"
              className="h-32 w-32 md:h-24 md:w-24"
            />
            <Image
              width={500}
              height={500}
              src={sailpoint_engineer}
              alt="AWS Data Analytics Badge"
              className="w-32 md:h-24 md:w-24"
            />
            <Image
              width={500}
              height={500}
              src={pingaccess}
              alt="AWS Cloud Practitioner Badge"
              className="w-32 md:h-24 md:w-24"
            />
            {/* <Image
              width={500}
              height={500}
              src={saviynt_iga}
              alt="AWS Data Analytics Badge"
              className="w-32 md:h-24 md:w-24"
            /> */}
            <Image
              width={500}
              height={500}
              src={netlq_ima}
              alt="AWS Data Analytics Badge"
              className="w-32 md:h-24 md:w-24"
            />
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
};

export default SecurityCertifications;

// type StarPosition = {
//   left?: string;
//   right?: string;
//   top: string;
// };

export const StarBackground: React.FC = () => {
  const starPositions = [
    { className: "left-[15rem] top-12" },
    { className: "left-[15rem] top-24" },
    { className: "left-[15rem] top-36" },
    { className: "left-[18rem] top-12" },
    { className: "left-[18rem] top-24" },
    { className: "left-[21rem] top-12" },
    { className: "right-72 top-12" },
    { className: "right-[15rem] top-20" },
    { className: "right-[21rem] top-20" },
  ];

  return (
    <>
      {starPositions.map((pos, index) => (
        <span key={index} className={cn("absolute xl:invisible")}>
          <Image
            width={36}
            height={36}
            src={star}
            alt="star"
            className={cn("absolute h-9 w-9", pos.className)}
          />
        </span>
      ))}
    </>
  );
};
