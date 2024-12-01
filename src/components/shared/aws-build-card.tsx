import React from "react";

import Image from "next/image";

interface AwsBuildCardProps {
  imgSrc: string;
  title?: string;
  description: string;
  altText: string;
}

const AwsBuildCard: React.FC<AwsBuildCardProps> = ({
  imgSrc,
  title,
  description,
  altText,
}) => {
  return (
    <div className="w-full max-w-[600px] rounded-xl border border-[#808080] p-4 sm:p-3">
      <Image
        src={imgSrc}
        alt={altText}
        className="mb-4 h-10 w-10 md:h-8 md:w-8"
        width={500}
        height={500}
      />
      <h4 className="mb-[.3em] font-sora text-2xl font-semibold 2md:text-xl sm:text-xl">
        {title}
      </h4>
      <p className="mb-2 text-[#808080] md:mx-auto">{description}</p>
    </div>
  );
};

export default AwsBuildCard;
