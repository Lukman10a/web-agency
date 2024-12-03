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
  tagText,
  // tagText = "OVERVIEW",
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
      animate={controls} // Bind animation controls
      variants={fadeUpVariants} // Use animation variants
      className="mx-auto mb-32 flex w-[90%] max-w-[1200px] gap-10 lg:gap-2 md:mb-16 md:flex-col-reverse md:gap-4"
    >
      {/* Left Side (Boxes) */}
      <div className="order-2 mx-auto flex h-[800px] w-[50%] gap-6 rounded-[3rem] bg-[#cccbcb] lg:gap-4 2md:h-auto md:h-[100vw] md:w-full sm:w-[100%]"></div>

      {/* Right Side (Text) */}
      <motion.div
        className="order-1 flex w-[50%] flex-col self-center p-4 md:w-full sm:p-0"
        variants={fadeUpVariants}
      >
        {tag && (
          <p className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080] md:mx-auto">
            {tagText}
          </p>
        )}
        <h2 className="mb-6 font-sans text-3xl xl:w-[80%] lg:w-[100%] sm:text-lg">
          {title}
        </h2>
        <p className="mb-4 text-xl lg:text-lg md:text-justify sm:text-sm">
          {mainDescription}
        </p>
        <p className="mb-4 text-2xl md:text-justify sm:text-lg">
          {additionalDescription}
        </p>
        <p className="mb-4 text-2xl md:text-justify sm:text-lg">
          You can count on our experience – we act as your trusted guide through
          the cloud migration process to accurately forecast your Total Cost of
          Ownership, design an optimal AWS architecture, and ensure you
          experience minimal interruptions or downtime.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsTeverse;
