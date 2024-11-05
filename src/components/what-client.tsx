import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/assets/cardimage1.png",
  },
  // Additional testimonials can be added here...
];

const Testimonials: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl rounded-lg bg-gradient-to-r from-gradient-100 to-gradient-200 px-10 py-16 xl:mx-8 lg:px-8 sm:px-6">
      <div className="">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            WHAT CLIENTS ARE SAYING
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Now you have our side of the story, but what do our clients think?
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mt-10 grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <p className="mb-4 text-gray-700">{testimonial.quote}</p>
              <div className="mt-4 flex items-center">
                <Avatar>
                  <AvatarImage
                    src={testimonial.image}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <AvatarFallback>
                    {testimonial.name[0]}
                    {testimonial.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>

                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
