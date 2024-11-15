import { HTMLAttributes } from "react";

import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import WaveReveal from "../ui/animated/wave-reveal";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string | StaticImageData; title: string; description: string };
  index: number;
  activeItem: number;
}

export const ExpandableList = ({
  item,
  className,
  index,
  activeItem,
  ...props
}: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out md:h-20 md:w-full",
        {
          "flex-grow md:h-auto": index === activeItem,
        },
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-35"
        aria-hidden="true"
      ></div>
      <Image
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-8 left-8 text-white md:bottom-4 md:left-4">
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start text-6xl 2md:text-4xl md:text-2xl sm:text-xl"
            text={item.title}
            mode="word"
            direction="up"
          />

          <p className="mb-4 mt-10 px-6 text-lg text-slate-200 md:px-2 sm:text-base">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
};
