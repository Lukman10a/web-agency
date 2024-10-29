import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

interface CustomProps {
  index: number;
  angle: string;
  src?: string | StaticImageData;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: (custom: CustomProps) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.angle,
    transition: {
      delay: custom.index * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 150,
      damping: 20,
      mass: 0.5,
    },
  }),
};

export default function ImagesReveal({
  cards,
}: {
  cards: Partial<CustomProps>[];
}) {
  return (
    <div>
      <div className="relative my-10 md:ml-10 flex flex-row justify-center ml-20">
        {cards.map((card, i) => (
          <motion.img
            key={i}
            className="relative md:-ml-10 size-80 2md:size-60 rounded-2xl border-[6px] border-white object-cover shadow-xl -ml-20 md:size-40"
            src={card.src as string}
            custom={{ index: i, angle: card.angle }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1,
              rotate: "0deg",
              zIndex: 10,
              transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
