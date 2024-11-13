import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";

import ArrowIcon from "@/components/icons/arrow";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/what-client";
import ContactSection from "@/components/lets-talk";
import CategoryButtons from "@/components/shared/category-buttons";
import MoreClients from "@/components/more-clients";

import caseStudyHero from "../../../public/assets/case-study-hero.png";
import defaultImage from "../../../public/assets/case-image.png";

import keystaticConfig from "../../../keystatic.config";
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), keystaticConfig);

export type TCaseStudy = {
  slug: string;
  entry: {
    title: string;
    description: string;
    client: string;
    date: string;
    featuredImage: string | null;
    tags: readonly string[];
    projectLink: string | null;
    outcome: string;
  };
};

const categories = [
  "ALL",
  "ENTERPRISES",
  "KICKSTART",
  "LARA",
  "MIGRATION",
  "SAAS",
  "SERVERLESS",
];

const CaseStudies: React.FC<{ caseStudies: TCaseStudy[] }> = ({
  caseStudies,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] py-16">
        <div className="mx-auto flex w-[90%] max-w-[1300px] items-center md:flex-col">
          <article className="mx-auto mr-24 w-2/3 xl:mr-0 md:mb-8 md:w-full">
            <h1 className="mb-[.3em] font-sora text-6xl font-extrabold xl:text-5xl md:text-4xl">
              Been there, done that
            </h1>
            <p className="mb-[1.5em] w-[85%] font-sans text-xl text-[#808080] md:w-full">
              We make sure you receive a tailor-made & cost-efficient cloud
              environment that is secure, scalable, easy to operate, and
              built-to-last.
            </p>
            <Button className="flex w-fit items-center gap-4 rounded-full border border-[#081348] bg-orange-650 px-[2em] py-[1.6em] text-white transition duration-500 hover:scale-105 hover:bg-orange-600 md:text-[12px] sm:w-full">
              <span>EXPLORE</span>
              <ArrowIcon />
            </Button>
          </article>
          <div className="xl:w-1/3 md:w-[80%]">
            <Image
              src={caseStudyHero}
              alt="Case Study Hero"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoryButtons categories={categories} />

      {/* Case Study Cards */}
      <section>
        {caseStudies && (
          <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8 p-8 lg:grid-cols-2 sm:grid-cols-1">
            {caseStudies.map((study) => (
              <Link href={`/case-studies/${study?.slug}`} key={study?.slug}>
                <div className="max-w-[400px] space-y-2 rounded-2xl border p-4 hover:shadow-lg">
                  <Image
                    src={`${study?.entry?.featuredImage}` || defaultImage.src}
                    alt={study?.entry?.title}
                    width={400}
                    height={300}
                    className="h-[300px] w-full rounded-xl object-cover"
                  />
                  <p className="py-2 text-[12px] capitalize text-[#636363]">
                    {study?.entry?.tags.join(", ")}
                  </p>
                  <h3 className="text-[18px] font-semibold text-[#111827]">
                    {study?.entry?.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="flex justify-center py-4">
          <Button className="flex w-fit items-center gap-4 rounded-full border border-[#081348] bg-orange-650 text-white">
            <span>SEE MORE</span>
            <ArrowIcon />
          </Button>
        </div>
      </section>

      {/* More Clients */}
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

// Fetching Case Studies Data in getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const caseStudiesData = await reader.collections.caseStudies.all();

  const caseStudies = caseStudiesData.map((caseStudy) => ({
    slug: caseStudy.slug,
    entry: {
      title: caseStudy.entry.title,
      description: caseStudy.entry.description,
      client: caseStudy.entry.client,
      date: caseStudy.entry.date,
      featuredImage: caseStudy.entry.featuredImage
        ? `${caseStudy.entry.featuredImage}`
        : defaultImage.src,
      tags: caseStudy.entry.tags,
      projectLink: caseStudy.entry.projectLink || null,
      outcome: caseStudy.entry.outcome || "",
    },
  }));

  return {
    props: { caseStudies },
  };
};
