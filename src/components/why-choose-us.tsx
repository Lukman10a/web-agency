import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import improvedsecurity from "../../public/assets/improvedsecurity.png";
import efficiency from "../../public/svg/efficiency.svg";
import expert from "../../public/svg/expert.svg";
import security from "../../public/svg/security.svg";
import ArrowIcon from "./icons/arrow";
import MoreClients from "./shared/more-clients";
import AnimatedBorderTrail from "./ui/animated/border-trail-simple";
import { InView } from "./ui/animated/in-view";
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

// Animation Variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2, // Stagger the appearance of each card
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.05, // Slightly zoom the card on hover
    transition: { type: "spring", stiffness: 300 },
  },
};

// Animation for the icon
const iconVariants = {
  hover: {
    rotate: [0, 16, -16, 0], // Subtle rotation effect
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-10">
      {/* Section: Why Choose Us */}

      <h3 className="animate-fade-in mx-auto mb-[1em] text-center font-sora text-[2.5rem] font-semibold leading-tight lg:text-[2rem] md:text-[1.6rem]">
        Why <span className="text-orange-650">Choose</span> Us? <br /> Key
        Benefits for Your Business
      </h3>

      {/* Benefits Section */}
      <section
        className="animate-fade-up mx-auto mb-24 flex w-[90%] max-w-7xl gap-12 p-4 xl:gap-6 lg:flex-col sm:mb-12"
        aria-labelledby="benefits-heading"
      >
        {benefits.map((benefit, index) => (
          <AnimatedBorderTrail key={index}>
            <motion.div
              className="block lg:mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              <article className="group relative flex w-full transform cursor-pointer flex-col items-center space-y-4 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-orange-650 hover:text-white">
                <motion.div variants={iconVariants}>
                  <Image
                    src={benefit.img}
                    alt={benefit.title}
                    className="rounded-full border p-2 transition-transform duration-500 ease-in-out hover:rotate-6"
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="text-[#808080] group-hover:text-black">
                  {benefit.description}
                </p>
              </article>
            </motion.div>
          </AnimatedBorderTrail>
        ))}
      </section>

      {/* Case Study Section */}
      <section
        className="m-10 mx-auto flex w-11/12 max-w-7xl items-center gap-10 overflow-hidden rounded-2xl bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)] p-8 lg:gap-6 lg:p-6 md:flex-col md:p-4"
        aria-labelledby="case-study-heading"
      >
        <div className="w-1/2 flex-1 md:w-full">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={improvedsecurity}
              alt="Security Image"
              className="w-full"
            />
          </InView>
        </div>

        <div className="flex w-1/2 flex-1 flex-col md:w-full md:text-center">
          <InView
            variants={{
              hidden: { opacity: 0, x: 90, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3
              id="case-study-heading"
              className="mb-[.7em] w-[95%] font-sora text-3xl font-semibold xl:text-2xl lg:text-[20px] lg:leading-tight md:w-full"
            >
              Improved Security Posture for a Financial Firm with a Custom
              Security Architecture
            </h3>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: 70, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="mb-[1.5em] w-full">
              We improved a financial firm&apos;s security by implementing a
              custom architecture with advanced threat detection and strict
              access controls, reducing incidents and boosting compliance.
            </p>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Button
              asChild
              className="group flex w-fit items-center gap-4 rounded-3xl border border-[#081348] bg-orange-650 font-sans text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-orange-650 xl:text-[12px] md:w-full sm:mb-4"
            >
              <Link className="h-full" href={"/solutions"}>
                <span>Discover Solutions </span>

                <ArrowIcon />
              </Link>
            </Button>
          </InView>
        </div>
      </section>
      <MoreClients />
    </section>
  );
}
