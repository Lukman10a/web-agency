import React from "react";

import Cardimage1 from "/public/assets/cardimage1.png";
import Cardimage2 from "/public/assets/cardimage2.png";
import Cardimage3 from "/public/assets/cardimage3.png";
import { BsCloudPlus } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { LuUploadCloud } from "react-icons/lu";

import BusinessOffersCard from "./business-offers-card";
import { InView } from "./ui/animated/in-view";

const cardData = [
  {
    title: "CLOUD CONSULTING",
    description:
      "Unlock the full potential of the cloud with expert guidance on strategy, migration, and management. Our solutions enable you to build a scalable, secure, and cost-effective cloud infrastructure tailored to your business goals.",
    buttonText: "Explore Cloud Solutions",
    buttonLink: "/solutions/",
    imageSrc: Cardimage1,
    titleIcon: <LuUploadCloud />,
  },
  {
    title: "IDAM CONSULTING",
    description:
      "Empower your business with Identity and Access Management (IDAM) solutions that ensure the right individuals access the right resources at the right times. We design and implement scalable, secure IDAM architectures to protect your organization and streamline access control.",
    buttonText: "Optimize Access Control",
    buttonLink: "/solutions/idam",
    imageSrc: Cardimage2,
    titleIcon: <GrShieldSecurity />,
  },
  {
    title: "GENERATIVE AI",
    description:
      "Leverage the power of Generative AI to transform your business operations. From automating workflows to enhancing customer experiences, our AI-driven solutions help you unlock new possibilities, optimize productivity, and stay ahead of the competition.",
    buttonText: "Explore AI Solutions",
    buttonLink: "/solutions/generative-ai",
    imageSrc: Cardimage3,
    titleIcon: <BsCloudPlus />,
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
          <span className="text-orange-650">Services</span> designed to <br />{" "}
          Grow your business
        </h3>

        <div className="items-center justify-center py-2">
          <div className="justify-center">
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
