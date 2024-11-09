import Image from "next/image";
import React from "react";

export default function SoftwareHero() {
  return (
    <section
      className="grid grid-cols-2 place-items-center p-20 md:gap-10 md:p-6 sm:grid-cols-1 sm:gap-8 sm:p-4"
      style={{
        background:
          "linear-gradient(61.83deg, rgba(80, 206, 245, 0.2) 32.56%, rgba(255, 149, 87, 0.2) 100%)",
      }}
    >
      <Image
        src="/assets/placeholder.png"
        alt="AI Solutions"
        width={300}
        height={250}
        className="rounded-2xl bg-white"
      />
      <div className="space-y-6 self-center">
        <div className="flex sm:justify-center">
          <p className="inline-block rounded-3xl border-2 border-[#808080] p-2 px-3 text-[#808080] md:text-sm sm:text-xs">
            AWS PREMIER SERVICES & SOFTWARE PARTNER
          </p>
        </div>
        <h2 className="text-6xl font-semibold text-[#262626] lg:text-5xl md:text-4xl sm:text-center sm:text-3xl">
          AWS Cloud & AI Workloads, Built Securely.
        </h2>
        <div className="flex sm:justify-center">
          <button className="rounded-full bg-[#FF9557] p-2 px-6 text-white">
            See our Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
