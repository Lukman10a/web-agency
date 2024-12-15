import React, { useState } from "react";

import { GetStaticProps } from "next";

import { createReader } from "@keystatic/core/reader";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FeaturedPost from "@/components/featured-card";
import PostCard from "@/components/post-card";
import Newsletter from "@/components/shared/newsletter";

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
  slug: string;
};

const Index: React.FC<{ posts: Post[]; categories: Category[] }> = ({
  posts,
  categories,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>("all");

  const featuredPost = posts.find((post) => post.featured);

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) =>
          Array.isArray(post.category)
            ? post.category.includes(activeCategory)
            : post.category === activeCategory,
        );

  // useEffect(() => {
  //   console.log("Filtered Posts:", filteredPosts);

  //   console.log("Active Category:", activeCategory);
  // }, [activeCategory, filteredPosts]);

  return (
    <section className="mx-auto border bg-main-gradient">
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
        <div className="m-5">
          <Select
            value={activeCategory || "all"}
            onValueChange={(value) =>
              setActiveCategory(value === "" ? null : value)
            }
          >
            <SelectTrigger className="w-[180px] border-black">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Posts</SelectItem>
              {[...categories].map((category) => (
                <SelectItem key={category.slug} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mx-auto mb-6 flex flex-wrap justify-center gap-2">
          {[{ name: "ALL", slug: "all" }, ...categories].map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`rounded-full border border-black px-4 py-2 text-sm uppercase ${
                activeCategory === category.slug
                  ? "bg-orange-650 text-white"
                  : "text-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredPosts.length !== 0 ? (
          <section className="mx-5 grid grid-cols-3 gap-[2px] 2md:grid-cols-2 sm:grid-cols-1">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                imageUrl={post.image}
                date={post.date}
                title={post.title}
                category={post.category.split("-").join(" ")}
                id={post.id}
              />
            ))}
          </section>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-center font-medium">{`No Posts Available for this category`}</p>
          </div>
        )}

        {/* <div className="mt-8 flex justify-center">
          <Button
            asChild
            className="flex w-fit items-center justify-center rounded-full border border-black bg-orange-600 py-[1.6em] text-[.75rem] font-light uppercase text-white hover:bg-orange-700 2md:text-[.7rem]"
          >
            <Link href="/posts">
              READ MORE <ArrowIcon />
            </Link>
          </Button>
        </div> */}
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

  const categories = categoriesData.map((category, index) => ({
    name: category.entry.name,
    slug: categoriesData[index].slug,
  }));

  // console.log({ categories, categoriesData, posts });

  return {
    props: { posts, categories },
  };
};

export default Index;
