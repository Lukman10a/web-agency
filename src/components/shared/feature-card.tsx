import React from "react";

import Image from "next/image";

// Define props type
interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  fullImage?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  fullImage = false,
}) => {
  return (
    <div className="mb-6 w-full space-y-4 sm:mx-auto">
      <Image
        src={imageSrc}
        alt="image"
        className={`${fullImage ? "w-full" : "w-10"} max-h-[400px]`}
        width={500}
        height={500}
      />
      <p className="font-sora text-2xl font-bold">{title}</p>
      <p className="font-sans text-lg font-medium leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
