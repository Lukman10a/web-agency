// import React from "react";
// import Image from "next/image";
// export default function Culture() {
//   return (
//     <div>
//       <section className="relative h-[600px] w-full bg-main-gradient">
//         <div className="absolute inset-0">
//           <Image
//             alt="Team members collaborating"
//             className="h-full w-full object-cover"
//             src="/assets/culture.png"
//             fill
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <div className="relative mx-auto max-w-7xl px-6 pt-32">
//           <div className="max-w-2xl text-white">
//             <h1 className="font-sora text-4xl font-bold tracking-tight xl:text-6xl sm:text-5xl">
//               Build Your Career at Teverse
//             </h1>
//             <p className="mt-6 text-xl text-gray-200">
//               We&apos;re looking for innovators who are passionate about AWS and
//               ready to serve and support our customers in their cloud journey.
//             </p>
//             {/* <div className="mt-8">
//               <Button
//                 size="lg"
//                 variant="default"
//                 className="rounded-full bg-orange-650 hover:bg-gray-100 hover:text-black"
//               >
//                 View Open Positions
//               </Button>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";

import Image from "next/image";

// Core Values Array
const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency.",
  },
  {
    title: "Collaboration",
    description: "Working as one team to achieve shared goals and success.",
  },
  {
    title: "Innovation",
    description:
      "Constantly improving and pushing boundaries to deliver the best.",
  },
];

// Team Collaboration Images
const teamImages = [
  { src: "/assets/team1.jpg", alt: "Team Working" },
  { src: "/assets/team2.jpg", alt: "Team Brainstorming" },
  { src: "/assets/team3.jpg", alt: "Team Building" },
];

// Career Growth Array
const careerGrowth = [
  {
    title: "Mentorship",
    description: "Learn from industry leaders and experienced professionals.",
  },
  {
    title: "Training Programs",
    description:
      "Access training resources to sharpen your technical and soft skills.",
  },
  {
    title: "Career Progression",
    description: "Unlock opportunities for internal growth and promotions.",
  },
  {
    title: "Innovation",
    description:
      "Contribute to groundbreaking projects that inspire creativity.",
  },
];

export default function Culture() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full bg-main-gradient">
        <div className="absolute inset-0">
          <Image
            alt="Team members collaborating"
            className="h-full w-full object-cover"
            src="/assets/culture.png"
            fill
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-32">
          <div className="max-w-2xl text-white">
            <h1 className="font-sora text-4xl font-bold tracking-tight xl:text-6xl sm:text-5xl">
              Our Culture at Teverse
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              At Teverse, we foster an environment of collaboration, growth, and
              innovation. Our people are the heart of our success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
          <p className="mt-4 text-gray-600">
            These values shape the way we work, grow, and innovate together.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 md:grid-cols-3">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:bg-orange-650 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-bold group-hover:text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600 group-hover:text-white">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Team Collaboration
          </h2>
          <p className="mt-4 text-gray-600">
            We believe in working together to achieve the extraordinary.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {teamImages.map((image, index) => (
              <div key={index} className="relative h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Grow Your Career With Us
          </h2>
          <p className="mt-4 text-gray-600">
            At Teverse, we provide endless opportunities for learning, growth,
            and development.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
            {careerGrowth.map((item, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
