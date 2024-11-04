"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";

// Component imports
import Newsletter from "@/components/newsletter";
import PostCard from "@/components/post-card";
import TableOfContents from "@/components/table-of-content";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Icon imports
import { PiWhatsappLogo, PiInstagramLogo } from "react-icons/pi";
import { LuTwitter } from "react-icons/lu";
import { Calendar } from "lucide-react";

// Utility and config imports
import { collectHeadings, Heading, HeadingNode } from "@/lib/utils";
import keystaticConfig from "../../../keystatic.config";
import { config as markdocConfig } from "../../../markdoc.config";
import postImage from "/public/assets/post-image.png";

// Create a Keystatic reader instance
const reader = createReader(process.cwd(), keystaticConfig);

// Type Definitions
interface Post {
  title: string;
  banner?: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

interface SimilarPost {
  id: number;
  image: string | StaticImageData;
  date: string;
  title: string;
  categories: string[];
}

interface PostDetailsProps {
  post: Post;
  content: React.ReactNode;
  headings: Heading[];
}

// Component
const PostDetails: React.FC<PostDetailsProps> = ({
  post,
  content,
  headings,
}) => {
  const similarPosts = [
    {
      id: 1,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["KICKSTART", "MIGRATION", "LARA"],
    },
    {
      id: 2,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["MIGRATION", "SERVERLESS"],
    },
    {
      id: 3,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["LARA", "MIGRATION", "KICKSTART"],
    },
  ];

  return (
    <section>
      <div className="w-full">
<<<<<<< HEAD
        <div className="flex items-center justify-center bg-white py-8 sm:py-4">
          <div className="w-[90%] max-w-[800px] space-y-4 text-center">
            {data.categories.map((category) => (
              <button
                key={category} // Adding a unique key is best practice in a list
                className="mx-1 cursor-default rounded-full border border-[#808080] px-4 py-2 font-sans text-sm text-[#808080] md:text-[10px]"
              >
                {category}
              </button>
            ))}

            <h1 className="font-sora text-[2.5rem] font-semibold leading-tight 2md:text-[1.8rem] sm:text-[1.4rem]">
              {data.title}
            </h1>
            <p className="text-[1.2rem] text-[#636363] 2md:text-[1rem] sm:text-[.8rem]">
              {data.date}
            </p>
          </div>
        </div>

        <div className="sticky top-0 z-50 mx-auto mb-8 flex w-full items-center justify-around bg-darkblue-900 py-[1em] text-white 2md:py-[.75em] sm:mb-4 sm:py-[.5em]">
          {data.sections.map((section, index) => (
            <a href={`#${section}`} key={section}>
              <div
                className={`flex cursor-pointer items-center space-x-2 text-center ${
                  activeSection === section
                    ? "text-orange-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleSelectSection(section)}
              >
                <p className="-mr-4 font-sora text-3xl font-semibold 2md:text-[20px] md:text-[15px]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="border-l border-gray-400 pl-2 font-sans 2md:text-[14px] md:text-[10px] sm:-ml-6 sm:pl-1"></p>
                <p className="border-l pl-2 font-sans 2md:text-[14px] md:text-[10px] sm:-ml-6 sm:pl-[4px]">
                  {section}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mb-6 w-[85%] max-w-[1300px] border-b border-[#8080803f]">
          <section className=" " id="INTRODUCTION">
            <p className="mb-8 text-justify font-sans text-[1.3rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              Getting things right at the first time isn&apos;t always easy,
              especially if just starting with DevOps or in the Cloud in
              general. The AWS Well-Architected Framework was created to assist
              cloud architects to design and continuously improve their
              infrastructure in order for it to be secure, efficient, resilient,
              and cost-effective for their applications.
            </p>
            <p className="mb-8 text-justify font-sans text-[1.3rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              We at Labyrinth Labs help companies design and build cloud
              infrastructures. It is crucial for us, that the infrastructures we
              build are designed according to industry best practices and spec.
            </p>
            <p className="mb-8 text-justify font-sans text-[1.3rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The AWS Well-Architected Framework provides guidance for building
              and improving cloud architectures. It offers insights into
              aligning your designs with best practices and enhancing your cloud
              workloads.
            </p>
            <div className="flex gap-[5px] md:flex-col">
              <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
                We at Labyrinth Labs help companies design and build cloud
                infrastructures. It is crucial for us, that the infrastructures
                we build are designed according to industry best practices and
                spec.
              </p>
              <Image
                src={textImage}
                alt="Post image"
                className="side-image mx-auto mb-6 w-[100%] max-w-[300px] md:mb-12"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="pt-24 sm:pt-16" id="SIX PILLARS">
            <h2 className="mx-auto mb-[1em] w-full max-w-[600px] text-center font-sora text-[2rem] font-semibold leading-tight text-orange-650 2md:text-[1.5rem] sm:text-[1.2rem]">
              The 6 Pillars of the Well-Architected Framework Review
            </h2>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Well-Architected Framework Review is a process that examines
              six pillars in detail. It identifies potential vulnerabilities and
              areas for improvement, offering actionable steps towards creating
              a more secure, efficient, and sustainable cloud infrastructure.
            </p>
            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Operational Excellence Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Operational Excellence pillar concentrates on the effective
              running of systems and the ongoing improvement of processes. It
              emphasizes the need to automate changes, respond to events, and
              establish standards for day-to-day operations. It also encompasses
              the capacity to efficiently support development and operational
              workloads, gain operational insights, and continuously refine
              processes and procedures to add business value.
            </p>
            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Security Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Security pillar is dedicated to safeguarding information,
              systems, and assets while also providing business value. It
              encapsulates important aspects such as maintaining data
              confidentiality and integrity, managing user access, and
              implementing controls to detect security incidents. It also
              involves the development of risk assessments and mitigation
              strategies to enhance overall security.
            </p>
            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Performance Efficiency Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Performance Efficiency pillar is centered around the effective
              use of IT and computing resources. It involves choosing suitable
              resource types and sizes optimized for workload needs, monitoring
              performance, and maintaining efficiency as business needs and
              technologies evolve. It aims to meet requirements efficiently and
              to maintain that efficiency as demand fluctuates and technologies
              progress.
            </p>
            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Reliability Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Security pillar is dedicated to safeguarding information,
              systems, and assets while also providing business value. It
              encapsulates important aspects such as maintaining data
              confidentiality and integrity, managing user access, and
              implementing controls to detect security incidents. It also
              involves the development of risk assessments and mitigation
              strategies to enhance overall security.
            </p>
            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Cost Optimization Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Cost Optimization pillar focuses on avoiding unnecessary
              costs. Key topics include understanding spending over time and
              controlling fund allocation, selecting resources of the right type
              and quantity, and scaling to meet business needs without
              overspending.
            </p>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
            <Image
              src={cost}
              alt="Post image"
              className="full-image mx-auto mb-24 w-full max-w-[1000px] sm:mb-12"
              width={500}
              height={500}
            />

            <h3 className="mx-auto mb-[.7em] w-full max-w-[600px] text-center font-sora text-[1.65rem] font-semibold leading-tight text-[#262626] 2md:text-[1.2rem] sm:text-[1.1rem]">
              Sustainability Pillar
            </h3>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Sustainability pillar is concentrated on reducing the
              environmental impacts of cloud operations. It emphasizes a shared
              responsibility model for sustainability, understanding the impact,
              and enhancing utilization to minimize the resources needed and
              lessen downstream effects. This pillar also includes the ability
              to consistently improve sustainability impacts by decreasing
              energy consumption, increasing efficiency across all workload
              components, and optimizing the benefits from the resources
              provided while minimizing the total resources required.
            </p>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
          </section>
          <section className="pt-24 sm:pt-16" id="PROCESS">
            <h2 className="mx-auto mb-[1em] w-full max-w-[600px] text-center font-sora text-[2rem] font-semibold leading-tight text-orange-650 2md:text-[1.5rem] sm:text-[1.2rem]">
              The Process of the Well-Architected Framework Review
            </h2>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              The Sustainability pillar is concentrated on reducing the
              environmental impacts of cloud operations. It emphasizes a shared
              responsibility model for sustainability, understanding the impact,
              and enhancing utilization to minimize the resources needed and
              lessen downstream effects. This pillar also includes the ability
              to consistently improve sustainability impacts by decreasing
              energy consumption, increasing efficiency across all workload
              components, and optimizing the benefits from the resources
              provided while minimizing the total resources required.
            </p>
            <p className="mb-8 text-justify font-sans text-[1.4rem] text-[#262626] 2md:text-[1.2rem] sm:mb-4 sm:text-[1rem]">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
          </section>
        </div>
        <div>
          <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border bg-darkblue-900 px-5 py-3 text-sm text-white sm:text-[10px]"
              >
                {tag}
              </button>
            ))}

            <div className="mx-auto mb-24 flex w-[85%] max-w-[700px] justify-center gap-3 md:flex-col">
              <div className="flex gap-3 p-3 text-center md:flex-col">
                <span className="inline-block h-12 w-12 rounded-full bg-[#8080802d] md:self-center"></span>
                <p className="self-center">
                  Martin Satoshi - Head of Engineering
                </p>
              </div>
              <div className="flex gap-2 self-center border-l border-darkblue-950 py-2 pl-5 md:self-center md:border-none">
                <Link href="#">
                  <PiWhatsappLogo size={36} color="#081348" />
                </Link>
                <Link href="#">
                  <PiInstagramLogo size={36} color="#081348" />
                </Link>
                <Link href="#">
                  <LuTwitter size={36} color="#081348" />
                </Link>
              </div>
            </div>

            <div className="container mx-auto max-w-[1200px] px-4 py-8">
              <h2 className="mx-auto mb-6 text-center font-sora text-3xl font-bold">
                Similar articles
              </h2>
              <p className="mx-auto mb-12 w-1/2 text-center text-xl text-[#808080] 2md:w-[75%] md:text-[1rem]">
                Have some time to read more? Here are our top picks if this
                topic interested you.
              </p>
              <div className="mx-5 grid grid-cols-3 gap-[2px] 2md:grid-cols-2 sm:grid-cols-1">
                {similarPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    imageUrl={post.image}
                    date={post.date}
                    title={post.title}
                    category={post.categories[0]}
                    id={post.id} // Assuming primary category is the first one
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
=======
        <Header post={post} />
        <ContentSection post={post} content={content} headings={headings} />
        <TagsSection tags={post.tags} />
        <SimilarPosts similarPosts={similarPosts} />
        <Newsletter />
>>>>>>> main
      </div>
    </section>
  );
};

// Header Component
const Header = ({ post }: { post: Post }) => (
  <header className="flex items-center justify-center bg-white py-8 sm:py-4">
    <div className="w-[90%] max-w-[800px] space-y-4 text-center">
      <div className="flex items-center justify-center gap-4">
        <Badge className="bg-orange-650 py-2 uppercase">{post.category}</Badge>
        <Separator orientation="vertical" />
        <p className="flex gap-3 text-[#636363]">
          <Calendar /> {post.date}
        </p>
      </div>
      <h1 className="font-sora text-[2.5rem] font-semibold leading-tight 2md:text-[1.8rem] sm:text-[1.4rem]">
        {post.title}
      </h1>
      <AuthorInfo author={post.author} />
    </div>
  </header>
);

// Author Info Component
const AuthorInfo = ({ author }: { author: string }) => (
  <div className="mx-auto flex justify-center gap-3 md:flex-col">
    <div className="flex gap-3 p-3 text-center md:flex-col">
      <Avatar>
        <AvatarImage />
        <AvatarFallback>M.S</AvatarFallback>
      </Avatar>
      <p className="self-center capitalize">{author} - Head of Engineering</p>
    </div>
    <SocialLinks />
  </div>
);

// Social Links Component
const SocialLinks = () => (
  <div className="flex gap-2 self-center border-l border-darkblue-950 py-2 pl-5 md:self-center md:border-none">
    <Link href="#">
      <PiWhatsappLogo size={36} color="#081348" />
    </Link>
    <Link href="#">
      <PiInstagramLogo size={36} color="#081348" />
    </Link>
    <Link href="#">
      <LuTwitter size={36} color="#081348" />
    </Link>
  </div>
);

// Content Section Component
const ContentSection: React.FC<PostDetailsProps> = ({
  post,
  content,
  headings,
}) => (
  <section className="relative mx-auto w-full max-w-[100ch] py-5">
    {post.banner && (
      <Image
        src={post.banner}
        alt={post.title}
        width={200}
        height={200}
        className="aspect-video w-full"
      />
    )}
    <div className="flex gap-4">
      <div className="">
        {headings?.length > 0 && <TableOfContents headings={headings} />}
      </div>
      <article
        className="prose prose-lg flex-[3] prose-h2:text-center prose-h2:font-sora prose-h2:text-orange-650"
        dangerouslySetInnerHTML={{ __html: content as string }}
      ></article>
    </div>
  </section>
);

// Tags Section Component
const TagsSection = ({ tags }: { tags: string[] }) => (
  <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2">
    {tags.map((tag) => (
      <Badge
        key={tag}
        className="border bg-darkblue-900 px-5 text-sm uppercase text-white"
      >
        {tag}
      </Badge>
    ))}
  </div>
);

// Similar Posts Component
const SimilarPosts = ({ similarPosts }: { similarPosts: SimilarPost[] }) => (
  <div className="container mx-auto max-w-[1200px] px-4 py-8">
    <h2 className="mx-auto mb-6 text-center font-sora text-3xl font-bold">
      Similar articles
    </h2>
    <p className="mx-auto mb-12 w-1/2 text-center text-xl text-[#808080] 2md:w-[75%] md:text-[1rem]">
      Have some time to read more? Here are our top picks if this topic
      interested you.
    </p>
    <div className="mx-5 grid grid-cols-3 gap-[2px] 2md:grid-cols-2 sm:grid-cols-1">
      {similarPosts.map((post) => (
        <PostCard
          key={post.id}
          imageUrl={post.image}
          date={post.date}
          title={post.title}
          category={post.categories[0]}
          id={post.id}
        />
      ))}
    </div>
  </div>
);

export default PostDetails;

// Static Props and Paths
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await reader.collections.posts.read(params?.slug as string);
  if (!post) return { notFound: true };

  const { node } = await post.content();
  const renderable = Markdoc.transform(node, markdocConfig);
  const content = Markdoc.renderers.html(renderable);
  const headings = collectHeadings(renderable as HeadingNode);

  return {
    props: {
      post: {
        title: post.title,
        banner: post.banner,
        date: post.date,
        author: post.author,
        tags: post.tags,
        category: post.category,
      },
      content,
      headings,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await reader.collections.posts.all();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: "blocking" };
};
