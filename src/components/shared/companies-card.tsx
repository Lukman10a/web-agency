import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

interface CompaniesCardProps {
  imageSrc: string;
  content: string;
  author: string;
  showButton?: boolean;
  buttonText?: string;
}

const CompaniesCard: React.FC<CompaniesCardProps> = ({
  imageSrc,
  content,
  author,
  showButton = false,
  buttonText,
}) => {
  return (
    <div className="w-full rounded-2xl border bg-white p-4 py-8">
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt="Card image"
          className="w-36"
          width={500}
          height={500}
        />
      </div>
      <p className="mb-[1em] lg:text-[14px] md:mx-auto">{content}</p>

      <p className="font-medium">{author}</p>

      {showButton && (
        <Button
          asChild
          className="bottom-10 mt-6 flex w-fit items-center justify-center rounded-full bg-orange-600 px-[2.5em] py-[1em] font-normal text-white hover:bg-darkblue-950 2md:text-[12px]"
        >
          <Link href="#">{buttonText}</Link>
        </Button>
      )}
    </div>
  );
};

export default CompaniesCard;
