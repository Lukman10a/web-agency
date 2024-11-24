import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type WhatIsTeverseProps = {
  title: string;
  mainDescription: string;
  additionalDescription: string;
  bgColor?: string;
  tag?: boolean;
};

const WhatIsTeverse: React.FC<WhatIsTeverseProps> = ({
  title,
  mainDescription,
  additionalDescription,
  bgColor = "#E4E4E4",
  tag = false,
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
      ref={ref} // Attach ref to the section
      initial="hidden"
      animate={controls} // Bind animation controls
      variants={fadeUpVariants} // Use animation variants
      className="mx-auto mb-32 flex w-[90%] max-w-[1200px] gap-10 lg:gap-2 md:mb-16 md:w-[85%] md:flex-col-reverse md:gap-4"
    >
      {/* Left Side (Boxes) */}
      <div className="mx-auto flex h-[600px] w-1/2 gap-6 lg:gap-4 md:h-[100vw] md:w-[85%] sm:w-[100%]">
        <div className="h-[85%] w-1/2 self-end">
          <motion.div
            className="h-full w-full rounded-xl"
            style={{ backgroundColor: bgColor }}
            variants={fadeUpVariants}
          ></motion.div>
        </div>
        <div className="flex h-[85%] w-1/2 flex-col gap-6 rounded-xl lg:gap-4">
          <motion.div
            className="h-[50%] w-full rounded-xl"
            style={{ backgroundColor: bgColor }}
            variants={fadeUpVariants}
          ></motion.div>
          <motion.div
            className="h-[50%] w-full rounded-xl"
            style={{ backgroundColor: bgColor }}
            variants={fadeUpVariants}
          ></motion.div>
        </div>
      </div>

      {/* Right Side (Text) */}
      <motion.div
        className="flex w-1/2 flex-col self-center p-4 md:w-full sm:p-0"
        variants={fadeUpVariants}
      >
        {tag && (
          <p className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080]">
            Overview
          </p>
        )}
        <h2 className="mb-6 font-sora text-4xl font-medium xl:w-[80%] lg:w-[100%] md:text-center sm:text-3xl">
          {title}
        </h2>
        <p className="mb-4 text-xl text-[#808080] lg:text-lg md:text-justify">
          {mainDescription}
        </p>
        <p className="mb-4 text-xl text-[#808080] lg:text-lg md:text-justify">
          {additionalDescription}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsTeverse;
