import Image from 'next/image';
import React from 'react';

const BookDemoSection: React.FC = () => {
    return (
        <section className="flex sm:flex-col lg:flex-row items-center justify-center py-12 px-4">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                <Image src="/assets/checkers.png" height={300} width={200} alt='checkers image' />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
                {/* Badge */}
                <div className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full inline-block mb-4">
                    BOOK YOUR DEMO
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    We have the tools to understand your cloud and the guidance to make the most of it.
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 mb-6">
                    Schedule your demo with a Mission Cloud Advisor and find out what Mission Control can do for you.
                </p>

                {/* Button */}
                <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition duration-300">
                    Book your demo
                </button>
            </div>
        </section>
    );
};

export default BookDemoSection;
