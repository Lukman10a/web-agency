import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BulletPoint {
  id: number;
  text: string;
}

const CloudPlatformSection: React.FC = () => {
  // State to store bullet points fetched from an API or mock data
  const [bulletPoints, setBulletPoints] = useState<BulletPoint[]>([]);

  // Fetching bullet points data (mocked as static for example)
  useEffect(() => {
    // Mock data that you can replace with actual API call
    const data: BulletPoint[] = [
      { id: 1, text: "Easily expandable according to your growing needs" },
      { id: 2, text: "Based on best practices to ensure long-lasting value" },
      { id: 3, text: "Only takes days instead of months of custom work" },
      { id: 4, text: "Cheaper to build and cost-efficient to operate" },
      { id: 5, text: "Fast time-to-value" },
    ];

    // Simulate an API call and set the data
    setBulletPoints(data);
  }, []);

  return (
    <section className="bg-white py-16 sm:px-4 lg:px-6 px-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 sm:text-3xl mb-4 leading-11">
        Introducing LARA. Our unique <br /> Cloud Native Platform.
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
        {/* Left side: text content */}
        <div className="text-left">
          <p className="text-2xl font-bold text-gray-900 mb-6">
            An unmatched set
            <br /> of building blocks
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Ready made, battle-tested, and proven building blocks for
            <br /> rapid setup of well-architected infrastructure.
          </p>
          <button className="mt-4 px-6 py-3 bg-orange-650 text-white font-semibold rounded-full ring-1 ring-darkblue-850 shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
            Read More &rarr;
          </button>
        </div>

        {/* Right side: Bullet points in two columns */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col space-y-6">
            {bulletPoints.slice(0, 3).map((point) => (
              <div
                key={point.id}
                className="border border-gray-400 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="items-center mb-4 space-y-2">
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
                className="border border-gray-400 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="items-center mb-4 space-y-2">
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
