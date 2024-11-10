import Image from "next/image";
import React from "react";

const TeverseControlHero: React.FC = () => {
    return (
        <div className="flex justify-center py-14  ">
            <div className="relative w-full max-w-7xl sm:max-w-full sm:w-full p-14 sm:p-4 rounded-tl-3xl rounded-tr-3xl text-center"
            style={{
                background: 'linear-gradient(to top right, rgba(80, 206, 245, 0.2), rgba(255, 149, 87, 0.2))'
            }}>
                <div className="relative z-10 space-y-4 h-screen sm:h-80 pt-7">
                    <p className="text-xs text-[#808080] tracking-wide px-3 py-1 ring-1 ring-[#808080] rounded-full inline-block bg-transparent mb-4">
                        AWS PREMIER SERVICES & SOFTWARE PARTNER
                    </p>
                    <h1 className="text-5xl sm:text-xl font-medium text-[#262626] mb-4">Teverse Control</h1>
                    <p className="text-base sm:text-xs  max-w-2xl sm:max-w-full sm:mx-0 sm:text-justify sm:w-full mx-auto text-[#808080] mb-6">
                        Mission Control is your first-of-its-kind cloud services platform which lets you benchmark,
                        analyze, and track the performance of your AWS cloud environment while guiding you toward
                        improvements with real-time access to our teams of AWS experts.
                    </p>
                    <button className="px-7 py-3 mt-5 bg-[#FF9557] text-white font-medium text-sm rounded-full hover:bg-orange-600 transition duration-300">
                        Request a Demo
                    </button>
                </div>

                {/* Overlay Checkered Image */}
                <div className="absolute sm:top-72 sm:h-[10rem] inset-[24rem] left-1/2 transform -translate-x-1/2 w-[90%] h-[35rem] bg-[url('/assets/checker.png')] bg-cover rounded-xl">
                  {/* <Image src="" width={} height={} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default TeverseControlHero;
