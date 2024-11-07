import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  image: StaticImageData | string;
  date: string;
  category: string[];
  buttonLink: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  image,
  date,
  category,
  buttonLink,
}) => {
  return (
    <div className="w-full">
      <div className="flex w-[90%] max-w-[350px] flex-col 2md:mx-auto 2md:mb-6">
        <Image
          src={image}
          alt="Card image"
          className="w-full"
          width={500}
          height={500}
        />
        <div className="w-full border border-black bg-white py-8 lg:py-6">
          <div className="mx-auto w-[85%]">
            <p className="mb-4 text-2xl lg:text-[22px]">{title}</p>
            <p className="mb-4 text-xl lg:text-[18px]">Published on {date}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {category.map((category, index) => (
                <span className="rounded-3xl border border-black px-6 py-1 text-xs">
                  {category}
                </span>
              ))}
            </div>
            <Button
              asChild
              className="w-full items-center justify-center rounded-none border border-black bg-white px-[3.5em] py-[1em] font-sans text-base font-normal text-black hover:bg-black hover:text-white sm:text-[14px]"
            >
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
