import React, { Fragment } from "react";
import ArrowIcon from "@/components/icons/arrow";
import animatedCloud from "../../public/assets/animated-cloud.gif";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Mission from "@/components/our-mission";
import ImagesReveal from "@/components/ui/animated/image-reveal";
import OurValues from "@/components/shared/our-values";
import AnimatedStatsBanner from "@/components/shared/stats-banner";

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
      <section className="flex md:flex-col items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <div className="flex-[3] space-y-5">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up md:text-4xl">
            <span className="block md:inline-block">Behind the </span>{" "}
            <span className="block md:inline-block">clouds</span>
          </h1>
          <p className="text-xl animate-fade-in-up delay-200 font-mono">
            We make sure you receive a tailor-made & cost-efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last
          </p>
          <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </div>
        <div className="flex-[2] rounded-lg overflow-hidden md:hidden">
          <video autoPlay loop={true} muted className="h-full w-full ">
            <source src="/assets/animated-cloud.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          src={animatedCloud}
          alt="animated-hero"
          className="animate-fade-in-up delay-500 flex-1 rounded-lg hidden md:block"
        />
      </section>

      <ImagesReveal />
      <Mission />
      <AnimatedStatsBanner />
      <ImagesReveal cards={cards} />
      <OurValues />
    </Fragment>
  );
};

export default AboutUs;
