// Import required dependencies
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SolutionCardProps {
  title: string;
  description: string;
  linkText: string;
  slug: string;
}

interface WorkItemProps {
  title: string;
  description: string;
  tags: string[];
  images: string[];
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
    slug: "/amazon-rational-database-service",
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

// AWS Solutions Card Component
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

// Main AWS Solutions Section

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

// Our Work Section with Carousel
const WorkItem: React.FC<WorkItemProps> = ({
  title,
  description,
  tags,
  images,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Our Work</h2>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 mt-4 text-gray-600">{description}</p>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="relative mx-auto flex justify-center">
          <Image
            src={images[currentSlide]}
            alt="Work Example"
            width={1200}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="mx-14 mt-8 flex justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handlePrev} aria-label="Previous Slide">
              <Image
                src="/assets/prevArrow.png"
                width={50}
                height={50}
                alt="Previous arrow"
              />
            </button>
            <button onClick={handleNext} aria-label="Next Slide">
              <Image
                src="/assets/nextArrow.png"
                width={50}
                height={50}
                alt="Next arrow"
              />
            </button>
          </div>
          <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-orange-500">
            ALL SOLUTIONS &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Component
const AWSection: React.FC = () => (
  <>
    <AWSSolutions />
    <WorkItem
      title="Launching BAMAN: Raiffeisen bank’s Strategic Move to Cloud Application"
      description="Ready-made, battle-tested and proven building blocks for rapid setup of well-architected infrastructure."
      tags={["Banking", "Cloud", "Enterprise", "Security"]}
      images={["/assets/work.png", "/assets/work.png", "/assets/work.png"]} // Add paths for carousel
    />
  </>
);

export default AWSection;
