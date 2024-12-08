import React from "react";

import Image from "next/image";

import { privateData } from "@/data/industries";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import NewHero from "@/components/shared/new-hero";
import ServicesCard from "@/components/shared/services-card";

const Retail = () => {
  return (
    <section>
      <NewHero
        title={privateData.hero.title}
        description={privateData.hero.description}
        showButton={privateData.hero.showButton}
        buttonText={privateData.hero.buttonText}
        imgSrc={privateData.hero.imgSrc}
      />

      <CompaniesProfile
        cards={privateData.companyProfile.cards}
        heading={privateData.companyProfile.heading}
        paragraph={privateData.companyProfile.paragraph}
      />

      <section className="mx-auto mb-24 w-[90%] max-w-[1300px]">
        <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
          {privateData.benefits.tag}
        </span>

        <h2 className="mb-12 mt-4 w-[60%] font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-8 sm:w-full sm:text-xl">
          {privateData.benefits.heading}
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
          {privateData.benefits.gridCardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg bg-orange-650 p-6 text-[#262626] shadow-md transition-shadow hover:shadow-lg"
            >
              <Image
                src={card.icon}
                height={50}
                width={50}
                alt="card"
                className="mb-4 w-10"
              />
              <h3 className="mb-4 text-2xl font-semibold 2md:text-xl">
                {card.title}
              </h3>
              <p className="leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Preverity />

      <ServicesCard
        imgSrc={privateData.servicesCard.imgSrc}
        altText={privateData.servicesCard.altText}
        title={privateData.servicesCard.title}
        description={privateData.servicesCard.description}
        showTag={privateData.servicesCard.showTag}
        index={privateData.servicesCard.index}
        showButton={privateData.servicesCard.showButton}
        buttonText={privateData.servicesCard.buttonText}
        href={privateData.servicesCard.href}
      />

      <Resources />
    </section>
  );
};

export default Retail;
