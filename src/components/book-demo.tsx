import React from "react";

import Image from "next/image";

const BookDemoSection: React.FC = () => {
  return (
    <section className="flex sm:flex-col items-center sm:mb-10 py-14 sm:py-0 max-w-7xl">
      {/* Image Placeholder */}
      
      <div className="w-1/2 rounded-tl-3xl sm:rounded-tl-none sm:rounded-bl-none rounded-bl-3xl sm:w-full sm:px-4 flex items-center mb-0 justify-end md:justify-center px-2">
        <Image
          src="/assets/checkers.png"
          height={600}
          width={500}
          alt="checkers image"
        />
      </div>
      

      {/* Text Content */}
      <div className=" w-5/12 sm:w-full text-left pl-12 sm:px-4 rounded-tr-3xl rounded-br-3xl bg-slate-300 min-h-[31rem] py-14 sm:py-4">
        {/* Badge */}
        <div className="text-sm font-bold text-black tracking-wide py-1 text-left ml-0 sm:mt-5 border border-gray-300 rounded-full inline-block mb-4">
          BOOK YOUR DEMO
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-lg font-bold w-5/6 text-black mb-4">
        We have the tools to understand your cloud and the guidance to make the most of it.
          
        </h2>

        {/* Subtitle */}
        <p className="text-black text-xl mb-6 sm:text-sm">
          Schedule your demo with a Mission Cloud Advisor and find out what
          Mission Control can do for you.
        </p>

        {/* Button */}
        <button className="px-6 py-3 text-xl sm:text-sm bg-black text-white font-medium rounded-full hover:bg-orange-600 transition duration-300">
          Book your demo
        </button>
      </div>
    </section>
  );
};

export default BookDemoSection;
