import AwsLara from "@/components/AwsLara";
import ContactSection from "@/components/lets-talk";
import CallToAction from "@/components/shared/callToAction";
import LARA from "@/components/shared/lara";
import Image from "next/image";
import black_mark from "/public/svg/black_mark.svg";
import React from "react";
import EksAWSection from "@/components/EksAws";
import { awsServices } from "@/components/AWSection";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { solution } = router.query;

  const awsService = awsServices.find((service) => service.slug === solution);

  return (
    <section>
      <section>
        <div className="flex flex-col items-center space-y-6 p-20 text-center md:p-12 sm:p-4">
          <p className="cursor-pointer rounded-full border border-[#808080] px-3 py-2 font-sans text-lg text-[#808080] sm:text-base">
            AWS
          </p>
          <h1 className="text-5xl md:text-4xl sm:text-3xl">
            {awsService?.title}
          </h1>
          <p>{awsService?.serviceDescription}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 p-8">
        <h2 className="text-xl font-semibold text-orange-600">Benefits</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {awsService?.benefitItems.map((benefit, index) => (
            <Benefit
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <h2 className="text-xl font-semibold text-orange-600">Benefits</h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {awsService?.featureItems.map((fetaure, index) => (
            <Benefit
              key={index + 6}
              title={fetaure.title}
              description={fetaure.description}
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
