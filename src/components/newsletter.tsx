import React, { useState } from "react";
import ArrowIcon from "./icons/arrow";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="bg-orange-650 rounded-3xl shadow-lg sm:rounded-2xl px-16 py-20 md:p-12 sm:px-6 my-10  mx-auto flex 2md:flex-col justify-between gap-8 sm:gap-16 w-[90%]  max-w-[1300px]">
      <div className="space-y-4 w-1/2 2md:w-full sm:self-end">
        <p className="text-black text-xl">Newsletter</p>
        <h2 className="text-6xl lg:text-5xl sm:text-[40px] font-bold text-black leading-tight font-sora">
          Stay up to
          <br />
          cloud!
        </h2>
      </div>
      <div className="w-1/2 2md:w-full">
        <p className="text-black text-2xl md:text-[20px] lg:text-xl w-[90%] mb-[2em] md:mb-[1em]">
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
              className="w-full bg-white rounded-full px-6 py-5 lg:px-4 lg:py-4 pr-12 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1.5 lg:right-1 lg:top-0.5 sm:top-1.5 bg-orange-650 text-white rounded-full px-6 py-2 sm:px-2 flex items-center justify-center hover:bg-orange-700 transition-colors duration-300">
              <ArrowIcon className="fill-white h-8 w-8 sm:h-6 sm:w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
