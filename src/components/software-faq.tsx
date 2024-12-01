import React from "react";

import { faqData } from "@/data/shared";

import FAQSection from "./shared/faq-section";

const SoftwareFAQ: React.FC = () => {
  return (
    <section className="mx-4 bg-transparent py-16">
      <div className="mx-auto flex max-w-6xl flex-col space-y-6 rounded-3xl border-2 border-black py-10 sm:px-4 sm:py-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 md:text-xl sm:text-lg">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQSection faqData={faqData.slice(0, 4)} />
      </div>
    </section>
  );
};

export default SoftwareFAQ;
