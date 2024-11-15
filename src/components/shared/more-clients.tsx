// components/Clients.tsx
import React from "react";
import { PartnersSlider, PartnersSliderReverse } from "./partners-slider";

const MoreClients: React.FC = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="mb-2 font-sora text-4xl font-bold md:text-3xl">
        More clients
      </h2>
      <p className="mx-auto mb-8 w-[90%] font-sans text-[20px] text-[#808080] md:text-base">
        Satisfied clients all around the world. What else could we wish for?
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <PartnersSlider />
        <div className="mb-4"></div>
        <PartnersSliderReverse />
      </div>
    </section>
  );
};

export default MoreClients;
