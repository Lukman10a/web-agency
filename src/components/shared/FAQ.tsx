import React from "react";

import { faqData } from "@/data/shared";

import FAQSection from "./faq-section";

const FAQ: React.FC = () => {
  return (
    <section className="mx-auto mb-24 w-[85%] max-w-[1200px] rounded-2xl bg-[#FBFBFB] py-16 xl:w-full xl:rounded-none sm:mb-16">
      <div className="mx-auto w-[90%]">
        <h2 className="mb-4 text-center font-sora text-4xl font-medium text-gray-900 sm:text-2xl">
          Frequently asked question
        </h2>
        <FAQSection faqData={faqData.slice(0, 4)} />
      </div>
    </section>
  );
};

export default FAQ;
