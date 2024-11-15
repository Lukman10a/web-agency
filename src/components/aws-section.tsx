import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import GenericWorkItem from "./our-solutions-carousel";

interface SolutionCardProps {
  title: string;
  description: string;
  linkText: string;
  slug: string;
}

export const awsServices = [
  {
    title: "EKS",
    description: "Amazing Kubernetes services",
    slug: "amazon-elastic-kubernetes-service",
    serviceDescription:
      "Super scalable and reliable, that’s one way to describe EKS – Elastic Kubernetes Service. EKS is a go-to choice for deploying & managing containerized applications in the cloud, enabling you to focus on building and running your applications rather than worrying about underlying infrastructure.",
    benefitItems: [
      {
        title: "Managed Service",
        description: "AWS takes care of your underlying infrastructure",
      },
      {
        title: "Super Scalable",
        description: "Easily scale your apps to meet your changing demands.",
      },
      {
        title: "Highly Available",
        description:
          "Built-in redundancy and fault tolerance ensuring uninterrupted availability for your customers",
      },
    ],
    featureItems: [
      {
        title: "Automated Scaling",
        description:
          "Automatically adjust the number of instances based on load.",
      },
      {
        title: "Integrated Monitoring",
        description: "Monitor application performance with built-in tools.",
      },
      {
        title: "Security Features",
        description:
          "Advanced security features including IAM and VPC integration.",
      },
    ],
  },
  {
    title: "RDS",
    description: "Amazon Relational Database Service",
    slug: "amazon-rational-database-service",
    serviceDescription:
      "RDS simplifies the setup, operation, and scaling of relational databases in the cloud.",
    benefitItems: [
      {
        title: "Automated Backups",
        description: "RDS automatically creates backups of your database.",
      },
      {
        title: "High Availability",
        description: "Multi-AZ deployments provide failover support.",
      },
      {
        title: "Read Replicas",
        description: "Scale read traffic with read replicas.",
      },
    ],
    featureItems: [
      {
        title: "Database Migration",
        description: "Easily migrate databases to RDS.",
      },
      {
        title: "Multi-Region Replication",
        description:
          "Replication across different AWS regions for disaster recovery.",
      },
      {
        title: "Performance Insights",
        description: "Visualize database performance metrics.",
      },
    ],
  },
  {
    title: "OSS",
    description: "Amazon OpenSearch Service",
    slug: "open-search-service",
    serviceDescription:
      "OpenSearch Service makes it easy to deploy, secure, and run OpenSearch.",
    benefitItems: [
      {
        title: "Managed Service",
        description: "AWS manages the infrastructure for you.",
      },
      {
        title: "Integrated Security",
        description: "Built-in security features to protect your data.",
      },
      {
        title: "Scalability",
        description: "Easily scale your clusters based on demand.",
      },
    ],
    featureItems: [
      {
        title: "Custom Dashboards",
        description: "Create custom dashboards for your data insights.",
      },
      {
        title: "Data Visualization",
        description: "Visualize your data with powerful analytics tools.",
      },
      {
        title: "Full-Text Search",
        description: "Perform full-text search on your datasets.",
      },
    ],
  },
];

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  linkText,
  slug,
}) => (
  <article className="rounded-xl bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg">
    <h3 className="mb-1 text-sm font-semibold text-gray-500">{title}</h3>
    <p className="mb-4 text-lg font-bold text-gray-900">{description}</p>
    <Link href={`/aws/${slug}`} className="text-neutral-700 underline">
      {linkText}
    </Link>
  </article>
);

const AWSSolutions: React.FC = () => {
  return (
    <section className="mx-6 rounded-lg bg-gradient-to-r from-gradient-100 to-gradient-200 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
          AWS Solutions
        </h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {awsServices.map(({ title, description, slug }) => (
            <SolutionCard
              key={title}
              title={title}
              description={description}
              linkText="Show more"
              slug={slug}
            />
          ))}
        </div>
        <div className="absolute bottom-0 right-10 md:bottom-16 sm:bottom-8 sm:right-1">
          <Image
            src="/assets/Star.png"
            alt="Decorative Star"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
};

const OurWorkAws: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const AwsworkItems = [
    {
      title:
        "Launching BAMAN: Raiffeisen bank's Strategic Move to Cloud Application",
      description:
        "Ready made, battle tested and proven building blocks for rapid set up of well architected infrastructure.",
      tags: ["Banking", "Cloud", "Enterprise", "Security"],
      images: [
        "/assets/3d-tech-1.png",
        "/assets/3d-tech-2.png",
        "/assets/3d-tech-3.png",
      ],
    },
    {
      title: "Real-time Data Processing for Financial Transactions",
      description:
        "A system for processing financial transactions in real-time to enhance accuracy and speed.",
      tags: ["Finance", "Real-time", "Processing"],
      images: [
        "/assets/3d-tech-2.png",
        "/assets/work5.png",
        "/assets/work6.png",
      ],
    },
    {
      title: "Automated Security Compliance Checker",
      description:
        "An automated tool that checks compliance with security standards for cloud applications.",
      tags: ["Security", "Automation", "Compliance"],
      images: [
        "/assets/3d-tech-3.png",
        "/assets/work8.png",
        "/assets/work9.png",
      ],
    },
  ];

  const renderImage = (src: string) => (
    <Image
      src={src}
      alt="Work Example"
      width={1000}
      height={600}
      className="contain h-[400px] rounded-lg"
    />
  );

  const handleNext = () => {
    if (currentSlide < AwsworkItems.length - 1) {
      setDirection("prev");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1);
        setIsTransitioning(false);
      }, 400);
    }
  };

  const currentWorkItem = AwsworkItems[currentSlide];

  return (
    <section className="overflow-hidden">
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isTransitioning
            ? direction === "next"
              ? "translate-x-20 opacity-0"
              : "-translate-x-20 opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <GenericWorkItem
          header=""
          title={currentWorkItem?.title}
          description={currentWorkItem?.description}
          tags={currentWorkItem?.tags}
          images={currentWorkItem?.images}
          renderImage={renderImage}
          currentSlide={0}
        />
      </div>
      <div className="mx-auto mb-8 flex w-2/3 items-center justify-between sm:flex-col">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
            className={`${
              currentSlide === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <Image
              src="/assets/prevArrow.png"
              width={50}
              height={50}
              alt="Previous arrow"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === AwsworkItems.length - 1}
            aria-label="Next Slide"
            className={`${
              currentSlide === AwsworkItems.length - 1
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <Image
              src="/assets/nextArrow.png"
              width={50}
              height={50}
              alt="Next arrow"
            />
          </button>
        </div>
        <div className="sm:mt-4">
          <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-orange-500">
            ALL SOLUTIONS &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

const AWSection: React.FC = () => (
  <>
    <AWSSolutions />
    <OurWorkAws />
  </>
);

export default AWSection;
