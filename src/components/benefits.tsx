import React from "react";

// cardData.ts
const items = [
  { title: "Take the guesswork out of billing, usage, and forecasting" },
  {
    title:
      "Track your infrastructural health so you can see exactly how new initiatives are making an impact",
  },
  { title: "Inform your planning and cloud strategy with AWS expertise" },
  {
    title:
      "Adopt the best practices and native services that maximize your investment in AWS",
  },
  {
    title:
      "Get a team of experts to help you manage the day-to-day tasks of keeping an AWS environment running smoothly",
  },
];
const Benefits = () => {
  return (
    <section>
      <div className="mx-auto mb-32 w-[85%] max-w-[1200px]">
        <h2 className="mb-6 w-[40%] font-sora text-4xl font-medium xl:w-[50%] lg:w-[100%] md:text-center sm:text-3xl">
          <span className="text-orange-600">Benefits</span> of Mission Terverse
          Gateway
        </h2>

        <div className="grid w-full grid-cols-12 gap-4 sm:grid-cols-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-black bg-white p-8 font-sans shadow-sm lg:p-4 sm:col-span-12 ${index === 0 ? "col-span-4" : ""} ${index === 1 ? "col-span-4" : ""} ${index === 2 ? "col-span-4" : ""} ${index === 3 ? "col-span-5" : ""} ${index === 4 ? "col-span-6" : ""} `}
            >
              <p className="text-xl leading-tight text-gray-800 md:text-lg">
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
