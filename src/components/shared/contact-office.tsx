import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import CallToAction from "./callToAction";

const Offices = [
  {
    id: 1,
    name: "Sydney HQ",
    country: "Sydney HQ",
  },
  {
    id: 2,
    name: "India",
    country: "India",
  },
  {
    id: 3,
    name: "UAE",
    country: "UAE",
  },
  {
    id: 4,
    name: "Saudi Arabia",
    country: "Saudi Arabia",
  },
  {
    id: 5,
    name: "USA",
    country: "USA",
  },
  {
    id: 6,
    name: "Canada",
    country: "Canada",
  },
  {
    id: 7,
    name: "UK ",
    country: "UK ",
  },
];

// Animation Variants for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const ContactOffice: React.FC = () => {
  return (
    <div className="space-y-8 p-8 sm:p-5">
      {/* Office Cards */}
      <div className="grid w-full grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
        {Offices.map((office, index) => (
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            key={index}
          >
            <div
              key={office.id}
              className="hover:text-white: group flex flex-col items-start space-y-4 rounded-2xl border border-gray-300 p-6 shadow-sm hover:bg-orange-650"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/location.png"
                  width={20}
                  height={20}
                  alt="location image"
                />
                <div className="text-sm font-semibold text-gray-500 group-hover:text-white">
                  OFFICE #{office.id}
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:text-white">
                {office.name}
              </h3>
              <div className="text-gray-600">
                <p>{office.country}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CallToAction />
    </div>
  );
};

export default ContactOffice;
