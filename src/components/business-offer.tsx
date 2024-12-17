import React from "react";

import ai from "/public/assets/AI-management.png";
// import Cardimage2 from "/public/assets/cardimage2.png";
import cloudservice from "/public/assets/cloud-service.png";
import software from "/public/assets/software.png";
import idam from "/public/assets/terverse-control.png";
import cybersecurity from "/public/svg/engagement.svg";
import { BsCloudPlus } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { LuUploadCloud } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

import BusinessOffersCard from "./business-offers-card";
import { InView } from "./ui/animated/in-view";

const cardData = [
  {
    title: "CLOUD SERVICES",
    description:
      "Unleash the power of the cloud with our expert strategies, seamless migrations, and smart management solutions. We craft scalable, secure, and cost-effective cloud infrastructures designed to fuel your business ambitions.",
    buttonText: "Explore Cloud Solutions",
    buttonLink: "/solutions/",
    imageSrc: cloudservice,
    titleIcon: <LuUploadCloud />,
  },
  {
    title: "IDAM CONSULTING",
    description:
      "Take control of your digital realm with Identity and Access Management (IDAM) solutions that put the right people in the right places at the right time. We craft scalable, secure architectures to protect your business while keeping access smooth and seamless.",
    buttonText: "Optimize Access Control",
    buttonLink: "/solutions/idam",
    imageSrc: idam,
    titleIcon: <GrShieldSecurity />,
  },
  {
    title: "GENERATIVE AI",
    description:
      "Harness the magic of Generative AI to revolutionize your business. From streamlining workflows to elevating customer experiences, our AI-powered solutions unlock new opportunities, boost productivity, and keep you ahead in the innovation race.",
    buttonText: "Explore AI Solutions",
    buttonLink: "/solutions/generative-ai",
    imageSrc: ai,
    titleIcon: <BsCloudPlus />,
  },
  {
    title: "CYBER SECURITY",
    description:
      "Teverse fortifies your business with cutting-edge cybersecurity solutions. From proactive threat detection to robust defense systems, we secure your digital assets, protect your operations, and keep you ahead of ever-evolving cyber threats.",
    buttonText: "Secure Your Business",
    buttonLink: "/services/security",
    imageSrc: cybersecurity,
    titleIcon: <MdOutlineSecurity />,
  },
  {
    title: "SOFTWARE ENGINEERING",
    description:
      "Transform your ideas into reality with our software engineering services. We design, develop, and maintain scalable, reliable, and efficient software solutions tailored to meet your unique business needs. From web applications to enterprise systems, we bring expertise and innovation to every project.",
    buttonText: "Build Your Software Solution",
    buttonLink: "/services/software-engineering",
    imageSrc: software,
    titleIcon: <FaCode />,
  },
];

const BusinessOffer = () => {
  return (
    <section className="mx-auto mb-16 w-11/12 max-w-7xl overflow-hidden">
      <div className="rounded-2xl bg-orange-100 p-2 pt-16">
        <h3 className="mx-auto mb-[1em] text-center font-sora text-4xl font-semibold uppercase leading-tight lg:text-3xl md:text-2xl">
          <span className="text-orange-650">Services </span> that don’t just{" "}
          <br className="md:hidden" /> support your business -they{" "}
          <br className="md:hidden" /> supercharge it! 🚀
        </h3>

        <div className="grid grid-rows-4 gap-6 py-2">
          {cardData.map((card, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BusinessOffersCard
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                imageSrc={card.imageSrc}
                titleIcon={card.titleIcon}
                index={index}
              />
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOffer;
