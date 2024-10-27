import ArrowIcon from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import caseStudyHero from "../../../public/assets/case-study-hero.png";
import caseStudy from "../../../public/assets/case-image.png";
import lightbox from "../../../public/svg/lightbox.svg";
import featherdev from "../../../public/svg/featherdev.svg";
import boltshift from "../../../public/svg/boltshift.svg";
import globalbank from "../../../public/svg/globalbank.svg";
import Image from "next/image";
import React from "react";
import Testimonials from "@/components/what-client";
import ContactSection from "@/components/lets-talk";
import Link from "next/link";

const categories = [
  "ALL",
  "ENTERPRISES",
  "KICKSTART",
  "LARA",
  "MIGRATION",
  "SAAS",
  "SERVERLESS",
];

const caseStudies = [
  {
    slug: "/raiffeisen",
    id: 1,
    title: "Raiffeisen Bank's Strategic Migration to Cloud",
    tags: "BANKING - CLOUD - CI/CD - MIGRATION",
    image: caseStudy,
  },
  {
    slug: "/retail",
    id: 2,
    title: "Transforming Retail with Advanced Analytics",
    tags: "RETAIL - ANALYTICS - BIG DATA - CUSTOMER INSIGHTS",
    image: caseStudy,
  },
  {
    slug: "/ai",
    id: 3,
    title: "Implementing AI Solutions in Healthcare",
    tags: "HEALTHCARE - AI - MACHINE LEARNING - AUTOMATION",
    image: caseStudy,
  },
  {
    slug: "/supply",
    id: 4,
    title: "IoT Integration for Supply Chain Optimization",
    tags: "SUPPLY CHAIN - IoT - LOGISTICS - REAL-TIME DATA",
    image: caseStudy,
  },
  {
    slug: "/fintech",
    id: 5,
    title: "Enhancing Security in Fintech Applications",
    tags: "FINTECH - SECURITY - ENCRYPTION - DATA PROTECTION",
    image: caseStudy,
  },
  {
    slug: "/manufacturing",
    id: 6,
    title: "Automation in Manufacturing Processes",
    tags: "MANUFACTURING - AUTOMATION - ROBOTICS - EFFICIENCY",
    image: caseStudy,
  },
  {
    slug: "/smart",
    id: 7,
    title: "Building Smart Cities with IoT Technology",
    tags: "SMART CITIES - IoT - INFRASTRUCTURE - SUSTAINABILITY",
    image: caseStudy,
  },
  {
    slug: "/cloud",
    id: 8,
    title: "Empowering Educational Institutions with Cloud-Native Development",
    tags: "EDUCATION - CLOUD - DEVELOPMENT - SCALABILITY",
    image: caseStudy,
  },
  {
    slug: "/ecommerce",
    id: 9,
    title: "Machine Learning for Personalized E-commerce Recommendations",
    tags: "E-COMMERCE - MACHINE LEARNING - RECOMMENDATIONS - SALES",
    image: caseStudy,
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex md:flex-col items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <article className="space-y-10 flex-[2]">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up">
            Been there, done that
          </h1>
          <p className="text-xl animate-fade-in-up delay-200 font-sans">
            We make sure you receive a tailor-made & cost efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last.
          </p>
          <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </article>
        <div className="animate-fade-in-up flex-1 delay-500">
          <Image src={caseStudyHero} alt="case-study-hero" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="flex flex-wrap items-center justify-center gap-10 p-10">
        {categories.map((category, index) => (
          <p
            key={index}
            className="text-lg border-[0.73px] border-[#262626] px-3 rounded-full cursor-pointer p-2 transition-all duration-300 transform hover:bg-[#FF9557] hover:scale-105 hover:text-white font-sans"
          >
            {category}
          </p>
        ))}
      </section>

      {/* Case Study Cards */}
      <section>
        <div className="grid grid-cols-3 gap-8 cursor-pointer sm:grid-cols-1 md:grid-cols-2 p-8">
          {caseStudies.map((study) => (
            <Link
              href={{
                pathname: `/case-studies${study.slug}`,
                query: { title: study.title, tags: study.tags },
              }}
              as={`/case-studies${study.slug}`}
              key={study.id}
            >
              <div className="rounded-xl shadow-lg space-y-2 bg-[#F6F2FF] p-6 ">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full rounded-xl bg-white"
                />
                <p className=" text-[#636363] py-2">{study.tags}</p>
                <h3 className="font-semibold text-[#111827] text-2xl">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-4">
          <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white ">
            <span>SEE MORE</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>

      {/* more clients */}
      <section
        className="py-6 pt-12 space-y-6 text-center"
        aria-labelledby="brands-heading"
      >
        <h2
          id="brands-heading"
          className="text-5xl capitalize md:text-3xl font-medium mb-4 font-sora"
        >
          MORE CLIENTS
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 place-items-center">
          {[
            lightbox,
            featherdev,
            boltshift,
            globalbank,
            lightbox,
            featherdev,
            boltshift,
            globalbank,
          ].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="w-36 "
            />
          ))}
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default CaseStudies;
