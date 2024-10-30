import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import CloudJourney from "./cloud-journey";
import image from "../../public/assets/cardimage1.png";
import ArrowIcon from "./icons/arrow";
import { Separator } from "@/components/ui/separator";
import { AWSCertifications } from "./certifications";

const stats = [
  { count: "100+", label: "Clusters" },
  { count: "1000+", label: "Nodes" },
  { count: "50+", label: "AWS Projects" },
];

const Booking: React.FC = () => (
  <section>
    {/* Let's Talk Card */}
    <div className="container mx-auto p-6">
      <div className="card mx-auto flex max-w-5xl gap-6 rounded-2xl bg-[#fcfcfc] p-6 sm:flex-col">
        <Image
          src={image}
          alt="Card image"
          width={500}
          height={500}
          className="w-1/2 sm:w-full"
        />
        <div className="w-1/2 sm:w-full">
          <h3 className="mb-4 font-sora text-3xl font-bold">Let’s talk!</h3>
          <p className="mb-6">
            Quick intro to our services and roadmap for your cloud journey in 30
            minutes.
          </p>
          <Button
            className="rounded-full border border-black bg-orange-650"
            asChild
          >
            <Link
              href="#"
              className="flex items-center rounded-full bg-orange-600 px-4 py-3 text-white"
            >
              BOOK A FREE CALL <ArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="container mx-auto mb-16 flex max-w-7xl justify-between gap-7 border-b border-t p-6 md:flex-wrap">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3 text-center">
          <p className="font-sora text-3xl font-bold">{stat.count}</p>
          <Separator orientation="vertical" />
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Certification Section */}
    <AWSCertifications />
    {/* Cloud Journey */}
    <CloudJourney />

    {/* LARA Card */}
    <div className="relative mx-auto mb-[1.5em] flex max-w-[1300px] gap-14 rounded-2xl border border-[#fcfcf] bg-[#fcfcfc] bg-gradient-to-r from-[#0813481A] to-[#FF95571A] p-[3em] 2md:mx-6 md:gap-4 sm:flex-col">
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
          LARA is designed to help companies build an infrastructure for hosting
          their services quickly & reliably, according to AWS best practices and
          based on open source.{" "}
        </p>
        <p className="font-sora text-lg font-semibold uppercase 2md:text-[.8rem]">
          Our Unique Cloud Native Platform
        </p>
      </div>
    </div>
  </section>
);

export default Booking;
