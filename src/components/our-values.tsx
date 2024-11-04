import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const valuesData = [
  {
    title: "No nonsense culture",
    description:
      "The ever-changing world of cloud computing demands continuous learning. Our engineers strive for the best solutions, new techniques, and skills.",
    image: "/assets/cardimage1.png",
    backgroundColor: "#FFC7DC",
  },
  {
    title: "Determination",
    description:
      "Our engineers are dedicated to adapting and improving their skills to deliver optimal solutions.",
    image: "/assets/cardimage2.png",
    backgroundColor: "#FFDECB",
  },
  {
    title: "Innovation First",
    description:
      "We believe in constantly innovating to stay ahead. Our team is always looking for ways to push boundaries.",
    image: "/assets/cardimage3.png",
    backgroundColor: "#B0F6FF",
  },
  {
    title: "Innovation First",
    description:
      "We believe in constantly innovating to stay ahead. Our team is always looking for ways to push boundaries.",
    image: "/assets/cardimage3.png",
    backgroundColor: "#DADCE4",
  },
];

const OurValuesSection: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const animations = valuesData.map((_, index) => {
    const start = 0.5 * index;
    const end = start + 1;

    return {
      scale: useTransform(scrollYProgress, [start, end], [1, 0.9]),
      opacity: useTransform(scrollYProgress, [start, end], [1, 0]),
    };
  });

  return (
    <section ref={targetRef} className="relative bg-gray-100 py-10">
      {/* Sticky Header */}
      <motion.div className="sticky top-0 z-10 bg-gray-100 py-4">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          OUR VALUES
        </h2>
        <p className="mb-6 text-center text-xl">
          Transforming businesses to become cloud-native and future-ready.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="space-y-8">
        {valuesData.map((value, index) => (
          <motion.div
            key={index}
            style={{
              scale: animations[index].scale,
              opacity: animations[index].opacity,
              backgroundColor: value.backgroundColor,
            }}
            className="sticky top-24 mx-auto flex w-3/4 transform gap-4 space-y-4 rounded-lg p-4 shadow-lg transition-opacity duration-500 lg:p-6 md:flex-row md:space-x-4 md:space-y-0 sm:flex-col"
          >
            <div className="flex w-1/2 flex-col justify-center px-10 text-left">
              <h3 className="mb-2 text-3xl font-bold">{value.title}</h3>
              <p className="text-lg text-gray-600">{value.description}</p>
            </div>
            <div className="h-[400px] rounded-2xl">
              <Image
                src={value.image}
                width={500}
                height={500}
                alt={`${value.title} image`}
                className="h-full w-full rounded-2xl object-cover p-10"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
