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
      <div className="mx-auto mb-32 w-[90%] max-w-7xl">
        <h2 className="mb-6 w-[40%] font-sora text-4xl font-medium xl:w-[50%] lg:w-[100%] md:text-center sm:text-3xl">
          <span className="text-orange-600">Benefits</span> {headTitle}
        </h2>

        <div className="mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg border border-black bg-white p-6 md:col-span-12 md:mx-auto md:w-full sm:p-4 ${index === 0 ? "col-span-4" : ""} ${index === 1 ? "col-span-4" : ""} ${index === 2 ? "col-span-4" : ""} ${index === 3 ? "col-span-5" : ""} ${index === 4 ? "col-span-6" : ""} `}
              >
                <p className="text-xl leading-tight text-gray-800 sm:text-lg">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
