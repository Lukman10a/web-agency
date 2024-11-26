import React from "react";

import Link from "next/link";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  linkHref: string;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  linkHref,
}) => {
  return (
    <div className="w-full rounded-[3rem] px-10 py-20 border-2 border-black md:px-4">
      <h4 className="mb-3 font-sans text-3xl font-medium">{title}</h4>
      <p className="mb-5 font-sans text-xl">{subtitle}</p>
      <p className="mb-5 font-sans text-xl leading-relaxed">{description}</p>

      <Link href={linkHref}>
        <button className="font-sans font-semibold text-xl">{buttonText}</button>
      </Link>
    </div>
  );
};

export default Card;
