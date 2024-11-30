import Image from "next/image";
import React from "react";
import containerization from "/public/svg/containerization.svg"
import wifi from "/public/svg/wifi.svg"
import microservices from "/public/svg/microservices.svg"
import { HighlightedText } from "./ui/animated/highlight-text";
import { motion } from "framer-motion";

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
    <section className="max-w-6xl mx-auto py-14 md:p-12">
      <div className=" text-left">
        <h4 className="text-sm uppercase font-bold text-gray-700 mb-2">
          AWS Cloud Modernization Services
        </h4>
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-black mb-4">
          Experience the Advantages of Operating in a{" "}
          <HighlightedText 
          highlightColor="#47a1fa"
          highlightHeight="100%"
          highlightClassName="z-[-1] rounded-lg"
          delay={1.5}
          className="px-2 rounded">Modernized</HighlightedText>{" "}
          Cloud Environment
        </motion.h2>
        <p className="text-gray-700 text-2xl md:text-base">
          Modernizing your applications and infrastructure improves scalability
          and increases your fault-tolerance while streamlining operations and
          costs. Modernized workloads can rapidly accommodate changes in demand,
          infrastructure events, and compliance requirements like CPRA, GDPR, or
          HIPAA.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:flex-wrap grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg px-4 py-14 space-y-4 text-left"
          >
            <Image
              width={60}
              height={60}
              src={service.icon}
              alt={service.title}
            //   className="h-12 w-12 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-xl text-gray-600 mt-2">{service.description}</p>
            {service.showButton && (
              <button className="mt-4 px-4 py-2 bg-black text-white text-lg font-medium rounded-full">
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
