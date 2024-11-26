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
      className="mx-4 py-16 bg-transparent "
      // style={{
      //   background: "linear-gradient(61.83deg, #FBFBFB 32.56%, #FFFFFF 100%)",
      // }}
    >
      <div className="mx-auto max-w-6xl  py-10  sm:py-4 flex flex-col sm:px-4 space-y-6 border-2 border-black rounded-3xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 md:text-xl sm:text-lg border-b-2 border-black">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default SoftwareFAQ;
