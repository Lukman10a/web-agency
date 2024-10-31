import React, { useState } from "react";
import Image from "next/image";
import GenericWorkItem from "./our-solutions-carousel";

const EksAWSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

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

  const handleNext = () => {
    if (currentSlide < workItems.length - 1) {
      setDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection("prev");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const currentWorkItem = workItems[currentSlide];

  return (
    <section className="overflow-hidden"> {/* Prevent horizontal scroll */}
      <div
        className={`transition-transform duration-300 ease-in-out ${
          isTransitioning
            ? direction === "next"
              ? "translate-x-full opacity-0" // Slide out to left when moving to the next
              : "-translate-x-full opacity-0" // Slide out to right when moving to the previous
            : "translate-x-0 opacity-100" // Show current item
        }`}
      >
        <GenericWorkItem
          header="with EKS"
          title={currentWorkItem.title}
          description={currentWorkItem.description}
          tags={currentWorkItem.tags}
          images={currentWorkItem.images}
          renderImage={renderImage}
          currentSlide={0}
        />
      </div>
      <div className="mb-8 flex justify-between w-2/3 items-center mx-auto">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
            className={`${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src="/assets/prevArrow.png"
              width={50}
              height={50}
              alt="Previous arrow"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === workItems.length - 1}
            aria-label="Next Slide"
            className={`${
              currentSlide === workItems.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src="/assets/nextArrow.png"
              width={50}
              height={50}
              alt="Next arrow"
            />
          </button>
        </div>
        <div>
          <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-orange-500">
            ALL SOLUTIONS &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EksAWSection;
