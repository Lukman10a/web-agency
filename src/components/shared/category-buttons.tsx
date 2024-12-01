import React from "react";

import { cn } from "@/lib/utils";

// Assuming this utility function handles class merging

interface CategoryButtonsProps {
  categories: string[];
  onClick?: (category: string) => void; // Optional click handler
  buttonStyle?: string; // Optional custom styles for buttons
  selectedCategory: string | null; // Track the selected category
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  onClick,
  buttonStyle,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-10 lg:gap-4 sm:p-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onClick?.(category)} // Call onClick if it exists
          className={cn(
            `transform cursor-pointer rounded-full border px-3 py-2 font-sans transition-all duration-300 hover:scale-105 sm:text-[14px]`,
            // Add styles for selected category
            selectedCategory === category
              ? "bg-[#FF9557] text-white" // Active category styles
              : "border-[#262626] text-[#262626] hover:bg-[#FF9557] hover:text-white", // Inactive category styles
            buttonStyle, // Optional custom button styles
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
