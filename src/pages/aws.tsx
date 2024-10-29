import ArrowIcon from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import awsHero from "../../public/assets/awsHero.png";
import sysops from "../../public/svg/sysops.svg";
import securityaws from "../../public/svg/securityaws.svg";
import solution from "../../public/svg/solution.svg";
import aws from "../../public/svg/aws.svg";
import data from "../../public/svg/data.svg";
import devops from "../../public/svg/devops.svg";
import mark from "../../public/svg/mark.svg";
import Cardimage1 from "../../public/assets/cardimage1.png";
import contact from "../../public/assets/contact.png";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Testimonials from "@/components/what-client";
import ContactSection from "@/components/lets-talk";
import CategoryButtons from "@/components/shared/category-buttons";
import AWSection from "@/components/AWSection";
import AwsLara from "@/components/AwsLara";
import LARA from "@/components/shared/lara";

export default function AWS() {
  const cardData = [
    {
      title: "AWS enable us to",
      description: [
        "Involve their technical experts, architects or product teams",
        "Get free credits for our customers",
        "Launch co-funding programs such as Activate, MAP, POA etc.",
        "Resell AWS services",
      ],
      imageSrc: Cardimage1,
    },
    {
      title: "AWS continuously certifies our",
      description: [
        "Engineers and AWS Well Architected Design",
        "Competencies, Service Deliveries and Specializations",
        "Case Studies and References.",
      ],
      imageSrc: Cardimage1,
    },
  ];

  const categories = ["ALL", "ENTERPRISES", "KICKSTART"];

  const consultingServices = [
    "Performing detailed assessment and roadmap planning",
    "Rapid deployment of your future infra - using LARA",
    "Obtain IaC with full codebase - cost and performance optimized",
    "Helping you get cloud-ready (replatform or refactor)",
    "Ensuring smooth application onboarding process",
  ];
  const consultingServices2 = [
    "Expert consulting in order to support the operation",
    "Co-funding with AWS Migrations Acceleration Program (MAP)",
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="flex items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12 lg:gap-6 md:flex-col">
        <article className="space-y-10">
          <h1 className="animate-fade-in-up font-sora text-6xl font-extrabold lg:text-5xl">
            Amazon Web Services
          </h1>
          <p className="animate-fade-in-up font-sans text-xl font-medium delay-200">
            Labyrinth Labs is an Advanced Service Partner
          </p>
          <Button className="flex w-fit transform items-center gap-4 rounded-2xl border border-[#081348] bg-orange-650 text-white transition duration-500 hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </article>
        <Image
          src={awsHero}
          alt="case-study-hero"
          className="animate-fade-in-up delay-500 lg:w-[400px]"
        />
      </header>

      {/* AWS Certifications Section */}
      <section className="space-y-6 p-12">
        <h3 className="text-center font-sora text-5xl font-semibold text-[#262626] md:text-4xl sm:text-3xl">
          We’re AWS certified
        </h3>
        <div className="flex flex-wrap justify-center sm:gap-4">
          {[sysops, securityaws, solution, aws, devops, data].map(
            (cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }} // Initial state
                animate={{ opacity: 1, scale: 1 }} // Animate to these values
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for each item
              >
                <Image
                  src={cert}
                  alt="AWS certification"
                  className="transition-transform duration-300 ease-in-out hover:scale-105" // Optional hover effect
                />
              </motion.div>
            ),
          )}
        </div>
      </section>

      {/* Why is this Important Section */}
      <section className="bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)] p-8">
        <h1 className="py-12 text-center font-sora text-5xl font-bold text-[#262626] md:text-4xl sm:text-3xl">
          Why is this important?
        </h1>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`mx-auto mb-[1.5em] flex max-w-[95%] items-center justify-between rounded-2xl border border-[#fcfcf] bg-[#fcfcfc] p-[1.2em] md:gap-4 sm:flex-col ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="mb-0 w-2/5 md:w-1/2 sm:w-full">
              <Image
                src={card.imageSrc}
                alt="Card image"
                className="mr-4 w-full"
                width={500}
                height={500}
              />
            </div>
            <div className="space-y-4 p-4">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <ul className="space-y-4">
                {card.description.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Image src={mark} alt="mark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Categories Section */}
      <section>
        <CategoryButtons categories={categories} />
        <div className="space-y-4 px-8 pb-4 text-center">
          <h3 className="font-sora text-4xl font-medium sm:text-3xl">
            Cloud success. With AWS
          </h3>
          <p className="px-16 text-2xl lg:text-xl sm:px-6">
            We guide companies on their journey when moving their product to
            SaaS or planning an on-premise-to-cloud or cloud-to-cloud migration
            to AWS.
          </p>
        </div>

        <div className="grid grid-cols-2 place-items-center p-12 lg:grid-cols-1">
          <Image
            src={contact}
            alt="Contact us"
            className="w-[500px] md:py-2 sm:px-6"
          />
          <div className="flex gap-4 lg:flex-col lg:p-10">
            <div className="space-y-3">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="space-y-2 rounded-lg border border-[#081348] p-3"
                >
                  <Image src={mark} alt="mark" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {consultingServices2.map((service, index) => (
                <div
                  key={index}
                  className="space-y-2 rounded-lg border border-[#081348] p-3"
                >
                  <Image src={mark} alt="mark" />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWSection />
      <AwsLara />
      <LARA />

      <div className="bg-white p-4">
        <div className="rounded-xl bg-gradient-to-r from-gradient-100 to-gradient-200">
          <Testimonials />
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
