import React from "react";

import Image from "next/image";
import Link from "next/link";

import preverity from "/public/svg/preverity.svg";

import { Button } from "./ui/button";

const Preverity = () => {
  return (
    <section className="mx-auto mb-16 w-[90%] max-w-[1200px] rounded-2xl bg-orange-100 py-10 shadow-md md:py-6 sm:mb-12 sm:rounded-xl">
      <div className="mx-auto mb-8 w-[90%] rounded-2xl border bg-white py-12">
        <Image
          src={preverity}
          alt="Security Image"
          className="mx-auto mb-4 w-36"
          width={500}
          height={500}
        />
        <h4 className="mx-auto mb-[.5em] w-[90%] text-center font-sora text-2xl leading-relaxed 2md:text-xl sm:mb-[1em] sm:text-base">
          We’re already saving tens of thousands a month with Teverse, and my
          goal now is to get that to six figures. The amount that Teverse has
          saved us is downright massive.
        </h4>
        <p className="mx-auto mb-2 w-[70%] text-center font-sora text-sm text-[#747474] sm:w-[90%]">
          <span className="text-black"> Jay Wessland </span> | Vice President
          and chief technology officer
        </p>
      </div>

      <Button
        asChild
        className="mx-auto flex w-fit items-center gap-4 rounded-3xl bg-orange-650 px-8 font-sans text-white xl:text-[12px] md:mx-auto md:w-[90%] sm:mb-4 sm:w-[90%]"
      >
        <Link href="#">Read More</Link>
      </Button>
    </section>
  );
};

export default Preverity;
