import CategoryButtons from "@/components/shared/category-buttons";
import React from "react";
import { Search } from "lucide-react";
import FAQSection from "@/components/shared/faq-section";
import ContactSection from "@/components/lets-talk";

export default function FAQ() {
  const categories = ["QUESTIONS", "GENERAL", "SOLUTIONS", "PEOPLE", "TECH"];

  interface FAQItem {
    question: string;
    answer: string;
  }

  const faqData: FAQItem[] = [
    {
      question: "What is cloud consulting, and how can it benefit my business?",
      answer:
        "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
    },
    {
      question: "What is cloud consulting, and how can it benefit my business?",
      answer:
        "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
    },
    {
      question: "What is cloud consulting, and how can it benefit my business?",
      answer:
        "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
    },
    {
      question: "What is cloud consulting, and how can it benefit my business?",
      answer:
        "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
    },
    {
      question: "What is cloud consulting, and how can it benefit my business?",
      answer:
        "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
    },
  ];

  return (
    <section>
      <div className="text-center space-y-5 pt-12">
        <h1 className="text-[#262626] text-5xl font-sora font-bold lg:text-5xl md:text-4xl sm:text-3xl">
          <span className="block">Frequently asked</span>
          <span className="block">questions (FAQ)</span>
        </h1>

        <div className="relative w-full max-w-lg mx-auto">
          <Search
            color="#808080"
            className="absolute left-3 md:left-24 sm:left-20 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />

          <input
            type="text"
            className="w-full md:w-2/3 border-2 border-[#808080] rounded-3xl pl-10 py-2  placeholder:text-[#808080] placeholder:text-sm focus:border-[#FF9557] focus:ring-[#FF9557]"
            placeholder="Search for a keyword here..."
          />
        </div>

        <p className="text-[#808080] text-xl sm:text-lg">
          Or choose a category to quickly fit your needs
        </p>
      </div>

      <CategoryButtons categories={categories} />
      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 149, 87, 0.1) 0%, rgba(8, 19, 72, 0.1) 100%)",
        }}
        className="m-10 rounded-xl"
      >
        <FAQSection faqData={faqData} />
      </div>
      <ContactSection />
    </section>
  );
}
