import React, { Fragment } from "react";
import { Button } from "./shared/button";
import Link from "next/link";
import ArrowIcon from "./icons/arrow";
import lightbox from "../../public/images/lightbox.svg";
import featherdev from "../../public/images/featherdev.svg";
import boltshift from "../../public/images/boltshift.svg";
import globalbank from "../../public/images/globalbank.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <Fragment>
      <header className="bg-darkblue-850  rounded-xl  max-w-7xl md:px-4 px-10 mx-10 py-28">
        <div className="text-center">
          <h1 className="tracking-tight font-extrabold text-white md:text-5xl text-6xl">
            <span className="block">SECURE YOUR CLOUD,</span>
            <span className="block">PROTECT YOUR BUSINESS</span>
          </h1>
          <p className="mt-3 font-mono text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            We provide expert consulting services to help businesses achieve
            secure, efficient, and scalable cloud environments. From cloud
            migration to security audits, we&lsquo;ve got you covered.
          </p>
          <div className="sm:mt-5 font-mono mt-8 flex justify-center items-center gap-4">
            <Button
              asChild
              className="w-fit border border-black  flex items-center justify-center px-8 py-3  text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
            >
              <Link href="#">
                OUR SERVICES <ArrowIcon />
              </Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="w-fit flex items-center justify-center px-8 py-3 rounded-full text-base font-medium text-white md:py-4 md:text-lg md:px-10"
            >
              <Link href="#">
                GET A FREE CONSULTATION <ArrowIcon />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex justify-center gap-12 flex-wrap">
        {[lightbox, featherdev, boltshift, globalbank].map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`Brand ${index}`}
            className="w-36"
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Hero;
