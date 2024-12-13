import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import cloud from "../../public/assets/cloud-managed-services.svg";
// import efficiency from "../../public/svg/efficiency.svg";
import expert from "../../public/svg/expert.svg";
import security from "../../public/svg/security.svg";
import MoreClients from "./shared/more-clients";
import AnimatedBorderTrail from "./ui/animated/border-trail-simple";

const benefits = [
  {
    img: cloud,
    title: "Cloud Management",
    description:
      "Optimize operations, cut costs, and focus on growth with our cloud and security solutions.",
    link: "/services", // Add link
  },
  {
    img: security,
    title: "Cloud Migration",
    description:
      "Stay protected from threats and ensure compliance with GDPR, HIPAA, and more.",
    link: "/services/professional-services/aws-migration", // Add link
  },
  {
    img: expert,
    title: "AWS Map",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
    link: "/services/professional-services/aws-modernization",
  },
  {
    img: expert,
    title: "Gen AI",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
    link: "/solutions/generative-ai",
  },
  {
    img: expert,
    title: "IDAM Migration",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
    link: "/services/idam#idam-migration",
  },
  {
    img: expert,
    title: "IGA",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
    link: "/solutions/idam/iga",
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
        className="animate-fade-up mx-auto mb-24 grid w-[90%] max-w-7xl grid-cols-3 gap-12 p-4 xl:gap-6 md:grid-cols-2 sm:mb-12 sm:grid-cols-1"
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
              <Link href={benefit.link} passHref>
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
              </Link>
            </motion.div>
          </AnimatedBorderTrail>
        ))}
      </section>

      <MoreClients />
    </section>
  );
}
