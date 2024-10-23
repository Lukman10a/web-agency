import React from 'react';
import { FaChartLine, FaShieldAlt, FaLifeRing } from 'react-icons/fa';
import Image from 'next/image';

const KeyBenefits: React.FC = () => {
  return (
    <div className="py-16 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-neutral-700">
        WHY CHOOSE US? KEY <br />BENEFITS FOR YOUR BUSINESS
      </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
        <Image src="/assets/icon.png" width={40} height={40} alt='icon' />
          <h3 className="text-xl font-semibold mb-2 text-neutral-700">Increased Efficiency<br /> and Cost Savings</h3>
          <p className="text-gray-400 mt-4">
            Optimize operations, cut costs, and focus on <br /> growth with our cloud and security solutions.
          </p>
        </div>

        <div className="flex flex-col items-center">
        <Image src="/assets/icon2.png" width={40} height={40} alt='icon 2' />
          <h3 className="text-xl font-semibold mb-2 text-neutral-700">Enhanced Security<br /> and Compliance</h3>
          <p className="text-gray-400 mt-4">
            Stay protected from threats and ensure <br /> compliance with GDPR, HIPAA, and more.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/assets/icon3.png" width={40} height={40} alt='icon 3' />
          <h3 className="text-xl font-semibold mb-2 text-neutral-700">Expert Guidance & <br /> 24/7 Support</h3>
          <p className="text-gray-400 mt-4">
            Access continuous monitoring, expert <br /> support to keep your systems secure & <br/> scalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
