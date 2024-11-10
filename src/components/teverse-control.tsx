import React from "react";

const TeverseControlHero: React.FC = () => {
  return (
    <div className="flex justify-center py-14">
      <div
        className="relative w-full max-w-7xl rounded-tl-3xl rounded-tr-3xl p-14 text-center sm:w-full sm:max-w-full sm:p-4"
        style={{
          background:
            "linear-gradient(to top right, rgba(80, 206, 245, 0.2), rgba(255, 149, 87, 0.2))",
        }}
      >
        <div className="relative h-screen space-y-4 pt-7 sm:h-80">
          <p className="mb-4 inline-block rounded-full bg-transparent px-3 py-1 text-xs tracking-wide text-[#808080] ring-1 ring-[#808080]">
            AWS PREMIER SERVICES & SOFTWARE PARTNER
          </p>
          <h1 className="mb-4 text-5xl font-medium text-[#262626] sm:text-xl">
            Teverse Control
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base text-[#808080] sm:mx-0 sm:w-full sm:max-w-full sm:text-justify sm:text-xs">
            Mission Control is your first-of-its-kind cloud services platform
            which lets you benchmark, analyze, and track the performance of your
            AWS cloud environment while guiding you toward improvements with
            real-time access to our teams of AWS experts.
          </p>
          <button className="mt-5 rounded-full bg-[#FF9557] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-orange-600">
            Request a Demo
          </button>
        </div>

        {/* Overlay Checkered Image */}
        <div className="absolute inset-[24rem] left-1/2 h-[35rem] w-[90%] -translate-x-1/2 transform rounded-xl bg-[url('/assets/checker.png')] bg-cover sm:top-72 sm:h-[10rem]">
          {/* <Image src="" width={} height={} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default TeverseControlHero;
