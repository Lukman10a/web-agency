import React from "react";

const TeverseControlHero: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-10 bg-blue-50">
            <div className="relative w-full max-w-3xl p-10 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg text-center">
                <div className="relative z-10">
                    <p className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full inline-block bg-white mb-4">
                        AWS PREMIER SERVICES & SOFTWARE PARTNER
                    </p>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">Teverse Control</h1>
                    <p className="text-base text-gray-600 max-w-lg mx-auto mb-6">
                        Mission Control is your first-of-its-kind cloud services platform which lets you benchmark,
                        analyze, and track the performance of your AWS cloud environment while guiding you toward
                        improvements with real-time access to our teams of AWS experts.
                    </p>
                    <button className="px-6 py-2 bg-orange-500 text-white font-medium text-sm rounded-full hover:bg-orange-600 transition duration-300">
                        Request a Demo
                    </button>
                </div>

                {/* Overlay Checkered Image */}
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[90%] h-64 bg-[url('/assets/checker.png')] bg-repeat opacity-80 rounded-lg"></div>
            </div>
        </div>
    );
};

export default TeverseControlHero;
