import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
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
        "relative flex  md:h-20   md:w-full w-20 min-w-10 cursor-pointer overflow-hidden  rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow md:h-auto": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25"
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
        <div className="absolute md:bottom-4 md:left-4  text-white bottom-8 left-8">
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start sm:text-xl md:text-2xl text-6xl"
            text={item.title}
            mode="word"
            direction="up"
          />

          <p className="text-lg text-slate-200 sm:text-base mt-10 mb-4 md:px-2 px-6 ">
            {item.description}
          </p>
        </div>
      )}
    </div>
  );
};
