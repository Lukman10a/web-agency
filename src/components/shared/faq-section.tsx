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
    <section className={`${bgColor} py-16 w-full`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2> */}

        <div className=" space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-lg font-medium ${questionColor}`}>
                  {faq.question}
                </h3>

                <button
                  className={`flex items-center justify-center w-8 h-8 rounded-full ml-4 transition-colors ${
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
