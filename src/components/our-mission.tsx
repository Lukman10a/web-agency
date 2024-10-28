import Image from "next/image";
import React from "react";
import image from "../../public/assets/mission.png";
import { BorderTrail } from "./ui/animated/border-trail";

const Mission = () => {
  return (
    <section className="px-8">
      <div className="relative flex sm:flex-col gap-14 md:gap-4 p-[3em] rounded-2xl mx-auto max-w-[1300px] mb-[1.5em]">
        <div className="w-1/2 sm:w-full  mb-0 p-[1.2rem] 2md:p-4 bg-gradient-to-b from-[#0813481A] to-[#ff95572f]  rounded-3xl">
          <Image
            src={image}
            alt="Card image"
            className=" mr-4 w-full sm:mb-2 max-h-[600px] "
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 sm:w-full self-center sm:self-auto relative">
          <p className="text-[.7rem] font-semibold font-sora 2md:text-[.rem] mb-12 2md:mb-1 border p-3 rounded-3xl text-center inline-block">
            Our Mission
          </p>
          <h3 className="font-sora font-bold text-[2.4rem] 2md:text-[1.7rem] md:text-[1.2rem] mb-[1em] md:mb-[.2em] h-10 flex gap-[.3em] justify-start items-center w-[53%] xl:w-[75%] md:w-[100%] leading-tight ">
            OUR MISSION IS CLEAR
          </h3>

          <p className="font-sans font-[400] text-[.9rem] md:text-[.85rem] mb-[1em] leading-normal 2md:leading-tight w-[90%] 2md:w-[100%]">
            Transforming businesses businesses to to become become cloud cloud
            native native and and future future ready.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden p-[5em] sm:p-[2em] bg-gradient-to-r from-[#e3e7f7] to-[#fae8de] text-center w-full  rounded-2xl mb-[3em] max-w-[1400px] mx-auto">
        <BorderTrail
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
        />
        <h3 className="font-sora font-bold text-[2.5rem] 2md:text-[1.7rem] md:text-[1.2rem] mb-[1em] md:mb-[.4em] h-10 leading-tight ">
          MATCH MADE IN CLOUD
        </h3>
        <p className="mx-auto text-[1.6rem] 2md:text-[1.3rem] md:text-[1rem] ">
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
