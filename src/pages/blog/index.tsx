// pages/index.tsx
import { GetStaticProps } from "next";
import { createReader } from "@keystatic/core/reader";
import FeaturedPost from "@/components/featured-card";
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
  featured: boolean;
};

type Category = {
  name: string;
};

const Index: React.FC<{ posts: Post[]; categories: Category[] }> = ({
  posts,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const featuredPost = posts.find((post) => post.featured);

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

  return (
    <section className="mx-auto border">
      {featuredPost && (
        <FeaturedPost
          imageSrc={featuredPost.image}
          altText="Featured post image"
          date={featuredPost.date}
          category={featuredPost.category}
          title={featuredPost.title}
          link={`/blog/${featuredPost.id}`}
        />
      )}
      <div className="container mx-auto max-w-[1200px] px-4 py-8">
        <h2 className="mx-auto mb-6 text-center font-sora text-3xl font-semibold">
          Latest Insight
        </h2>
        <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2">
          {["ALL", ...categories.map((category) => category.name)].map(
            (category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border border-black px-4 py-2 text-sm uppercase ${
                  activeCategory === category
                    ? "bg-orange-650 text-white"
                    : "text-gray-800"
                }`}
              >
                {category}
              </button>
            ),
          )}
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
  const categoriesData = await reader.collections.categories.all();

  const posts = postsData.map((post) => ({
    id: post.slug,
    image: post.entry.banner
      ? `${post.entry.banner}`
      : "/path/to/default/image.jpg", // Adjust default image path
    date: post.entry.date,
    title: post.entry.title,
    category: post.entry.category,
    featured: post.entry.featured,
  }));

  const categories = categoriesData.map((category) => ({
    name: category.entry.name,
  }));

  console.log({ categories });

  return {
    props: { posts, categories },
  };
};

export default Index;
