import React, { useEffect, useState } from "react";

import { StaticImageData } from "next/image";

import image from "/public/assets/resource_image.png";

// import { createReader } from "@keystatic/core/reader";
// Import Keystatic reader
import ResourceCard from "./resource-card";
import { AnimatedGroup } from "./ui/animated/animated-groups";

// Create reader instance

// Define type for blog posts
type Resource = {
  id: string | number;
  title: string;
  date: string;
  category: string[];
  banner?: string | StaticImageData;
};

const dummy: Resource[] = [
  {
    id: 1,
    title: "6 Essential AWS DevOps Tools: Benefits & Uses Cases",
    date: "Oct 31",
    category: ["Security", "UI/UX"],
    banner: image,
  },
  {
    id: 2,
    title: "Free yourself of operations and compliance headaches",
    date: "Feb 19",
    category: ["DevOps", "SysOps"],
    banner: image,
  },
  {
    id: 3,
    title: "Capitalize on every cost and performance opportunity",
    date: "Jul 05",
    category: ["SysOps", "Cloud"],

    banner: image,
  },
];

const Resources = () => {
  // State to store blog posts
  const [resources, setResources] = useState<Resource[]>(dummy);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts on component mount
  // useEffect(() => {
  //   const fetchBlogPosts = async () => {
  //     try {
  //       // Dynamically import config
  //       const { createReader } = await import("@keystatic/core/reader");
  //       const keystaticConfig = await import("../../keystatic.config");

  //       // Fetch posts
  //       // Create reader
  //       const reader = createReader(process.cwd(), keystaticConfig.default);

  //       // Fetch posts
  //       const postsData = await reader.collections.posts.all();

  //       const transformedPosts = postsData.map((post) => ({
  //         id: post.slug,
  //         title: post.entry.title,
  //         date: post.entry.date,
  //         category: Array.isArray(post.entry.category)
  //           ? post.entry.category
  //           : [post.entry.category],
  //         banner: post.entry.banner ? `${post.entry.banner}` : image.src,
  //       }));

  //       setResources(transformedPosts);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching blog posts:", err);
  //       setError("Failed to fetch blog posts");
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchBlogPosts();
  // }, []);
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Create an API route to fetch Keystatic content
        const response = await fetch("/api/blog-posts");

        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const postsData = await response.json();

        const transformedPosts = postsData
          .slice(0, 3)
          .map((post: { slug: string; entry: Resource }) => ({
            id: post.slug,
            title: post.entry.title,
            date: post.entry.date,
            category: Array.isArray(post.entry.category)
              ? post.entry.category
              : [post.entry.category],
            banner: post.entry.banner ? `${post.entry.banner}` : image.src,
          }));

        setResources(transformedPosts);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to fetch blog posts");
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // // Render loading state
  if (isLoading) {
    return (
      <section className="mx-auto mb-24 w-[90%] max-w-7xl 2md:w-[85%] sm:mb-16">
        <p>Loading resources...</p>
      </section>
    );
  }

  // Render error state
  if (error) {
    return (
      <section className="mx-auto mb-24 w-[90%] max-w-7xl 2md:w-[85%] sm:mb-16">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="mx-auto mb-24 w-[90%] max-w-7xl 2md:w-[85%] sm:mb-16">
      <span className="tag inline-block rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
        RESOURCES
      </span>
      <h3 className="mb-[.5em] mt-4 w-[60%] font-sora text-3xl font-medium 2md:w-full md:mx-auto md:mb-[.4em] md:text-2xl sm:w-full">
        Find <span className="text-orange-650">In-Depth </span> Guides,
        Articles, AWS Best Practices and More
      </h3>
      <p className="mb-[1.5em] w-[90%] text-[#808080] sm:text-justify">
        Continue your cloud journey by learning from our cloud experts. We share
        insights and best practices on everything from app development and
        migrations to cost optimization and generative AI.
      </p>
      <div className="grid grid-cols-responsive300 gap-2 overflow-hidden 2md:flex-col">
        {resources.map((post) => (
          <AnimatedGroup
            key={post.id}
            // className="flex w-full gap-2 2md:flex-col"
            viewport={{
              once: true,
              amount: 0.5,
              margin: "10px",
            }}
            preset="fade"
          >
            <ResourceCard
              title={post.title}
              date={post.date}
              category={post.category}
              buttonLink={`/blog/${post.id}`}
              image={post.banner || image}
            />
          </AnimatedGroup>
        ))}
      </div>
    </section>
  );
};

export default Resources;
