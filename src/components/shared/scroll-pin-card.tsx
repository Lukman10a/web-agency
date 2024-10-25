"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

type ProjectCardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const PinCard = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}: ProjectCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={"sticky top-0 flex h-screen items-center justify-center"}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-1/4 flex min-h-[500px] w-[1000px] origin-top flex-col rounded-3xl p-12 md:w-[700px] sm:w-[550px]"
      >
        <div className="mt-10 flex justify-between h-full gap-12 md:mt-6 md:flex-col md:items-center ">
          <div className="relative flex-1 md:top-0 md:w-full self-center">
            <h3 className="mb-3 font-sora text-5xl font-extrabold md:text-3xl">
              {title}
            </h3>
            <p className="mb-4 text-[#808080] text-2xl md:text-xl">
              {description}
            </p>
          </div>
          <div className="relative flex-1 h-full w-3/4 overflow-hidden rounded-3xl">
            <motion.div
              className={"w-full overflow-hidden rounded-3xl"}
              style={{ scale: imageScale }}
            >
              <Image
                src={`${src}`}
                width={300}
                height={300}
                alt="project image"
                className="w-full h-[300px]"
                layout="responsive"
                // sizes="100vw"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PinCard;
