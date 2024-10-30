import React, { useState } from "react";
import Image from "next/image";
import GenericWorkItem from "./our-solutions-carousel";

const EksAWSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const workItems = [
    {
      title: "Unified Log Aggregation Tool for EKS Services",
      description:
        "This tool helps in aggregating logs from various EKS services for better monitoring and debugging.",
      tags: ["Banking", "Cloud", "Enterprise", "Security"],
      images: [
        "/assets/3d-tech-1.png",
        "/assets/3d-tech-2.png",
        "/assets/3d-tech-3.png",
      ],
    },
    {
      title: "Real-time Data Processing for Financial Transactions",
      description:
        "A system for processing financial transactions in real-time to enhance accuracy and speed.",
      tags: ["Finance", "Real-time", "Processing"],
      images: [
        "/assets/3d-tech-2.png",
        "/assets/work5.png",
        "/assets/work6.png",
      ],
    },
    {
      title: "Automated Security Compliance Checker",
      description:
        "An automated tool that checks compliance with security standards for cloud applications.",
      tags: ["Security", "Automation", "Compliance"],
      images: [
        "/assets/3d-tech-3.png",
        "/assets/work8.png",
        "/assets/work9.png",
      ],
    },
  ];

  const renderImage = (src: string) => (
    <Image
      src={src}
      alt="Work Example"
      width={1000}
      height={600}
      className="contain h-[400px] rounded-lg"
    />
  );

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % workItems.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + workItems.length) % workItems.length);

  const currentWorkItem = workItems[currentSlide]; // Get the current work item based on the slide

  return (
    <section>
      <GenericWorkItem
        title={currentWorkItem.title}
        description={currentWorkItem.description}
        tags={currentWorkItem.tags}
        images={currentWorkItem.images}
        renderImage={renderImage}
        currentSlide={0} // Always pass 0 as we are rendering based on currentWorkItem directly
      />
      <div className="mx-14 mt-8 flex justify-between">
        <div className="flex items-center gap-3">
          <button onClick={handlePrev} aria-label="Previous Slide">
            <Image
              src="/assets/prevArrow.png"
              width={50}
              height={50}
              alt="Previous arrow"
            />
          </button>
          <button onClick={handleNext} aria-label="Next Slide">
            <Image
              src="/assets/nextArrow.png"
              width={50}
              height={50}
              alt="Next arrow"
            />
          </button>
        </div>
        <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-orange-500">
          ALL SOLUTIONS &rarr;
        </button>
      </div>
    </section>
  );
};

export default EksAWSection;
