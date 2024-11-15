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
<<<<<<< HEAD:src/components/FAQ.tsx
    <section className="mx-auto mb-24 w-[85%] max-w-[1200px] rounded-2xl bg-[#FBFBFB] py-16 xl:w-full xl:rounded-none sm:mb-16">
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-center font-sora text-4xl font-medium text-gray-900 sm:text-2xl">
          Frequently asked question
=======
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 sm:px-6">
        <h2 className="text-center text-5xl font-extrabold text-gray-900 md:text-4xl sm:text-3xl">
          FREQUENTLY ASKED QUESTIONS
>>>>>>> main:src/components/shared/FAQ.tsx
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;
