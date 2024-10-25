import ImagesReveal from "@/components/ui/animated/image-reveal";
import OurValues from "@/components/shared/our-values";
import React, { Fragment } from "react";
import ArrowIcon from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <Fragment>
      <section className="">
        <section className="absolute">
          <div className="p-16 text-center flex flex-col items-center gap-4 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12s">
            <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up">
              <span className="block">Behind the </span>
              <span className="block">clouds</span>
            </h1>
            <p className="px-36 font-medium text-xl animate-fade-in-up delay-200 font-sans">
              We make sure you receive a tailor-made & cost-efficient cloud
              environment that is secure, scalable, easy to operate, and
              built-to-last
            </p>
            <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
              <span>EXPLORE</span>
              <ArrowIcon />
            </Button>
          </div>
        </section>
        <ImagesReveal />
      </section>
      <OurValues />
    </Fragment>
  );
};

export default AboutUs;
