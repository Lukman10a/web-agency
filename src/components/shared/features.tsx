import React from "react";

import Image from "next/image";

// Define the types for the props
type Feature = {
  icon: string; // Icon class (e.g., from Font Awesome or custom SVG paths)
  heading: string;
  description: string;
};

type FeaturesProps = {
  title: string; // Title for the Features section
  features: Feature[]; // Array of feature objects
};

const FeaturesSection: React.FC<FeaturesProps> = ({ title, features }) => {
  return (
    <div className="mx-auto max-w-6xl bg-white px-4 py-10 font-sora lg:px-8 sm:px-6">
      <h2 className="mb-8 text-2xl font-bold text-gray-800">{title}</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* Icon */}
            <div className="mb-4 text-4xl text-blue-600">
              <Image src={feature.icon} width={30} height={30} alt="image" />
            </div>
            {/* Heading */}
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {feature.heading}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
