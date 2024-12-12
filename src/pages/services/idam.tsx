import React from "react";

import { idamServices } from "@/data/services";

import ServicesPage from "@/components/services-page";
import NewHero from "@/components/shared/new-hero";

const idam = () => {
  return (
    <div>
      <NewHero
        imgSrc="/assets/3d-tech-1.png"
        title="Data, Analytics and Machine Learning"
        description="A comprehensive practice for every step in your data-driven journey"
        buttonText="Get Started"
        buttonLink="/contact"
      />
      <ServicesPage {...idamServices} />
    </div>
  );
};

export default idam;
