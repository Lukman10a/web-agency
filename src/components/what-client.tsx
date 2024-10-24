import React from "react";
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
  // Duplicate the objects or add more testimonials as needed
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            WHAT CLIENTS ARE SAYING
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Now you have our side of the story, but what do our clients think?
          </p>
        </div>

        <div className="mt-10 grid gap-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center mt-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
