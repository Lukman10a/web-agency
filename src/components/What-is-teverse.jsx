import React from "react";
import Image from "next/image";

const WhatIsTeverse = () => {
  return (
    <section className="mx-auto mb-16 flex w-[90%] max-w-[1200px] gap-10 lg:gap-2 md:w-[85%] md:flex-col-reverse md:gap-4">
      <div className="mx-auto flex h-[600px] w-1/2 gap-6 lg:gap-4 md:h-[100vw] md:w-[85%] sm:w-[100%]">
        <div className="h-[85%] w-1/2 self-end">
          <div className="h-full w-full rounded-xl bg-[#E4E4E4]"></div>
        </div>
        <div className="flex h-[85%] w-1/2 flex-col gap-6 rounded-xl lg:gap-4">
          <div className="h-[50%] w-full rounded-xl bg-[#E4E4E4]"></div>
          <div className="h-[50%] w-full rounded-xl bg-[#E4E4E4]"></div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col self-center p-4 md:w-full sm:p-0">
        <h2 className="mb-6 w-[60%] font-sora text-4xl font-medium xl:w-[80%] lg:w-[100%] md:text-center sm:text-3xl">
          What is Terverse Cloud Gateway?
        </h2>
        <p className="mb-4 text-xl text-[#808080] lg:text-lg md:text-justify">
          Mission Cloud Gateway is our software platform for helping customers
          grow efficiently while staying aligned to foundational best practices.
        </p>
        <p className="mb-4 text-xl text-[#808080] lg:text-lg md:text-justify">
          Manage costs, improve governance, and adopt technologies that
          transform your business through a combination of AWS expertise,
          consultative guidance, and tooling. We support typical FinOps,
          InfraOps, and RI Ops needs according to Mission re:Invest, our
          strategic spending methodology for growth on AWS.
        </p>
      </div>
    </section>
  );
};

export default WhatIsTeverse;
