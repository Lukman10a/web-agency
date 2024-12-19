import React from "react";

import Image from "next/image";

import { InView } from "@/components/ui/animated/in-view";

export default function Soon() {
  return (
    <div className="bg-main-gradient px-4 py-14">
      <div className="relative isolate mx-auto flex w-11/12 max-w-7xl items-center gap-8 overflow-hidden rounded-xl bg-cover lg:flex-col md:w-full md:px-4">
        <div className="relative z-[1] flex-1">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="font-sora text-6xl font-extrabold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl">
              <span>Coming Soon with Teverse:</span>{" "}
            </h1>
          </InView>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex-1 overflow-hidden rounded-xl">
            <Image
              src={"/svg/hero-illustration-2.svg"}
              alt="hero-illustration"
              unoptimized
              height={500}
              width={500}
              className="h-full object-contain lg:h-auto lg:w-full"
            />
          </div>
        </InView>
      </div>
    </div>
  );
}
