import React from "react";

import Image from "next/image";

const cardData = [
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
];

const InterpretDataSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center space-y-5 py-14 mt-[10rem] sm:mt-2 px-4">
      <div className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full mb-4">
        WHY TEVERSE CONTROL
      </div>

      <h2 className="text-4xl sm:text-xl max-w-lg md:text-3xl font-medium text-gray-800 text-center mb-4">
        The Expertise to Interpret Data - Not Just Visualize It
      </h2>
      <p className="text-center text-gray-600 max-w-4xl mb-10">
        Mission Control helps you monitor and analyze your environment, similar
        to a cloud management platform. But Mission Control also leverages our
        teams as they build their knowledge of your business, industry,
        objectives, and the unique concerns and needs of your architecture.
      </p>

      <div className="grid py-5 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6 max-w-6xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 bg-[#FF9557] rounded-lg text-left"
          >
            <div className="mb-4 text-3xl">
              <Image src={card.icon} width={40} height={40} alt="card image" />
            </div>
            <h3 className="text-3xl sm:text-lg font-medium text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterpretDataSection;
