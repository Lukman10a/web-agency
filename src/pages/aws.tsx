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
import React from "react";
import Image from "next/image";

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
        "Case Studies and References",
      ],
      imageSrc: Cardimage1,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="flex md:flex-col items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <article className="space-y-10">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up">
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
          className="animate-fade-in-up delay-500"
        />
      </section>

      {/*AWS Certifications Section */}
      <section className="space-y-6 p-12">
        <h3 className="text-[#262626] text-center font-sora text-5xl font-semibold">
          We’re AWS certified
        </h3>
        <div className="flex justify-center flex-wrap">
          <Image src={sysops} alt="sysops" />
          <Image src={securityaws} alt="securityaws" />
          <Image src={solution} alt="solution" />
          <Image src={aws} alt="aws" />
          <Image src={devops} alt="devops" />
          <Image src={data} alt="data" />
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 149, 87, 0.1) 0%, rgba(8, 19, 72, 0.1) 100%)",
        }}
        className="p-8"
      >
        <h1 className="text-center py-12 text-5xl font-sora font-bold text-[#262626]">
          Why is this important?
        </h1>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-between sm:flex-col  md:gap-4 bg-[#fcfcfc] border border-[#fcfcf] p-[1.2em] rounded-2xl mx-auto max-w-[95%] mb-[1.5em] ${
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
              <div className=" space-y-8">
                {card.description.map((item, i) => (
                  <div
                    key={i}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <Image src={mark} alt="mark" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
