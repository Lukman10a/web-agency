import React, { useState } from "react";

import Image from "next/image";

const blocks = [
  {
    title: "AWS Organization and access management",
    description:
      "Centrally govern all your environments, manage access rights, permissions, and policies.",
  },
  {
    title: "VPC and related services",
    description:
      "Network foundation, app and edge networking, hybrid connectivity, and security.",
  },
  {
    title: "Kubernetes",
    description:
      "Operate Kubernetes on your own infrastructure, experience ultimate scaling and cost savings.",
  },
  {
    title: "Observability",
    description:
      "Grafana, Loki, Thanos, Tempo, Opensearch, Elastic. You name it, we have it.",
  },
  {
    title: "Serverless Computing",
    description:
      "Build and deploy serverless applications with AWS Lambda, API Gateway, and more.",
  },
  {
    title: "Data Lakes and Analytics",
    description:
      "Collect, store, and analyze data at scale with AWS Lake Formation, Glue, and Redshift.",
  },
];

const LARABuildingBlocks: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine the blocks to show based on `showAll` state
  const visibleBlocks = showAll ? blocks : blocks.slice(0, 4);

  return (
    <section className="mx-10 rounded-3xl bg-gradient-to-r from-gradient-100 to-gradient-200 py-16">
      <div className="relative mx-auto max-w-7xl px-14 lg:px-8 sm:px-6">
        {/* Heading Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            LARA Building Blocks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            All of the components mentioned below are defined using
            Infrastructure as Code, allowing for further customization and
            reusability in different environments.
          </p>
        </div>

        {/* Building Blocks Grid */}
        <div className="grid grid-cols-2 gap-6 px-4 md:px-4 sm:grid-cols-1">
          {visibleBlocks.map((block, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg sm:bg-gray-100"
            >
              <div className="mb-4 flex items-center space-y-2 sm:text-center">
                <Image
                  src="/assets/darkmark.png"
                  width={20}
                  height={20}
                  alt="check mark"
                />
                <h4 className="ml-2 text-lg font-semibold text-gray-900 sm:text-left">
                  {block.title}
                </h4>
              </div>
              <p className="text-gray-600 sm:text-left">{block.description}</p>

              {/* Star image behind the last item in the grid */}
              {index === visibleBlocks.length - 1 && (
                <div className="absolute -bottom-8 right-1 xl:-bottom-24 xl:right-24 lg:-bottom-20 lg:right-20 md:-bottom-16 md:right-8 sm:-bottom-8 sm:right-1">
                  <Image
                    src="/assets/Star.png"
                    alt="Star"
                    width={180} // Adjust size based on screen width
                    height={180}
                    className="xl:h-[180px] xl:w-[180px] lg:h-[150px] lg:w-[150px] md:h-[120px] md:w-[120px] sm:h-[100px] sm:w-[100px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md ring-1 ring-orange-700 transition duration-300 ease-in-out hover:bg-orange-500"
          >
            {showAll ? "Show Less" : "See More"} &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LARABuildingBlocks;
