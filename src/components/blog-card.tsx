import Image from "next/image";
import React from "react";
import image from "/public/assets/blog-card.png";
import Link from "next/link";


const BlogCard = () => {
  return (
    <div className="p-[2em] 2md:p-[1em] w-[90%] max-w-[1100px] my-10 mx-auto flex sm:flex-col gap-12 lg:gap-8 md:gap-4 bg-gradient-to-r from-[#0813481A] to-[#FF95571A] rounded-3xl sm:rounded-2xl">
      <div className="w-1/2 sm:w-full">
        <Image
          src={image}
          alt="Card image"
          className="mr-4 w-full rounded-3xl sm:rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 self-center sm:w-full">
        <p className="text-xl mb-[.7em] lg:text-[1rem]">
          <span className="text-orange-650">AWS</span> - 12/JAN/2024
        </p>
        <h1 className="text-[2.2rem] lg:text-[1.5rem] md:text-[1.3rem] font-sora font-semibold leading-snug w-[90%] xl:w-full mb-[.4em]">
          Utilizing the AWS Well-Architected Framework for Optimal Cloud
          Infrastructure
        </h1>
        <p className=" text-orange-650 underline underline-offset-4 lg:text-[.9rem] sm:mb-2">
          <Link href="#"> READ MORE</Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
