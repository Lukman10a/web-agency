import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

interface ReusableComponentProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  showButton?: boolean;
  reverse?: boolean;
  starsAnimation?: boolean;
  additionalImage?: string; // Optional for additional animated image
  additionalImagePosition?: { bottom: number; left: number }; // Position for additional image
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({
  image,
  title,
  description,
  buttonText,
  showButton = true,
  reverse = false,
  starsAnimation = false,
  additionalImage,
  additionalImagePosition,
}) => {
  return (
    <div
      className={`mx-auto flex max-w-7xl flex-row items-center justify-between gap-14 md:flex-col md:flex-wrap sm:flex-col sm:flex-wrap ${
        reverse
          ? "flex flex-row-reverse md:flex-col md:flex-wrap sm:flex-col sm:flex-wrap"
          : ""
      } space-y-6 p-6 md:space-y-0`}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex-shrink-0 py-10"
        // initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Section Image */}
        <Image
          src={image}
          width={500}
          height={850}
          alt="Section Image"
          className="rounded-3xl sm:w-[20rem]"
        />

        {/* Animated Additional Image */}
        {starsAnimation && additionalImage && (
          <motion.div
            className="absolute"
            style={{
              bottom: additionalImagePosition?.bottom || 0,
              left: additionalImagePosition?.left || 0,
            }}
          >
            <Image
              src={additionalImage}
              alt="Animated Image"
              width={90}
              height={100}
              className="sm:w-[5rem]"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="space-y-4 text-xl sm:text-lg"
        // initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-left text-2xl font-bold md:text-xl">{title}</h2>
        <p className="text-left text-gray-700">{description}</p>
        {showButton && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            {buttonText}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default ReusableComponent;
