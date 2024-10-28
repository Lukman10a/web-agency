import React from "react";
import Image from 'next/image';
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
    image: "/path/to/image1.jpg",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/path/to/image1.jpg",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/path/to/image1.jpg",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/path/to/image1.jpg",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/path/to/image1.jpg",
  },
  {
    quote:
      "Teverse transformed our cloud infrastructure and helped us secure our sensitive data. Their expertise was unmatched.",
    name: "Petr Nemeth",
    title: "CEO at Datadoo, Inc.",
    image: "/path/to/image1.jpg",
  },
  // Additional testimonials can be added here...
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gradient-100 to-gradient-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 relative">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center mt-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
                  <AvatarFallback>{testimonial.name[0]}{testimonial.name.split(" ")[1][0]}</AvatarFallback>
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
                <div className="absolute -bottom-8 right-1 sm:-bottom-8 sm:right-1 md:-bottom-16 md:right-8 lg:-bottom-20 lg:right-20 xl:-bottom-24 xl:right-24">
                  <Image
                    src="/assets/Star.png"
                    alt="Star"
                    width={100}
                    height={100}
                    className="sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]"
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
