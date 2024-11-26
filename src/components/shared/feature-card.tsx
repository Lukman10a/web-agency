import Image from 'next/image';
import React from 'react';

// Define props type
interface FeatureCardProps {
  imageSrc: string;
  title: string;
    description: string;
    fullImage?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description, fullImage = false }) => {
  return (
    <div className="w-[90%] max-w-[500px] space-y-4 sm:mx-auto mb-6">
      <Image
        src={imageSrc}
        alt="image"
        className={`${fullImage ? "w-full" : "w-12"} max-h-[400px]`}
        width={500}
        height={500}
      />
      <p className="text-2xl font-bold font-sora">{title}</p>
      <p className="font-sans font-medium text-lg leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
