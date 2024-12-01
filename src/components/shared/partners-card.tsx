import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

interface PartnersCardProps {
  iconSrc: string;
  buttonText: string;
  buttonLink: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

const PartnersCard: React.FC<PartnersCardProps> = ({
  iconSrc,
  buttonText,
  buttonLink,
  quote,
  authorName,
  authorRole,
}) => {
  return (
    <div className="mx-auto mb-24 w-[90%] max-w-[1150px] rounded-[3rem] border-2 border-black py-16">
      <div className="mx-auto w-[85%]">
        <Image
          src={iconSrc}
          alt="Companies icon"
          className="mb-4 inline-block max-h-[70px] w-[30%] self-start md:block md:w-[40%]"
          width={500}
          height={500}
        />

        <Button
          asChild
          className="mb-4 w-fit bg-none px-4 font-sora text-xl font-medium text-black underline md:px-0"
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>

        <p className="mb-6 text-[26px] leading-relaxed 2md:text-2xl sm:text-xl">
          {quote}
        </p>

        <p className="mb-4 text-xl font-semibold">{authorName}</p>

        <p className="font-sora text-base font-semibold">{authorRole}</p>
      </div>
    </div>
  );
};

export default PartnersCard;
