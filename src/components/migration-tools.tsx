import Image from "next/image";
import React from "react";
import cloud from "/public/svg/cloud-lightning.svg"

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
    <div className="p-6 md:p-10 max-w-6xl mx-auto py-10">
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gradient-to-b space-y-6 from-blue-100 to-blue-300 p-7 rounded-lg shadow-md"
          >
            <div className="flex flex-col items-start">
              <Image
                src={program.icon}
                alt={program.title}
                width={60}
                height={60}
                
              />
              <h3 className="text-3xl font-bold text-black">
                {program.title}
              </h3>
            </div>
            <p className="mt-4 text-2xl text-gray-700">{program.description}</p>
            <button className="mt-6 px-5 py-3 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800">
              {program.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicProgramList;
