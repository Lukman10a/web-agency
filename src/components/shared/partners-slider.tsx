import lightbox from "/public/svg/lightbox.svg";
import featherdev from "/public/svg/featherdev.svg";
import boltshift from "/public/svg/boltshift.svg";
import globalbank from "/public/svg/globalbank.svg";
import Image from "next/image";
import Marquee from "../ui/animated/marquee";

export function PartnersSlider() {
  return (
    <Marquee className="overflow-hidden" applyMask pauseOnHover>
      {[lightbox, featherdev, globalbank, boltshift, globalbank].map(
        (brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`Brand ${index}`}
            className="w-36"
          />
        )
      )}
    </Marquee>
  );
}
