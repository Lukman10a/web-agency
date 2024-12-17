import React from "react";

import Image from "next/image";

import zeco from "/public/assets/zeco.png";
import aws from "/public/svg/aws-logo.svg";
// import aws_grey from "/public/svg/aws_grey.svg";
import azure from "/public/svg/azure.svg";
// import azure_grey from "/public/svg/azure_grey.svg";
import gcp from "/public/svg/gcp.svg";
// import okta_grey from "/public/svg/okta_grey.svg";
import sailpoint from "/public/svg/sailpoint.svg";
// import sailpoint_grey from "/public/svg/sailpoint_grey.svg";
import savyint from "/public/svg/savyint.svg";
// import savyint_grey from "/public/svg/savyint_grey.svg";
import { motion } from "framer-motion";

import AnimatedBorderTrail from "@/components/ui/animated/border-trail-simple";
import { InView } from "@/components/ui/animated/in-view";

// import { partners } from "@/components/shared/partners-slider";

export default function Partners() {
  const partners = [
    zeco,
    savyint,
    sailpoint,
    gcp,
    azure,
    aws,
    // savyint_grey,
    // sailpoint_grey,
    // azure_grey,
    // aws_grey,
    // okta_grey,
  ];
  const partnersCard = [
    {
      img: "/assets/cloud.png",
      //   title: "Cloud Management",
      description:
        "Optimize operations, cut costs, and focus on growth with our cloud and security solutions.",
      //   link: "/services", // Add link
    },
    {
      img: "/assets/cloud.png",
      //   title: "Cloud Migration",
      description:
        "Stay protected from threats and ensure compliance with GDPR, HIPAA, and more.",
      //   link: "/services/professional-services/aws-migration", // Add link
    },
    {
      img: "/assets/cloud.png",
      //   title: "AWS Map",
      description:
        "Access continuous monitoring, expert support to keep your systems secure & scalable.",
      //   link: "/services/professional-services/aws-modernization", // Add link
    },
    {
      img: "/assets/cloud.png",
      //   title: "Gen AI",
      description:
        "Access continuous monitoring, expert support to keep your systems secure & scalable.",
      //   link: "/services/gen-ai", // Add link
    },
    {
      img: "/assets/cloud.png",
      //   title: "IDAM Migration",
      description:
        "Access continuous monitoring, expert support to keep your systems secure & scalable.",
      //   link: "/services/idam-migration", // Add link
    },
    {
      img: "/assets/cloud.png",
      //   title: "IGA",
      description:
        "Access continuous monitoring, expert support to keep your systems secure & scalable.",
      //   link: "/solutions/idam/iga",
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

  return (
    <div>
      <section className="overflow-hidden bg-main-gradient p-20 md:p-10 sm:p-4">
        <InView
          variants={{
            hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h1 className="mb-[.5em] font-sora text-5xl xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full sm:text-center">
            Stop, collaborate & listen
          </h1>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: -0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="mb-[1.5em] w-[70%] text-lg text-[#808080] xl:w-full lg:text-base md:mx-auto sm:mx-auto sm:w-[90%] sm:text-center">
            When you work with Versent, you’re also working with the best of the
            best in platforms, tools and technology. Like us, our partners are
            leaders in their fields, challenging the technology status quo so
            you can work and live without constraint. The differentiated
            services offered by our partners, coupled with our expertise,
            empower you to achieve your business goals.
          </p>
        </InView>
      </section>

      <section>
        <p className="pl-20 pt-10 text-2xl font-bold">Our Partners</p>

        <div
          className="animate-fade-up mx-auto mb-24 grid w-[90%] max-w-7xl grid-cols-3 gap-12 p-4 xl:gap-6 md:grid-cols-2 sm:mb-12 sm:grid-cols-1"
          aria-labelledby="partners-heading"
        >
          {partnersCard.map((partner, index) => (
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
                {/* <Link href={partner.link} passHref> */}
                <article className="group relative flex w-full transform cursor-pointer flex-col items-start space-y-4 rounded-2xl p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-orange-650 hover:text-white">
                  <motion.div variants={iconVariants}>
                    <Image
                      src={partner.img}
                      alt={"img"}
                      className="rounded-full border p-2 transition-transform duration-500 ease-in-out hover:rotate-6"
                      width={70}
                      height={70}
                    />
                  </motion.div>
                  {/* <h3 className="text-2xl font-semibold sm:text-xl">
                      {partner.title}
                    </h3> */}
                  <p className="text-[#808080] group-hover:text-black">
                    {partner.description}
                  </p>
                </article>
                {/* </Link> */}
              </motion.div>
            </AnimatedBorderTrail>
          ))}
        </div>

        <section>
          <p className="pb-5 pl-20 text-2xl font-bold sm:pl-0 sm:text-center">
            Advanced Partners
          </p>
          <section className="grid grid-cols-4 place-items-center gap-10 py-5 md:grid-cols-3 sm:grid-cols-2">
            {partners.map((item, index) => (
              <div key={index}>
                <Image
                  src={item}
                  alt={"img"}
                  className=""
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
}
