import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

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
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const animations = valuesData.map((_, index) => {
    const start = 0.5 * index;
    const end = start + 1; 

    return {
      scale: useTransform(scrollYProgress, [start, end], [1, 0.9]),
      opacity: useTransform(scrollYProgress, [start, end], [1, 0]),
    };
  });

  return (
    <section ref={targetRef} className="relative bg-gray-100 py-10 font-sora">
      
      {/* Sticky Header */}
      <motion.div 
        className="sticky top-0 bg-gray-100 py-4 z-10 "
      >
        <h2 className="text-center font-bold text-3xl text-gray-800">OUR VALUES</h2>
        <p className="text-center text-xl mb-6">Transforming businesses to become cloud-native and future-ready.</p>
      </motion.div>

      {/* Cards Section */}
      <div className="space-y-8 ">
        {valuesData.map((value, index) => (
          <motion.div
            key={index}
            style={{
              scale: animations[index].scale,
              opacity: animations[index].opacity,
              backgroundColor: value.backgroundColor,
            }}
            className="flex gap-4 sticky top-24 w-3/4 mx-auto sm:flex-col md:flex-row shadow-lg rounded-lg p-4 lg:p-6 space-y-4 md:space-y-0 md:space-x-4 transition-opacity duration-500 transform"
          >
            <div className="w-1/2 flex flex-col justify-center px-10 text-left">
              <h3 className="text-3xl font-bold mb-2">{value.title}</h3>
              <p className="text-lg text-gray-600">{value.description}</p>
            </div>
            <div className=" h-[400px] rounded-2xl">
              <Image
                src={value.image}
                width={500}
                height={500}
                alt={`${value.title} image`}
                className="w-full h-full p-10 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
