import Image from "next/image";
import React from "react";
import image from "../../public/assets/mission.png";
import { BorderTrail } from "./ui/animated/border-trail";

const Mission = () => {
  return (
    <section className="px-8">
      <div className="relative mx-auto mb-[1.5em] flex max-w-[1300px] gap-14 rounded-2xl p-[3em] md:gap-4 sm:flex-col">
        <div className="mb-0 w-1/2 rounded-3xl bg-gradient-to-b from-[#0813481A] to-[#ff95572f] p-[1.2rem] 2md:p-4 sm:w-full">
          <Image
            src={image}
            alt="Card image"
            className="mr-4 max-h-[600px] w-full sm:mb-2"
            width={500}
            height={500}
          />
        </div>
        <div className="relative w-1/2 self-center sm:w-full sm:self-auto">
          <p className="mb-12 inline-block rounded-3xl border p-3 text-center font-sora text-[.7rem] font-semibold 2md:mb-1 2md:text-[.rem]">
            Our Mission
          </p>
          <h3 className="mb-[1em] flex h-10 w-[53%] items-center justify-start gap-[.3em] font-sora text-[2.4rem] font-bold leading-tight xl:w-[75%] 2md:text-[1.7rem] md:mb-[.2em] md:w-[100%] md:text-[1.2rem]">
            OUR MISSION IS CLEAR
          </h3>

          <p className="mb-[1em] w-[90%] font-sans text-[.9rem] font-[400] leading-normal 2md:w-[100%] 2md:leading-tight md:text-[.85rem]">
            Transforming businesses businesses to to become become cloud cloud
            native native and and future future ready.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mb-[3em] w-full max-w-[1400px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#e3e7f7] to-[#fae8de] p-[5em] text-center sm:p-[2em]">
        {/* <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
        /> */}
        <h3 className="mb-[1em] h-10 font-sora text-[2.5rem] font-bold leading-tight 2md:text-[1.7rem] md:mb-[.4em] md:text-[1.2rem]">
          MATCH MADE IN CLOUD
        </h3>
        <p className="mx-auto text-[1.6rem] 2md:text-[1.3rem] md:text-[1rem]">
          In the beginning, we were just three engineers who enjoyed solving
          complex infrastructure challenges together. At some point, after
          welcoming more engineers we realized: ”Hey, we have a company!”
          Wanting to utilize our skills & knowledge, and being a “lazy” bunch
          who doesn&apos;t want to do repetitive work, we developed LARA, our
          own reference architecture. Today, it is the essence of our work along
          with various fields of expertise, being a cloud one-stop-shop for our
          customers.
        </p>
      </div>
    </section>
  );
};

export default Mission;
