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
  bgColor = "#E4E4E4",
  tag = false,
  tagText
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
      className="mx-auto mb-32 flex w-[90%] max-w-[1150px] gap-12 lg:gap-2 md:mb-16 md:flex-col md:gap-8"
    >
      {/* Left Side (Boxes) */}
      <div className="mx-auto bg-[#cccbcb] rounded-[3rem] flex h-[800px] 2md:h-auto w-[50%] gap-6 lg:gap-4 md:h-[100vw] md:w-full sm:w-[100%]">
      
      </div>

      {/* Right Side (Text) */}
      <motion.div
        className="flex w-[50%] flex-col self-center p-4 md:w-full sm:p-0"
        variants={fadeUpVariants}
      >
        {tag && (
          <p className="mb-4 self-start rounded-full bg-transparent font-bold md:text-sm tracking-wide ">
          {tagText}
          </p>
        )}
        <h2 className="mb-6 font-sans text-3xl xl:w-[80%] lg:w-[100%]  ">
          {title}
        </h2>
        <p className="mb-4 text-2xl lg:text-lg md:text-justify">
          {mainDescription}
        </p>
        <p className="mb-4 text-2xl lg:text-lg md:text-justify">
          {additionalDescription}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsTeverse;
