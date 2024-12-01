import React, { useState } from "react";

import { faqCategories, faqData } from "@/data/shared";
import { Search } from "lucide-react";

import ContactSection from "@/components/lets-talk";
import CategoryButtons from "@/components/shared/category-buttons";
import FAQSection from "@/components/shared/faq-section";

export default function FAQ() {
  const categories = faqCategories;

  // State to manage search term, selected category, and filtered FAQs
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handle the search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle category filter
  };

  // Function to filter FAQs based on search and category
  const filterFaqs = () => {
    return faqData.filter((faq) => {
      // Check if search term exists in the question or answer (case-insensitive)
      const searchMatch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if selected category matches (if a category is selected)
      const categoryMatch = selectedCategory
        ? faq.category === selectedCategory
        : true;

      return searchMatch && categoryMatch;
    });
  };

  return (
    <section>
      <div className="space-y-5 pt-12 text-center">
        <h1 className="font-sora text-5xl font-bold text-[#262626] lg:text-5xl md:text-4xl sm:text-3xl">
          <span className="block">Frequently asked</span>
          <span className="block">questions (FAQ)</span>
        </h1>

        <div className="relative mx-auto w-full max-w-lg">
          <Search
            color="#808080"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform md:left-24 sm:left-20"
          />
          <input
            type="text"
            className="w-full rounded-3xl border-2 border-[#808080] py-2 pl-10 placeholder:text-sm placeholder:text-[#808080] focus:border-[#FF9557] focus:ring-[#FF9557] md:w-2/3"
            placeholder="Search for a keyword here..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <p className="text-xl text-[#808080] sm:text-lg">
          Or choose a category to quickly fit your needs
        </p>
      </div>

      {/* Category Buttons */}
      <CategoryButtons
        categories={categories}
        onClick={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      <div
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 149, 87, 0.1) 0%, rgba(8, 19, 72, 0.1) 100%)",
        }}
        className="m-10 rounded-xl"
      >
        <FAQSection faqData={filterFaqs()} />
      </div>
      <ContactSection />
    </section>
  );
}
