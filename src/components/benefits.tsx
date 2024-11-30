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

        <div className="grid w-full grid-cols-12 gap-4 sm:grid-cols-1">
          {items.map((item, index) => {
            let colSpanClass = "";
            if (index === 0) colSpanClass = "col-span-4";
            else if (index === 1) colSpanClass = "col-span-4";
            else if (index === 2) colSpanClass = "col-span-4";
            else if (index === 3) colSpanClass = "col-span-5";
            else if (index === 4) colSpanClass = "col-span-6";

            return (
              <div
                key={index}
                className={`rounded-2xl border border-black bg-white p-8 font-sans shadow-sm lg:p-4 sm:col-span-12 ${colSpanClass}`}
              >
                <p className="text-xl leading-tight text-gray-800 md:text-lg">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
