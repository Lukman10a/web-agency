import React, { ReactNode } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ArrowIcon from "./icons/arrow";
import { Button } from "./ui/button";

type HomeCardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string | StaticImageData;
  titleIcon?: ReactNode;
  index: number;
};
const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  titleIcon,
  index,
}) => {
  return (
    <div
      className={`mx-auto mb-[1.5em] flex max-w-[95%] gap-10 rounded-2xl border border-[#fcfcf] bg-[#fcfcfc] p-[1.2em] 2md:gap-4 sm:flex-col ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="mb-0 w-2/5 2md:w-1/2 sm:w-full">
        <Image
          src={imageSrc}
          alt="Card image"
          className="mr-4 w-full"
          width={500}
          height={500}
        />
      </div>
      <div className="w-3/5 self-center md:w-1/2 sm:w-full sm:self-auto">
        <h3 className="mb-[.3em] flex h-10 w-full items-center justify-start gap-[.3em] font-sora text-3xl font-semibold 2md:text-lg">
          <span className="min-w-min">{title.split(" ")[0]}</span>
          <span className="flex items-center justify-center rounded-3xl border border-darkblue-900 bg-orange-600 p-[.3em] text-[.85em] font-extralight text-darkblue-900 sm:text-[1rem]">
            {titleIcon}
          </span>
          <span className="min-w-min sm:text-[1rem]">
            {title.split(" ")[1]}
          </span>
        </h3>

        <p className="mb-[1.5em] w-[90%] font-sans text-lg leading-normal text-gray-500 2md:w-[100%] md:text-base">
          {description}
        </p>
        <Button
          asChild
          className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 py-[1.6em] text-[.75rem] font-light uppercase text-white hover:bg-orange-700 2md:text-[.7rem]"
        >
          <Link href={buttonLink}>
            {buttonText} <ArrowIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
