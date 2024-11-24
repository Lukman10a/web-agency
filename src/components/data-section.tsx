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
    icon: "/assets/message.png",
    title: "Track Your Impact",
    description:
      "As you become more well architected, see the actual dollars we’ve helped you save and the impact of your architectural decisions over time.",
  },
  {
    icon: "/assets/message.png",
    title: "Built for AWS",
    description:
      "Every part of Mission Control was designed for AWS and will continue to evolve to support AWS services and programs.",
  },
  {
    icon: "/assets/message.png",
    title: "Real-Time Monitoring",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture",
  },
  {
    icon: "/assets/message.png",
    title: "Custom Strategies",
    description:
      "In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture",
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
      
      className="flex flex-col items-center space-y-5 py-14 mt-[10rem] sm:mt-2 px-4"
    >
      
      <motion.div
        className="text-xs text-gray-500 tracking-wide px-3 inline py-1 border border-gray-300 rounded-full mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        WHY TEVERSE CONTROL
      </motion.div>

      <motion.h2
        className="text-4xl sm:text-xl max-w-lg md:text-3xl font-medium text-gray-800 text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Expertise to Interpret Data - Not Just Visualize It
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-4xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mission Control helps you monitor and analyze your environment, similar
        to a cloud management platform. But Mission Control also leverages our
        teams as they build their knowledge of your business, industry,
        objectives, and the unique concerns and needs of your architecture.
      </motion.p>

      {/* Staggered Card Animation */}
      <motion.div
        ref={ref}
        className="grid py-5 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start p-6 bg-[#FF9557] rounded-lg text-left shadow-lg"
            variants={cardVariants}
            whileHover={{
              scale: 1.05, // Slight hover scale effect
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-3xl">
              <Image src={card.icon} width={40} height={40} alt="card image" />
            </div>
            <h3 className="text-3xl sm:text-lg font-medium text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InterpretDataSection;
