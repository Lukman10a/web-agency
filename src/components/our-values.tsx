import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useScroll, motion, MotionValue } from 'framer-motion';
import { Badge } from './ui/badge';

interface ValueData {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

const valuesData: ValueData[] = [
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
    title: "Adaptability",
    description:
      "We understand that the cloud landscape is constantly evolving, and so must we.",
    image: "/assets/cardimage3.png",
    backgroundColor: "#DADCE4",
  },
];


const calculateTransform = (
  scrollYProgress: MotionValue<number>, 
  index: number, 
  total: number
) => {
  const progress = scrollYProgress.get();
  const scale = progress < index / total ? 1 : 1;
  const opacity = progress < index / total ? 1 : 1;
  return { scale, opacity };
};

const OurValuesSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  
  const [transforms, setTransforms] = useState<{ scale: number; opacity: number }[]>(valuesData.map(() => ({ scale: 1, opacity: 1 })));

  useEffect(() => {
    const total = valuesData.length;
    const newTransforms = valuesData.map((_, index) => calculateTransform(scrollYProgress, index, total));
    setTransforms(newTransforms);
  }, [scrollYProgress]);

  return (
    <section ref={targetRef} className="relative bg-gray-100 py-10 font-sora">
      {/* Sticky Header */}
      <motion.div className="sticky top-0 bg-gray-100 py-4 z-10 grid grid-cols-1 space-y-4 mx-auto">
      <Badge variant="outline" className='mx-auto text-center'>Our Values</Badge>
        <h2 className="text-center font-bold text-3xl text-gray-800">OUR VALUES</h2>
        <div className="flex flex-col items-center">
          <p className="text-xl text-center text-[#808080] mx-auto md:w-full md:text-base">
            Transforming businesses to become <span className="block md:inline">cloud-native and future-ready.</span>
          </p>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className="space-y-8">
        {valuesData.map((value, index) => {
          const { scale, opacity } = transforms[index];

          return (
            <motion.div
              key={index}
              style={{
                scale: scale,
                opacity: opacity,
                backgroundColor: value.backgroundColor,
              }}
              className="flex gap-4 sticky top-24 w-3/4 mx-auto sm:flex-col md:flex-row rounded-2xl p-4 lg:p-6 space-y-4 md:space-y-0 md:space-x-4 transition-opacity duration-500 transform"
            >
              <div className="w-1/2 flex flex-col justify-center px-10 text-left">
                <h3 className="text-3xl font-bold mb-2">{value.title}</h3>
                <p className="text-lg text-gray-600">{value.description}</p>
              </div>
              <div className="h-[400px]">
                <Image
                  src={value.image}
                  width={300}
                  height={300}
                  alt={`${value.title} image`}
                  className="w-full h-full p-10 rounded-4xl"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurValuesSection;
