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
import Link from "next/link";
import { AWSCertifications } from "@/components/certifications";
import CloudJourney from "@/components/cloud-journey";
import image from "../../public/assets/cardimage1.png";

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

          <Button
            asChild
            className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600"
          >
            <Link href="#">
              <span>EXPLORE</span>
              <ArrowIcon />
            </Link>
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
      {/* Certification Section */}
      <AWSCertifications />
      {/* Cloud Journey */}
      <CloudJourney />
      {/* LARA Card */}
      <section className="relative mx-auto mb-[1.5em] flex max-w-7xl gap-14 rounded-2xl border border-[#fcfcf] bg-[#fcfcfc] bg-gradient-to-r from-[#0813481A] to-[#FF95571A] p-[3em] 2md:mx-6 md:gap-4 sm:flex-col sm:gap-8">
        <div className="mb-0 w-1/2 sm:w-full">
          <Image
            src={image}
            alt="Card image"
            className="mr-4 w-full sm:mb-2"
            width={500}
            height={500}
          />
        </div>
        <div className="relative w-1/2 gap-2 self-center sm:w-full sm:self-auto">
          <h3 className="mb-[1em] flex h-10 w-full items-center justify-start gap-[.3em] font-sora text-4xl font-semibold leading-tight 2md:text-3xl">
            What the “hack” is LARA?!{" "}
          </h3>
          <p className="mb-[1em] w-[90%] font-sans text-sm 2md:w-[100%] 2md:leading-tight md:text-[.85rem]">
            LARA is designed to help companies build an infrastructure for
            hosting their services quickly & reliably, according to AWS best
            practices and based on open source.{" "}
          </p>
          <p className="font-sora text-lg font-semibold uppercase 2md:text-[.8rem]">
            Our Unique Cloud Native Platform
          </p>
        </div>
      </section>
      <CloudPlatformSection />
      <LARABuildingBlocks />
      <ContactSection />
    </Fragment>
  );
}
