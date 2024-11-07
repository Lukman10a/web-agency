import React from "react";
import Image from "next/image";

const helpItems = [
  { src: "/assets/softwareCloud.png", title: "Cloud management" },
  { src: "/assets/softwareCloud.png", title: "Cloud management" },
  { src: "/assets/softwareCloud2.png", title: "Cloud management" },
  { src: "/assets/softwareCloud.png", title: "Cloud management" },
  { src: "/assets/softwareCloud3.png", title: "Cloud management" },
  { src: "/assets/softwareCloud4.png", title: "Cloud management" },
];

const HelpSection: React.FC = () => {
  return (
    <section className="py-14 px-14 md:px-12 lg:px-24 bg-white text-center font-sans">
      <h2 className="text-4xl sm:text-xl md:text-2xl font-semibold mb-10">
        What do you need help <span className="block sm:inline">with?</span>
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-6 justify-start sm:p-2 p-6 border rounded-lg hover:shadow-lg transition-shadow ease-in-out"
          >
            <Image src={item.src} width={35} height={35} alt={item.title} />
            <p className="text-xl sm:text-sm md:text-lg text-gray-800 sm:text-left">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
