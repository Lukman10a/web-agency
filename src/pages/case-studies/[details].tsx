import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import ContactSection from "@/components/lets-talk";
import Testimonials from "@/components/what-client";

import blog_img from "../../../public/assets/blog_img.png";
import Raiffeisen from "../../../public/assets/raiffeisen.png";

export default function Details() {
  const categories = ["ALL", "ENTERPRISES", "KICKSTART"];
  const { query } = useRouter();

  const title = query.title || "Default Title";
  const tags = query.tags || "Default Tags";

  return (
    <main className="">
      {/* Categories Section */}
      <div className="flex items-center justify-center bg-white py-8 sm:py-4">
        <div className="w-[90%] max-w-[800px] space-y-4 text-center">
          {categories.map((category) => (
            <button
              key={category} // Adding a unique key is best practice in a list
              className="mx-1 cursor-default rounded-full border border-[#808080] px-4 py-2 font-sans text-sm text-[#808080] md:text-[10px]"
            >
              {category}
            </button>
          ))}

          <h1 className="font-sora text-[2.5rem] font-semibold leading-tight 2md:text-[1.8rem] sm:text-[1.4rem]">
            {title}
          </h1>
          <p className="text-[1.2rem] text-[#636363] 2md:text-[1rem] sm:text-[.8rem]">
            {tags}
          </p>
        </div>
      </div>

      <figure className="mx-auto w-[90%] max-w-[1200px] py-6">
        <Image
          src={blog_img}
          alt="Blog cover image"
          className="rounded-lg shadow-lg"
        />
      </figure>

      {/* Blog Content Section */}
      <section className="mx-auto flex w-[90%] max-w-[1200px] items-start justify-between gap-16 md:gap-4">
        <div className="sticky top-0 w-1/6 sm:hidden">
          <p className="mb-2 font-semibold 2md:text-[12px]">Client</p>
          <p className="mb-4 text-[#808080] 2md:text-[12px]">Raiffeisenbank</p>
          <div
            aria-label="Blog Info"
            className="border border-black p-2 text-center md:mr-6"
          >
            <Image
              src={Raiffeisen}
              alt="Blog cover image"
              className="rounded-lg"
            />
          </div>
        </div>

        <section className="mb-12 w-5/6 flex-1 space-y-4 p-4 text-left md:w-full">
          <h2 className="text-2xl font-bold text-[#262626] lg:text-xl">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
          </h2>
          <p className="text-justify leading-relaxed text-gray-700">
            When Raiffeisenbank launched its first cloud application BAMAN, it
            marked a significant step in its strategic digital transformation.
            This cloud-based approach enables scalability, agility, and improved
            customer experience. Leveraging CI/CD pipelines and observability
            tools, the bank ensured seamless deployment and monitoring.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            Furthermore, BAMAN aligns with the bank&apos;s long-term vision to
            adopt cloud-native services across its operations, enhancing both
            internal processes and customer-facing services. The adoption of
            cloud-based strategies reflects a growing trend in the banking
            sector to improve operational efficiency and cybersecurity.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            BAMAN’s architecture was designed to be fundamentally serverless,
            leveraging AWS services such as API Gateway, Lambda, DynamoDB, and
            SQS. This approach ensured that the application could dynamically
            scale and remain cost effective.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            To support continuous deployment and operational agility, a custom
            CI/CD solution was implemented to facilitate rapid development
            cycles and maintain the stability of serverless applications
            throughout their lifecycle. Security and compliance were paramount
            given the highly regulated nature of the banking industry.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            The project began by laying a solid foundation, starting with a
            secure and compliant serverless foundation platform. This included
            defining the essential network infrastructure that would meet the
            bank’s stringent compliance standards. A major challenge was to
            develop a serverless infrastructure that emphasized strong network
            isolation while seamlessly integrating with on-premises services,
            which was critical to maintaining data security and system
            integrity.
          </p>
        </section>
      </section>
      <Testimonials />
      <ContactSection />
    </main>
  );
}
