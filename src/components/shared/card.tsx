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
    <div className="w-full bg-orange-650 max-w-[600px] rounded-2x p-6">
      <h4 className="mb-3 font-sans text-3xl font-medium">{title}</h4>
      <p className="mb-5 font-sans text-sm">{subtitle}</p>
      <p className="mb-5 font-sans">{description}</p>

      <Link href={linkHref}>
        <button className="font-sans underline">{buttonText}</button>
      </Link>
    </div>
  );
};

export default Card;
