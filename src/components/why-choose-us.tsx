import Image from "next/image";
import React from "react";
import efficiency from "../../public/images/efficiency.svg";
import security from "../../public/images/security.svg";
import expert from "../../public/images/expert.svg";
import securityImg from "../../public/images/securityImg.png";
import lightbox from "../../public/images/lightbox.svg";
import featherdev from "../../public/images/featherdev.svg";
import boltshift from "../../public/images/boltshift.svg";
import globalbank from "../../public/images/globalbank.svg";
import amplitude from "../../public/images/amplitude.svg";
import { IoReturnUpForward } from "react-icons/io5";

const benefits = [
  {
    img: efficiency,
    title: "Increased Efficiency and Cost Savings",
    description:
      "Optimize operations, cut costs, and focus on growth with our cloud and security solutions.",
  },
  {
    img: security,
    title: "Enhanced Security and Compliance",
    description:
      "Stay protected from threats and ensure compliance with GDPR, HIPAA, and more.",
  },
  {
    img: expert,
    title: "Expert Guidance & 24/7 Support",
    description:
      "Access continuous monitoring, expert support to keep your systems secure & scalable.",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="py-10">
      {/* Section: Why Choose Us */}
      <header className="text-center">
        <h1 className="md:text-5xl text-5xl font-extrabold">
          <span className="block">Why Choose Us? Key</span>
          <span className="block">Benefits for Your Business</span>
        </h1>
      </header>

      {/* Benefits Section */}
      <section className="flex gap-10 p-16" aria-labelledby="benefits-heading">
        {benefits.map((benefit, index) => (
          <article
            key={index}
            className="mx-4 flex flex-col items-center space-y-4 text-center"
          >
            <Image src={benefit.img} alt={benefit.title} />
            <h3 className="font-extrabold text-3xl">{benefit.title}</h3>
            <p className="text-[#808080]">{benefit.description}</p>
          </article>
        ))}
      </section>

      {/* Case Study Section */}
      <section
        className="flex items-center m-10 rounded-lg gap-10 p-4 bg-gradient-to-l from-[rgba(255,149,87,0.1)] to-[rgba(8,19,72,0.1)]"
        aria-labelledby="case-study-heading"
      >
        <Image src={securityImg} alt="Security Image" className="w-[550px]" />
        <div className="space-y-8">
          <h2
            id="case-study-heading"
            className="md:text-5xl text-5xl font-extrabold"
          >
            Improved Security Posture for a Financial Firm with a Custom
            Security Architecture
          </h2>
          <p>
            We improved a financial firm's security by implementing a custom
            architecture with advanced threat detection and strict access
            controls, reducing incidents and boosting compliance.
          </p>
          <div className="border-[0.85px] border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white p-2 py-4">
            <button>Discover Solution</button>
            <IoReturnUpForward size={25} />
          </div>
        </div>
      </section>

      {/* Leading Brands Section */}
      <section
        className="py-6 pt-12 space-y-4 text-center"
        aria-labelledby="brands-heading"
      >
        <h2
          id="brands-heading"
          className="md:text-5xl text-3xl font-extrabold mb-4"
        >
          Leading Brands Trust Us
        </h2>
        <div className="flex justify-center gap-12 flex-wrap">
          {[lightbox, featherdev, boltshift, globalbank].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="w-36"
            />
          ))}
        </div>
      </section>

      {/* Security Certifications Section */}
      <section
        className="bg-[#FF9557] p-16 px-24 space-y-4 text-center"
        aria-labelledby="certifications-heading"
      >
        <header>
          <h2
            id="certifications-heading"
            className="md:text-5xl text-2xl font-extrabold py-4"
          >
            Security Certifications
          </h2>
          <p>
            Your security is our priority. We hold top industry certifications
            including ISO, AWS, CISSP, and more.
          </p>
        </header>

        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="rounded-xl shadow-[0px_3px_0px_0px_#050505] bg-white p-8 flex justify-center"
            >
              <Image src={amplitude} alt="Certification Logo" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
