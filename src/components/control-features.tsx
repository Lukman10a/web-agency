import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Stars from "/public/svg/stars.svg";

// Define prop types
interface ReusableComponentProps {
    image: string; 
    title: string; 
    description: string; 
    buttonText?: string; 
    showButton?: boolean;
    reverse?: boolean; 
    starsAnimation?: boolean;
  }

  const ReusableComponent: React.FC<ReusableComponentProps> = ({
  image,
  title,
  description,
  buttonText,
  showButton = true,
  reverse = false,
  starsAnimation = false,
}) => {
  return (
    <div
      className={`flex justify-between items-center gap-14 sm:flex-col max-w-6xl mx-auto ${
        reverse ? "flex-row-reverse" : ""
      }  p-6 space-y-6 md:space-y-0`}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex-shrink-0"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={image} width={600} height={850} alt="Section Image" className="rounded-lg" />

        {/* Animated Star */}
        {starsAnimation && (
          <motion.div
            className="absolute top-[-1px] left-[-100px]"
            // animate={{ rotate: 360 }}
            transition={{
            //   repeat: Infinity,
              duration: .1,
              ease: "linear",
            }}
          >
            <Image
              src={Stars}
              alt="Star Animation"
              width={100}
              height={100}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="space-y-4 text-xl"
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-left">{title}</h2>
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
