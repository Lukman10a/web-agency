import Image from "next/image";
import React from "react";

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
    <div className="max-w-6xl font-sora mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">{title}</h2>
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-md"
          >
            {/* Icon */}
            <div className="text-4xl text-blue-600 mb-4">
              <Image src={feature.icon} width={30} height={30} alt="image" />
            </div>
            {/* Heading */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.heading}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
