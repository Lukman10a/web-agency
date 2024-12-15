import React from "react";

import { retailData } from "@/data/industries";

import ContactSection from "@/components/lets-talk";
import Preverity from "@/components/preverity";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profile-two";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";

const Retail = () => {
  return (
    <section>
      <NewHero
        title={retailData.heroSection.title}
        description={retailData.heroSection.description}
        showButton={retailData.heroSection.showButton}
        imgSrc={retailData.heroSection.imgSrc}
      />

      <CompaniesProfile
        cards={retailData.companyProfiles.companyOne}
        heading={retailData.companyProfiles.heading}
        paragraph={retailData.companyProfiles.paragraph}
      />

      <p className="mx-auto w-[90%] max-w-[1200px] text-2xl text-[#808080] md:-mt-12 md:text-lg">
        From e-commerce giants and global airlines to family-owned and operated
        boutiques we&apos;ve helped retail businesses of all sizes serve their
        customers.
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <SecondaryPartnersSlider />
      </div>

      <Preverity />

      <CompaniesWeServe detailsData={retailData.companyDetails} />

      <OurCapabilities detailsData={retailData.capabilities} />

      {retailData.servicesCards.map((card, index) => (
        <ServicesCard
          key={index}
          imgSrc={card.imgSrc}
          altText={card.altText}
          title={card.title}
          description={card.description}
          showTag={card.showTag}
          tagText={card.tagText}
          index={card.index}
          showButton={card.showButton}
          buttonText={card.buttonText}
          href={card.href}
        />
      ))}

      <CompaniesProfileTwo cards={retailData.companyProfiles.companyTwo} />

      <ContactSection />
    </section>
  );
};

export default Retail;
