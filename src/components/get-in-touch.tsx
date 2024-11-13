import Image from 'next/image';
import React from 'react';

const GetInTouchSection: React.FC = () => {
    return (
        <section className="flex sm:flex-col items-center py-12 max-w-7xl">
            {/* Image Placeholder */}
            <div className="w-1/2 sm:w-full sm:px-4 flex items-center mb-0 justify-end md:justify-center px-2">
                <Image src="/assets/checkers.png" height={600} width={500} alt='checkers image' />
            </div>

            {/* Text Content */}
            <div className=" w-5/12 sm:w-full text-left pl-12 sm:px-4">
                {/* Badge */} 
                <div className="text-xs text-gray-500 tracking-wide px-3 py-1 sm:mt-5 border border-gray-300 rounded-full inline-block mb-4">
                    GET IN TOUCH
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-xl md:text-xl font-medium text-gray-800 mb-4">
                Strengthen Your Security  <span className='block sm:inline'>Posture.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-600 mb-6 sm:text-sm">
                Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment.
                </p>

                {/* Button */}
                <button className="px-6 py-3 bg-[#FF9557] text-white font-medium rounded-full hover:bg-orange-600 transition duration-300">
                    schedule a call
                </button>
            </div>
        </section>
    );
};

export default GetInTouchSection;
