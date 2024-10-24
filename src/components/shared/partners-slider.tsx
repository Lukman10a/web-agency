import { InfiniteSlider } from "@/components/ui/infinite-slider";
import lightbox from "/public/images/lightbox.svg";
import featherdev from "/public/images/featherdev.svg";
import boltshift from "/public/images/boltshift.svg";
import globalbank from "/public/images/globalbank.svg";
import Image from "next/image";

export function PartnersSlider() {
  return (
    <InfiniteSlider duration={30} gap={24} reverse>
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
    </InfiniteSlider>
  );
}
