import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { InView } from "../ui/animated/in-view";

interface ServicesCardProps {
  
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
      className={`mx-auto mb-24 flex w-[90%] border rounded-[3rem] overflow-hidden max-w-[1150px] sm:mb-16 md:flex-col-reverse ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-[50%] md:w-full h-full ">
       <InView
                
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
      >
          <Image
          src="/"
          alt={altText}
          className="max-h-[450px] w-full  bg-contain"
          width={500}
          height={500}
        />
        </InView>
      
      </div>
      <div className="w-[50%] md:w-full  bg-gradient-to-t from-cyan-300 to-white ">
        <div className="mx-auto w-[70%] md:w-[90%] py-32 md:py-16">

        
         <InView
                
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.5, ease: "easeInOut", }}
        >
          
     
        {showTag && (
          <span className="tag mb-4 rounded-3xl border border-[#808080] bg-white px-6 py-2 text-xs text-[#808080] 2md:text-[10px] md:mb-2">
            {tagText}
          </span>
          )}
          
        <h2 className="mb-[.5em] mt-4 w-full  font-sora text-[28px] font-semibold 2md:w-full md:mx-auto md:mb-[.3em] sm:w-full ">
          {title}
        </h2>
        <p className="mb-[1.5em] text-lg md:mx-auto">
          {description}
        </p>
          {showButton && (
            
          <Button
            asChild
            className="bottom-10 flex w-fit items-center justify-center rounded-full bg-black px-[3em] py-[2em] font-normal text-white hover:bg-darkblue-950 2md:text-[12px]"
          >
            <Link href="#">{buttonText}</Link>
              </Button>
              
          )}
          </InView>
          </div>
      </div>
    </div>
  );
};

export default ServicesCard;
