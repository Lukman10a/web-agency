import React from "react";

interface CategoryButtonsProps {
  categories: string[];
  onClick?: (category: string) => void; // Optional click handler
  buttonStyle?: string; // Optional custom styles for buttons
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
  categories,
  onClick,
  buttonStyle,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-10 lg:gap-4 sm:p-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onClick?.(category)} // Call onClick if it exists
          className={`transform cursor-pointer rounded-full border border-[#262626] px-3 py-2 font-sans transition-all duration-300 hover:scale-105 hover:bg-[#FF9557] hover:text-white sm:text-[14px] ${buttonStyle}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
