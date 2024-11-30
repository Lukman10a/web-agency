import React from "react";

import Image from "next/image";

interface ToolCardProps {
  title: string;
  description: string;
  logo: string;
  altText: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  logo,
  altText,
}) => {
  return (
    <div className="flex w-full items-center gap-8 sm:flex-col">
      <div className="w-[70%] sm:w-full sm:space-y-4">
        <h3 className="mb-2 font-sora text-xl font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex w-[30%] items-center">
        <Image
          src={logo}
          width={200}
          height={80}
          alt={altText}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ToolCard;
