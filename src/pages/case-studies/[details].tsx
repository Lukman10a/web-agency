// import { useRouter } from "next/router";
// import blog_img from "../../../public/assets/blog_img.png";
// import React from "react";
// import Image from "next/image";

// export default function Details() {
//   const categories = ["ALL", "ENTERPRISES", "KICKSTART"];
//   const { query } = useRouter();

//   return (
//     <main className="p-10 space-y-8">
//       {/* Categories Section */}
//       <nav
//         aria-label="Categories"
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className="text-lg lg:text-base border-[0.73px] border-[#262626] px-3 rounded-full cursor-pointer py-2 transition-all duration-300 transform hover:bg-[#FF9557] hover:scale-105 hover:text-white font-sans"
//             aria-label={`Category ${category}`}
//           >
//             {category}
//           </button>
//         ))}
//       </nav>

//       {/* Blog Title and Image Section */}
//       <article className="text-center space-y-6">
//         <header>
//           <h1 className="text-[#262626] px-24 md:px-10 sm:px-4 font-sora font-semibold text-[50px] lg:text-[40px] sm:text-[30px] text-center">
//             {query.title}
//           </h1>
//           <p>{query.tags}</p>
//         </header>

//         <figure className="py-6">
//           <Image
//             src={blog_img}
//             alt="Blog cover image"
//             className="rounded-lg shadow-lg"
//           />
//         </figure>
//       </article>

//       {/* Blog Content Section */}
//       <section className="flex gap-6 md:flex-col justify-between items-start space-y-6 md:space-y-0">
//         <aside
//           aria-label="Blog Info"
//           className="border-[#808080] border-2 rounded-xl p-8 py-16 text-center md:mr-6"
//         >
//           <p className="font-semibold">{query.title}</p>
//         </aside>

//         <section className=" space-y-4 flex-1 text-left">
//           <h2 className="text-2xl lg:text-xl font-bold text-[#262626]">
//             When Raiffeisenbank launched its first cloud application BAMAN, it
//             marked a significant step in its strategic digital transformation.
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             When Raiffeisenbank launched its first cloud application BAMAN, it
//             marked a significant step in its strategic digital transformation.
//             This cloud-based approach enables scalability, agility, and improved
//             customer experience. Leveraging CI/CD pipelines and observability
//             tools, the bank ensured seamless deployment and monitoring.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             Furthermore, BAMAN aligns with the bank&apos;s long-term vision to
//             adopt cloud-native services across its operations, enhancing both
//             internal processes and customer-facing services. The adoption of
//             cloud-based strategies reflects a growing trend in the banking
//             sector to improve operational efficiency and cybersecurity.
//           </p>
//         </section>
//       </section>

//       {/* Related Articles Section */}
//       <section aria-label="Related Articles" className="mt-16 space-y-8">
//         <h2 className="text-3xl font-semibold text-center text-[#262626]">
//           Related Articles
//         </h2>
//         <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
//           {[1, 2, 3].map((item) => (
//             <article
//               key={item}
//               className="bg-[#f9f9f9] p-6 rounded-lg shadow-md space-y-4"
//             >
//               <Image
//                 src={blog_img}
//                 alt="Related blog thumbnail"
//                 className="rounded-lg"
//               />
//               <h3 className="text-xl font-bold text-[#262626]">
//                 Exploring Cloud Strategies for Financial Services
//               </h3>
//               <p className="text-gray-600">
//                 A deep dive into how cloud solutions are reshaping the financial
//                 services industry with enhanced security, scalability, and
//                 efficiency.
//               </p>
//               <a
//                 href={`/blog/related-article-${item}`}
//                 className="text-orange-600 font-semibold hover:underline"
//               >
//                 Read more →
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

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
    <main className="p-10 space-y-8">
      {/* Categories Section */}
      <nav
        aria-label="Categories"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className="text-lg lg:text-base border-[0.73px] border-[#262626] px-3 rounded-full cursor-pointer py-2 transition-all duration-300 transform hover:bg-[#FF9557] hover:scale-105 hover:text-white font-sans"
            aria-label={`Category ${category}`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Blog Title and Image Section */}
      <article className="text-center space-y-6">
        <header>
          <h1 className="text-[#262626] px-24 md:px-10 sm:px-4 font-sora font-semibold text-[50px] lg:text-[40px] sm:text-[30px] text-center">
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
      <section className="flex gap-6 md:flex-col justify-between items-start space-y-6 md:space-y-0">
        <aside
          aria-label="Blog Info"
          className="border-[#808080] border-2 rounded-xl p-8 py-16 text-center md:mr-6"
        >
          <p className="font-semibold">{title}</p>
        </aside>

        <section className=" space-y-4 flex-1 text-left">
          <h2 className="text-2xl lg:text-xl font-bold text-[#262626]">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
            This cloud-based approach enables scalability, agility, and improved
            customer experience. Leveraging CI/CD pipelines and observability
            tools, the bank ensured seamless deployment and monitoring.
          </p>
          <p className="text-gray-700 leading-relaxed">
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
        <h2 className="text-3xl font-semibold text-center text-[#262626]">
          Related Articles
        </h2>
        <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="bg-[#f9f9f9] p-6 rounded-lg shadow-md space-y-4"
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
                className="text-orange-600 font-semibold hover:underline"
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
