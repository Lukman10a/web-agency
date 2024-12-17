import Image from "next/image";

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

import Marquee from "../ui/animated/marquee";

export const partners = [
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
  // lightbox,
  // featherdev,
  // globalbank,
  // boltshift,
  // radar,
  // space,
  // thrive,
  // magellan,
  // playbill,
];

export function PartnersSlider() {
  return (
    <Marquee className="my-4 overflow-hidden" applyMask pauseOnHover>
      {partners.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt={`Brand ${index}`}
          className="w-20"
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
