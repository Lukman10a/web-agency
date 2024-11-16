import React from "react";

import image from "/public/assets/resource_image.png";

import ResourceCard from "./resource-card";

const Resources = () => {
  const cardData = [
    {
      title: "6 Essential AWS DevOps Tools: Benefits & Uses Cases",
      date: "Oct 31",
      category: ["Security", "UI/UX"],
      buttonLink: "#",
      image: image,
    },
    {
      title: "Free yourself of operations and compliance headaches",
      date: "Feb 19",
      category: ["DevOps", "SysOps"],
      buttonLink: "#",
      image: image,
    },
    {
      title: "Capitalize on every cost and performance opportunity",
      date: "Jul 05",
      category: ["SysOps", "Cloud"],
      buttonLink: "#",
      image: image,
    },
  ];
  return (
    <section className="mx-auto mb-24 w-[90%] max-w-[1200px] 2md:w-[85%] sm:mb-16">
      <span className="tag inline-block rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
        RESOURCES
      </span>
      <h3 className="mb-[.5em] mt-4 w-[60%] font-sora text-3xl font-medium 2md:w-full md:mx-auto md:mb-[.4em] md:text-2xl sm:w-full">
        Find <span className="text-orange-650">In-Depth </span> Guides,
        Articles, AWS Best Practices and More
      </h3>
      <p className="mb-[1.5em] w-[90%] text-[#808080] sm:text-justify">
        Continue your cloud journey by learning from our cloud experts. We share
        insights and best practices on everything from app development and
        migrations to cost optimization and generative AI. 
      </p>

      <div className="flex w-full gap-2 2md:flex-col">
        {cardData.map((card, index) => (
          <ResourceCard
            key={index}
            title={card.title}
            date={card.date}
            category={card.category}
            buttonLink={card.buttonLink}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Resources;
