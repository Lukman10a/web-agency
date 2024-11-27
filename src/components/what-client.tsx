import React from "react";

import Image from "next/image";

import { Testimonial, testimonialsList } from "@/data/testimonial";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TestimonialsProps {
  testimonials?: Testimonial[];
  className?: string;
  headerClassName?: string;
  cardClassName?: string;
}

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 200 },
  },
};

const iconVariants = {
  hover: {
    rotate: [0, 16, -16, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = testimonialsList,
  className = "",
  headerClassName = "",
  cardClassName = "",
}) => {
  return (
    <section
      className={cn(
        `mx-auto max-w-7xl rounded-lg px-10 py-16 xl:mx-8 lg:px-8 sm:px-6`,
        className,
      )}
    >
      <div className="text-center">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <h2
            className={cn(
              "text-3xl font-extrabold text-black sm:text-4xl",
              headerClassName,
            )}
          >
            WHAT CLIENTS ARE SAYING
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Now you have our side of the story, but what do our clients think?
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="relative mt-10 grid cursor-pointer grid-cols-3 gap-8 hover:text-white md:grid-cols-2 sm:grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className={cardClassName}
          >
            <article className="group relative rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:bg-black">
              <p className="mb-4 text-gray-700 transition-colors duration-300 group-hover:text-white">
                {testimonial.quote}
              </p>
              <div className="mt-4 flex items-center">
                <Avatar>
                  <motion.div variants={iconVariants}>
                    <AvatarImage
                      src={testimonial.image}
                      alt={`${testimonial.name}'s avatar`}
                    />
                  </motion.div>
                  <AvatarFallback>
                    {testimonial.name[0]}
                    {testimonial.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>

                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900 group-hover:text-indigo-400">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 group-hover:text-pink-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Star image behind the last testimonial item */}
              {index === testimonials.length - 1 && (
                <div className="absolute -bottom-8 right-1 xl:-bottom-24 xl:right-24 lg:-bottom-20 lg:right-20 md:-bottom-16 md:right-8 sm:-bottom-8 sm:right-1">
                  <Image
                    src="/assets/Star.png"
                    alt="Star"
                    width={100}
                    height={100}
                    className="xl:h-[180px] xl:w-[180px] lg:h-[150px] lg:w-[150px] md:h-[120px] md:w-[120px] sm:h-[100px] sm:w-[100px]"
                  />
                </div>
              )}
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
