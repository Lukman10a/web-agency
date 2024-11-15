import React from "react";
import FAQSection from "./shared/faq-section";

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

const SoftwareFAQ: React.FC = () => {
  return (
    <section
      className="mx-4 rounded-xl py-16"
      style={{
        background: "linear-gradient(61.83deg, #FBFBFB 32.56%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 md:text-xl sm:text-lg">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default SoftwareFAQ;
