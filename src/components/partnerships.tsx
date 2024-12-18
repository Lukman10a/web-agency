import React from "react";

import Image from "next/image";
import Link from "next/link";

const PartnershipSection: React.FC = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-7xl items-center justify-between gap-8 py-4 md:flex-row sm:flex-wrap">
      {/* Text Section */}
      <div className="text-left font-sora">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          Strong <span className="text-orange-600">partnerships</span>
        </h2>
        <p className="mb-4 text-gray-600">
          Working closely with partners to bring best value to our customers.
        </p>
        <Link href="/company/partners">
          <button className="rounded-full bg-orange-600 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-650">
            All Partners
          </button>
        </Link>
      </div>

      {/* Icon Section */}
      <div className="flex flex-col items-center space-y-6 sm:mx-auto sm:w-full sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:space-y-1">
        <div className="flex justify-between gap-4 sm:flex-wrap sm:justify-center">
          <div className="flex h-20 w-20 transform items-center justify-center transition-transform hover:-translate-y-2">
            <Image src="/assets/aws.png" alt="AWS" width={200} height={200} />
          </div>
          <div className="flex h-20 w-20 transform items-center justify-center transition-transform hover:-translate-y-2">
            <Image
              src="/assets/azure.png"
              alt="Azure"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 sm:flex-wrap">
          <div className="flex h-20 w-20 transform items-center justify-center transition-transform hover:-translate-y-2">
            <Image
              src="/assets/google.png"
              alt="Google Cloud"
              width={200}
              height={200}
            />
          </div>
          {/* <div className="flex h-20 w-20 transform items-center justify-center transition-transform hover:-translate-y-2">
            <Image src="/svg/newokta.svg" alt="Okta" width={200} height={200} />
          </div>
          <div className="flex h-20 w-20 transform items-center justify-center transition-transform hover:-translate-y-2">
            <Image
              src="/assets/sail.png"
              alt="Sail"
              width={200}
              height={200}
              className="bg-black"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
