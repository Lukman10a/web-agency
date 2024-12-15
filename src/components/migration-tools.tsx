import React from "react";

import Image from "next/image";

import cloud from "/public/svg/cloud-lightning.svg";

interface ProgramData {
  icon: string; // URL or SVG path for the icon
  title: string;
  description: string;
  buttonText: string;
}

const programs: ProgramData[] = [
  {
    icon: "/assets/targetpoint.png",
    title: "Migration Acceleration Program (MAP)",
    description:
      "AWS MAP assesses your current workloads, calculates the costs and potential wins of modernizing, develops your in-house expertise, and qualifies you for financial assistance from AWS.",
    buttonText: "Learn More",
  },
  {
    icon: cloud,
    title: "Migration Acceleration Program (MAP)",
    description:
      "AWS MAP assesses your current workloads, calculates the costs and potential wins of modernizing, develops your in-house expertise, and qualifies you for financial assistance from AWS.",
    buttonText: "Learn More",
  },
];

const DynamicProgramList: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl p-10 py-10 md:p-6 sm:w-full">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col items-start space-y-6 rounded-lg bg-gradient-to-b from-orange-100 to-orange-300 p-7 shadow-md"
          >
            <div className="sm:w-30 sm:h-30 flex flex-col items-start">
              <Image
                src={program.icon}
                alt={program.title}
                width={60}
                height={60}
              />
              <h3 className="text-3xl font-bold text-black sm:text-xl">
                {program.title}
              </h3>
            </div>
            <p className="mt-4 text-2xl text-gray-700 sm:text-lg">
              {program.description}
            </p>
            <button className="mt-6 rounded-full bg-black px-5 py-3 text-lg font-medium text-white hover:bg-gray-800">
              {program.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicProgramList;
