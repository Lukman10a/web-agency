import Image, { StaticImageData } from "next/image";
import React from "react";

interface ScoreCardProps {
  title: string;
  icon: StaticImageData | string;
  direction?: "column" | "column-reverse";
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  title,
  icon,
  direction = "column",
}) => {
  return (
    <div
      className={`flex w-[90%] max-w-[350px] ${
        direction === "column" ? "flex-col" : "flex-col-reverse"
      } justify-between gap-8 rounded-2xl border border-black p-4 2md:mx-auto`}
    >
      <h2 className="font-sans text-2xl font-medium text-gray-700 md:text-xl">
        {title}
      </h2>

      <Image
        src={icon}
        alt="Card image"
        className="h-12 w-12 md:h-10 md:w-10"
        width={24}
        height={24}
      />
    </div>
  );
};

export default ScoreCard;
