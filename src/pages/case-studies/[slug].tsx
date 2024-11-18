import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";
import { Calendar, Tag } from "lucide-react";

import { collectHeadings, Heading, HeadingNode } from "@/lib/utils";

import {
  Card,
  CardContent, // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ContactSection from "@/components/lets-talk";
import Testimonials from "@/components/what-client";

import keystaticConfig from "../../../keystatic.config";
import { config as markdocConfig } from "../../../markdoc.config";
import blog_img from "../../../public/assets/blog_img.png";

// Create a Keystatic reader instance
const reader = createReader(process.cwd(), keystaticConfig);

interface TCaseStudy {
  title: string;
  banner?: string;
  date: string;
  client: string;
  tags: string[];
  description: string;
  outcome: string;
  client_logo: string;
}

interface TCaseStudyProps {
  case_study: TCaseStudy;
  content: React.ReactNode;
  headings: Heading[];
}

const Details: React.FC<TCaseStudyProps> = ({
  case_study,
  content,
  headings,
}) => {
  const title = case_study?.title;
  const tags = case_study?.tags;

  return (
    <main className="">
      {/* Categories Section */}
      <div className="flex items-center justify-center bg-white py-8 sm:py-4">
        <div className="w-[90%] max-w-[800px] space-y-4 text-center">
          {tags.map((tag) => (
            <button
              key={tag} // Adding a unique key is best practice in a list
              className="mx-1 capitalize cursor-default rounded-full border border-[#808080] px-4 py-2 font-sans text-sm text-[#808080] md:text-[10px]"
            >
              {tag}
            </button>
          ))}
          <h1 className="font-sora text-[2.5rem] font-semibold leading-tight 2md:text-[1.8rem] sm:text-[1.4rem]">
            {title}
          </h1>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{case_study.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              <span>{case_study.client}</span>
            </div>
          </div>
        </div>
      </div>

      <figure className="mx-auto w-[90%] max-w-[1200px] py-6">
        <Image
          src={case_study.banner || blog_img}
          alt="Case Study cover image"
          className="rounded-lg shadow-lg aspect-video w-full"
          width={200}
          height={200}
        />
      </figure>

      {/* Blog Content Section */}
      <section className="mx-auto flex w-[90%] max-w-[1200px] items-start justify-between gap-16 md:gap-4">
        <div className="sticky top-0 w-1/6 sm:hidden">
          <p className="mb-2 font-semibold 2md:text-[12px]">Client</p>
          <p className="mb-4 text-[#808080] 2md:text-[12px]">
            {case_study.client}
          </p>
          <div
            aria-label="Blog Info"
            className="border border-black p-2 text-center md:mr-6"
          >
            {case_study.client_logo ? (
              <Image
                src={case_study.client_logo}
                height={200}
                width={200}
                alt="Blog cover image"
                className="rounded-lg"
              />
            ) : (
              <p>{case_study.client}</p>
            )}
          </div>
        </div>

        <ContentSection
          case_study={case_study}
          content={content}
          headings={headings}
        />
      </section>
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default Details;

// Content Section Component
const ContentSection: React.FC<TCaseStudyProps> = ({ case_study, content }) => (
  <section className="relative mx-auto  w-5/6 flex-1  py-5">
    <div className="flex gap-4">
      <div>
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Executive Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{case_study.description}</p>
            </CardContent>
          </Card>
        </section>
        <article
          className="prose prose-lg w-full prose-h2:text-center max-w-[100ch] prose-h2:font-sora prose-h2:text-orange-650"
          dangerouslySetInnerHTML={{ __html: content as string }}
        ></article>
      </div>
    </div>
  </section>
);

// Static Props and Paths
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const case_studies = await reader.collections.caseStudies.read(
    params?.slug as string,
  );
  if (!case_studies) return { notFound: true };

  const { node } = await case_studies.content();
  const renderable = Markdoc.transform(node, markdocConfig);
  const content = Markdoc.renderers.html(renderable);
  const headings = collectHeadings(renderable as HeadingNode);

  return {
    props: {
      case_study: {
        title: case_studies.title,
        banner: case_studies.featuredImage,
        date: case_studies.date,
        client: case_studies.client,
        client_logo: case_studies.client_logo,
        tags: case_studies.tags,
        outcome: case_studies.outcome,
        description: case_studies.description,
      },
      content,
      headings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const case_studies = await reader.collections.caseStudies.all();
  const paths = case_studies.map((case_study) => ({
    params: { slug: case_study.slug },
  }));

  return { paths, fallback: "blocking" };
};
