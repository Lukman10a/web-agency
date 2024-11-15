import React from "react";

import Image from "next/image";

import CallToAction from "./callToAction";

// import CallToAction from "./shared/callToAction";

const ContactOffice: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      {/* Office Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6 w-full max-w-6xl">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-6 flex flex-col items-start space-y-4 shadow-sm"
          >
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/location.png"
                width={20}
                height={20}
                alt="location image"
              />
              <div className="text-sm text-gray-500 font-semibold">
                OFFICE #{index}
              </div>
            </div>
            <h3 className="text-lg font-bold">Bratislava HQ</h3>
            <div className="text-gray-600">
              <p>Slovakia</p>
              <p>Nová Cvernovka - 5th floor,</p>
              <p>Račianska 78, Bratislava</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default ContactOffice;
