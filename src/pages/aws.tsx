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
import black_mark from "../../public/svg/black_mark.svg";
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

  interface Lara {
    title: string;
    quote: string;
    image: string;
  }

  const lara: Lara[] = [
    {
      image: black_mark,
      title: "AWS Organization and access management",
      quote:
        "Centrally govern your all environments, manage access rights, permissions and policies.",
    },
    {
      image: black_mark,
      title: "VPC and related services",
      quote:
        "Network foundation, app and edge networking, hybrid connectivity and security.",
    },
    {
      image: black_mark,
      title: "AWS Organization and access management",
      quote:
        "Centrally govern your all environments, manage access rights, permissions and policies.",
    },
    {
      image: black_mark,
      title: "VPC and related services",
      quote:
        "Network foundation, app and edge networking, hybrid connectivity and security.",
    },
    {
      image: black_mark,
      title: "Kubernetes",
      quote:
        "Operate kubernetes on your own infrastructure, experience ultimate scaling and cost savings.",
    },
    {
      image: black_mark,
      title: "Observability",
      quote:
        "Grafana, Loki, Thanos, Tempo, Opensearch, Elastic. You name it, we have it.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="flex md:flex-col items-center gap-10 lg:gap-6 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <article className="space-y-10">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up lg:text-5xl">
            Amazon Web Services
          </h1>
          <p className="font-medium text-xl animate-fade-in-up delay-200 font-sans">
            Labyrinth Labs is an Advanced Service Partner
          </p>
          <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
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
        <h3 className="text-[#262626] text-center font-sora text-5xl font-semibold md:text-4xl sm:text-3xl">
          We’re AWS certified
        </h3>
        <div className="flex justify-center flex-wrap sm:gap-4">
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
            )
          )}
        </div>
      </section>

      {/* Why is this Important Section */}
      <section className="p-8 bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)]">
        <h1 className="text-center py-12 text-5xl md:text-4xl sm:text-3xl font-sora font-bold text-[#262626]">
          Why is this important?
        </h1>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-between sm:flex-col md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[95%] mb-[1.5em] ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-2/5 md:w-1/2 sm:w-full mb-0">
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
                  <li key={i} className="text-gray-700 flex items-center gap-2">
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
        <div className="text-center pb-4 px-8 space-y-4">
          <h3 className="font-sora font-medium text-4xl sm:text-3xl">
            Cloud success. With AWS
          </h3>
          <p className="text-2xl px-16 lg:text-xl sm:px-6">
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
          <div className="flex gap-4 lg:p-10 lg:flex-col">
            <div className="space-y-3">
              {consultingServices.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[#081348] p-3 space-y-2"
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
                  className="rounded-lg border border-[#081348] p-3 space-y-2"
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
      <section className="bg-white p-4">
        <section className="rounded-xl bg-gradient-to-r from-gradient-100 to-gradient-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                LARA building blocks{" "}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                All of the componentes mentioned below are defined using
                Infrastructure as Code, allowing for further customization and
                reusability in different environments.{" "}
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 grid-cols-2">
              {lara.map((item, index) => (
                <article
                  key={index}
                  className="bg-white space-y-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image src={black_mark} alt="black_mark" />
                  <h3 className="text-[#262626] font-bold text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-[#262626] ">{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
              <span>SEE MORE</span>
              <ArrowIcon />
            </Button>
          </div>
        </section>
      </section>

      <div className="bg-white p-4 ">
        <div className="rounded-xl bg-gradient-to-r from-gradient-100 to-gradient-200">
          <Testimonials />
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
