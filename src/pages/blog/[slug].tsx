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

// Component
const PostDetails: React.FC<PostDetailsProps> = ({
  post,
  content,
  headings,
}) => {
  return (
    <section>
      <div className="w-full">
        <Header post={post} />
        <ContentSection post={post} content={content} headings={headings} />
        <TagsSection tags={post.tags} />
        <SimilarPosts similarPosts={similarPosts} />
        <Newsletter />
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
