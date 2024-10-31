import React from "react";
import Image from "next/image";
import useContactForm from "@/hooks/use-contact";

const ContactSection: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useContactForm(); // Destructure form logic

  return (
    <section className="space-y-14 bg-white py-16">
      <div className="container mx-auto flex justify-center space-y-8 px-24 md:px-10">
        {/* Left Side: Text */}
        <div className="container mx-auto flex justify-between gap-9 space-y-8 md:flex-col">
          <div>
            <h2 className="text-left text-3xl font-bold text-gray-900 sm:text-4xl">
              Let’s talk!
            </h2>
            <p className="text-left text-lg text-gray-600">
              Quick intro to what we’re all about, answering questions{" "}
              <br className="2md:hidden" />
              and drafting a roadmap of your cloud journey. All within 30
              minutes.
            </p>
          </div>
          <button className="rounded-full bg-orange-650 px-6 py-3 font-semibold text-white ring-1 ring-darkblue-850 transition duration-300 hover:bg-orange-600 sm:w-full">
            Schedule Your Call →
          </button>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex justify-between gap-5 px-24 md:flex-wrap sm:px-5">
        {/* Image */}
        <div className="w-full">
          <Image
            src="/assets/contact.png"
            alt="Cloud Service"
            className="aspect-square rounded-lg shadow-lg md:w-full"
            width={400}
            height={400}
          />
        </div>

        <div className="container mx-auto flex flex-col items-start justify-between space-y-8 px-4 md:flex-row md:space-y-0">
          <div className="">
            <h3 className="text-4xl font-extrabold tracking-wide text-gray-900">
              Cloud <span className="text-orange-650 underline">experts</span>
              <br className="md:hidden" /> on duty
            </h3>
            <p className="mt-4 text-gray-600">
              Want to skip the intro call and get straight to it? Tell us what’s
              up and our tech experts will get back to you ASAP.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full border-b-2 border-b-gray-300 p-3 shadow-sm outline-none"
                  placeholder="Message"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full border-b-2 border-b-gray-300 p-3 shadow-sm outline-none"
                  placeholder="Email address"
                />
              </div>

              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree with storage and handling of my data by this website
                </label>
              </div>

              <button
                type="submit"
                className="mt-10 flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-full"
              >
                Submit Form →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
