import React from "react";
import ScoreCard from "./score-card";
import net from "/public/svg/score_image.svg";
import cert from "/public/svg/cert.svg";

const Score = () => {
  const cardData = [
    {
      title: "Net Promoter Score",
      icon: net, // Replace with the actual path to your cloud icon
    },
    {
      title: "Customer Satisfaction Score",
      icon: net, // Replace with the actual path to your cloud icon
    },
    {
      title: "AWS Certification",
      icon: cert, // Replace with the actual path to your AWS icon
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-[90%] max-w-[1500px] justify-center gap-6 py-16 2md:flex-col">
        {cardData.map((data) => (
          <ScoreCard title={data.title} icon={data.icon} />
        ))}
      </div>
    </section>
  );
};

export default Score;
