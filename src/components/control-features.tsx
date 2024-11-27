import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className={`flex flex-row justify-between items-center gap-14 sm:flex-col md:flex-col md:flex-wrap sm:flex-wrap max-w-6xl mx-auto ${
        reverse ? "flex-row-reverse flex sm:flex-col md:flex-col md:flex-wrap sm:flex-wrap" : ""
      } p-6 space-y-6 md:space-y-0`}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex-shrink-0 py-10"
        // initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Section Image */}
        <Image src={image} width={500} height={850} alt="Section Image" className="rounded-3xl sm:w-[20rem]" />

        {/* Animated Additional Image */}
        {starsAnimation && additionalImage && (
          <motion.div
            className="absolute"
            style={{
              bottom: additionalImagePosition?.bottom || 0,
              left: additionalImagePosition?.left || 0,
            }}
          >
            <Image src={additionalImage} alt="Animated Image" width={90} height={100} className="sm:w-[5rem]" />
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
        <h2 className="text-2xl md:text-xl font-bold text-left">{title}</h2>
        <p className="text-gray-700 text-left">{description}</p>
        {showButton && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-white bg-black rounded-lg"
          >
            {buttonText}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default ReusableComponent;
