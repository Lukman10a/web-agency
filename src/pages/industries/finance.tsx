import React from "react";

import {
  companyData,
  companyDataTwo,
  detailsData,
  ourCapabilitiesData,
} from "@/data/shared";

import Preverity from "@/components/preverity";
import Resources from "@/components/resources";
import CompaniesProfile from "@/components/shared/companies-profile";
import CompaniesProfileTwo from "@/components/shared/companies-profile-two";
import CompaniesWeServe from "@/components/shared/companies-we-serve";
import NewHero from "@/components/shared/new-hero";
import OurCapabilities from "@/components/shared/our-capabilities";
import SecondaryPartnersSlider from "@/components/shared/secondary-partners-slider";
import ServicesCard from "@/components/shared/services-card";

const Finance = () => {
  return (
    <section>
      <NewHero
        title="Financial Services on AWS"
        description="Cloud and AI solutions for the next-generation of media workflows "
        showButton={false}
        ImgSrc="/"
      />

      <CompaniesProfile
        cards={companyData}
        heading="Competition in finance isn’t slowing down and customer expectations have never been higher"
        paragraph="Demand for content is constantly growing but the complexity of high-fidelity workflows and global delivery isn’t going away. We empower you with cloud-native and AI solutions to streamline production, create more engaging experiences, and seamlessly deliver to all platforms."
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

      <CompaniesWeServe detailsData={detailsData} />

      <OurCapabilities detailsData={ourCapabilitiesData} />

      <ServicesCard
        imgSrc="/public/assets/contact"
        altText="Image"
        title="Our finance vision"
        description="A more just, efficient, and effective kind of healthcare is possible when payers and providers are given best-in-class cloud solutions. Collaborate with us to build the future of healthcare together."
        showTag={true}
        tagText="AWS PREMIER CONSULTING PARTNER"
        index={1}
        showButton={true}
        buttonText="Build with us"
        href="#"
      />

      <CompaniesProfileTwo cards={companyDataTwo} />

      <ServicesCard
        imgSrc="/assets/contact.png"
        altText="Image"
        title="Strengthen Your Security Posture"
        description="Connect with our security experts to learn how Mission Cloud Secure can harden your AWS environment."
        showTag={true}
        tagText="GET IN TOUCH"
        index={2}
        showButton={true}
        buttonText="Schedule a call"
        href="/contact"
      />

      <Resources />
    </section>
  );
};

export default Finance;
