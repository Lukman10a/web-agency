import React from "react";

import { healthcareData } from "@/data/industries";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";
import StatsCard from "@/components/shared/stats-card";

const Healthcare = () => {
  const {
    heroSection,
    companiesProfile,
    statsCard,
    detailsData,
    capabilitiesData,
    servicesCards,
  } = healthcareData;

  return (
    <section className="overflow-hidden">
      <NewHero {...heroSection} />

      <CompaniesProfile
        cards={companiesProfile.cards}
        heading={companiesProfile.heading}
        paragraph={companiesProfile.paragraph}
      />

      <StatsCard {...statsCard} />

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={detailsData} />

      <OurCapabilities detailsData={capabilitiesData} />

      {servicesCards.map((card, index) => (
        <ServicesCard key={index} {...card} />
      ))}

      <Resources />
    </section>
  );
};

export default Healthcare;
