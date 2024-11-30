import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type WhatIsTeverseProps = {
  title: string;
  mainDescription: string;
  additionalDescription: string;
  bgColor?: string;
  tag?: boolean;
  tagText?: string;
};

const WhatIsTeverse: React.FC<WhatIsTeverseProps> = ({
  title,
  mainDescription,
  additionalDescription,
  tag = true,
  tagText = "OVERVIEW",
}) => {
  // Intersection Observer Hook
  const { ref, inView } = useInView({
    triggerOnce: false, // Re-animate when re-entering the viewport
    threshold: 0.2, // 20% of the component must be visible
  });

  // Animation controls
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Framer Motion Variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref} 
      initial="hidden"
      animate={controls} 
      variants={fadeUpVariants}
      className="mx-auto mb-32 flex w-[90%] max-w-[1150px] items-center gap-12 lg:gap-2 md:mb-16 md:flex-col md:gap-8"
    >
      {/* Left Side (Boxes) */}
      <div className="mx-auto flex h-[800px] w-[50%] gap-6 rounded-[3rem] bg-[#cccbcb] lg:gap-4 2md:h-auto md:h-[100vw] md:w-full sm:w-[100%] order-2"></div>

      {/* Right Side (Text) */}
      <motion.div
        className="flex w-[50%] flex-col self-center p-4 md:w-full sm:p-0 order-1"
        variants={fadeUpVariants}
      >
        {tag && (
          <p className="mb-4 self-start rounded-full bg-transparent font-medium py-7 tracking-wide sm:text-sm">
            {tagText}
          </p>
        )}
        <h2 className="mb-6 font-sans text-3xl sm:text-lg xl:w-[80%] lg:w-[100%]">
          {title}
        </h2>
        <p className="mb-4 text-xl sm:text-sm lg:text-lg md:text-justify">
          {mainDescription}
        </p>
        <p className="mb-4 text-2xl sm:text-lg md:text-justify">
          {additionalDescription}
        </p>
        <p className="mb-4 text-2xl sm:text-lg md:text-justify">
            You can count on our experience – we act as your trusted guide through the cloud migration process to accurately forecast your Total Cost of Ownership, design an optimal AWS architecture, and ensure you experience minimal interruptions or downtime. 
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsTeverse;
