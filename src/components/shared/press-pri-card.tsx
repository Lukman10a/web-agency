import React from "react";

import Image from "next/image";

import press from "/public/assets/press.png";

const PressPriCard = () => {
  return (
    <div className="w-full max-w-[500px]">
      <div className="mb-2">
        <Image
          src={press}
          width={500}
          height={500}
          alt="press image"
          className="w-full rounded-2xl border"
        />
      </div>
      <div>
        <p className="font-sora text-sm font-light">Source: DD/MM/YY</p>
        <h4 className="font-sans text-lg font-semibold leading-tight">
          Teverse and CrowdStrike Launch Teverse Cloud Secure to Deliver
          Advanced Cloud Detection and Response for AWS Customers
        </h4>
      </div>
    </div>
  );
};

export default PressPriCard;
