import { useRouter } from "next/router";
import blog_img from "../../../public/assets/blog_img.png";
import React from "react";
import Image from "next/image";

export default function Details() {
  const categories = ["ALL", "ENTERPRISES", "KICKSTART"];
  const { query } = useRouter();

  const title = query.title || "Default Title";
  const tags = query.tags || "Default Tags";

  return (
    <main className="space-y-8 p-10">
      {/* Categories Section */}
      <nav
        aria-label="Categories"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className="transform cursor-pointer rounded-full border-[0.73px] border-[#262626] px-3 py-2 font-sans text-lg transition-all duration-300 hover:scale-105 hover:bg-[#FF9557] hover:text-white lg:text-base"
            aria-label={`Category ${category}`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Blog Title and Image Section */}
      <article className="space-y-6 text-center">
        <header>
          <h1 className="px-24 text-center font-sora text-[50px] font-semibold text-[#262626] lg:text-[40px] md:px-10 sm:px-4 sm:text-[30px]">
            {title}
          </h1>
          <p>{tags}</p>
        </header>

        <figure className="py-6">
          <Image
            src={blog_img}
            alt="Blog cover image"
            className="rounded-lg shadow-lg"
          />
        </figure>
      </article>

      {/* Blog Content Section */}
      <section className="flex items-start justify-between gap-6 space-y-6 md:flex-col md:space-y-0">
        <aside
          aria-label="Blog Info"
          className="rounded-xl border-2 border-[#808080] p-8 py-16 text-center md:mr-6"
        >
          <p className="font-semibold">{title}</p>
        </aside>

        <section className="flex-1 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-[#262626] lg:text-xl">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
          </h2>
          <p className="leading-relaxed text-gray-700">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
            This cloud-based approach enables scalability, agility, and improved
            customer experience. Leveraging CI/CD pipelines and observability
            tools, the bank ensured seamless deployment and monitoring.
          </p>
          <p className="leading-relaxed text-gray-700">
            Furthermore, BAMAN aligns with the bank&apos;s long-term vision to
            adopt cloud-native services across its operations, enhancing both
            internal processes and customer-facing services. The adoption of
            cloud-based strategies reflects a growing trend in the banking
            sector to improve operational efficiency and cybersecurity.
          </p>
        </section>
      </section>

      {/* Related Articles Section */}
      <section aria-label="Related Articles" className="mt-16 space-y-8">
        <h2 className="text-center text-3xl font-semibold text-[#262626]">
          Related Articles
        </h2>
        <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="space-y-4 rounded-lg bg-[#f9f9f9] p-6 shadow-md"
            >
              <Image
                src={blog_img}
                alt="Related blog thumbnail"
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-[#262626]">
                Exploring Cloud Strategies for Financial Services
              </h3>
              <p className="text-gray-600">
                A deep dive into how cloud solutions are reshaping the financial
                services industry with enhanced security, scalability, and
                efficiency.
              </p>
              <a
                href={`/blog/related-article-${item}`}
                className="font-semibold text-orange-600 hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
