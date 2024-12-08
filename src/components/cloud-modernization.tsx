import React from "react";

import Image from "next/image";

import containerization from "/public/svg/containerization.svg";
import microservices from "/public/svg/microservices.svg";
import wifi from "/public/svg/wifi.svg";
import { motion } from "framer-motion";

import { HighlightedText } from "./ui/animated/highlight-text";

interface ServiceData {
  icon: string; // URL or SVG path for the icon
  title: string;
  description: string;
  showButton: boolean;
}

const services: ServiceData[] = [
  {
    icon: containerization,
    title: "Containerization",
    description:
      "Containers on AWS improve developer efficiency, automate deployments, and reduce operational overhead. With our help, you can ensure your images are configured correctly for your workloads and leverage AWS’s containerization tools, including Elastic Container Service (ECS), Elastic Container Registry (ECR), Fargate, and Elastic Kubernetes Services (EKS). ",
    showButton: true,
  },
  {
    icon: wifi,
    title: "Serverless Computing",
    description:
      "Serverless architectures enable your applications to scale with high performance and reliability. Serverless computing on AWS removes the burden of managing your servers and simplifies your operations while allowing new optimizations of your architecture",
    showButton: true,
  },
  {
    icon: microservices,
    title: "Microservices",
    description:
      "Microservices is an approach which takes monolithic, tightly coupled applications and breaks them into components which operate independently for greater efficiency, scalability, and resiliency. While microservice architectures have gotten a bad rep for adding complexity, when designed and implemented correctly they do the opposite, simplifying your operations while improving performance.",
    showButton: false,
  },
];

const CloudModernization: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl py-14 md:p-12">
      <div className="text-left">
        <h4 className="mb-2 text-sm font-bold uppercase text-gray-700">
          AWS Cloud Modernization Services
        </h4>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-3xl font-bold text-black md:text-4xl"
        >
          Experience the Advantages of Operating in a{" "}
          <HighlightedText
            highlightColor="#faa0476a"
            highlightHeight="40%"
            highlightClassName="z-[-1]"
            delay={1.5}
            className="rounded"
          >
            Modernized
          </HighlightedText>{" "}
          Cloud Environment
        </motion.h2>
        <p className="text-2xl text-gray-700 md:text-base">
          Modernizing your applications and infrastructure improves scalability
          and increases your fault-tolerance while streamlining operations and
          costs. Modernized workloads can rapidly accommodate changes in demand,
          infrastructure events, and compliance requirements like CPRA, GDPR, or
          HIPAA.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 sm:flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 rounded-lg bg-white px-4 py-14 text-left shadow-md"
          >
            <Image
              width={60}
              height={60}
              src={service.icon}
              alt={service.title}
              //   className="h-12 w-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
            {service.showButton && (
              <button className="mt-4 rounded-full bg-black px-4 py-2 text-lg font-medium text-white">
                Learn More
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudModernization;
