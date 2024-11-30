import React from "react";

import { faqData } from "@/data/shared";

import FAQSection from "./shared/faq-section";

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
        <FAQSection faqData={faqData.slice(0, 4)} />
      </div>
    </section>
  );
};

export default SoftwareFAQ;
