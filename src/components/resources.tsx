import React from "react";
import { Button } from "./ui/button";
import image from "/public/assets/resource_image.png";
import ResourceCard from "./resource-card";
import Link from "next/link";

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
    <section className="mx-auto mb-16 w-[90%] max-w-[1200px]">
      <h2 className="mb-[.7em] text-5xl 2md:text-center md:text-4xl">
        Stay Ahead of the Curve
      </h2>
      <Button
        asChild
        className="mb-16 flex w-fit items-center justify-center rounded-full bg-orange-600 px-[3.5em] py-[1em] font-normal text-white hover:bg-darkblue-950 2md:mx-auto"
      >
        <Link href="#">All Resources</Link>
      </Button>
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
