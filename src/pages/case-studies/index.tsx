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
import CategoryButtons from "@/components/shared/category-buttons";
import MoreClients from "@/components/more-clients";

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
      <section className="bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] py-16">
        <div className="mx-auto flex w-[90%] max-w-[1300px] items-center md:flex-col">
          <article className="mx-auto mr-24 w-2/3 xl:mr-0 md:mb-8 md:w-full">
            <h1 className="mb-[.3em] animate-fade-in-up font-sora text-6xl font-extrabold xl:text-5xl md:text-4xl">
              Been there, done that
            </h1>
            <p className="mb-[1.5em] w-[85%] animate-fade-in-up font-sans text-[#808080] delay-200 md:w-full md:text-[14px]">
              We make sure you receive a tailor-made & cost <br /> efficient
              cloud environment that is secure, scalable, easy to operate, and
              built-to-last.
            </p>
            <Button className="flex w-fit transform items-center gap-4 rounded-full border border-[#081348] bg-orange-650 px-[2em] py-[1.6em] text-white transition duration-500 hover:scale-105 hover:bg-orange-600 md:text-[12px] sm:w-full">
              <span>EXPLORE</span>
              <ArrowIcon />
            </Button>
          </article>
          <div className="animate-fade-in-up delay-500 xl:w-1/3 md:w-[80%]">
            <Image
              src={caseStudyHero}
              alt="case-study-hero"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoryButtons categories={categories} />

      {/* Case Study Cards */}
      <section>
        <div className="mx-auto grid max-w-[1200px] cursor-pointer grid-cols-3 justify-around gap-8 p-8 lg:grid-cols-2 sm:grid-cols-1">
          {caseStudies.map((study) => (
            <Link
              href={{
                pathname: `/case-studies${study.slug}`,
                query: { title: study.title, tags: study.tags },
              }}
              as={`/case-studies${study.slug}`}
              key={study.id}
            >
              <div className="mx-auto max-w-[400px] space-y-2 rounded-2xl border p-4">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full rounded-xl bg-[#FAE9E033] p-4"
                />
                <p className="py-2 text-[12px] text-[#636363]">{study.tags}</p>
                <h3 className="text-[18px] font-semibold text-[#111827]">
                  {study.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-4">
          <Button className="flex w-fit items-center gap-4 rounded-full border border-[#081348] bg-orange-650 text-white">
            <span>SEE MORE</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>

      {/* more clients */}
      <section
        className="space-y-6 py-6 pt-12 text-center"
        aria-labelledby="brands-heading"
      >
        <MoreClients />
      </section>

      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default CaseStudies;
