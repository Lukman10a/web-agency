import React, { Fragment } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ArrowIcon from "./icons/arrow";
import { PartnersSlider } from "./shared/partners-slider";
import WaveReveal from "./ui/animated/wave-reveal";

const Hero = () => {
  return (
    <Fragment>
      <header className="w-11/12 bg-[url('/assets/dot-bg.png')] bg-darkblue-950 bg-cover rounded-xl max-w-7xl md:px-4 px-10 py-28 mx-auto md:w-full md:rounded-none">
        <>
          <div className="text-center">
            <h1 className="tracking-tight font-sora font-extrabold text-white md:text-3xl text-6xl">
              <WaveReveal
                mode="word"
                className="text-foreground overflow-hidden"
                text="SECURE YOUR CLOUD,"
              />
              <WaveReveal
                mode="word"
                className="overflow-hidden"
                text="PROTECT YOUR BUSINESS"
              />
            </h1>
            <p className="mt-3 font-mono text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We provide expert consulting services to help businesses achieve
              secure, efficient, and scalable cloud environments. From cloud
              migration to security audits, we&lsquo;ve got you covered.
            </p>
            <div className="sm:mt-5 font-mono mt-8 flex justify-center items-center  md:flex-wrap gap-4">
              <Button
                asChild
                className="w-fit md:w-full border border-black  flex items-center justify-center px-8 py-3  text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              >
                <Link href="#">
                  OUR SERVICES <ArrowIcon />
                </Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-fit md:w-full px-8 py-3 rounded-full text-base font-medium text-white md:py-4 md:text-lg md:px-10"
              >
                <Link href="#" className="flex items-center justify-center">
                  GET A FREE CONSULTATION <ArrowIcon />
                </Link>
              </Button>
            </div>
          </div>
        </>
      </header>
      <div className="my-7 max-w-7xl mx-auto overflow-hidden">
        <PartnersSlider />
      </div>
    </Fragment>
  );
};

export default Hero;
