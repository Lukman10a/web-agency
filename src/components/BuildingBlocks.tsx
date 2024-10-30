import Image from "next/image";
import React from "react";

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
    <section className="bg-gradient-to-r from-gradient-100 to-gradient-200 py-16 rounded-3xl mx-10">
      <div className="max-w-7xl mx-auto px-14 sm:px-6 lg:px-8 relative">

    <section className="mx-auto rounded-3xl bg-gradient-to-r from-gradient-100 to-gradient-200 py-16">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">

        {/* Heading Section */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            LARA building blocks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            All of the components mentioned below are defined using
            Infrastructure as Code, allowing for further customization and
            reusability in different environments.
          </p>
        </div>

        {/* Building Blocks Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 grid-cols-2 sm:mx-auto px-4 md:px-16 relative">

        <div className="relative grid grid-cols-2 gap-6 px-4 md:grid-cols-2 md:px-16 sm:grid-cols-1 sm:px-2">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg sm:bg-gray-100 sm:shadow-lg"
            >
              <div className="mb-4 items-center space-y-2 sm:text-center">
                <Image
                  src="/assets/darkmark.png"
                  width={20}
                  height={20}
                  alt="check mark"
                />
                <h4 className="text-lg font-semibold text-gray-900 sm:text-left">
                  {block.title}
                </h4>
              </div>
              <p className="text-gray-600 sm:text-left">{block.description}</p>

              {/* Star image behind the last item in the second column */}
              {index === blocks.length - 1 && (
                <div className="absolute -bottom-8 right-1 xl:-bottom-24 xl:right-24 lg:-bottom-20 lg:right-20 md:-bottom-16 md:right-8 sm:-bottom-8 sm:right-1">
                  <Image
                    src="/assets/Star.png"
                    alt="Star"
                    width={100} // Smaller size for mobile
                    height={100}
                    className="xl:h-[180px] xl:w-[180px] lg:h-[150px] lg:w-[150px] md:h-[120px] md:w-[120px] sm:h-[100px] sm:w-[100px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="rounded-full bg-orange-650 px-6 py-3 font-semibold text-white shadow-md ring-1 ring-darkblue-850 transition duration-300 ease-in-out hover:bg-orange-600">
            See More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LARABuildingBlocks;
