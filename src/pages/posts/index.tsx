// pages/index.tsx
import { GetStaticProps } from "next";
import { createReader } from "@keystatic/core/reader";
import BlogCard from "@/components/blog-card";
import Newsletter from "@/components/newsletter";
import PostCard from "@/components/post-card";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowIcon from "@/components/icons/arrow";
import keystaticConfig from "../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

type Post = {
  id: string;
  image: string;
  date: string;
  title: string;
  category: string;
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

const Index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredPosts =
    activeCategory === "ALL"
      ? posts
      : posts.filter((post) =>
          Array.isArray(post.category)
            ? post.category.includes(activeCategory)
            : post.category === activeCategory,
        );

  useEffect(() => {
    console.log("Filtered Posts:", filteredPosts);

    console.log("Active Category:", activeCategory);
  }, [activeCategory, filteredPosts]);

  //   console.log("Post Category:", post.);

  return (
    <section className="mx-auto border">
      <BlogCard />
      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        <h2 className="mx-auto mb-6 text-center font-sora text-3xl font-semibold">
          Latest Insight
        </h2>

        <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border border-black px-4 py-2 text-sm ${
                activeCategory === category
                  ? "bg-orange-650 text-white"
                  : "text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <section className="mx-5 grid grid-cols-3 gap-[2px] 2md:grid-cols-2 sm:grid-cols-1">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              imageUrl={post.image}
              date={post.date}
              title={post.title}
              category={post.category}
              id={post.id}
            />
          ))}
        </section>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 py-[1.6em] text-[.75rem] font-light uppercase text-white hover:bg-orange-700 2md:text-[.7rem]"
          >
            <Link href="/posts">
              READ MORE <ArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await reader.collections.posts.all();

  const posts = postsData.map((post) => ({
    id: post.slug,
    image: post.entry.banner || "/path/to/default/image.jpg", // Adjust default image path
    date: post.entry.date,
    title: post.entry.title,
    category: post.entry.category,
  }));

  return {
    props: { posts },
  };
};

export default Index;
