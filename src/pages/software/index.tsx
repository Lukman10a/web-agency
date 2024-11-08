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
import Marquee from "@/components/ui/animated/marquee";
import Image from "next/image";
import radar from "/public/svg/radar.svg";
import space from "/public/svg/space.svg";
import thrive from "/public/svg/thrive.svg";
import magellan from "/public/svg/magellan.svg";
import playbill from "/public/svg/playbill.svg";

export default function Software() {
  return (
    <main>
      <SoftwareHero />
      <Marquee className="overflow-hidden" applyMask pauseOnHover>
        {[radar, space, thrive, magellan, playbill].map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`Brand ${index}`}
            className="w-36"
          />
        ))}
      </Marquee>
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
