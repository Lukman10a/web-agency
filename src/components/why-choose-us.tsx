import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

// import cloud from "../../public/assets/cloud-managed-services.svg";
import management from "../../public/assets/management.jpg";
import migration from "../../public/assets/migration.jpg";
import efficiency from "../../public/svg/efficiency.svg";
import expert from "../../public/svg/expert.svg";
import security from "../../public/svg/security.svg";
import MoreClients from "./shared/our-clients";
import AnimatedBorderTrail from "./ui/animated/border-trail-simple";

const benefits = [
  {
    img: management,
    title: "Cloud Management",
    description:
      "Teverse provides cloud management solutions to optimize performance, boost scalability, and drive innovation.",
    link: "/services",
  },
  {
    img: security,
    title: "Cloud Migration",
    description:
      "Teverse streamlines cloud migration for a smooth, secure, and efficient transition.",
    link: "/services/professional-services/aws-migration",
  },
  {
    img: expert,
    title: "AWS Map",
    description:
      "Teverse accelerates your cloud journey with AWS MAP through tailored support, cost optimization, and expert guidance.",
    link: "/services/professional-services/aws-modernization",
  },
  {
    img: efficiency,
    title: "Gen AI",
    description:
      "Teverse leverages Generative AI to drive innovation, automate processes, and deliver tailored solutions.",
    link: "/solutions/generative-ai",
  },
  {
    img: migration,
    title: "IDAM Migration",
    description:
      "Teverse enables secure IDAM migration, improving management while reducing risks and downtime.",
    link: "/services/idam#idam-migration",
  },
  {
    img: expert,
    title: "IGA",
    description:
      "Teverse delivers IGA solutions for secure, compliant, and efficient access management.",
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
        Customers <span className="text-orange-650">trust</span> us with
      </h3>

      {/* Benefits Section */}
      <section
        className="animate-fade-up mx-auto mb-24 grid w-[90%] max-w-7xl grid-cols-3 items-stretch gap-12 p-4 xl:gap-6 md:grid-cols-2 sm:mb-12 sm:grid-cols-1"
        aria-labelledby="benefits-heading"
      >
        {benefits.map((benefit, index) => (
          <AnimatedBorderTrail key={index}>
            <motion.div
              className="h-full lg:mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              <Link href={benefit.link} passHref>
                <article className="group relative flex w-full transform cursor-pointer flex-col items-center space-y-4 rounded-2xl p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-orange-650 hover:text-white">
                  <motion.div variants={iconVariants}>
                    <Image
                      src={benefit.img}
                      alt={benefit.title}
                      width={50}
                      height={50}
                      className="size-16 rounded-full border p-2 transition-transform duration-500 ease-in-out hover:rotate-6"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-semibold sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-[#808080] group-hover:text-black">
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
