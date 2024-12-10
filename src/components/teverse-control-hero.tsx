import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { HighlightedText } from "./ui/animated/highlight-text";

const TeverseControlHero: React.FC = () => {
  return (
    <div className="bg-main-gradient">
      <motion.div
        className="mx-auto flex max-w-6xl justify-between py-14 text-left sm:w-full sm:max-w-full sm:flex-col sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="space-y-7 pt-7 sm:h-80"
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
            className="mb-6 max-w-2xl text-left text-xl text-[#808080] sm:mx-0 sm:w-full sm:max-w-full sm:text-justify sm:text-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Teverse Control is your first-of-its-kind cloud services platform
            which lets you benchmark, analyze, and track the performance of your
            AWS cloud environment while guiding you toward improvements with
            real-time access to our teams of AWS experts.
          </motion.p>
          <Link href={"/contact"}>
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
          </Link>
        </motion.div>

        {/* Overlay Checkered Image */}
        <motion.div>
          <Image
            className="sm:mx-auto sm:h-[10rem] sm:w-[17rem]"
            src="/assets/terverse-control.png"
            width={400}
            height={500}
            alt="terverse-control image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeverseControlHero;
