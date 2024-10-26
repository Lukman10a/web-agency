import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | never;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<never>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem]  overflow-y-auto flex justify-center sticky space-x-10 p-10 no-scrollbar px-14"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl flex-1">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold text-slate-100 md:text-2xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300  mt-10 mb-4"
              >
                {item.description}
              </motion.p>
              <Link className="font-mono  text-gray-400" href={"/"}>
                HOW IT WORKS
              </Link>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "lg:hidden block flex-1 h-70 w-80 rounded-md bg-white sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
