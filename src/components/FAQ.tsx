// import React, { useState } from 'react';
// import Image from 'next/image';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What is cloud consulting, and how can it benefit my business?",
//     answer: "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
//   },
//   {
//     question: "What is cloud consulting, and how can it benefit my business?",
//     answer: "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
//   },
//   {
//     question: "What is cloud consulting, and how can it benefit my business?",
//     answer: "Cloud consulting helps businesses migrate, optimize, and manage their cloud infrastructure, leading to reduced costs, improved scalability, and enhanced operational efficiency.",
//   },
// ];

// const FAQSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-white py-16 w-full">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-6">
//           FREQUENTLY ASKED QUESTIONS
//         </h2>

//         <div className="mt-8 space-y-4">
//           {faqData.map((faq, index) => (
//             <div key={index} className="border-b pb-4">
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3 className="text-lg font-medium text-gray-900">
//                   {faq.question}
//                 </h3>

//                 {/* Conditionally apply dark blue background when active */}
//                 <button
//                   className={`flex items-center justify-center w-8 h-8 rounded-full ml-4 transition-colors ${
//                     activeIndex === index
//                       ? 'bg-darkblue-900 text-white' // Dark blue when expanded
//                       : 'bg-gray-200 text-blue-600' // Default state
//                   }`}
//                 >
//                   {activeIndex === index ? (
//                     <span className="text-lg flex justify-center items-center"><Image src="/assets/Vector.png" width={12} height={12} alt='arrow-up'/></span> // Close icon when expanded
//                   ) : (
//                     <span className="text-lg">+</span> // Plus icon when collapsed
//                   )}
//                 </button>
//               </div>

//               {/* Answer section */}
//               {activeIndex === index && (
//                 <p className="mt-4 text-gray-600">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import Image from "next/image";
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

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </section>
  );
};

export default FAQ;
