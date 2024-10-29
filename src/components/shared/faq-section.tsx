import React, { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQItem[]; // Accept FAQ data as a prop
  bgColor?: string; // Optional prop for section background color
  questionColor?: string; // Optional prop for question text color
  answerColor?: string; // Optional prop for answer text color
  iconExpanded?: string; // Optional icon for expanded state
  iconCollapsed?: string; // Optional icon for collapsed state
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqData,
  bgColor = "", // Default background color
  questionColor = "text-gray-900", // Default question text color
  answerColor = "text-gray-600", // Default answer text color
  iconExpanded = "/assets/Vector.png",
  iconCollapsed = "+",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`${bgColor} w-full py-16`}>
      <div className="mx-auto max-w-4xl px-4 lg:px-8 sm:px-4">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg sm:text-base font-medium ${questionColor}`}>
                  {faq.question}
                </h3>

                <button
                  className={`ml-4 flex h-8 w-8 sm:w-12 sm:h-12 items-center justify-center rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-darkblue-900 text-white"
                      : "bg-gray-200 text-blue-600"
                  }`}
                >
                  {activeIndex === index ? (
                    <Image
                      src={iconExpanded}
                      width={12}
                      height={12}
                      alt="arrow-up"
                    />
                  ) : (
                    <span className="text-lg">{iconCollapsed}</span>
                  )}
                </button>
              </div>

              {activeIndex === index && (
                <p className={`mt-4 ${answerColor}`}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
