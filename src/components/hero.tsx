import React from "react";

import Image from "next/image";
import Link from "next/link";

import apache from "/public/svg/apache.svg";
import apachespark from "/public/svg/apachespark.svg";
import deepspeed from "/public/svg/deepspeed.svg";
// import aws from "/public/svg/aws-logo.svg";
// import azure from "/public/svg/azure.svg";
// import gcp from "/public/svg/gcp.svg";
import neptune from "/public/svg/neptune.svg";
import pytorch from "/public/svg/pytorch.svg";
// import sailpoint from "/public/svg/sailpoint.svg";
// import savyint from "/public/svg/savyint.svg";
import tableau from "/public/svg/tableau.svg";

import ArrowIcon from "./icons/arrow";
import { PartnersSlider } from "./shared/partners-slider";
import AnimatedBorderTrail from "./ui/animated/border-trail-simple";
import { InView } from "./ui/animated/in-view";
import { TextLoop } from "./ui/animated/text-loop";
import { Button } from "./ui/button";

const Hero = () => {
  const partners = [
    apache,
    apachespark,
    pytorch,
    tableau,
    neptune,
    deepspeed,
    // savyint,
    // sailpoint,
    // gcp,
    // azure,
    // aws,
  ];

  return (
    <header className="min-h-[60vh] overflow-hidden will-change-transform">
      <div className="bg-main-gradient px-4 py-14">
        <div className="relative isolate mx-auto flex w-11/12 max-w-7xl gap-8 overflow-hidden rounded-xl bg-cover lg:flex-col md:w-full md:px-4">
          <div className="relative z-[1] flex-1">
            <InView
              variants={{
                hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <h1 className="font-sora text-6xl font-extrabold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl">
                <span>Driving Innovation with Teverse:</span>{" "}
                <br className="" />
                <TextLoop preset="slide-up" interval={2.5}>
                  <span>Cloud Services,</span>
                  <span>Cybersecurity,</span>
                  <span>IDAM Expertise,</span>
                  <span>and AI Solutions</span>
                </TextLoop>
              </h1>
            </InView>

            <InView
              variants={{
                hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="mt-3 font-mono text-base lg:mx-0 md:mt-5 md:text-xl sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg">
                {/* We provide expert consulting services to help businesses achieve
                secure, efficient, and scalable cloud environments. From cloud
                migration to security audits, we&lsquo;ve got you covered. */}
                We make your cloud smarter, your access seamless, and your AI
                transformative. From effortless migrations to robust security
                audits, IDAM strategies, and cutting-edge AI solutions -we
                handle it all, so you can thrive.
              </p>
            </InView>

            <div className="mt-8 flex items-center gap-4 font-mono md:flex-wrap sm:mt-5">
              <AnimatedBorderTrail
                className="rounded-full bg-zinc-600 hover:bg-zinc-500 md:w-full"
                contentClassName="rounded-full bg-[#F5F6F7]"
                trailColor="white"
              >
                <Button
                  asChild
                  variant={"outline"}
                  className="rounded-full px-8 py-3 text-center text-lg font-medium md:w-full md:text-base"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    GET FREE CONSULTATION. <ArrowIcon />
                  </Link>
                </Button>
              </AnimatedBorderTrail>

              <Button
                asChild
                className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:w-full md:px-10 md:py-4 md:text-lg"
              >
                <Link href="/services">
                  OUR SERVICES <ArrowIcon />
                </Link>
              </Button>
            </div>
          </div>
          <InView
            variants={{
              hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex-1 overflow-hidden rounded-xl">
              <Image
                src={"/svg/hero-illustration-2.svg"}
                alt="hero-illustration"
                unoptimized
                height={500}
                width={500}
                className="h-full object-contain lg:h-auto lg:w-full"
              />
            </div>
          </InView>
        </div>
      </div>
      <div className="mx-auto overflow-hidden bg-white">
        <PartnersSlider images={partners} />
      </div>
    </header>
  );
};

export default Hero;
