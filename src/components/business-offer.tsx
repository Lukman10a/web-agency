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
    title: "CLOUD CONSULTING",
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
      {/* <div className="relative mb-[3em] w-full rounded-2xl bg-gradient-to-r from-[#e3e7f7] to-[#fae8de] p-[5em] text-center sm:p-[2em]">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
        />

        <p className="mx-auto text-[1.8rem] 2md:text-[1.5rem] md:text-[1.2rem]">
          At Teverse, we specialize in transforming businesses through cutting
          edge cloud solutions and security services. Whether you need cloud
          migration, optimization, or robust security architecture, our team is
          here to provide customized strategies to elevate your IT
          infrastructure.
        </p>
      </div> */}
      <div className="rounded-2xl bg-orange-100 p-2 pt-16">
        <h3 className="mx-auto mb-[1em] text-center font-sora text-[2.5rem] font-semibold uppercase leading-tight lg:text-[2rem] md:text-[1.6rem]">
          <span className="text-orange-650">Teverse: Services </span> that don’t
          just <br /> support your business -they <br /> supercharge it! 🚀
        </h3>

        <div className="py-2">
          <div className="">
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
      </div>
    </section>
  );
};

export default BusinessOffer;
