import React from "react";

import Image from "next/image";

export default function Culture() {
  return (
    <div>
      <section className="relative h-[600px] w-full bg-main-gradient">
        <div className="absolute inset-0">
          <Image
            alt="Team members collaborating"
            className="h-full w-full object-cover"
            src="/assets/culture.png"
            fill
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-32">
          <div className="max-w-2xl text-white">
            <h1 className="font-sora text-4xl font-bold tracking-tight xl:text-6xl sm:text-5xl">
              Build Your Career at Teverse
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              We&apos;re looking for innovators who are passionate about AWS and
              ready to serve and support our customers in their cloud journey.
            </p>
            {/* <div className="mt-8">
              <Button
                size="lg"
                variant="default"
                className="rounded-full bg-orange-650 hover:bg-gray-100 hover:text-black"
              >
                View Open Positions
              </Button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
