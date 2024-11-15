import React from "react";

import FAQSection from "./faq-section";

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
];

const FAQ: React.FC = () => {
  return (
    <section className="mx-auto mb-24 w-[85%] max-w-[1200px] rounded-2xl bg-[#FBFBFB] py-16 xl:w-full xl:rounded-none sm:mb-16">
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-center font-sora text-4xl font-medium text-gray-900 sm:text-2xl">
          Frequently asked question
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;
