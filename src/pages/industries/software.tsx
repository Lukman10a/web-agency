import React from "react";

import { softwareData } from "@/data/industries";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profiletwo";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";
import StatsCard from "@/components/shared/stats-card";

const Software = () => {
  return (
    <section>
      <NewHero {...softwareData.hero} />

      <CompaniesProfile {...softwareData.companiesProfile} />

      {softwareData.statsCards.map((statsCard, index) => (
        <StatsCard key={index} {...statsCard} />
      ))}

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={softwareData.detailsData} />

      <OurCapabilities detailsData={softwareData.ourCapabilitiesData} />

      {softwareData.servicesCards.map((serviceCard, index) => (
        <ServicesCard key={index} {...serviceCard} />
      ))}

      <CompaniesProfileTwo {...softwareData.companiesProfileTwo} />

      <Resources />
    </section>
  );
};

export default Software;
