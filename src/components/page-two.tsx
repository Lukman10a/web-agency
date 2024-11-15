import React, { useEffect, useState } from "react";

import Image from "next/image";

interface BulletPoint {
  id: number;
  text: string;
}

// Mock data that you can replace with actual API call
const data: BulletPoint[] = [
  { id: 1, text: "Easily expandable according to your growing needs" },
  { id: 2, text: "Based on best practices to ensure long-lasting value" },
  { id: 3, text: "Only takes days instead of months of custom work" },
  { id: 4, text: "Cheaper to build and cost-efficient to operate" },
  { id: 5, text: "Fast time-to-value" },
];

const CloudPlatformSection: React.FC = () => {
  // State to store bullet points fetched from an API or mock data
  const [bulletPoints, setBulletPoints] = useState<BulletPoint[]>([]);

  // Fetching bullet points data (mocked as static for example)
  useEffect(() => {
    // Simulate an API call and set the data
    setBulletPoints(data);
  }, []);

  return (
    <section className="bg-white px-8 py-16 lg:px-6 sm:px-4">
      <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-900 sm:text-3xl">
        Introducing LARA. Our unique <br className="md:hidden" /> Cloud Native
        Platform.
      </h2>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-1">
        {/* Left side: text content */}
        <div className="text-left">
          <p className="mb-6 text-2xl font-bold text-gray-900">
            An unmatched set
            <br /> of building blocks
          </p>
          <p className="mb-6 text-lg text-gray-600">
            Ready made, battle-tested, and proven building blocks for
            <br /> rapid setup of well-architected infrastructure.
          </p>
          <button className="mt-4 rounded-full bg-orange-650 px-6 py-3 font-semibold text-white shadow-md ring-1 ring-darkblue-850 transition duration-300 ease-in-out hover:bg-orange-600">
            Read More &rarr;
          </button>
        </div>

        {/* Right side: Bullet points in two columns */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col space-y-6">
            {bulletPoints.slice(0, 3).map((point) => (
              <div
                key={point.id}
                className="rounded-lg border border-gray-400 p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 items-center space-y-2">
                  <Image
                    src="/assets/checkmark.png"
                    width={20}
                    height={20}
                    alt="check mark"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {point.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-6">
            {bulletPoints.slice(3).map((point) => (
              <div
                key={point.id}
                className="rounded-lg border border-gray-400 p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 items-center space-y-2">
                  <Image
                    src="/assets/checkmark.png"
                    width={20}
                    height={20}
                    alt="check mark"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {point.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudPlatformSection;
