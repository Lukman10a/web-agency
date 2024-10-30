// Import required dependencies
import React, { useState } from "react";
import Image from "next/image";

// interface SolutionCardProps {
//   title: string;
//   description: string;
//   linkText: string;
// }

interface WorkItemProps {
  title: string;
  description: string;
  tags: string[];
  imageSrcs: string[]; // Array of image sources for the carousel
}

// // AWS Solutions Card Component
// const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, linkText }) => (
//   <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
//     <h3 className="text-sm font-semibold text-gray-500 mb-1">{title}</h3>
//     <p className="text-lg font-bold text-gray-900 mb-4">{description}</p>
//     <Link href="#" className="text-neutral-700 underline">
//       {linkText}
//     </Link>
//   </div>
// );

// Our Work Section with Carousel
const WorkItem: React.FC<WorkItemProps> = ({
  title,
  description,
  tags,
  imageSrcs,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSrcs.length);
  };

  // Go to the previous slide
  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imageSrcs.length) % imageSrcs.length,
    );
  };

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
          Our Work with Eks
        </h2>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="mb-4 mt-4 text-gray-600">{description}</p>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="relative mx-auto flex justify-center">
            <Image
              src={imageSrcs[currentSlide]}
              alt="Work Example"
              width={1200}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mx-14 mt-8 flex justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handlePrev}>
              <Image
                src="/assets/prevArrow.png"
                width={50}
                height={50}
                alt="Previous arrow"
              />
            </button>
            <button onClick={handleNext}>
              <Image
                src="/assets/nextArrow.png"
                width={50}
                height={50}
                alt="Next arrow"
              />
            </button>
          </div>
          <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md ring-1 ring-darkblue-850 transition duration-300 ease-in-out hover:bg-orange-500">
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
      tags={["Banking", "Cloud", "Enterprise", "Security"]}
      imageSrcs={["/assets/work.png", "/assets/work.png", "/assets/work.png"]} // Array of images for carousel
    />
  </div>
);

export default EksAWSection;
