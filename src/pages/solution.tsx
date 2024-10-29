import Image from "next/image";
import React, { Fragment } from "react";
import solutionHero from "../../public/assets/cloud-provider.gif";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/icons/arrow";
import { StickyScrollRevealDemo } from "@/components/shared/solutions-list-scroll";
import CloudPlatformSection from "@/components/page-two";
import LARABuildingBlocks from "@/components/BuildingBlocks";
import ContactSection from "@/components/lets-talk";
import Booking from "@/components/booking";

export default function Solution() {
  return (
    <Fragment>
      <header className="flex md:flex-col items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <div className="space-y-10 flex-[3] md:flex-1">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up">
            <span className="block">Migrate, Optimize,</span>
            <span className="block">Kickstart</span>
          </h1>
          <p className="font-mono text-xl animate-fade-in-up delay-200 ">
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
          <video autoPlay loop muted className="h-full w-full ">
            <source src="/assets/cloud-provider.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          src={solutionHero}
          alt="solution-hero"
          className="animate-fade-in-up delay-500 flex-1 rounded-lg hidden md:block"
        />
      </header>
      <StickyScrollRevealDemo />
      <Booking />
      <CloudPlatformSection />
      <LARABuildingBlocks />
      <ContactSection />
    </Fragment>
  );
}
