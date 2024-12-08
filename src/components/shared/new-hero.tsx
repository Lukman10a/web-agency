import React from "react";

// Import framer-motion
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { HighlightedText } from "../ui/animated/highlight-text";
import { Button } from "../ui/button";

type NewHeroProps = {
  reverse?: boolean;
  title: string;
  showHighlighted?: boolean;
  ImgSrc: string;
  description: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  tag?: boolean;
  tagText?: string;
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
  buttonLink,
  tag = false,
  tagText,
  icon = false,
  iconLink,
  showHighlighted = true,
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

  // Split the title into the first word and the remaining text
  const [firstWord, ...restWords] = title.split(" ");
  const restOfTitle = restWords.join(" ");

  return (
    <section className="mx-auto mb-20 bg-main-gradient px-16 py-20 xl:rounded-t-none lg:p-12 lg:py-16 md:mb-16 md:px-0 sm:mb-12">
      <motion.div
        className={`mx-auto flex w-[95%] max-w-7xl gap-12 2md:gap-8 md:w-[85%] md:flex-col md:gap-6 ${
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
              {tagText}
            </motion.p>
          )}
          <motion.h1
            className="mb-[.5em] font-sans text-5xl xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full sm:text-left"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {showHighlighted && (
              <>
                <HighlightedText
                  highlightColor="#f4982e"
                  highlightHeight="100%"
                  className="p-2"
                  highlightClassName="z-[-1] rounded-lg"
                  delay={1.5}
                >
                  {firstWord}
                </HighlightedText>
                {` ${restOfTitle}`}
              </>
            )}
          </motion.h1>
          <motion.p
            className="mb-[1.5em] w-[90%] text-lg text-[#808080] lg:text-base md:mx-auto md:w-[80%] sm:w-[90%]"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          {/* {showButton && (
            <motion.div variants={itemVariants}>
              <Button className="flex w-fit items-center gap-4 rounded-[4rem] bg-orange-650 px-8 py-7 font-sans text-lg text-white hover:bg-white hover:text-black md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
                <span>{buttonText}</span>
              </Button>
            </motion.div>
          )} */}
          {showButton && (
            <motion.div variants={itemVariants}>
              {buttonLink ? (
                <a
                  href={buttonLink}
                  className="flex w-fit items-center gap-4 rounded-[4rem] bg-orange-650 px-8 py-7 font-sans text-lg text-white hover:bg-white hover:text-black md:mx-auto md:w-[90%] sm:mb-4 sm:w-full"
                >
                  <span>{buttonText}</span>
                </a>
              ) : (
                <Button className="flex w-fit items-center gap-4 rounded-[4rem] bg-orange-650 px-8 py-7 font-sans text-lg text-white hover:bg-white hover:text-black md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
                  <span>{buttonText}</span>
                </Button>
              )}
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
            className="w-full rounded-2xl"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHero;
