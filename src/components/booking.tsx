import React from "react";
import image from "../../public/assets/cardimage1.png";
import Image, { StaticImageData } from "next/image";
import ArrowIcon from "./icons/arrow";
import Link from "next/link";
import { Button } from "./shared/button";

const Booking = () => {
  return (
    <section>
      <div className="px-[2em] py-[3em] sm:py-[1em] ">
        <div className="flex sm:flex-col gap-14 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em]">
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
      <div className="border-y sm:border-x border-[#8080809c] w-[1100px] max-w-[90%] mx-auto  px-[2em] py-[1.2em] flex sm:flex-col justify-around items-center gap-3 sm:gap-5 mb-2">
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
      <div className="bg-orange-650 py-16">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-3xl  font-bold text-gray-900">
            We are certified professionals
          </h2>
          <p className="text-lg md:text-sm text-gray-100 mt-4 w-[90%] mx-auto">
            Your security is our priority. We hold top industry certifications
            including
            <br /> ISO, AWS, CISSP, and more.
          </p>
        </div>

        {/* Certifications Badges */}
        <div className="flex md:flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-6">
          {/* First Row of Badges */}
          <div className="flex space-x-6">
            <img
              src="/path-to-your-image/syspops-admin-badge.png"
              alt="AWS SysOps Administrator Badge"
              className="w-32 h-32"
            />
            <img
              src="/path-to-your-image/security-badge.png"
              alt="AWS Security Badge"
              className="w-32 h-32"
            />
            <img
              src="/path-to-your-image/solutions-architect-badge.png"
              alt="AWS Solutions Architect Badge"
              className="w-32 h-32"
            />
          </div>

          {/* Second Row of Badges */}
          <div className="flex space-x-6">
            <img
              src="/path-to-your-image/cloud-practitioner-badge.png"
              alt="AWS Cloud Practitioner Badge"
              className="w-32 h-32"
            />
            <img
              src="/path-to-your-image/devops-engineer-badge.png"
              alt="AWS DevOps Engineer Badge"
              className="w-32 h-32"
            />
            <img
              src="/path-to-your-image/data-analytics-badge.png"
              alt="AWS Data Analytics Badge"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
