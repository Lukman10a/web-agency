import React from "react";

import Image from "next/image";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: "/assets/softwareCloud2.png",
    title: "AWS Migrations",
    description:
      "Assess your infrastructure, Mobilize to establish your workloads, Migrate & Modernize all remaining workloads, tune for production",
    link: "/services/aws-migrations",
  },
  {
    icon: "/assets/serviceGrid2.png",
    title: "AWS Modernization",
    description:
      "Improve deployments and operations with containerization, serverless computing, microservices",
    link: "/services/aws-modernization",
  },
  {
    icon: "/assets/softwareCloud3.png",
    title: "Data, Analytics & AI/ML",
    description:
      "Data engineering and analytics, visualization, data science, generative AI and ML algorithms, AI/ML operations",
    link: "/services/data-analytics",
  },
  {
    icon: "/assets/serviceGrid4.png",
    title: "DevOps",
    description:
      "Streamline and secure your development pipeline with Infrastructure as Code, CI/CD",
    link: "/services/devops",
  },
  {
    icon: "/assets/softwareCloud4.png",
    title: "Cloud-Native Application Development",
    description:
      "Build greenfield applications with cloud-native services and modernize legacy codebases",
    link: "/services/cloud-native",
  },
  {
    icon: "/assets/softwareCloud.png",
    title: "AWS Security & Compliance",
    description:
      "Benchmark security and compliance objectives, pen test your environment, and establish disaster recovery processes",
    link: "/services/security-compliance",
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={service.icon}
                  width={40}
                  height={40}
                  alt={service.title}
                />
                <h3 className="ml-4 text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-block text-center bg-orange-650 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
