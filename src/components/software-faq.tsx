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
    <section className="py-16 mx-4 rounded-xl "
    style={{
        background:
          "linear-gradient(61.83deg, #FBFBFB 32.56%, #FFFFFF 100%)",
      }}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-lg md:text-xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default SoftwareFAQ;
