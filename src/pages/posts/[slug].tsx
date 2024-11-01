// pages/posts/[slug].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { createReader } from "@keystatic/core/reader";
import Markdoc from "@markdoc/markdoc";
import keystaticConfig from "../../../keystatic.config";
import React from "react";
import Image from "next/image";
import { collectHeadings, Heading, Node } from "@/lib/utils";

const reader = createReader(process.cwd(), keystaticConfig);

export default function PostPage({
  post,
  content,
  headings,
}: {
  post: { title: string; banner?: string; date: string };
  content: React.ReactNode;
  headings: Heading[];
}) {
  if (!post) return <div>Post not found</div>;

  return (
    <article className="prose prose-xl mx-auto w-full py-5">
      <h1>{post.title}</h1>
      {post.banner && (
        <Image
          src={`/content/posts/future-of-dev-ops-in-the-world-of-ai/${post.banner}`}
          alt={post.title}
          width={200}
          height={200}
        />
      )}
      <p>{post.date}</p>

      {headings && headings?.length > 0 && (
        <nav className="toc mb-6">
          <h2>Table of Contents</h2>
          <ul>
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ marginLeft: `${(heading.level! - 1) * 16}px` }}
              >
                <a href={`#${heading.id}`}>{heading.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div
        dangerouslySetInnerHTML={{
          __html: content as string,
        }}
      ></div>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await reader.collections.posts.read(params?.slug as string);
  if (!post) return { notFound: true };

  const { node } = await post.content();
  const renderable = Markdoc.transform(node);

  const content = Markdoc.renderers.html(renderable);
  // Generate ToC from the transformed Markdoc node
  const headings = collectHeadings(renderable as Node);

  console.log({ headings });

  return {
    props: {
      post: { title: post.title, banner: post.banner, date: post.date },
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
