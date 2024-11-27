import React from "react";

// Import framer-motion
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { Button } from "../ui/button";

type NewHeroProps = {
  reverse?: boolean;
  title: string;
  ImgSrc: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  tag?: boolean;
  icon?: boolean;
  iconLink?: string | StaticImageData;
};

const NewHero: React.FC<NewHeroProps> = ({
  reverse = false,
  title,
  ImgSrc,
  description,
  showButton = true,
  buttonText,
  tag = false,
  icon = false,
  iconLink,
}) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="mx-auto mb-24 py-20 xl:rounded-t-none lg:py-12 md:mb-16 sm:mb-12">
      <motion.div
        className={`mx-auto flex w-[90%] max-w-[1200px] gap-10 overflow-hidden 2md:gap-4 md:flex-col ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section (Text + Icon) */}
        <div className="mb-6 flex w-[50%] flex-col justify-center md:mx-auto md:w-full md:text-center">
          {icon && iconLink && (
            <motion.div variants={itemVariants}>
              <Image
                src={iconLink}
                alt="Security Icon"
                className="mb-6 w-[15%] md:mx-auto sm:w-[20%]"
                width={500}
                height={500}
              />
            </motion.div>
          )}
          {tag && (
            <motion.p
              className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080] md:mx-auto"
              variants={itemVariants}
            >
              AWS PREMIER SERVICES & SOFTWARE PARTNER
            </motion.p>
          )}
          <motion.h1
            className="mb-[.5em] font-sans text-5xl xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mb-[1.5em] w-[90%] text-2xl md:mx-auto md:w-[80%] md:text-xl sm:w-[90%]"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          {showButton && (
            <motion.div variants={itemVariants}>
              <Button className="flex w-fit items-center gap-4 rounded-[4rem] bg-black px-8 py-7 font-sans text-lg text-white hover:bg-white hover:text-black md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
                <span>{buttonText}</span>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Right Section (Image) */}
        <motion.div
          className="image mx-auto w-[50%] max-w-[400px] self-end rounded-2xl bg-transparent md:w-full md:text-center sm:rounded-lg"
          variants={itemVariants}
        >
          <Image
            src={ImgSrc}
            alt="Hero Image"
            className="max-h-[400px] w-full rounded-2xl"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHero;
