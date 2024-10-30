import Image from "next/image";
import React, { Fragment } from "react";
import solutionHero from "../../public/assets/cloud-provider.gif";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/icons/arrow";
import { StickyScrollRevealDemo } from "@/components/shared/solutions-list-scroll";
import CloudPlatformSection from "@/components/page-two";
import LARABuildingBlocks from "@/components/building-blocks";
import ContactSection from "@/components/lets-talk";
import Booking from "@/components/booking";

export default function Solution() {
  return (
    <Fragment>
      <header className="flex items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12 md:flex-col">
        <div className="flex-[3] space-y-10 md:flex-1">
          <h1 className="animate-fade-in-up font-sora text-6xl font-extrabold">
            <span className="block">Migrate, Optimize,</span>
            <span className="block">Kickstart</span>
          </h1>
          <p className="animate-fade-in-up font-mono text-xl delay-200">
            We make sure you receive a tailor-made & cost-efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last
          </p>
          <Button className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </div>
        <div className="flex-[2] overflow-hidden rounded-lg md:hidden">
          <video autoPlay loop muted className="h-full w-full">
            <source src="/assets/cloud-provider.mp4" type="video/mp4" />
          </video>
        </div>
        <Image
          src={solutionHero}
          alt="solution-hero"
          className="hidden flex-1 animate-fade-in-up rounded-lg delay-500 md:block"
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
