import React from "react";

import Image from "next/image";

import { motion, useAnimation, useInView } from "framer-motion";

const cardData = [
  {
    icon: "/assets/message.png",
    title: "Discuss Your Opportunities",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.",
  },
  {
    icon: "/assets/message.png",
    title: "Contextualized Support",
    description:
      "We build a history of your conversations with us and can see the Recommendation you’re acting on, the Scorecard which prompted a ticket, or the specific Resource you’re concerned about.",
  },
  {
    icon: "/assets/targetpoint.png",
    title: "Track Your Impact",
    description:
      "As you become more well architected, see the actual dollars we’ve helped you save and the impact of your architectural decisions over time.",
  },
  {
    icon: "/assets/cloudstrikes.png",
    title: "Built for AWS",
    description:
      "Every part of Teverse Control was designed for AWS and will continue to evolve to support AWS services and programs.",
  },
];

const InterpretDataSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="mx-auto mt-[15rem] flex max-w-7xl flex-col space-y-5 px-10 sm:mt-10 sm:px-4">
      <div className="space-y-4">
        <motion.div
          className="mb-4 inline rounded-full py-1 text-xs tracking-wide text-gray-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          WHY TEVERSE CONTROL
        </motion.div>

        <motion.h2
          className="mb-4 text-left text-2xl font-medium text-gray-800 sm:text-sm sm:leading-7"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Expertise to{" "}
          <span className="rounded-xl border border-neutral-800 p-1">
            Interpret Data
          </span>{" "}
          - Not Just Visualize It
        </motion.h2>

        <motion.p
          className="mb-10 max-w-4xl text-left text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Teverse Control helps you monitor and analyze your environment,
          similar to a cloud management platform. But Teverse Control also
          leverages our teams as they build their knowledge of your business,
          industry, objectives, and the unique concerns and needs of your
          architecture.
        </motion.p>
      </div>

      {/* Staggered Card Animation */}
      <motion.div
        ref={ref}
        className="mx-auto grid grid-cols-2 gap-6 py-5 sm:grid-cols-1 sm:flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="flex cursor-pointer flex-col rounded-2xl bg-main-gradient p-14 text-left shadow-lg sm:p-4"
            variants={cardVariants}
            whileHover={{
              scale: 1.05, // Slight hover scale effect
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-3xl">
              <Image src={card.icon} width={50} height={50} alt="card image" />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-black sm:text-lg">
              {card.title}
            </h3>
            <p className="text-xl text-black sm:text-sm">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InterpretDataSection;
