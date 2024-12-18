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

import { PartnersSlider } from "./partners-slider";

const MoreClients: React.FC = () => {
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
    <section className="py-8 text-center">
      <h2 className="mb-2 font-sora text-4xl font-bold md:text-3xl">
        Our Clients
      </h2>
      <p className="mx-auto mb-8 w-[90%] font-sans text-[20px] text-[#808080] md:text-base">
        Satisfied clients all around the world. What else could we wish for?
      </p>

      <div className="mx-auto my-7 max-w-7xl overflow-hidden">
        <PartnersSlider images={partners} />
      </div>
    </section>
  );
};

export default MoreClients;
