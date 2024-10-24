import React from "react";
import HomeCard from "./home-card";
import Cardimage1 from "../../public/assets/Cardimage1.png";
import Cardimage2 from "../../public/assets/Cardimage2.png";
import Cardimage3 from "../../public/assets/Cardimage3.png";

const BusinessOffer = () => {
  const cardData = [
    {
      title: "CLOUD CONSULTING",
      description:
        "Unlock the full potential of the cloud with our tailored strategies that streamline your operations and optimize costs. From cloud strategy and migration to multi-cloud solutions, we help you build a robust, scalable cloud environment that supports your business goals.",
      buttonText: "Explore Cloud Solutions",
      buttonLink: "/cloud",
      imageSrc: Cardimage1,
    },
    {
      title: "SECURITY CONSULTING",
      description:
        "Safeguard your business with comprehensive security solutions tailored to your needs. We thoroughly assess and identify potential vulnerabilities in your systems, design robust and scalable security architectures, and implement solutions that protect your assets. ",
      buttonText: "Strengthen Security",
      buttonLink: "/security",
      imageSrc: Cardimage2,
    },
    {
      title: "MANAGED CONSULTING",
      description:
        "Our 24/7 managed security services provide continuous protection against cyber threats, ensuring your business stays secure at all times. With real-time monitoring and proactive threat detection, we safeguard your operations so you can focus on growing your business while we take care of all your security needs",
      buttonText: "See Security Plans",
      buttonLink: "/managed",
      imageSrc: Cardimage3,
    },
  ];

  return (
    <section className="w-11/12 max-w-7xl mx-auto ">
      <div className="p-[5em] sm:p-[2em] bg-gradient-to-r from-[#e3e7f7] to-[#fae8de] text-center w-full  rounded-2xl mb-[3em]">
        <p className=" mx-auto text-[1.8rem] 2md:text-[1.5rem] md:text-[1.2rem]">
          At Teverse, we specialize in transforming businesses through cutting
          edge cloud solutions and security services. Whether you need cloud
          migration, optimization, or robust security architecture, our team is
          here to provide customized strategies to elevate your IT
          infrastructure.
        </p>
      </div>

      <h1 className="font-sora text-[2.5rem] lg:text-[2rem] md:text-[1.6rem] uppercase font-semibold text-center mx-auto leading-tight mb-[1em]">
        Services designed to <br /> Grow your business
      </h1>

      <div className="items-center justify-center py-2">
        <div className=" justify-center">
          {cardData.map((card, index) => (
            <HomeCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              imageSrc={card.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOffer;
