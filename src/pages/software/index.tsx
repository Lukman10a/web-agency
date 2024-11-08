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
