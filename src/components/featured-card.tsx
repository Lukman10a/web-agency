import Image from "next/image";
import React from "react";
import Link from "next/link";

type FeaturedPostProps = {
  imageSrc: string;
  altText: string;
  date: string;
  category: string;
  title: string;
  link: string;
};

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  imageSrc,
  altText,
  date,
  category,
  title,
  link,
}) => {
  return (
    <div className="mx-auto my-10 flex w-[90%] max-w-[1100px] gap-12 rounded-3xl bg-gradient-to-r from-[#0813481A] to-[#FF95571A] p-[2em] lg:gap-8 2md:p-[1em] md:gap-4 sm:flex-col sm:rounded-2xl">
      <div className="w-1/2 sm:w-full">
        <Image
          src={imageSrc}
          alt={altText}
          className="mr-4 w-full rounded-3xl sm:rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 self-center sm:w-full">
        <p className="mb-[.7em] text-xl lg:text-[1rem]">
          <span className="uppercase text-orange-650">{category}</span> - {date}
        </p>
        <h1 className="mb-[.4em] w-[90%] font-sora text-[2.2rem] font-semibold leading-snug xl:w-full lg:text-[1.5rem] md:text-[1.3rem]">
          {title}
        </h1>
        <p className="text-orange-650 underline underline-offset-4 lg:text-[.9rem] sm:mb-2">
          <Link href={link}>READ MORE</Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;
