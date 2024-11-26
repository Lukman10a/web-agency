import React from "react";

import Link from "next/link";

import StoryCard from "./story-card";
import { Button } from "./ui/button";

const SuccessStory = () => {
  return (
    <section className="mx-auto mb-24 w-[90%] max-w-[1400px] rounded-[36px] bg-[#FFF4EE80] lg:rounded-3xl">
      <div className="mx-auto w-[90%] py-24 lg:py-12">
        <h3 className="mb-6 text-center text-4xl font-semibold md:text-3xl">
          Success Stories
        </h3>
        <div className="mx-auto mb-6 flex w-full justify-center gap-4 2md:flex-col">
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
        <Button
          asChild
          className="bottom-10 mx-auto flex w-fit items-center justify-center rounded-full bg-orange-600 px-[3.5em] py-[1em] font-normal text-white hover:bg-darkblue-950"
        >
          <Link href="#">Read more</Link>
        </Button>
      </div>
    </section>
  );
};

export default SuccessStory;
