import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import efficiency from "../../public/svg/efficiency.svg";
import expert from "../../public/svg/expert.svg";
import security from "../../public/svg/security.svg";
import MoreClients from "./shared/more-clients";
import AnimatedBorderTrail from "./ui/animated/border-trail-simple";

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

      <MoreClients />
    </section>
  );
}
