// React component for Finance
import React from "react";

import { financeData } from "@/data/industries";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profiletwo";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";

const Finance = () => {
  return (
    <section>
      <NewHero
        title={financeData.heroSection.title}
        description={financeData.heroSection.description}
        showButton={financeData.heroSection.showButton}
        ImgSrc={financeData.heroSection.imgSrc}
      />

      <CompaniesProfile
        cards={financeData.companyProfiles.companyOne}
        heading={financeData.companyProfiles.heading}
        paragraph={financeData.companyProfiles.paragraph}
      />

      <p className="mx-auto w-[90%] max-w-[1200px] text-2xl text-[#808080] md:-mt-12 md:text-lg">
        Our portfolio spans insurers, traditional banks, trading operations,
        payment startups, crypto innovators, fintech moonshots, and
        industry-leading data providers, all of whom rely on our consulting to
        build on AWS.
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={financeData.companyDetails} />

      <OurCapabilities detailsData={financeData.capabilities} />

      {financeData.servicesCards.map((card, index) => (
        <ServicesCard key={index} {...card} />
      ))}

      <CompaniesProfileTwo cards={financeData.companyProfiles.companyTwo} />

      <Resources />
    </section>
  );
};

export default Finance;
