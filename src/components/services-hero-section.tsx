import React from "react";

const AwsServicesHero: React.FC = () => {
    return (
        <div className="flex sm:flex-col justify-center py-14 px-4 bg-gradient-to-r from-[#EAF8FF] to-[#FFF3E5]">
            <div className="w-full max-w-5xl flex sm:flex-wrap sm:flex-col items-center justify-between sm:items-start space-y-8">
                
                {/* Left Content */}
                <div className="space-y-6 text-left sm:text-left max-w-md order-1">
                    {/* Top Badge */}
                    <p className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full inline-block bg-white">
                        AWS PREMIER SERVICES & SOFTWARE PARTNER
                    </p>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-2xl font-medium text-gray-800 leading-tight">
                        The Expertise You Need for Your AWS Cloud Initiatives
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-600 sm:text-sm">
                        We offer a comprehensive range of services for every challenge companies face on AWS. Our team of AWS-certified experts are ready to help you on your next project, whether it’s a migrating, managing, optimizing, or transforming a concept into a reality.
                    </p>

                    {/* Buttons */}
                    <div className="flex sm:flex-wrap gap-4 mx-auto justify-start">
                        <button className="px-4 py-2 bg-orange-650 text-white rounded-full font-medium text-sm hover:bg-orange-600 transition">
                            Managed Services
                        </button>
                        <button className="px-4 py-2 bg-orange-650 text-white rounded-full font-medium text-sm hover:bg-orange-600 transition">
                            Professional Services
                        </button>
                    </div>
                </div>

                {/* Right Placeholder for Image or Other Content */}
                <div className="w-1/3 sm:w-full h-full sm:h-24 min-h-36 bg-white rounded-xl shadow-md order-2"></div>
            </div>
        </div>
    );
};

export default AwsServicesHero;
