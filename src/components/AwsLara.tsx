import React from 'react';
import Image from 'next/image';

const AwsLara: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          Introducing LARA. Our unique Cloud Native Platform.
        </h1>
      </header>

      <div className="flex sm:flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col space-y-7 py-5">
          <h2 className="text-4xl font-bold">An unmatched set of building blocks</h2>
          <p className="text-base leading-relaxed">
            Ready made, battle tested and proven building blocks for rapid set up of well architected infrastructure.
          </p>
          <button className="px-6 py-3 w-1/2 bg-orange-600 text-white font-semibold rounded-full ring-1 ring-darkblue-850 shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
          Read more &rarr;
        </button>
        </div>

        {/* Right Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-4 w-full">
          
          <div className="border border-black p-4 rounded-md text-left space-y-2 ring-1">
          <Image src="/assets/checkmark.png" width={30} height={30} alt="check mark" />
            Easily expandable according to your growing needs
          </div>
         
          <div className="border border-black p-4 rounded-md text-left space-y-2 ring-1">
          <Image src="/assets/checkmark.png" width={30} height={30} alt="check mark" />
            Only takes days instead of months of custom work
          </div>
          
          <div className="border border-black p-4 rounded-md text-left space-y-2 ring-1">
          <Image src="/assets/checkmark.png" width={30} height={30} alt="check mark" />
            Easily expandable according to your growing needs
          </div>
          
          <div className="border border-black p-4 rounded-md text-left space-y-2 ring-1">
          <Image src="/assets/checkmark.png" width={30} height={30} alt="check mark" />
            Based on best practices to ensure long-lasting value
          </div>
          
          <div className="border border-black p-4 rounded-md text-left space-y-2 ring-1">
          <Image src="/assets/checkmark.png" width={30} height={30} alt="check mark" />
            Cheaper to build and cost-efficient to operate
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsLara;
