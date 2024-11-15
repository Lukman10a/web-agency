import React from "react";

import Link from "next/link";

import { Button } from "./ui/button";

interface TeverseCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  index: number;
}

const TeverseCard: React.FC<TeverseCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  index,
}) => {
  return (
    <div
      className={`relative min-h-[300px] w-full max-w-[400px] rounded-xl bg-orange-650 px-4 py-10 text-black shadow-md 2md:mx-auto 2md:mb-6 ${
        index % 2 === 0 ? "bg-orange-650" : "bg-white"
      }`}
    >
      <h3 className="mb-2 text-2xl font-medium lg:text-[22px] sm:w-full">
        {title}
      </h3>
      <p className="mb-12 w-full leading-tight lg:text-[14px]">{description}</p>
      <Button
        asChild
        className="absolute bottom-10 flex w-fit items-center justify-center rounded-full bg-black px-[3.5em] py-[1em] text-[.7rem] font-semibold text-white hover:bg-gray-700 2md:text-[.7rem]"
      >
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default TeverseCard;
