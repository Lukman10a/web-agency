import Image from "next/image";
import React from "react";
import efficiency from "../../public/images/efficiency.svg";
import security from "../../public/images/security.svg";
import expert from "../../public/images/expert.svg";
import securityImg from "../../public/images/securityImg.png";
import lightbox from "../../public/images/lightbox.svg";
import featherdev from "../../public/images/featherdev.svg";
import boltshift from "../../public/images/boltshift.svg";
import globalbank from "../../public/images/globalbank.svg";
import ArrowIcon from "./icons/arrow";
import { Button } from "./ui/button";

const benefits = [
  {
    img: efficiency,
    title: "Increased Efficiency and Cost Savings",
    description:
      "Optimize operations, cut costs, and focus on growth with our cloud and security solutions.",
  },
  {
    img: security,
    title: "Enhanced Security and Compliance",
    description:
      "Stay protected from threats and ensure compliance with GDPR, HIPAA, and more.",
  },
  {
    img: expert,
    title: "Expert Guidance & 24/7 Support",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10">
      {/* Section: Why Choose Us */}

      <h2 className="text-5xl md:text-3xl text-center font-bold font-sora">
        <span className="block">Why Choose Us? Key</span>
        <span className="block">Benefits for Your Business</span>
      </h2>

      {/* Benefits Section */}
      <section className="flex gap-10 p-16" aria-labelledby="benefits-heading">
        {benefits.map((benefit, index) => (
          <article
            key={index}
            className="mx-4 flex flex-col items-center space-y-4 text-center"
          >
            <Image src={benefit.img} alt={benefit.title} />
            <h3 className="font-semibold text-2xl">{benefit.title}</h3>
            <p className="text-[#808080]">{benefit.description}</p>
          </article>
        ))}
      </section>

      {/* Case Study Section */}
      <section
        className="flex items-center m-10 rounded-lg gap-10 p-4 bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)]"
        aria-labelledby="case-study-heading"
      >
        <div className="flex-1">
          <Image src={securityImg} alt="Security Image" className="w-[550px]" />
        </div>

        <div className="space-y-8 flex-1">
          <h3
            id="case-study-heading"
            className="text-5xl md:text-3xl font-semibold"
          >
            Improved Security Posture for a Financial Firm with a Custom
            Security Architecture
          </h3>
          <p>
            We improved a financial firm&apos;s security by implementing a
            custom architecture with advanced threat detection and strict access
            controls, reducing incidents and boosting compliance.
          </p>
          <Button className="border  border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white ">
            <span>Discover Solution</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>

      {/* Leading Brands Section */}
      <section
        className="py-6 pt-12 space-y-4 text-center"
        aria-labelledby="brands-heading"
      >
        <h2
          id="brands-heading"
          className="text-5xl capitalize md:text-3xl font-medium mb-4 font-sora"
        >
          Leading Brands Trust Us
        </h2>
        <div className="flex justify-center gap-12 flex-wrap">
          {[lightbox, featherdev, boltshift, globalbank].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="w-36"
            />
          ))}
        </div>
      </section>
    </section>
  );
}
