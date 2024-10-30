// Import required dependencies
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  linkText: string;
}

interface WorkItemProps {
  title: string;
  description: string;
  tags: string[];
  imageSrcs: string[]; // Array of image sources for the carousel
}

// AWS Solutions Card Component
const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, linkText }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-sm font-semibold text-gray-500 mb-1">{title}</h3>
    <p className="text-lg font-bold text-gray-900 mb-4">{description}</p>
    <Link href="#" className="text-neutral-700 underline">
      {linkText}
    </Link>
  </div>
);

// Our Work Section with Carousel
const WorkItem: React.FC<WorkItemProps> = ({ title, description, tags, imageSrcs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSrcs.length);
  };

  // Go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imageSrcs.length) % imageSrcs.length);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Work with Eks</h2>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-4 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {tags.map((tag, index) => (
              <span key={index} className="ring-1 ring-neutral-700 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="relative flex justify-center mx-auto">
            <Image
              src={imageSrcs[currentSlide]}
              alt="Work Example"
              width={1200}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between mx-14">
          <div className="flex gap-3 items-center">
            <button onClick={handlePrev}>
              <Image src='/assets/prevArrow.png' width={50} height={50} alt="Previous arrow" />
            </button>
            <button onClick={handleNext}>
              <Image src='/assets/nextArrow.png' width={50} height={50} alt="Next arrow" />
            </button>
          </div>
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full ring-1 ring-darkblue-850 shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
            ALL SOLUTIONS &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Component
const EksAWSection: React.FC = () => (
  <div>
    <WorkItem
      title="Unified Log Aggregation Tool for EKS Services"
      description="Dataddo needed to build a unified logging platform to collect and analyze logs from"
      tags={['Banking', 'Cloud', 'Enterprise', 'Security']}
      imageSrcs={['/assets/work.png', '/assets/work.png', '/assets/work.png']} // Array of images for carousel
    />
  </div>
);

export default EksAWSection;
