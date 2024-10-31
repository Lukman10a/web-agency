import React, { Fragment } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import ArrowIcon from "./icons/arrow";
import { PartnersSlider } from "./shared/partners-slider";
import WaveReveal from "./ui/animated/wave-reveal";
import FlickeringGrid from "./ui/flickering-grid";

const Hero = () => {
  return (
    <Fragment>
      <header className="relative isolate mx-auto w-11/12 max-w-7xl overflow-hidden rounded-xl bg-darkblue-950 bg-cover px-10 py-28 md:w-full md:rounded-none md:px-4">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.15}
          width={1400}
          height={800}
        />
        <>
          <div className="relative z-[1] text-center">
            <h1 className="font-sora text-6xl font-extrabold tracking-tight text-white md:text-3xl">
              <WaveReveal
                mode="word"
                className="overflow-hidden text-foreground"
                text="SECURE YOUR CLOUD,"
              />
              <WaveReveal
                mode="word"
                className="overflow-hidden"
                text="PROTECT YOUR BUSINESS"
              />
            </h1>
            <p className="mt-3 font-mono text-base text-gray-300 lg:mx-0 md:mt-5 md:text-xl sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg">
              We provide expert consulting services to help businesses achieve
              secure, efficient, and scalable cloud environments. From cloud
              migration to security audits, we&lsquo;ve got you covered.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 font-mono md:flex-wrap sm:mt-5">
              <Button
                asChild
                className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:w-full md:px-10 md:py-4 md:text-lg"
              >
                <Link href="#">
                  OUR SERVICES <ArrowIcon />
                </Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-fit rounded-full px-8 py-3 text-base font-medium text-white md:w-full md:px-10 md:py-4 md:text-lg"
              >
                <Link href="#" className="flex items-center justify-center">
                  GET A FREE CONSULTATION. <ArrowIcon />
                </Link>
              </Button>
            </div>
          </div>
        </>
      </header>
      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <PartnersSlider />
      </div>
    </Fragment>
  );
};

export default Hero;
