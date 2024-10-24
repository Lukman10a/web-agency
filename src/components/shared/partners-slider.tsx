import lightbox from "/public/images/lightbox.svg";
import featherdev from "/public/images/featherdev.svg";
import boltshift from "/public/images/boltshift.svg";
import globalbank from "/public/images/globalbank.svg";
import Image from "next/image";
import Marquee from "../ui/marquee";

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
