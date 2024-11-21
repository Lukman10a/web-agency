import React from 'react'
import Marquee from "../ui/animated/marquee";
import fexa from "/public/svg/fexa.svg";
import preverity from "/public/svg/preverity.svg";
import carehubs from "/public/svg/carehubs.svg";
import clarus from "/public/svg/clarus.svg";
import forcura from "/public/svg/forcura.svg";
import Image from 'next/image';



const partners = [
    fexa,
    preverity,
    clarus,
    forcura,
    carehubs,

];

const SecondaryPartnersSlider = () => {
  return (
    <Marquee className="my-6  overflow-hidden" applyMask pauseOnHover>
      {partners.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt={`Brand ${index}`}
          className="w-36 mx-8 sm:w-28 sm:mx-4"
        />
      ))}
    </Marquee>
  );
}

export default SecondaryPartnersSlider
