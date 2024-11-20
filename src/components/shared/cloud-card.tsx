import Image from "next/image";
import React from "react";

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
const BenefitsSection: React.FC<BenefitProps> = ({ tag = true, title, description, benefits }) => {
  return (
    <section className="max-w-6xl font-sora mx-auto px-6 py-14 md:px-12 lg:px-20 xl:py-12 bg-white text-gray-800">
      {/* Tag */}
      {tag && <div className="text-sm border inline px-4 mx-auto rounded-full text-gray-500 mb-4">Benefits</div>}

      {/* Title */}
      <h2 className="w-2/3 text-4xl md:text-2xl sm:text-xl font-semi mb-4">{title}</h2>

      {/* Description */}
      <p className=" text-xl md:text-lg sm:text-sm text-gray-600 mb-8">{description}</p>

      {/* Benefits */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-orange-650 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col mb-4">
              {/* Icon */}
              <div
                className= "text-black text-4xl md:text-2xl sm:text-xl mr-4 ">
                    <Image src={benefit.icon} width={40} height={40} alt="card image" />
                </div>
              {/* Heading */}
              <h3 className="text-xl sm:text-lg font-bold">{benefit.heading}</h3>
            </div>
            {/* Text */}
            <p className="text-gray-700">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
