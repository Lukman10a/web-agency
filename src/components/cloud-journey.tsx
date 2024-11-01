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
          activeTabContent.sliderContent.length - 1,
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
    <section className="relative mx-auto max-w-6xl p-8 font-sans md:px-4">
      <div className="mb-4 flex justify-between gap-8 2md:flex-col 2md:gap-2">
        <div className="max-w-[500px] 2md:mb-0 2md:max-w-full">
          <h1 className="mb-2 font-sora text-3xl font-semibold">
            Your Cloud Journey
          </h1>
          <p className="mb-6 font-sans text-[14px] text-[#808080]">
            Becoming cloud native might seem like an intimidating task, but
            don&apos;t despair, we&apos;re here to guide you through the entire
            process of your cloud journey.
          </p>
        </div>

        <div className="flex space-x-4 self-center 2md:self-start md:space-x-2">
          {tabContent.map((tab) => (
            <Button
              id="cloud-journey"
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border border-black font-sans 2md:text-[.8rem] md:text-[.6rem] ${
                activeTab === tab.id
                  ? "bg-orange-650 text-black hover:bg-[#081348] hover:text-white"
                  : "text-black"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative mb-6">
        <div className="right-8 mb-6 flex items-center justify-between">
          <h2 className="mb-4 font-sans text-xl font-semibold text-[#808080] md:text-[16px]">
            {activeTabContent?.description}
          </h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="group rounded-full border-black hover:bg-[#081348]"
              onClick={handlePrev}
              disabled={currentSlide === 0}
            >
              <ArrowIcon className="h-4 w-4 rotate-180 transform fill-black group-hover:fill-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="group rounded-full border-black hover:bg-[#081348]"
              onClick={handleNext}
              disabled={
                activeTabContent &&
                currentSlide === activeTabContent.sliderContent.length - 1
              }
            >
              <ArrowIcon className="h-4 w-4 fill-black group-hover:fill-white" />
            </Button>
          </div>
        </div>
        {activeTabContent && (
          <>
            <div className="relative">
              <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory gap-8 overflow-x-hidden"
              >
                {activeTabContent.sliderContent.map((slide, index) => (
                  <div
                    key={index}
                    className="mt-4 w-full max-w-[400px] flex-shrink-0 snap-start"
                  >
                    <div className="h-full rounded-lg border border-black p-6">
                      <div className="flex justify-between">
                        <div className="mb-2 flex items-center justify-center rounded-2xl border border-black px-[4px] text-black sm:text-[14px]">
                          {slide.time}
                        </div>
                        <div className="mb-2 flex items-center justify-center rounded-2xl border border-black px-[3px] font-semibold text-black sm:text-[14px]">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <h3 className="mb-2 font-sora text-2xl font-semibold">
                        {slide.title}
                      </h3>
                      <p className="text-[15px] text-[#808080]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CloudJourney;
