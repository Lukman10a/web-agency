import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "./ui/badge";

const BookDemoSection: React.FC = () => {
  return (
    <section className="flex max-w-7xl items-center py-14 sm:mb-10 sm:flex-col sm:py-0">
      {/* Image Placeholder */}

      <div className="mb-0 flex w-1/2 items-center justify-end rounded-bl-3xl rounded-tl-3xl px-2 md:justify-center sm:w-full sm:rounded-bl-none sm:rounded-tl-none sm:px-4">
        <Image
          src="/assets/checkers.png"
          height={600}
          width={500}
          alt="checkers image"
        />
      </div>

      {/* Text Content */}
      <div className="min-h-[31rem] w-5/12 space-y-3 rounded-br-3xl rounded-tr-3xl py-14 pl-12 text-left sm:w-full sm:px-4 sm:py-4">
        {/* Badge */}
        <Badge variant={"outline"}>BOOK YOUR DEMO</Badge>

        {/* Title */}
        <h2 className="mb-4 w-5/6 text-2xl font-bold text-black sm:text-lg">
          We have the tools to understand your cloud and the guidance to make
          the most of it.
        </h2>

        {/* Subtitle */}
        <p className="mb-6 text-xl text-black sm:text-sm">
          Schedule your demo with a Teverse Cloud Advisor and find out what
          Teverse Control can do for you.
        </p>

        {/* Button */}
        <Link href={"/contact"}>
          <button className="mt-4 rounded-full bg-black px-6 py-3 text-xl font-medium text-white transition duration-300 hover:bg-orange-600 sm:text-sm">
            Book your demo
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BookDemoSection;
