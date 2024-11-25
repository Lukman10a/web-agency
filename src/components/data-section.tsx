import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

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
      "Every part of Mission Control was designed for AWS and will continue to evolve to support AWS services and programs.",
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
    <section
      
      className="flex flex-col space-y-10 mt-[10rem] sm:mt-2 px-4"
    >
      <div className="space-y-4 max-w-6xl mx-20">
      
      <motion.div
        className="text-sm text-black font-bold tracking-wide px-3 inline py-1 rounded-full mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        WHY TEVERSE CONTROL
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-xl md:text-3xl font-medium text-black text-left mb-4 py-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Expertise to <span className="border border-neutral-800 p-1 rounded-xl">Interpret Data</span> - Not Just Visualize It
      </motion.h2>

      <motion.p
        className="text-left text-black text-2xl max-w-6xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mission Control helps you monitor and analyze your environment, similar
        to a cloud management platform. But Mission Control also leverages our
        teams as they build their knowledge of your business, industry,
        objectives, and the unique concerns and needs of your architecture.
      </motion.p>
      </div>

      {/* Staggered Card Animation */}
      <motion.div
        ref={ref}
        className="grid py-5 sm:grid-cols-1 sm:flex-wrap grid-cols-2 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start p-14 rounded-2xl text-left shadow-lg"
            style={{
              background: "linear-gradient(to bottom, #FDF3EB 10%, #FB7900 100%)"
            }}
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
            <h3 className="text-2xl sm:text-lg font-semibold text-black mb-2">
              {card.title}
            </h3>
            <p className="text-black text-xl">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InterpretDataSection;
