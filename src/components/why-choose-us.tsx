import Image from "next/image";
import React from "react";
import efficiency from "../../public/svg/efficiency.svg";
import security from "../../public/svg/security.svg";
import expert from "../../public/svg/expert.svg";
import improvedsecurity from "../../public/assets/improvedsecurity.png";
import ArrowIcon from "./icons/arrow";
import { Button } from "./ui/button";
import { PartnersSlider } from "./shared/partners-slider";
import MoreClients from "./more-clients";

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

      <h1 className="mx-auto mb-[1em] text-center font-sora text-[2.5rem] font-semibold leading-tight lg:text-[2rem] md:text-[1.6rem]">
        Why <span className="text-orange-650">Choose</span> Us? <br /> Key
        Benefits for Your Business
      </h1>

      {/* Benefits Section */}
      <section
        className="mx-auto mb-24 flex w-[90%] max-w-[1200px] gap-12 p-4 xl:gap-6 lg:flex-col sm:mb-12"
        aria-labelledby="benefits-heading"
      >
        {benefits.map((benefit, index) => (
          <article
            key={index}
            className="rounde mx-auto flex max-w-[400px] flex-col items-center space-y-4 rounded-2xl border p-8 text-center"
          >
            <Image
              src={benefit.img}
              alt={benefit.title}
              className="rounded-full border p-2"
            />
            <h3 className="text-2xl font-semibold sm:text-xl">
              {benefit.title}
            </h3>
            <p className="text-[#808080]">{benefit.description}</p>
          </article>
        ))}
      </section>

      {/* Case Study Section */}
      <section
        className="m-10 mx-auto flex w-11/12 max-w-[1300px] items-center gap-10 rounded-2xl bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)] px-28 py-8 xl:px-16 lg:gap-6 lg:px-8 lg:py-4 md:flex-col md:py-8 sm:p-6"
        aria-labelledby="case-study-heading"
      >
        <div className="w-1/2 flex-1 md:w-full">
          <Image
            src={improvedsecurity}
            alt="Security Image"
            className="w-full"
          />
        </div>

        <div className="flex w-1/2 flex-1 flex-col md:w-full md:text-center">
          <h3
            id="case-study-heading"
            className="mb-[.7em] w-[95%] font-sora text-3xl font-semibold xl:text-2xl lg:text-[20px] lg:leading-tight md:w-full"
          >
            Improved Security Posture for a Financial Firm with a Custom
            Security Architecture
          </h3>
          <p className="mb-[1.5em] w-full font-sora text-[14px] xl:text-[12px]">
            We improved a financial firm&apos;s security by implementing a
            custom architecture with advanced threat detection and strict access
            controls, reducing incidents and boosting compliance.
          </p>
          <Button className="flex w-fit items-center gap-4 rounded-3xl border border-[#081348] bg-orange-650 font-sans text-white xl:text-[12px] md:w-full sm:mb-4">
            <span>Discover Solutions</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>

      <MoreClients />
    </section>
  );
}
