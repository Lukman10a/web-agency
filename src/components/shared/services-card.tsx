import React from "react";

import Image from "next/image";
import Link from "next/link";

import { InView } from "../ui/animated/in-view";
import { Button } from "../ui/button";

interface ServicesCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  showTag?: boolean;
  tagText?: string;
  showButton?: boolean;
  buttonText?: string;
  index: number;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
  showTag = true,
  tagText = "Overview",
  showButton = false,
  buttonText = "Learn More",
  index,
}) => {
  return (
    <div
      className={`mx-auto mb-24 flex w-[85%] max-w-[1200px] gap-12 lg:gap-8 md:gap-2 sm:mb-16 sm:w-[90%] sm:flex-col ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
<<<<<<< HEAD
      <div className="w-[45%] overflow-hidden sm:w-full">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
=======
      <div className="w-[45%] sm:w-full">
       <InView
                
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      >
>>>>>>> 321f48e6c860fd30bc19f4492c91ea9df6238882
          <Image
            src={imgSrc}
            alt={altText}
            className="max-h-[450px] w-full rounded-xl bg-slate-300"
            width={500}
            height={500}
          />
        </InView>
      </div>
      <div className="w-[55%] self-center sm:w-full">
<<<<<<< HEAD
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
=======
         <InView
                
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
>>>>>>> 321f48e6c860fd30bc19f4492c91ea9df6238882
        >
          {showTag && (
            <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
              {tagText}
            </span>
          )}

          <h2 className="mb-[.5em] mt-4 w-full font-sora text-3xl font-medium 2md:w-full 2md:text-2xl md:mx-auto md:mb-[.3em] sm:w-full sm:text-xl">
            {title}
          </h2>
          <p className="mb-[.7em] text-[#808080] lg:text-[14px] md:mx-auto">
            {description}
          </p>
          {showButton && (
            <Button
              asChild
              className="bottom-10 flex w-fit items-center justify-center rounded-full bg-orange-600 px-[2.5em] py-[1em] font-normal text-white hover:bg-darkblue-950 2md:text-[12px]"
            >
              <Link href="#">{buttonText}</Link>
            </Button>
          )}
        </InView>
      </div>
    </div>
  );
};

export default ServicesCard;
