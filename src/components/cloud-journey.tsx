"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "./icons/arrow";

interface SlideContent {
  time: string;
  title: string;
  description: string;
}

interface TabContent {
  id: string;
  label: string;
  description: string;
  sliderContent: SlideContent[];
}

const tabContent: TabContent[] = [
  {
    id: "migration",
    label: "MIGRATION",
    description: "Migrating an existing solution to the cloud",
    sliderContent: [
      {
        time: "30 MINUTES",
        title: "Consultation",
        description:
          "Becoming cloud native might seem like an intimidating task, but don't despair, we're here to guide you through the entire process of your cloud journey.",
      },
      {
        time: "1-2 WEEKS",
        title: "Assessment",
        description:
          "Becoming cloud native might seem like an intimidating task, but don't despair, we're here to guide you through the entire process of your cloud journey.",
      },
      {
        time: "2-3 WEEKS",
        title: "Implementation",
        description:
          "Becoming cloud native might seem like an intimidating task, but don't despair, we're here to guide you through the entire process of your cloud journey.",
      },
      {
        time: "ONGOING",
        title: "Support",
        description:
          "Becoming cloud native might seem like an intimidating task, but don't despair, we're here to guide you through the entire process of your cloud journey.",
      },
    ],
  },
  {
    id: "optimization",
    label: "OPTIMIZATION",
    description: "Optimizing your cloud infrastructure and services",
    sliderContent: [
      {
        time: "30 MINUTES",
        title: "Consultation",
        description:
          "We analyze your current cloud setup to identify areas for optimization and improvement.",
      },
      {
        time: "1-2 WEEKS",
        title: "Assessment",
        description:
          "Based on the analysis, we create a detailed plan for optimizing your cloud infrastructure.",
      },
      {
        time: "2-3 WEEKS",
        title: "Implementation",
        description:
          "We implement the optimization strategies, enhancing performance and reducing costs.",
      },
      {
        time: "ONGOING",
        title: "Support",
        description:
          "We continuously monitor and adjust your cloud setup to ensure optimal performance.",
      },
    ],
  },
  {
    id: "kickstart",
    label: "KICKSTART",
    description: "Starting your cloud journey from scratch",
    sliderContent: [
      {
        time: "30 MINUTES",
        title: "Consultation",
        description:
          "We discuss your business needs and how cloud solutions can benefit your organization.",
      },
      {
        time: "1-2 WEEKS",
        title: "Assessment",
        description:
          "We develop a tailored cloud strategy aligned with your business goals.",
      },
      {
        time: "2-3 WEEKS",
        title: "Implementation",
        description:
          "We set up your initial cloud infrastructure and migrate your first applications.",
      },
      {
        time: "ONGOING",
        title: "Support",
        description:
          "We support your ongoing cloud adoption and help you scale as your needs evolve.",
      },
    ],
  },
];

const CloudJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("migration");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number): void => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = (): void => {
    setCurrentSlide((prev) => {
      const newSlide = Math.max(prev - 1, 0);
      scrollToSlide(newSlide);
      return newSlide;
    });
  };

  const handleNext = (): void => {
    const activeTabContent = tabContent.find((tab) => tab.id === activeTab);
    if (activeTabContent) {
      setCurrentSlide((prev) => {
        const newSlide = Math.min(
          prev + 1,
          activeTabContent.sliderContent.length - 1
        );
        scrollToSlide(newSlide);
        return newSlide;
      });
    }
  };

  useEffect(() => {
    const handleResize = (): void => {
      scrollToSlide(currentSlide);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  useEffect(() => {
    setCurrentSlide(0);
    scrollToSlide(0);
  }, [activeTab]);

  const activeTabContent = tabContent.find((tab) => tab.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto p-8 md:px-4 font-sans relative ">
      <div className="flex gap-8 2md:gap-2 justify-between 2md:flex-col mb-4">
        <div className="max-w-[500px] 2md:max-w-full 2md:mb-0">
          <h1 className="text-3xl font-semibold mb-2 font-sora">
            Your Cloud Journey
          </h1>
          <p className="text-[#808080] mb-6 font-sans text-[14px] ">
            Becoming cloud native might seem like an intimidating task, but
            don&apos;t despair, we&apos;re here to guide you through the entire
            process of your cloud journey.
          </p>
        </div>

        <div className="flex space-x-4 md:space-x-2 self-center 2md:self-start">
          {tabContent.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans border border-black rounded-full md:text-[.6rem] 2md:text-[.8rem] ${
                activeTab === tab.id
                  ? "bg-orange-650 text-black hover:bg-[#081348] hover:text-white"
                  : "text-black "
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 absolute right-8">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="group rounded-full border-black hover:bg-[#081348]"
            onClick={handlePrev}
            disabled={currentSlide === 0}
          >
            <ArrowIcon className="h-4 w-4 transform rotate-180 fill-black group-hover:fill-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="group rounded-full  border-black hover:bg-[#081348]"
            onClick={handleNext}
            disabled={
              activeTabContent &&
              currentSlide === activeTabContent.sliderContent.length - 1
            }
          >
            <ArrowIcon className="fill-black h-4 w-4 group-hover:fill-white" />
          </Button>
        </div>
      </div>

      {activeTabContent && (
        <div>
          <h2 className="text-xl font-semibold mb-4 md:text-[16px] font-sans text-[#808080]">
            {activeTabContent.description}
          </h2>
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-8  overflow-x-hidden snap-x snap-mandatory"
            >
              {activeTabContent.sliderContent.map((slide, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0 max-w-[400px]  w-full snap-start mt-4"
                >
                  <div className="border-black rounded-lg border p-6 h-full">
                    <div className="flex justify-between">
                      <div className="text-black px-[4px] mb-2 border border-black rounded-2xl sm:text-[14px] flex justify-center items-center">
                        {slide.time}
                      </div>
                      <div className="px-[3px] items-center text-black font-semibold mb-2 border border-black rounded-2xl sm:text-[14px] flex justify-center">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 font-sora">
                      {slide.title}
                    </h3>
                    <p className="text-[#808080] text-[15px]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudJourney;
