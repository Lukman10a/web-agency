import React from "react";

import TeverseCard from "./teverse-card";

const cardData = [
  {
    title: "Capitalize on every cost and performance opportunity",
    description:
      "Manage your cloud spend and identify architectural, operational, and financial opportunities to drive efficiency.",
    buttonText: "See How",
    buttonLin: "#",
  },
  {
    title: "Free yourself of operations and compliance headaches",
    description:
      "Eliminate the distractions and difficulties of operations, maintenance, monitoring, and security.",
    buttonText: "Learn How",
    buttonLink: "#",
  },
  {
    title: "Accelerate your growth",
    description:
      "Bring your high-impact initiatives to life with technical leadership and a proven process from our team of experts.",
    buttonText: "Get Started",
    buttonLin: "#",
  },
];

const WhyTeverse: React.FC = () => {
  return (
    <section className="mx-auto my-16 w-[90%] max-w-[1400px] rounded-[36px] bg-[#FFF4EE80] lg:rounded-3xl">
      <div className="mx-auto w-[90%] py-24 lg:py-12">
        <h2 className="mb-4 text-5xl 2md:text-center md:text-4xl">
          Why Terverse
        </h2>
        <p className="mb-10 w-[60%] text-lg text-[#8F8F8F] xl:w-[80%] 2md:w-full 2md:text-center 2md:text-base md:w-full">
          Whether you&apos;re scaling your model for production or starting from
          scratch, we meet you where you are on your journey and help you get
          your solution launched. Learn more about our generative AI solutions.
        </p>
        <div className="flex justify-start gap-4 2md:flex-col">
          {cardData.map((data, index) => (
            <TeverseCard
              key={index}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
              index={index}
              buttonLink=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTeverse;
