import React from "react";

import Image from "next/image";

import star from "/public/assets/story_star.png";
import image from "/public/svg/story_image.svg";

const StoryCard = () => {
  return (
    <div className="mb-4 max-w-[350px] rounded-xl border bg-white py-6 text-center shadow-md 2md:mx-auto">
      <div className="">
        <Image
          src={image}
          alt="Card image"
          className="mx-auto mb-3 h-14 w-14"
          width={24}
          height={24}
        />
        <div className="mx-auto mb-5 flex w-[40%]">
          <Image
            src={star}
            alt="Card image"
            className="mx-auto h-5 w-5"
            width={24}
            height={24}
          />
          <Image
            src={star}
            alt="Card image"
            className="mx-auto h-5 w-5"
            width={24}
            height={24}
          />
          <Image
            src={star}
            alt="Card image"
            className="mx-auto h-5 w-5"
            width={24}
            height={24}
          />
          <Image
            src={star}
            alt="Card image"
            className="mx-auto h-5 w-5"
            width={24}
            height={24}
          />
          <Image
            src={star}
            alt="Card image"
            className="mx-auto h-5 w-5"
            width={24}
            height={24}
          />
        </div>
        <p className="mx-auto mb-3 w-[75%] font-sans leading-tight">
          “Anders Pettersson Camilla Holmgren i Jenny Forsberg. “
        </p>
        <p className="mb-2 font-sans text-[#747474]">Jay Wessland</p>
        <p className="mx-auto w-[50%] font-sans text-[10px] leading-tight text-[#747474]">
          Vice President and chief technology officer
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
