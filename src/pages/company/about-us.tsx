import React, { Fragment } from "react";

import Image from "next/image";

import animatedCloud from "/public/assets/animated-cloud.gif";

import TeamSection from "@/components/Cloud";
import ArrowIcon from "@/components/icons/arrow";
import ContactSection from "@/components/lets-talk";
import Mission from "@/components/our-mission";
import OurValuesSection from "@/components/our-values";
// import OurValues from "@/components/shared/our-values";
import AnimatedStatsBanner from "@/components/shared/stats-banner";
import ImagesReveal from "@/components/ui/animated/image-reveal";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/what-client";

const cards = [
  {
    src: "/assets/3d-tech-1.png",
    angle: "-15deg",
  },
  {
    src: "/assets/database.png",
    angle: "0deg",
  },
  {
    src: "/assets/3d-tech-3.png",
    angle: "15deg",
  },
];

const AboutUs = () => {
  return (
    <Fragment>
      <header className="flex items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12 md:flex-col">
        <div className="flex-[3] space-y-5">
          <h1 className="animate-fade-in-up font-sora text-6xl font-extrabold md:text-4xl">
            <span className="block md:inline-block">Behind the </span>{" "}
            <span className="block md:inline-block">clouds</span>
          </h1>
          <p className="animate-fade-in-up text-xl delay-200">
            We make sure you receive a tailor-made & cost-efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last.
          </p>
          <Button className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </div>
        <div className="flex-[2] overflow-hidden rounded-lg md:hidden">
          <video autoPlay loop={true} muted className="h-full w-full">
            <source src="/assets/animated-cloud.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          src={animatedCloud}
          alt="animated-hero"
          unoptimized
          className="hidden flex-1 animate-fade-in-up rounded-lg delay-500 md:block"
        />
      </header>
      <AnimatedStatsBanner />
      <ImagesReveal cards={cards} />
      <Mission />
      <OurValuesSection />
      {/* <OurValues /> */}
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </Fragment>
  );
};

export default AboutUs;
