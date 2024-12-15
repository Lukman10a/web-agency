import React from "react";

import Image from "next/image";

import { Badge } from "../ui/badge";

// Define the type for props
interface BenefitProps {
  tag?: boolean;
  title: string;
  description: string;
  benefits: {
    icon: string; // Tailwind classes for the icon
    heading: string;
    text: string;
  }[];
}

// Reusable component
const BenefitsSection: React.FC<BenefitProps> = ({
  tag = true,
  title,
  description,
  benefits,
}) => {
  return (
    <section className="mx-auto max-w-6xl bg-white px-6 py-14 font-sora text-gray-800 xl:py-12 lg:px-20 md:px-12">
      {/* Tag */}
      {tag && (
        <Badge variant="outline" className="mb-4">
          Benefits
        </Badge>
      )}

      {/* Title */}
      <h2 className="font-semi mb-4 w-2/3 text-4xl md:text-2xl sm:w-full sm:text-xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mb-8 text-xl text-gray-600 md:text-lg sm:text-sm">
        {description}
      </p>

      {/* Benefits */}
      <div className="grid grid-cols-2 gap-10 md:grid-cols-2 sm:grid-cols-1">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-3xl bg-orange-650 p-14 shadow transition duration-300 hover:shadow-lg"
          >
            <div className="mb-4 flex flex-col">
              {/* Icon */}
              <div className="mr-4 text-4xl text-black md:text-2xl sm:text-xl">
                <Image
                  src={benefit.icon}
                  width={40}
                  height={40}
                  alt="card image"
                />
              </div>
              {/* Heading */}
              <h3 className="text-2xl font-bold sm:text-lg">
                {benefit.heading}
              </h3>
            </div>
            {/* Text */}
            <p className="text-lg text-gray-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
