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
    <section className={`${bgColor} w-full pt-4`}>
      <div className="mx-auto w-full px-8 sm:px-0">
        <div className="space-y-6"> {/* Adjust spacing between items */}
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`px-6 py-4 rounded-lg transition-all duration-200 ${
                index !== faqData.length - 1 ? "border-b-2 border-black" : ""
              } hover:bg-orange-500`}
            >
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`text-lg font-bold sm:text-base ${questionColor}`}
                >
                  {faq.question}
                </h3>

                <button
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors sm:w-14 ${
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
