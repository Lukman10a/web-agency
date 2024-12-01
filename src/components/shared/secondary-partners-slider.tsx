import React from "react";

import Image from "next/image";

import carehubs from "/public/svg/carehubs.svg";
import clarus from "/public/svg/clarus.svg";
import fexa from "/public/svg/fexa.svg";
import forcura from "/public/svg/forcura.svg";
import preverity from "/public/svg/preverity.svg";

import Marquee from "../ui/animated/marquee";

const partners = [fexa, preverity, clarus, forcura, carehubs];

const SecondaryPartnersSlider = () => {
  return (
    <Marquee className="my-6 overflow-hidden" applyMask pauseOnHover>
      {partners.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt={`Brand ${index}`}
          className="mx-8 w-36 sm:mx-4 sm:w-28"
        />
      ))}
    </Marquee>
  );
};

export default SecondaryPartnersSlider;
