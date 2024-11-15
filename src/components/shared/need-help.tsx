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
    <section className="bg-white p-14 text-center font-sans lg:px-24 md:px-12">
      <h2 className="mb-10 text-4xl font-semibold md:text-2xl sm:text-xl">
        What do you need help <span className="block sm:inline">with?</span>
      </h2>
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-6 rounded-lg border p-6 transition-shadow ease-in-out hover:shadow-lg sm:p-2"
          >
            <Image src={item.src} width={35} height={35} alt={item.title} />
            <p className="text-xl text-gray-800 md:text-lg sm:text-left sm:text-sm">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
