import React from "react";

import Image from "next/image";

interface ServiceItem {
  title: string;
  description: string[];
  checkmarkImages: string[];
}

const serviceData: ServiceItem[] = [
  {
    title: "Teverse Control",
    description: [
      "Our cloud services platform",
      "Proprietary cost & health checking",
      "Customized, per-resource recommendations & support",
    ],
    checkmarkImages: [
      "/assets/service-checkmark.png",
      "/assets/service-checkmark.png",
    ],
  },
  {
    title:
      "Cost management, optimization, best practices, cloud governance, & strategy",
    description: [
      "A team of Cloud Analysts for FinOps and InfraOps",
      "Environmental, operational, & financial optimization",
      "Performance, operations, & reliability reviews",
      "Consultation on cloud strategy, modernization, & roadmap",
      "Vega Cloud",
    ],
    checkmarkImages: [
      "/assets/service-checkmark.png",
      "/assets/service-checkmark.png",
    ],
  },
  {
    title: "24/7 Enterprise Support",
    description: [
      "Our CloudOps team, backed by AWS",
      "< 5 mins. average response time",
      "97% of cases resolved without escalation",
    ],
    checkmarkImages: [
      "/assets/service-checkmark.png",
      "/assets/service-checkmark.png",
    ],
  },
  {
    title: "A NOC",
    description: [
      "Our CloudOps team, backed by AWS",
      "< 5 mins. average response time",
      "97% of cases resolved without escalation",
    ],
    checkmarkImages: [
      "/assets/service-checkmark.png",
      "/assets/service-checkmark.png",
    ],
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
    <section className="p-6 lg:p-14 sm:p-3">
      <div className="mx-auto max-w-7xl space-y-4 rounded-lg bg-white p-8 lg:p-14 md:p-2 sm:w-full">
        <div className="flex gap-6 rounded-lg p-4 ring-1 ring-neutral-500 sm:flex-col">
          <div>
            <p className="mb-4 inline-block rounded-full border border-gray-300 px-3 py-1 text-xs tracking-wide text-gray-500">
              Managed Services
            </p>
            <h2 className="mb-6 text-2xl font-semibold text-gray-800 md:text-xl sm:text-lg">
              Comprehensive Expertise{" "}
              <span className="block sm:inline">
                {" "}
                and Flexible Service Models
              </span>
            </h2>
            <p className="mb-8 text-sm text-gray-600">
              Did you know 50% of organizations say they&apos;re losing time on
              strategic initiatives
              <span className="block sm:inline">
                because of needs in cloud operations? Compare our two managed
                services to see
              </span>
              which option fits your business:
            </p>
          </div>
          <div className="flex w-2/4 items-center justify-end gap-6 sm:w-full sm:flex-wrap sm:justify-center">
            <div className="space-y-4 rounded-lg bg-[#FF9557] p-4">
              <Image
                src="/assets/service-cloud.png"
                width={40}
                height={40}
                alt=""
              />
              <p>Teverse Cloud Foundation</p>
              <p>
                A solution for cost optimization and foundational best practices
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-[#FF9557] p-4">
              <Image
                src="/assets/service-cloud.png"
                width={40}
                height={40}
                alt=""
              />
              <p>Data Analysis Dashboard</p>
              <p>Visualizing data insights for informed decision-making</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex gap-32 rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-500 sm:flex-wrap sm:gap-6 sm:p-3 sm:text-sm"
            >
              <div className="w-2/3 sm:w-full">
                <h3 className="mb-3 text-lg font-medium text-gray-800 md:text-xl sm:text-sm">
                  {service.title}
                </h3>
                <ul className="mb-4 text-gray-600">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="list-inside list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-2/3 items-center justify-start gap-32 sm:w-full sm:flex-wrap sm:gap-6">
                {service.checkmarkImages.map((imageSrc, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={imageSrc}
                    width={30}
                    height={30}
                    alt="Checkmark"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
