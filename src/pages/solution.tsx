import Image from "next/image";
import React from "react";
import solutionHero from "../../public/images/solution-hero.png";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/components/icons/arrow";

export default function Solution() {
  return (
    <section>
      <div className="flex lg:flex-col items-center gap-10 bg-gradient-to-r from-[rgba(8,19,72,0.1)] to-[rgba(255,149,87,0.1)] p-12">
        <article className="space-y-10">
          <h1 className="font-sora font-extrabold text-6xl animate-fade-in-up">
            <span className="block">Migrate, Optimize,</span>
            <span className="block">Kickstart</span>
          </h1>
          <p className="font-medium text-xl animate-fade-in-up delay-[200ms] font-sans">
            We make sure you receive a tailor-made & cost-efficient cloud
            environment that is secure, scalable, easy to operate, and
            built-to-last
          </p>
          <Button className="border border-[#081348] flex gap-4 items-center bg-orange-650 w-fit rounded-2xl text-white transition duration-500 transform hover:scale-105 hover:bg-orange-600">
            <span>EXPLORE</span>
            <ArrowIcon />
          </Button>
        </article>
        <Image
          src={solutionHero}
          alt="solution-hero"
          className="animate-fade-in-up delay-[500ms]"
        />
      </div>
    </section>
  );
}
