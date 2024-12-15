import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

const GetInTouchSection: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl items-center gap-10 p-10 md:flex-col md:gap-5 md:p-6">
      {/* Image Placeholder */}
      <div className="mb-0 flex w-1/2 md:w-full">
        <Image
          src="/assets/teverse-control2.png"
          height={600}
          width={500}
          alt="checkers image"
          className="w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-5/12 text-left md:w-full">
        {/* Badge */}
        <div className="mb-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-xs tracking-wide text-gray-500 sm:mt-5">
          GET IN TOUCH
        </div>

        {/* Title */}
        <h2 className="mb-4 text-4xl font-medium text-gray-800 md:text-xl">
          Strengthen Your Security <span className="sm:inline">Posture.</span>
        </h2>

        {/* Subtitle */}
        <p className="mb-6 text-gray-600 sm:text-sm">
          Connect with our security experts to learn how Teverse Cloud Secure
          can harden your AWS environment.
        </p>

        <Button
          asChild
          className="rounded-full bg-[#FF9557] px-6 py-3 font-medium text-white transition duration-300 hover:bg-orange-600"
        >
          <Link href="/contact">Schedule a call</Link>
        </Button>
      </div>
    </section>
  );
};

export default GetInTouchSection;
