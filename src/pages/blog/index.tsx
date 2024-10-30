import BlogCard from "@/components/blog-card";
import Newsletter from "@/components/newsletter";
import PostCard from "@/components/post-card";
import React, { useState } from "react";
import postImage from "/public/assets/post-image.png";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArrowIcon from "@/components/icons/arrow";

type Post = {
  id: number;
  imageSrc: string | StaticImageData;
  date: string;
  title: string;
  categories: string[];
};

const posts: Post[] = [
  {
    id: 1,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["ENTERPRISES", "MIGRATION", "SERVERLESS"],
  },
  {
    id: 2,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["KICKSTART", "SAAS", "SERVERLESS"],
  },
  {
    id: 3,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["LARA", "MIGRATION", "SERVERLESS"],
  },
  {
    id: 4,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["ENTERPRISES", "SAAS", "SERVERLESS"],
  },
  {
    id: 5,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["KICKSTART", "MIGRATION", "LARA"],
  },
  {
    id: 6,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["MIGRATION", "SERVERLESS"],
  },
  {
    id: 7,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["LARA", "MIGRATION", "KICKSTART"],
  },
  {
    id: 8,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["LARA", "SERVERLESS"],
  },
  {
    id: 9,
    image: postImage,
    date: "20/JAN/2025",
    title:
      "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
    categories: ["LARA", "MIGRATION", "SAAS"],
  },
];

const categories = [
  "ALL",
  "ENTERPRISES",
  "KICKSTART",
  "LARA",
  "MIGRATION",
  "SAAS",
  "SERVERLESS",
];

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredPosts =
    activeCategory === "ALL"
      ? posts
      : posts.filter((post) => post.categories.includes(activeCategory));

  return (
    <section className="border mx-auto ">
      <BlogCard />

      <div className="container mx-auto px-4 py-8 max-w-[1200px] ">
        <h2 className="text-3xl font-bold mb-6 mx-auto text-center">
          Latest Insight
        </h2>

        <div className="flex flex-wrap gap-2 mb-6 justify-center mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border border-black rounded-full text-sm ${
                activeCategory === category
                  ? "bg-orange-650 text-white"
                  : "text-gray-800"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-1 2md:grid-cols-2 grid-cols-3 gap-[2px] mx-5">
          {filteredPosts.map((post) => (
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

        <div className="flex justify-center mt-8">
          <Button
            asChild
            className="w-fit py-[1.6em] border border-black uppercase flex items-center justify-center   text-[.75rem] 2md:text-[.7rem] font-light rounded-full text-white bg-orange-600 hover:bg-orange-700">
            <Link href="3">
              READ MORE <ArrowIcon />
            </Link>
          </Button>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default Index;
