import AwsLara from "@/components/AwsLara";
import ContactSection from "@/components/lets-talk";
import CallToAction from "@/components/shared/callToAction";
import LARA from "@/components/shared/lara";
import Image from "next/image";
import black_mark from "../../public/svg/black_mark.svg";
import React from "react";
import EksAWSection from "@/components/EksAws";

// Benefit Component
const Benefit = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-4 p-4">
    <Image src={black_mark} alt="black_mark" />
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function EKSSolution() {
  const benefitItems = [
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
  ];

  return (
    <section>
      <section>
        <div className="flex flex-col items-center space-y-6 p-20 text-center md:p-12 sm:p-4">
          <p className="cursor-pointer rounded-full border border-[#808080] px-3 py-2 font-sans text-lg text-[#808080] sm:text-base">
            AWS
          </p>
          <h1 className="text-5xl md:text-4xl sm:text-3xl">
            Amazon Elastic Kubernetes Service
          </h1>
          <p>
            Super scalable and reliable, that’s one way to describe EKS –
            Elastic Kubernetes Service. EKS is a go-to choice for deploying &
            managing containerized applications in the cloud, enabling you to
            focus on building and running your applications rather than worrying
            about underlying infrastructure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 p-8">
        <h2 className="text-xl font-semibold text-orange-600">Benefits</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {benefitItems.map((benefit, index) => (
            <Benefit
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
          {benefitItems.map((benefit, index) => (
            <Benefit
              key={index + 3}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <h2 className="text-xl font-semibold text-orange-600">Benefits</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {benefitItems.map((benefit, index) => (
            <Benefit
              key={index + 6}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
          {benefitItems.map((benefit, index) => (
            <Benefit
              key={index + 9}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <h2 className="mt-8 text-lg font-bold">Our Experience</h2>
        <p className="text-gray-600">
          We heavily utilise EKS in most of our customer infrastructures. It
          allows them to scale their services to virtually infinite proportions,
          accommodate spikes in load and make the whole setup as efficient as
          possible. High availability, reliability, scalability, and cost
          efficiency are the reasons we choose EKS to host our customer
          services.
        </p>
      </section>
      <EksAWSection />
      <div className="flex justify-center lg:px-6">
        <CallToAction />
      </div>
      <AwsLara />
     
      <LARA />
      <ContactSection />
    </section>
  );
}
