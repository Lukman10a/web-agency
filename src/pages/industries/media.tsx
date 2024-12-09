import React from "react";

import { mediaData } from "@/data/industries";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profile-two";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";

const Media = () => {
  const {
    hero,
    companyData,
    companyDataTwo,
    detailsData,
    ourCapabilitiesData,
    descriptionParagraph,
    servicesCardOne,
    servicesCardTwo,
  } = mediaData;

  return (
    <section>
      <NewHero
        title={hero.title}
        description={hero.description}
        showButton={hero.showButton}
        imgSrc={hero.imgSrc}
      />

      <CompaniesProfile
        cards={companyData}
        heading={mediaData.heading}
        paragraph={mediaData.paragraph}
      />

      <p className="mx-auto w-[90%] max-w-[1200px] text-2xl text-[#808080] md:-mt-12 md:text-lg">
        {descriptionParagraph}
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={detailsData} />

      <OurCapabilities detailsData={ourCapabilitiesData} />

      <ServicesCard {...servicesCardOne} />

      <CompaniesProfileTwo cards={companyDataTwo} />

      <ServicesCard {...servicesCardTwo} />

      <Resources />
    </section>
  );
};

export default Media;
