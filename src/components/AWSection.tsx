// Import required dependencies
import React from "react";
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
  imageSrc: string;
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

// Main AWS Solutions Section
const AWSSolutions: React.FC = () => (
  <section className="bg-gradient-to-r from-gradient-100 to-gradient-200 py-16 px-4 mx-6 rounded-lg">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">AWS Solutions</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-3">
        <SolutionCard title="EKS" description="Amazing Kubernetes services" linkText="Show more" />
        <SolutionCard title="EKS" description="Amazing Kubernetes services" linkText="Show more" />
        <SolutionCard title="EKS" description="Amazing Kubernetes services" linkText="Show more" />
      </div>
      <div className="absolute right-10 bottom-0 sm:right-1 sm:bottom-8 md:bottom-16">
        <Image src="/assets/Star.png" alt="Decorative Star" width={80} height={80} />
      </div>
    </div>
  </section>
);

// Our Work Section
const WorkItem: React.FC<WorkItemProps> = ({ title, description, tags, imageSrc }) => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Work</h2>
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
          <Image src={imageSrc} alt="Work Example" width={1200} height={600} className="rounded-lg" />
        </div>
      </div>
      <div className="mt-8 flex justify-between mx-14">
        <div className="flex gap-3 items-center">
          
          <button><Image src='/assets/prevArrow.png' width={50} height={50} alt="next arrow" /></button>
          <button><Image src='/assets/nextArrow.png' width={50} height={50} alt="next arrow" /></button>
        </div>
        <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full ring-1 ring-darkblue-850 shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
          ALL SOLUTIONS &rarr;
        </button>
      </div>
    </div>
  </section>
);

// Main Component
const AWSection: React.FC = () => (
  <div>
    <AWSSolutions />
    <WorkItem
      title="Launching BAMAN: Raiffeisen bank’s Strategic Move to Cloud Application"
      description="Ready-made, battle-tested and proven building blocks for rapid set up of well architected infrastructure."
      tags={['Banking', 'Cloud', 'Enterprise', 'Security']}
      imageSrc="/assets/work.png"
    />
  </div>
);

export default AWSection;
