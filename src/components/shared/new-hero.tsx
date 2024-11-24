import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Image, { StaticImageData } from "next/image";
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
    <section className="mx-auto mb-24 bg-secondary-gradient px-16 py-20 xl:rounded-t-none lg:p-12 lg:py-16 md:mb-16 md:px-0 sm:mb-12">
      <motion.div
        className={`mx-auto flex w-[95%] max-w-[1200px] gap-12 2md:gap-8 md:w-[85%] md:flex-col md:gap-6 ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section (Text + Icon) */}
        <div className="flex w-[55%] flex-col justify-center md:mx-auto md:w-full md:text-center">
          {icon && iconLink && (
            <motion.div variants={itemVariants}>
              <Image
                src={iconLink}
                alt="Security Icon"
                className="w-[15%] mb-6 md:mx-auto sm:w-[20%]"
                width={500}
                height={500}
              />
            </motion.div>
          )}
          {tag && (
            <motion.p
              className="mb-4 self-start rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080]"
              variants={itemVariants}
            >
              AWS PREMIER SERVICES & SOFTWARE PARTNER
            </motion.p>
          )}
          <motion.h1
            className="mb-[.5em] w-[80%] font-sora text-5xl font-medium xl:text-4xl 2md:w-full md:mx-auto md:mb-[.4em] sm:w-full"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mb-[1.5em] w-[90%] text-[#808080] lg:text-[14px] md:mx-auto md:w-[80%] sm:w-[90%]"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          {showButton && (
            <motion.div variants={itemVariants}>
              <Button className="flex w-fit items-center gap-4 rounded-3xl bg-orange-650 px-8 font-sans text-white xl:text-[12px] md:mx-auto md:w-[90%] sm:mb-4 sm:w-full">
                <span>{buttonText}</span>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Right Section (Image) */}
        <motion.div
          className="image mx-auto w-[45%] max-w-[400px] self-end rounded-2xl bg-transparent md:w-full md:text-center sm:rounded-lg"
          variants={itemVariants}
        >
          <Image
            src={ImgSrc}
            alt="Hero Image"
            className="w-full bg-white rounded-2xl"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHero;
