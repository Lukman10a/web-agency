import React from "react";

import Image from "next/image";

const PartnershipSection: React.FC = () => {
  return (
    <section className="flex justify-between sm:flex-wrap md:flex-row items-center gap-8 py-4 px-14">
      {/* Text Section */}
      <div className=" text-left font-sora">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Strong <span className="text-orange-600">partnerships</span>
        </h2>
        <p className="text-gray-600 mb-4">
          Working closely with partners to bring best value to our customers.
        </p>
        <button className="px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-black transition-colors">
          All Partners
        </button>
      </div>

      {/* Icon Section */}
      <div className="flex flex-col  items-center space-y-6">
        <div className="flex sm:flex-wrap justify-between gap-4">
          <div className="w-20 h-20 flex  items-center justify-center transition-transform transform hover:-translate-y-2">
            <Image src="/assets/aws.png" alt="AWS" width={200} height={200} />
          </div>
          <div className="w-20 h-20 flex items-center justify-center transition-transform transform hover:-translate-y-2">
            <Image
              src="/assets/azure.png"
              alt="Azure"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex sm:flex-wrap justify-between gap-4">
          <div className="w-20 h-20 flex items-center justify-center transition-transform transform hover:-translate-y-2">
            <Image
              src="/assets/google.png"
              alt="Google Cloud"
              width={200}
              height={200}
            />
          </div>
          <div className="w-20 h-20 flex items-center justify-center transition-transform transform hover:-translate-y-2">
            <Image
              src="/assets/google.png"
              alt="Google Cloud"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
