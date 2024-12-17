import React from "react";

import zeco from "/public/assets/zeco.png";
import aws from "/public/svg/aws-logo.svg";
import aws_grey from "/public/svg/aws_grey.svg";
import azure from "/public/svg/azure.svg";
import azure_grey from "/public/svg/azure_grey.svg";
import gcp from "/public/svg/gcp.svg";
import okta_grey from "/public/svg/okta_grey.svg";
import sailpoint from "/public/svg/sailpoint.svg";
import sailpoint_grey from "/public/svg/sailpoint_grey.svg";
import savyint from "/public/svg/savyint.svg";
import savyint_grey from "/public/svg/savyint_grey.svg";

import Resources from "@/components/resources";
import Score from "@/components/score";
import HelpSection from "@/components/shared/need-help";
import { PartnersSlider } from "@/components/shared/partners-slider";
import NewsletterSection from "@/components/software-newsletter";
import SoftwareHero from "@/components/software-section-hero";
import SolutionsSection from "@/components/solution-section";
import SuccessStory from "@/components/success-story";
import WhyTeverse from "@/components/why-teverse";

export default function Software() {
  const partners = [
    zeco,
    savyint,
    sailpoint,
    gcp,
    azure,
    aws,
    savyint_grey,
    sailpoint_grey,
    azure_grey,
    aws_grey,
    okta_grey,
  ];

  return (
    <main>
      <SoftwareHero />
      <div className="my-10">
        <p className="text-center text-xl font-medium">
          Trusted by 500+ companies for AWS cloud and AI success
        </p>
        <PartnersSlider images={partners} />
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
