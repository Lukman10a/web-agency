import React from "react";

// Define the type for the item data
type BenefitItem = {
  title: string;
  
};

type BenefitsProps = {
  headTitle: string;
  items: BenefitItem[]; // Accepts an array of benefit items as a prop
};

const Benefits: React.FC<BenefitsProps> = ({headTitle, items }) => {
  return (
    <section>
      <div className="mx-auto mb-32 w-[90%] max-w-[1150px]">
        {/* Display the first item's headTitle */}
        <h2 className="mb-12  font-sans text-4xl  sm:text-3xl">
          <span className="text-orange-600">Benefits</span> {headTitle}
        </h2>

        <div className=" w-full">
          {items.map((item, index) =>(
         <div
  key={index}
  className="rounded-2xl mb-4 font-sans md:mb-4 flex items-start space-x-2"
>
  {/* Bullet Icon */}
  <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-gray-800"></span>

  {/* Content */}
  <p className="text-2xl leading-tight text-gray-800 md:text-lg">
    {item.title}
  </p>
</div>

         ))}
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;
