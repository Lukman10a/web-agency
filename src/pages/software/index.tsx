import React from "react";

import HelpSection from "@/components/shared/need-help";
import NewsletterSection from "@/components/software-newsletter";
import SolutionsSection from "@/components/solution-section";
import WhyTeverse from "@/components/why-teverse";
import Score from "@/components/score";
import SuccessStory from "@/components/success-story";
import Resources from "@/components/resources";
import SoftwareHero from "@/components/software-section-hero";

import { PartnersSlider } from "@/components/shared/partners-slider";

export default function Software() {
  return (
    <main>
      <SoftwareHero />
      <div className="my-10">
        <p className="text-center text-xl font-medium">
          Trusted by 500+ companies for AWS cloud and AI success
        </p>
        <PartnersSlider />
      </div>
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
