import React from "react";
import Image from "next/image";
import sysops from "../../public/assets/sysops.png";
import security from "../../public/assets/security.png";
import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import devops from "../../public/assets/devops.png";
import data from "../../public/assets/data.png";
import star from "../../public/assets/starfour.png";
import ArrowIcon from "./icons/arrow";
import { Button } from "./ui/button";
import Link from "next/link";

const badges = [
  { src: sysops, alt: "AWS SysOps Administrator Badge" },
  { src: security, alt: "AWS Security Badge" },
  { src: archi, alt: "AWS Solutions Architect Badge" },
  { src: cloud, alt: "AWS Cloud Practitioner Badge" },
  { src: devops, alt: "AWS DevOps Engineer Badge" },
  { src: data, alt: "AWS Data Analytics Badge" },
];

const SecurityCertifications: React.FC = () => {
  return (
    <section
      className="space-y-4 bg-[#FF9557] p-16 px-24 text-center sm:p-12"
      aria-labelledby="certifications-heading"
    >
      <header>
        <h2
          id="certifications-heading"
          className="py-4 text-2xl font-extrabold md:text-5xl sm:text-2xl"
        >
          Security Certifications
        </h2>
        <p>
          Your security is our priority. We hold top industry certifications
          including ISO, AWS, CISSP, and more
        </p>
      </header>

      <div className="grid grid-cols-4 gap-4 lg:grid-cols-2 sm:grid-cols-1">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl bg-white p-8 font-sora shadow-[0px_3px_0px_0px_#050505] md:text-sm"
          >
            <p>{badge.alt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityCertifications;

export const AWSCertifications = () => {
  return (
    <div className="relative bg-orange-650 py-16">
      {/* Title */}
      {/*start design stars */}
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[15rem] top-12 h-9 w-9 xl:invisible"
        />
      </span>

      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[15rem] top-24 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[15rem] top-36 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[18rem] top-12 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[18rem] top-24 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute left-[21rem] top-12 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute right-72 top-12 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute right-[15rem] top-20 h-9 w-9 xl:invisible"
        />
      </span>
      <span>
        <Image
          width={500}
          height={500}
          src={star}
          alt="star"
          className="absolute right-[21rem] top-20 h-9 w-9 xl:invisible"
        />
      </span>
      {/*end design stars */}
      <div className="mb-8 text-center">
        <h2 className="font-sora text-4xl font-bold text-gray-900 md:text-3xl">
          We are certified professionals
        </h2>

        <p className="mx-auto mt-4 w-[90%] font-sans text-lg md:text-sm">
          Your security is our priority. We hold top industry certifications
          including
          <br /> ISO, AWS, CISSP, and more.
        </p>
      </div>

      {/* Certifications Badges */}
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-12 px-5 lg:space-y-0 2md:flex-col md:gap-8">
        {/* First Row of Badges */}
        <div className="flex gap-5">
          <Image
            width={500}
            height={500}
            src={sysops}
            alt={"AWS SysOps Administrator Badge"}
            className="w-32 md:h-24 md:w-24"
          />

          <Image
            width={500}
            height={500}
            src={security}
            alt="AWS Security Badge"
            className="w-32 md:h-24 md:w-24"
          />
          <Image
            width={500}
            height={500}
            src={archi}
            alt="AWS Solutions Architect Badge"
            className="w-32 md:h-24 md:w-24"
          />
        </div>

        {/* Second Row of Badges */}
        <div className="flex gap-5">
          <Image
            width={500}
            height={500}
            src={cloud}
            alt="AWS Cloud Practitioner Badge"
            className="w-32 md:h-24 md:w-24"
          />
          <Image
            width={500}
            height={500}
            src={devops}
            alt="AWS DevOps Engineer Badge"
            className="h-32 w-32 md:h-24 md:w-24"
          />
          <Image
            width={500}
            height={500}
            src={data}
            alt="AWS Data Analytics Badge"
            className="w-32 md:h-24 md:w-24"
          />
        </div>
      </div>

      <div className="flex justify-center py-6">
        <Link href="/aws">
          <Button className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-black transition duration-500 hover:scale-105 hover:bg-black hover:text-white">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};
