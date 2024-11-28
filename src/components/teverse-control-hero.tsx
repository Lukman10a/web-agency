import React from "react";

import { motion } from "framer-motion";

import { HighlightedText } from "./ui/animated/highlight-text";

const TeverseControlHero: React.FC = () => {
  return (
    <div className="flex justify-center bg-secondary-gradient pb-14">
      <motion.div
        className="relative w-full max-w-7xl p-14 text-center sm:w-full sm:max-w-full sm:p-4"
        // style={{
        //   background:
        //     "linear-gradient(to top right, rgba(50, 150, 245, 0.5), rgba(255, 120, 57, 0.5))",
        // }}

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative h-screen space-y-4 pt-7 sm:h-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="mb-4 text-5xl font-medium text-[#262626] sm:text-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <HighlightedText
              highlightColor="#f4934b"
              highlightHeight="100%"
              className="p-2"
              highlightClassName="z-[-1] rounded-lg"
              delay={1.5}
            >
              Teverse Control
            </HighlightedText>
          </motion.h1>
          <motion.p
            className="mx-auto mb-6 max-w-2xl text-base text-[#808080] sm:mx-0 sm:w-full sm:max-w-full sm:text-justify sm:text-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Mission Control is your first-of-its-kind cloud services platform
            which lets you benchmark, analyze, and track the performance of your
            AWS cloud environment while guiding you toward improvements with
            real-time access to our teams of AWS experts.
          </motion.p>
          <motion.button
            className="mt-5 rounded-full bg-[#FF9557] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Request a Demo
          </motion.button>
        </motion.div>

        {/* Overlay Checkered Image */}
        <motion.div className="absolute inset-[24rem] left-1/2 h-[35rem] w-[90%] -translate-x-1/2 transform rounded-xl bg-[url('/assets/checker.png')] bg-cover sm:top-72 sm:h-[10rem]">
          {/* <Image src="" width={} height={} alt="" /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeverseControlHero;
