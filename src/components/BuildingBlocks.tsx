import Image from 'next/image';
import React from 'react';

const LARABuildingBlocks: React.FC = () => {
  const blocks = [
    {
      title: "AWS Organization and access management",
      description:
        "Centrally govern your all environments, manage access rights, permissions and policies.",
    },
    {
      title: "VPC and related services",
      description:
        "Network foundation, app and edge networking, hybrid connectivity and security.",
    },
    {
      title: "AWS Organization and access management",
      description:
        "Centrally govern your all environments, manage access rights, permissions and policies.",
    },
    {
      title: "VPC and related services",
      description:
        "Network foundation, app and edge networking, hybrid connectivity and security.",
    },
    {
      title: "Kubernetes",
      description:
        "Operate kubernetes on your own infrastructure, experience ultimate scaling and cost savings.",
    },
    {
      title: "Observability",
      description:
        "Grafana, Loki, Thanos, Tempo, Opensearch, Elastic. You name it, we have it.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gradient-100 to-gradient-200 py-16 mx-auto rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            LARA building blocks
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            All of the components mentioned below are defined using
            Infrastructure as Code, allowing for further customization and
            reusability in different environments.
          </p>
        </div>

        {/* Building Blocks Grid */}
<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 px-4 md:px-16 relative">
  {blocks.map((block, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative"
    >
      <div className="items-center mb-4 space-y-2">
        <Image src="/assets/darkmark.png" width={20} height={20} alt="check mark" />
        <h4 className="text-lg font-semibold text-gray-900">
          {block.title}
        </h4>
      </div>
      <p className="text-gray-600">{block.description}</p>

      {/* Star image behind the last item in the second column */}
      {index === blocks.length - 1 && (
        <div className="absolute -bottom-8 right-1 sm:-bottom-8 sm:right-1 md:-bottom-16 md:right-8 lg:-bottom-20 lg:right-20 xl:-bottom-24 xl:right-24">
          <Image
            src="/assets/Star.png"
            alt="Star"
            width={100} // Smaller size for mobile
            height={100}
            className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]"
          />
        </div>
      )}
    </div>
  ))}
</div>


        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-orange-650 text-white font-semibold rounded-full ring-1 ring-darkblue-850 shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
            See More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LARABuildingBlocks;
