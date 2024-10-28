import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import ArrowIcon from "./icons/arrow";

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
        <h3 className="font-sora font-[600] text-[1.5rem] 2md:text-[1.2rem] mb-[.3em] h-10 flex gap-[.3em] justify-start items-center w-full">
          <span className="min-w-min">{title}</span>
          <span className="text-darkblue-900 font-extralight p-[.3em] border border-darkblue-900 rounded-3xl bg-orange-600 text-[.85em] flex justify-center items-center">
            {titleIcon}
          </span>
          <span className="min-w-min">CONSULTING</span>
        </h3>

        <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1.5em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
          {description}
        </p>
        <Button
          asChild
          className="w-fit py-[1.6em] border border-black uppercase flex items-center justify-center   text-[.75rem] 2md:text-[.7rem] font-light rounded-full text-white bg-orange-600 hover:bg-orange-700"
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
