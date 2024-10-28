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
    <div className="flex flex-wrap items-center justify-center gap-10 p-10 lg:gap-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onClick?.(category)} // Call onClick if it exists
          className={`text-lg border border-[#262626] px-3 rounded-full cursor-pointer py-2 transition-all duration-300 transform hover:bg-[#FF9557] hover:scale-105 hover:text-white font-sans ${buttonStyle}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
