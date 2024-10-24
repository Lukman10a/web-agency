import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "./shared/button";
import ArrowIcon from "./icons/arrow";

type HomeCardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string | StaticImageData;
  index: number;
};
const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  index,
}) => {
  return (
    <div
      className={`flex sm:flex-col gap-10 md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[95%] mb-[1.5em]  ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className=" w-2/5 md:w-1/2 sm:w-full  mb-0">
        <Image
          src={imageSrc}
          alt="Card image"
          className=" mr-4 w-full"
          width={500}
          height={500}
        />
      </div>
      <div className="w-3/5 md:w-1/2 sm:w-full self-center sm:self-auto">
        <h3 className="font-sora font-[600] text-[1.5rem] 2md:text-[1.2rem] mb-[.3em] ">
          {title}
        </h3>
        <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1.5em] leading-normal 2md:leading-tight w-[90%] 2md:w-full">
          {description}
        </p>
        <Button
          asChild
          className="w-fit border border-black  flex items-center justify-center   text-[.9rem] 2md:text-[.7rem] font-light rounded-full text-white bg-orange-600 hover:bg-orange-700 mb-5"
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
