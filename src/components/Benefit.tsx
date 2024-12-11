import React from "react";

import Image, { StaticImageData } from "next/image";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FeaturesProps {
  title?: string;
  imageUrl?: string | StaticImageData;
  features: FeatureItem[];
  backgroundColor?: string;
  titleClassName?: string;
  featureClassName?: string;
}

const Features: React.FC<FeaturesProps> = ({
  title = "Features",
  imageUrl = "/assets/checkers.png",
  features,
  backgroundColor = "bg-[#FFF4EE]",
  titleClassName = "text-4xl font-semibold text-gray-800",
  featureClassName = "rounded-lg border bg-white p-4",
}) => {
  return (
    <section className={`${backgroundColor} px-4 py-10`}>
      <div className="mx-auto max-w-6xl">
        <h2 className={`mb-6 text-center ${titleClassName}`}>{title}</h2>
        <div className="flex justify-between sm:flex-col sm:flex-wrap">
          <Image
            src={imageUrl}
            className="sm:mx-auto sm:w-full"
            width={500}
            height={300}
            alt="Features illustration"
          />
          <div className="grid w-1/2 grid-cols-1 gap-6 sm:mt-4 sm:w-full">
            {features.map((feature, index) => (
              <div key={index} className={featureClassName}>
                {feature.icon && <div className="mb-2">{feature.icon}</div>}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
