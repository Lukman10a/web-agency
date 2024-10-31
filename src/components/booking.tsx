import React from "react";
import image from "../../public/assets/cardimage1.png";
import Image, { StaticImageData } from "next/image";
import ArrowIcon from "./icons/arrow";
import Link from "next/link";
import { Button } from "./ui/button";
import sysops from "../../public/assets/sysops.png";
import security from "../../public/assets/security.png";
import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import devops from "../../public/assets/devops.png";
import data from "../../public/assets/data.png";
import star from "../../public/assets/starfour.png";
import orangestar from "../../public/assets/orangestar.png";
import bigstar from "../../public/assets/Star.png";

import CloudJourney from "./cloud-journey";

const Booking = () => {
  return (
    <section>
      {/* Start of let's talk card */}
      <div className="px-[2em] py-[3em] sm:py-[1em] ">
        <div className="relative flex sm:flex-col gap-14 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em]">
          <div className=" w-1/2 sm:w-full  mb-0">
            <Image
              src={image}
              alt="Card image"
              className=" mr-4 w-full"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 sm:w-full self-center sm:self-auto">
            <span>
              <Image
                width={500}
                height={500}
                src={star}
                alt="star"
                className="w-12 h-12 xl:invisible absolute bottom-20 right-[15rem] "
              />
            </span>

            <span>
              <Image
                width={500}
                height={500}
                src={orangestar}
                alt="star"
                className="w-12 h-12 xl:invisible absolute bottom-24 right-[17rem]  "
              />
            </span>
            <h3 className="font-sora font-[600] text-[3rem] 2md:text-[2rem] mb-[.3em] h-10 flex gap-[.3em] justify-start items-center w-full">
              Let’s talk!
            </h3>

            <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1.5em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
              Quick intro to what we’re all about, answering questions and
              drafting a roadmap of your cloud journey. All within 30 minutes.
            </p>
            <Button
              asChild
              className="w-fit py-[1.6em] border border-black uppercase flex items-center justify-center   text-[.75rem] 2md:text-[.7rem] font-light rounded-full text-white bg-orange-600 hover:bg-orange-700">
              <Link href="#">
                BOOK A FREE CALL <ArrowIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* end of let's talk card */}

      {/* start of stats */}
      <div className="border-y sm:border-x border-[#8080809c] w-[1100px] max-w-[90%] mx-auto  px-[2em] py-[1.2em] flex sm:flex-col justify-around items-center gap-3 sm:gap-5 mb-16">
        {/* Stat Item 1 */}
        <div className="text-center flex items-center space-x-2">
          <p className="text-3xl font-sora font-semibold">100+</p>
          <div className="border-l border-gray-300 h-6"></div>
          <p className="text-gray-500 font-sans">Clusters</p>
        </div>

        {/* Stat Item 2 */}
        <div className="text-center  flex items-center space-x-2">
          <p className="text-3xl font-sora font-semibold">1000+</p>
          <div className="border-l border-gray-300 h-6"></div>
          <p className="text-gray-500 font-sans">Nodes</p>
        </div>

        {/* Stat Item 3 */}
        <div className="text-center  flex items-center space-x-2">
          <p className="text-3xl font-sora font-semibold">50+</p>
          <div className="border-l border-gray-300 h-6"></div>
          <p className="text-gray-500 font-sans">AWS Projects</p>
        </div>
      </div>
      {/* end of stats */}

      {/* start of certification */}
      <div className="bg-orange-650 py-16 relative">
        {/* Title */}
        {/*start design stars */}
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-12 left-[15rem] "
          />
        </span>

        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-24 left-[15rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-36 left-[15rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-12 left-[18rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-24 left-[18rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-12 left-[21rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-12 right-72"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-20 right-[15rem]"
          />
        </span>
        <span>
          <Image
            width={500}
            height={500}
            src={star}
            alt="star"
            className="w-9 h-9 xl:invisible absolute top-20 right-[21rem]"
          />
        </span>
        {/*end design stars */}
        <div className="text-center mb-8 ">
          <h2 className="text-4xl md:text-3xl font-sora font-bold text-gray-900">
            We are certified professionals
          </h2>

          <p className="font-sans text-lg md:text-sm mt-4 w-[90%] mx-auto">
            Your security is our priority. We hold top industry certifications
            including
            <br /> ISO, AWS, CISSP, and more.
          </p>
        </div>

        {/* Certifications Badges */}
        <div className="flex 2md:flex-col justify-center items-center gap-12 md:gap-8 lg:space-y-0 px-5 max-w-[1200px] mx-auto">
          {/* First Row of Badges */}
          <div className="flex gap-5">
            <Image
              width={500}
              height={500}
              src={sysops}
              alt="AWS SysOps Administrator Badge"
              className="w-32 md:w-24 md:h-24"
            />
            <Image
              width={500}
              height={500}
              src={security}
              alt="AWS Security Badge"
              className="w-32 md:w-24 md:h-24"
            />
            <Image
              width={500}
              height={500}
              src={archi}
              alt="AWS Solutions Architect Badge"
              className="w-32 md:w-24 md:h-24"
            />
          </div>

          {/* Second Row of Badges */}
          <div className="flex gap-5">
            <Image
              width={500}
              height={500}
              src={cloud}
              alt="AWS Cloud Practitioner Badge"
              className="w-32 md:w-24 md:h-24"
            />
            <Image
              width={500}
              height={500}
              src={devops}
              alt="AWS DevOps Engineer Badge"
              className="w-32 h-32 md:w-24 md:h-24"
            />
            <Image
              width={500}
              height={500}
              src={data}
              alt="AWS Data Analytics Badge"
              className="w-32 md:w-24 md:h-24"
            />
          </div>
        </div>
      </div>
      {/* end of certification */}

      <CloudJourney />

      {/* start of LARA card */}
      <div className="relative flex sm:flex-col gap-14 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[3em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em] bg-gradient-to-r from-[#0813481A] to-[#FF95571A] ">
        <div className=" w-1/2 sm:w-full  mb-0">
          <Image
            src={image}
            alt="Card image"
            className=" mr-4 w-full sm:mb-2"
            width={500}
            height={500}
          />
        </div>

        <div className="w-1/2 sm:w-full self-center sm:self-auto relative ">
          <h3 className="font-sora font-[600] text-[2.5rem] 2md:text-[1.7rem] mb-[1em] md:mb-[.4em] h-10 flex gap-[.3em] justify-start items-center w-full leading-tight">
            What the “hack” is LARA?!
          </h3>

          <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
            LARA is designed to help companies build an infrastructure for
            hosting their services quickly & reliably, according to AWS best
            practices and based on open source.
          </p>

          <p className="uppercase text-[1.2rem] font-semibold font-sora 2md:text-[.8rem]">
            Our Unique Cloud Native Platform
          </p>
        </div>
      </div>
      {/* end of LARA card */}
    </section>
  );
};

export default Booking;
