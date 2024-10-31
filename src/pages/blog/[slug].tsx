import React from "react";
import { useRouter } from "next/router";
import Newsletter from "@/components/newsletter";
import postImage from "/public/assets/post-image.png";
import textImage from "/public/assets/blog-text-image.png";
import cost from "/public/assets/cost.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { PiWhatsappLogo, PiInstagramLogo } from "react-icons/pi";
import { LuTwitter } from "react-icons/lu";
import PostCard from "@/components/post-card";

const PostDetails = () => {
  const { query } = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSelectSection = (value: string) => {
    setActiveSection(value);
    console.log(value);
  };

  const tags = [
    "ALL",
    "ENTERPRISES",
    "KICKSTART",
    "LARA",
    "MIGRATION",
    "SAAS",
    "SERVERLESS",
  ];

  const data = {
    id: 1,
    image: postImage,
    date: "12-JANUARY-2024 | 9 AM | Saturday",
    title:
      "Utilizing the AWS Well-Architected Framework for Optimal Cloud Infrastructure",

    categories: ["ENTERPRISES", "MIGRATION", "SERVERLESS"],
    sections: ["INTRODUCTION", "SIX PILLARS", "PROCESS"],
  };

  const similarPosts = [
    {
      id: 1,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["KICKSTART", "MIGRATION", "LARA"],
    },
    {
      id: 2,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["MIGRATION", "SERVERLESS"],
    },
    {
      id: 3,
      image: postImage,
      date: "20/JAN/2025",
      title:
        "Launching BAMAN: Raiffeisen bank's strategic Move to Cloud Application",
      categories: ["LARA", "MIGRATION", "KICKSTART"],
    },
  ];

  return (
    <section>
      <div className="w-full ">
        <div className="py-8 sm:py-4 flex justify-center items-center bg-white">
          <div className="w-[90%] max-w-[800px] text-center space-y-4 ">
            {data.categories.map((category) => (
              <button
                key={category} // Adding a unique key is best practice in a list
                className="px-4 py-2 mx-1 cursor-default border border-[#808080] rounded-full text-sm md:text-[10px] text-[#808080] font-sans">
                {category}
              </button>
            ))}

            <h1 className="text-[2.5rem] 2md:text-[1.8rem] sm:text-[1.4rem] font-semibold font-sora leading-tight">
              {data.title}
            </h1>
            <p className="text-[#636363] text-[1.2rem] 2md:text-[1rem] sm:text-[.8rem]">
              {data.date}
            </p>
          </div>
        </div>

        <div className="bg-darkblue-900 w-full mx-auto py-[1em] 2md:py-[.75em] sm:py-[.5em] flex justify-around items-center mb-8 sm:mb-4 text-white sticky top-0 z-50">
          {data.sections.map((section, index) => (
            <a href={`#${section}`} key={section}>
              <div
                className={`text-center flex items-center space-x-2 cursor-pointer ${
                  activeSection === section
                    ? "text-orange-500"
                    : "text-gray-400"
                }`}
                onClick={() => handleSelectSection(section)}>
                <p className="text-3xl font-sora font-semibold 2md:text-[20px] md:text-[15px] sm:-mr-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-sans border-l border-gray-400 pl-2 sm:pl-1 sm:-ml-6 2md:text-[14px] md:text-[10px]">
                  {section}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="w-[85%] max-w-[1300px] mx-auto border-b border-[#8080803f] mb-6">
          <section className=" " id="INTRODUCTION">
            <p className="text-[1.3rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              Getting things right at the first time isn't always easy,
              especially if just starting with DevOps or in the Cloud in
              general. The AWS Well-Architected Framework was created to assist
              cloud architects to design and continuously improve their
              infrastructure in order for it to be secure, efficient, resilient,
              and cost-effective for their applications.
            </p>
            <p className="text-[1.3rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              We at Labyrinth Labs help companies design and build cloud
              infrastructures. It is crucial for us, that the infrastructures we
              build are designed according to industry best practices and spec.
            </p>
            <p className="text-[1.3rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The AWS Well-Architected Framework provides guidance for building
              and improving cloud architectures. It offers insights into
              aligning your designs with best practices and enhancing your cloud
              workloads.
            </p>
            <div className="flex md:flex-col gap-[5px] ">
              <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
                We at Labyrinth Labs help companies design and build cloud
                infrastructures. It is crucial for us, that the infrastructures
                we build are designed according to industry best practices and
                spec.
              </p>
              <Image
                src={textImage}
                alt="Post image"
                className="side-image mb-6 md:mb-12 w-[100%] max-w-[300px] mx-auto"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className=" pt-24 sm:pt-16" id="SIX PILLARS">
            <h2 className="text-center text-orange-650 mx-auto font-semibold text-[2rem] 2md:text-[1.5rem] sm:text-[1.2rem] w-full max-w-[600px] font-sora leading-tight mb-[1em]">
              The 6 Pillars of the Well-Architected Framework Review
            </h2>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Well-Architected Framework Review is a process that examines
              six pillars in detail. It identifies potential vulnerabilities and
              areas for improvement, offering actionable steps towards creating
              a more secure, efficient, and sustainable cloud infrastructure.
            </p>
            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Operational Excellence Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Operational Excellence pillar concentrates on the effective
              running of systems and the ongoing improvement of processes. It
              emphasizes the need to automate changes, respond to events, and
              establish standards for day-to-day operations. It also encompasses
              the capacity to efficiently support development and operational
              workloads, gain operational insights, and continuously refine
              processes and procedures to add business value.
            </p>
            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Security Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Security pillar is dedicated to safeguarding information,
              systems, and assets while also providing business value. It
              encapsulates important aspects such as maintaining data
              confidentiality and integrity, managing user access, and
              implementing controls to detect security incidents. It also
              involves the development of risk assessments and mitigation
              strategies to enhance overall security.
            </p>
            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Performance Efficiency Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Performance Efficiency pillar is centered around the effective
              use of IT and computing resources. It involves choosing suitable
              resource types and sizes optimized for workload needs, monitoring
              performance, and maintaining efficiency as business needs and
              technologies evolve. It aims to meet requirements efficiently and
              to maintain that efficiency as demand fluctuates and technologies
              progress.
            </p>
            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Reliability Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Security pillar is dedicated to safeguarding information,
              systems, and assets while also providing business value. It
              encapsulates important aspects such as maintaining data
              confidentiality and integrity, managing user access, and
              implementing controls to detect security incidents. It also
              involves the development of risk assessments and mitigation
              strategies to enhance overall security.
            </p>
            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Cost Optimization Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Cost Optimization pillar focuses on avoiding unnecessary
              costs. Key topics include understanding spending over time and
              controlling fund allocation, selecting resources of the right type
              and quantity, and scaling to meet business needs without
              overspending.
            </p>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
            <Image
              src={cost}
              alt="Post image"
              className="full-image mb-24 sm:mb-12 w-full mx-auto max-w-[1000px] "
              width={500}
              height={500}
            />

            <h3 className="text-center text-[#262626] mx-auto font-semibold text-[1.65rem] 2md:text-[1.2rem] sm:text-[1.1rem] w-full max-w-[600px] font-sora leading-tight mb-[.7em]">
              Sustainability Pillar
            </h3>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Sustainability pillar is concentrated on reducing the
              environmental impacts of cloud operations. It emphasizes a shared
              responsibility model for sustainability, understanding the impact,
              and enhancing utilization to minimize the resources needed and
              lessen downstream effects. This pillar also includes the ability
              to consistently improve sustainability impacts by decreasing
              energy consumption, increasing efficiency across all workload
              components, and optimizing the benefits from the resources
              provided while minimizing the total resources required.
            </p>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
          </section>
          <section className=" pt-24 sm:pt-16" id="PROCESS">
            <h2 className="text-center text-orange-650 mx-auto font-semibold text-[2rem] 2md:text-[1.5rem] sm:text-[1.2rem] w-full max-w-[600px] font-sora leading-tight mb-[1em]">
              The Process of the Well-Architected Framework Review
            </h2>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              The Sustainability pillar is concentrated on reducing the
              environmental impacts of cloud operations. It emphasizes a shared
              responsibility model for sustainability, understanding the impact,
              and enhancing utilization to minimize the resources needed and
              lessen downstream effects. This pillar also includes the ability
              to consistently improve sustainability impacts by decreasing
              energy consumption, increasing efficiency across all workload
              components, and optimizing the benefits from the resources
              provided while minimizing the total resources required.
            </p>
            <p className="text-[1.4rem] 2md:text-[1.2rem] sm:text-[1rem] mb-8 sm:mb-4 text-[#262626] font-sans text-justify">
              Cost optimization is a key topic for us as a company, we address
              it at many levels, including proposals of application changes to
              improve efficiency and reducing bottlenecks.
            </p>
          </section>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6 justify-center mx-auto ">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-5 py-3  border text-white bg-darkblue-900  rounded-full text-sm sm:text-[10px] cursor-default">
                {tag}
              </button>
            ))}
          </div>

          <div className="flex w-[85%] max-w-[700px] mx-auto gap-3 justify-center mb-24 md:flex-col">
            <div className="flex gap-3 p-3 text-center md:flex-col  ">
              <span className="w-12 h-12 inline-block rounded-full bg-[#8080802d] md:self-center "></span>
              <p className="self-center">
                Martin Satoshi - Head of Engineering
              </p>
            </div>
            <div className="border-l border-darkblue-950 pl-5 py-2 flex gap-2 self-center md:border-none md:self-center">
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

          <div className="container mx-auto px-4 py-8 max-w-[1200px] ">
            <h2 className="text-3xl font-bold font-sora mb-6 mx-auto text-center">
              Similar articles
            </h2>
            <p className="text-xl md:text-[1rem] w-1/2 2md:w-[75%] mx-auto text-center mb-12 text-[#808080]">
              Have some time to read more? Here are our top picks if this topic
              interested you.
            </p>
            <div className="grid sm:grid-cols-1 2md:grid-cols-2 grid-cols-3 gap-[2px] mx-5">
              {similarPosts.map((post) => (
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
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default PostDetails;
