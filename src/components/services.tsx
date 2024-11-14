import Image from "next/image";
import React from "react";

interface ServiceItem {
    title: string;
    description: string[];
    checkmarkImages: string[];
}

const serviceData: ServiceItem[] = [
    {
        title: "Mission Control",
        description: [
            "Our cloud services platform",
            "Proprietary cost & health checking",
            "Customized, per-resource recommendations & support",
        ],
        checkmarkImages: ["/assets/service-checkmark.png", "/assets/service-checkmark.png"],
    },
    {
        title: "Cost management, optimization, best practices, cloud governance, & strategy",
        description: [
            "A team of Cloud Analysts for FinOps and InfraOps",
            "Environmental, operational, & financial optimization",
            "Performance, operations, & reliability reviews",
            "Consultation on cloud strategy, modernization, & roadmap",
            "Vega Cloud",
        ],
        checkmarkImages: ["/assets/service-checkmark.png", "/assets/service-checkmark.png"],
    },
    {
        title: "24/7 Enterprise Support",
        description: [
            "Our CloudOps team, backed by AWS",
            "< 5 mins. average response time",
            "97% of cases resolved without escalation",
        ],
        checkmarkImages: ["/assets/service-checkmark.png", "/assets/service-checkmark.png"],
    },
    {
        title: "A NOC",
        description: [
            "Our CloudOps team, backed by AWS",
            "< 5 mins. average response time",
            "97% of cases resolved without escalation",
        ],
        checkmarkImages: ["/assets/service-checkmark.png", "/assets/service-checkmark.png"],
    },
    {
        title: "A SOC",
        description: [
            "Our CloudOps team, backed by AWS",
            "< 5 mins. average response time",
            "97% of cases resolved without escalation",
        ],
        checkmarkImages: ["/assets/service-checkmark.png"], // Only one checkmark for the last item
    },
];

const ServiceSection: React.FC = () => {
    return (
        <div className="p-6 md:p-10 lg:p-14 bg-gray-50">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-10 lg:p-14 space-y-4">
                <div className="flex gap-6 sm:flex-col  ring-1 ring-neutral-500 rounded-lg p-4">
                    <div>
                        <p className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full inline-block mb-4">
                            Managed Services
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Comprehensive Expertise <span className="block sm:inline"> and Flexible Service Models</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-sm">
                            Did you know 50% of organizations say they&apos;re losing time on strategic initiatives
                            <span className="block sm:inline">because of needs in cloud operations? Compare our two managed services to see</span>
                            which option fits your business:
                        </p>
                    </div>
                    <div className="flex gap-6 items-center justify-end w-2/4">
                        <div className="bg-[#FF9557] rounded-lg p-4 space-y-4">
                            <Image src="/assets/service-cloud.png" width={40} height={40} alt="" />
                            <p>Mission Cloud Foundation</p>
                            <p>A solution for cost optimization and foundational best practices</p>
                        </div>
                        <div className="bg-[#FF9557] rounded-lg p-4 space-y-4">
                            <Image src="/assets/service-cloud.png" width={40} height={40} alt="" />
                            <p>Data Analysis Dashboard</p>
                            <p>Visualizing data insights for informed decision-making</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:gap-8">
                    {serviceData.map((service, index) => (
                        <div key={index} className="p-6 bg-white ring-1 ring-neutral-500 rounded-lg shadow-sm flex gap-32">
                            <div className="w-2/3">
                                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-3">{service.title}</h3>
                                <ul className="text-gray-600 mb-4">
                                    {service.description.map((item, idx) => (
                                        <li key={idx} className="list-disc list-inside">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-2/3 items-center gap-32 justify-start">
                                {service.checkmarkImages.map((imageSrc, imgIndex) => (
                                    <Image key={imgIndex} src={imageSrc} width={30} height={30} alt="Checkmark" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
