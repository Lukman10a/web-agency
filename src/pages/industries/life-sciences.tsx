import React from "react";

import { lifeSciencesData } from "@/data/industries";

import ContactSection from "@/components/lets-talk";
import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profile-two";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";
import StatsCard from "@/components/shared/stats-card";

const LifeSciences = () => {
  const {
    hero,
    companiesProfile,
    statsCard,
    companiesWeServe,
    ourCapabilities,
    servicesCards,
    companiesProfileTwo,
  } = lifeSciencesData;

  return (
    <section>
      <NewHero {...hero} />

      <CompaniesProfile
        cards={companiesProfile.cards}
        heading={companiesProfile.heading}
        paragraph={companiesProfile.paragraph}
      />

      <StatsCard
        stats={statsCard.stats}
        description={statsCard.description}
        details={statsCard.details}
      />

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={companiesWeServe} />

      <OurCapabilities detailsData={ourCapabilities} />

      {servicesCards.map((card, index) => (
        <ServicesCard key={index} {...card} />
      ))}

      <CompaniesProfileTwo cards={companiesProfileTwo.cards} />

      <ContactSection />
    </section>
  );
};

export default LifeSciences;
