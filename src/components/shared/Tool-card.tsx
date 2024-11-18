import React from "react";
import Image from "next/image";

interface ToolCardProps {
  title: string;
  description: string;
  logo: string;
  altText: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, logo, altText }) => {
  return (
    <div className="flex justify-between items-center sm:flex-col w-full">
      <div className="w-1/2 sm:w-full sm:space-y-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className=" flex items-center">
        <Image src={logo} width={200} height={80} alt={altText} className="" />
      </div>
    </div>
  );
};

export default ToolCard;
