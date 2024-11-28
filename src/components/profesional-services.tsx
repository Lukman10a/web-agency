import Image from "next/image";
import React from "react";

interface CardData {
  title: string;
  description: string;
  icon: string; // Path to the icon image
}

interface SectionProps {
  title: string;
  subtitle: string;
  buttonVisible: boolean;
  buttonText: string;
  cards: CardData[]; // Array of card data
}

const DynamicSection: React.FC<SectionProps> = ({
  title,
  subtitle,
  buttonVisible,
  buttonText,
  cards,
}) => {
  return (
    <section className="p-6 sm:p-4 md:p-8 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
          Professional Services
        </h3>
        <h1 className="text-2xl sm:text-lg md:text-xl font-semibold mt-2">
          {title}
        </h1>
        <p className="text-gray-600 mt-4">{subtitle}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col justify-center items-start space-x-4">
            <div className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-gray-300">
              <Image
                width={20}
                height={20}
                src={card.icon}
                alt={`${card.title} Icon`}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">{card.title}</h4>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
            {buttonVisible && (
                <div className="mt-8">
                <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition">
                    {buttonText}
                </button>
                </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicSection;
