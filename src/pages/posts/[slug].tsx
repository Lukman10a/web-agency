// pages/posts/[slug].tsx
import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";
import { Calendar } from "lucide-react";
import { LuTwitter } from "react-icons/lu";
import { PiInstagramLogo, PiWhatsappLogo } from "react-icons/pi";

import { collectHeadings, Heading, HeadingNode } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import TableOfContents from "@/components/table-of-content";

import keystaticConfig from "../../../keystatic.config";
import markdocConfig from "../../../markdoc.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default function PostPage({
  post,
  content,
  headings,
}: {
  post: {
    title: string;
    banner?: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
  };
  content: React.ReactNode;
  headings: Heading[];
}) {
  if (!post) return <div>Post not found</div>;

  return (
    <section className="my-4">
      <div className="mx-auto w-[90%] max-w-[800px] space-y-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <Badge className="bg-orange-650 py-2 uppercase">
            {post.category}
          </Badge>
          <Separator orientation="vertical" />
          <p className="flex gap-3 text-[#636363]">
            <Calendar /> {post.date}
          </p>
        </div>

        <h1 className="font-sora text-[2.5rem] font-semibold leading-tight 2md:text-[1.8rem] sm:text-[1.4rem]">
          {post.title}
        </h1>
        <div className="mx-auto flex items-center justify-center gap-3 md:flex-col">
          <div className="flex gap-3 p-3 text-center md:flex-col">
            <span className="inline-block h-12 w-12 rounded-full bg-[#8080802d] md:self-center"></span>
            <p className="self-center">{post.author} - Head of Engineering</p>
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
      </div>

      <section className="mx-auto w-full max-w-[100ch] py-5">
        {post.banner && (
          <Image
            src={`${post.banner}`}
            alt={post.title}
            width={200}
            height={200}
            className="aspect-video w-full"
          />
        )}

        <div className="flex gap-4 p-4 sm:flex-col">
          <div className="sticky top-0 sm:hidden">
            {headings && headings?.length > 0 && (
              <TableOfContents headings={headings} />
            )}
          </div>

          <article
            className="prose prose-lg flex-[3] prose-h2:text-center prose-h2:font-sora prose-h2:text-orange-650"
            dangerouslySetInnerHTML={{
              __html: content as string,
            }}
          ></article>
        </div>
      </section>

      <div className="mx-auto mb-6 gap-2">
        <div className="flex items-center justify-center gap-4">
          {post.tags.map((tag) => (
            <Badge
              className="text-md bg-darkblue-800 font-normal uppercase"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mx-auto flex justify-center gap-3 md:flex-col">
          <div className="flex gap-3 p-3 text-center md:flex-col">
            <span className="inline-block h-12 w-12 rounded-full bg-[#8080802d] md:self-center"></span>
            <p className="self-center">{post.author} - Head of Engineering</p>
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
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await reader.collections.posts.read(params?.slug as string);
  if (!post) return { notFound: true };

  const { node } = await post.content();
  const renderable = Markdoc.transform(node, markdocConfig);

  const content = Markdoc.renderers.html(renderable);
  // Generate ToC from the transformed Markdoc node
  const headings = collectHeadings(renderable as HeadingNode);

  console.log({ headings });

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
