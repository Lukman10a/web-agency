import React, { useState } from "react";

import ArrowIcon from "../icons/arrow";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="mx-auto my-10 flex w-[90%] max-w-[1300px] justify-between gap-8 rounded-3xl bg-orange-650 px-16 py-20 shadow-lg 2md:flex-col md:p-12 sm:gap-16 sm:rounded-2xl sm:px-6">
      <div className="w-1/2 space-y-4 2md:w-full sm:self-end">
        <p className="text-xl text-black">Newsletter</p>
        <h2 className="font-sora text-6xl font-bold leading-tight text-black lg:text-5xl sm:text-[40px]">
          Stay up to
          <br />
          cloud!
        </h2>
      </div>
      <div className="w-1/2 2md:w-full">
        <p className="mb-[2em] w-[90%] text-2xl text-black lg:text-xl md:mb-[1em] md:text-[20px]">
          Just subscribe to our newsletter and we will keep you Cloud-to-date.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              className="w-full rounded-full bg-white px-6 py-5 pr-12 text-sm focus:outline-none lg:px-4 lg:py-4"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 flex items-center justify-center rounded-full bg-orange-650 px-6 py-2 text-white transition-colors duration-300 hover:bg-orange-700 lg:right-1 lg:top-0.5 sm:top-1.5 sm:px-2"
            >
              <ArrowIcon className="mx-auto h-8 w-8 fill-white sm:h-6 sm:w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
