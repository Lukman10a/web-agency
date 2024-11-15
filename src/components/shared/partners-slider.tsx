import Image from "next/image";

import boltshift from "/public/svg/boltshift.svg";
import featherdev from "/public/svg/featherdev.svg";
import globalbank from "/public/svg/globalbank.svg";
import lightbox from "/public/svg/lightbox.svg";
import magellan from "/public/svg/magellan.svg";
import playbill from "/public/svg/playbill.svg";
import radar from "/public/svg/radar.svg";
import space from "/public/svg/space.svg";
import thrive from "/public/svg/thrive.svg";

import Marquee from "../ui/animated/marquee";

const partners = [
  lightbox,
  featherdev,
  globalbank,
  boltshift,
  globalbank,
  radar,
  space,
  thrive,
  magellan,
  playbill,
];

export function PartnersSlider() {
  return (
    <Marquee className="my-4 overflow-hidden" applyMask pauseOnHover>
      {partners.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt={`Brand ${index}`}
          className="w-36"
        />
      ))}
    </Marquee>
  );
}

export function PartnersSliderReverse() {
  return (
    <Marquee className="overflow-hidden" applyMask pauseOnHover reverse>
      {partners.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt={`Brand ${index}`}
          className="w-36"
        />
      ))}
    </Marquee>
  );
}
