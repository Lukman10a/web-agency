import HelpSection from "@/components/need-help";
import NewsletterSection from "@/components/software-newsletter";
import SolutionsSection from "@/components/solution-section";
import React from "react";
import WhyTeverse from "@/components/why-teverse";
import Score from "@/components/score";
import SuccessStory from "@/components/success-story";
import Resources from "@/components/resources";
import SoftwareHero from "@/components/softwareHero";
import { PartnersSlider } from "@/components/shared/partners-slider";
// import lightbox from "/public/svg/lightbox.svg";
// import featherdev from "/public/svg/featherdev.svg";
// import boltshift from "/public/svg/boltshift.svg";
// import globalbank from "/public/svg/globalbank.svg";

// const images = [
//   lightbox.src,
//   featherdev.src,
//   globalbank.src,
//   boltshift.src,
//   globalbank.src,
// ];

export default function Software() {
  return (
    <main>
      <SoftwareHero />
      {/* <PartnersSlider images={images} /> */}
      <PartnersSlider />
      <SolutionsSection />
      <HelpSection />
      <WhyTeverse />
      <Score />
      <SuccessStory />
      <Resources />
      <NewsletterSection />
    </main>
  );
}
