import React from "react";

// Define the type for the item data
type BenefitItem = {
  title: string;
};

type BenefitsProps = {
  headTitle: string;
  items: BenefitItem[]; // Accepts an array of benefit items as a prop
};

const Benefits: React.FC<BenefitsProps> = ({ headTitle, items }) => {
  return (
    <section>
      <div className="mx-auto mb-32 w-[85%] max-w-7xl space-x-5">
        <h2 className="mb-6 w-[40%] font-sora text-4xl font-medium xl:w-[50%] lg:w-[100%] md:text-center sm:text-3xl">
          <span className="text-orange-600">Benefits</span> {headTitle}
        </h2>

        <ul className="grid w-full grid-cols-responsive300 gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="mb-4 flex h-full items-start rounded-2xl border border-black p-4 font-sans md:mb-4"
            >
              <p className="text-xl leading-tight text-gray-800 md:text-lg">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
