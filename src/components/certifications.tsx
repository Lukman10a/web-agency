import React from "react";

import Image from "next/image";

import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import data from "../../public/assets/data.png";
import devops from "../../public/assets/devops.png";
import security from "../../public/assets/security.png";
import star from "../../public/assets/starfour.png";
import sysops from "../../public/assets/sysops.png";
import { AnimatedGroup } from "./ui/animated/animated-groups";
import { InView } from "./ui/animated/in-view";

const SecurityCertifications: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="relative mx-auto w-[90%] max-w-[1400px] rounded-2xl bg-orange-650 py-24 sm:w-full sm:rounded-none">
        {/* Title */}
        {/*start design stars */}
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[15rem] top-12 h-9 w-9 xl:invisible"
          />
        </span>

        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[15rem] top-24 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[15rem] top-36 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[18rem] top-12 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[18rem] top-24 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute left-[21rem] top-12 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute right-72 top-12 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute right-[15rem] top-20 h-9 w-9 xl:invisible"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="absolute right-[21rem] top-20 h-9 w-9 xl:invisible"
          />
        </span>
        {/*end design stars */}
        <div className="mb-8 overflow-hidden text-center">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            // viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="font-sora text-4xl font-bold text-gray-900 md:text-3xl">
              We are certified professionals
            </h2>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="mx-auto mt-4 w-[90%] font-sans text-lg md:text-sm">
              Your security is our priority. We hold top industry certifications
              including
              <br /> ISO, AWS, CISSP, and more.
            </p>
          </InView>
        </div>

        {/* Certifications Badges */}
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-12 px-5 lg:space-y-0 2md:flex-col md:gap-8">
          {/* First Row of Badges */}
          <div className="flex gap-5">
            <AnimatedGroup
              className="flex gap-5"
              viewport={{
                once: false, // Animation repeats each time
                amount: 0.5, // Trigger when 50% visible
                margin: "10px", // Start animation 100px before entering viewport
              }}
              preset="scale"
            >
              <Image
                width={500}
                height={500}
                src={sysops}
                alt={"AWS SysOps Administrator Badge"}
                className="w-32 md:h-24 md:w-24"
              />

              <Image
                width={500}
                height={500}
                src={security}
                alt="AWS Security Badge"
                className="w-32 md:h-24 md:w-24"
              />
              <Image
                width={500}
                height={500}
                src={archi}
                alt="AWS Solutions Architect Badge"
                className="w-32 md:h-24 md:w-24"
              />
            </AnimatedGroup>
          </div>

          {/* Second Row of Badges */}
          <div className="flex gap-5">
            <AnimatedGroup
              className="flex gap-5"
              viewport={{
                once: false, // Animation repeats each time
                amount: 0.5, // Trigger when 50% visible
                margin: "10px", // Start animation 100px before entering viewport
              }}
              preset="scale"
            >
              <Image
                width={500}
                height={500}
                src={cloud}
                alt="AWS Cloud Practitioner Badge"
                className="w-32 md:h-24 md:w-24"
              />
              <Image
                width={500}
                height={500}
                src={devops}
                alt="AWS DevOps Engineer Badge"
                className="h-32 w-32 md:h-24 md:w-24"
              />
              <Image
                width={500}
                height={500}
                src={data}
                alt="AWS Data Analytics Badge"
                className="w-32 md:h-24 md:w-24"
              />
            </AnimatedGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCertifications;
