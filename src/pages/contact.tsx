import Image from "next/image";
import Link from "next/link";

import useContactForm from "@/hooks/use-contact";

import ContactOffice from "@/components/shared/contact-office";

export default function Contact() {
  const { formData, handleChange, handleSubmit, errors, isSubmitting } =
    useContactForm();

  return (
    <>
      <section className="m-10 max-w-7xl space-y-14 rounded-xl bg-white bg-main-gradient p-10 sm:m-5 sm:p-4">
        <div className="container mx-auto flex flex-col justify-center space-y-8 px-24 md:px-10">
          <div className="container mx-auto flex flex-col justify-center space-y-8 sm:flex-col">
            <div>
              <h2 className="py-3 text-center text-5xl font-bold text-gray-900 sm:text-5xl">
                Let’s talk!
              </h2>
              <p className="text-center text-lg text-gray-600">
                Quick intro to what we’re all about, answering questions <br />
                and drafting a roadmap of your cloud journey. All within 30
                minutes
              </p>
            </div>
            <Link
              href={
                "https://outlook.office365.com/book/ScheduleaCallwithUs@teverse.com.au/"
              }
            >
              <button className="mx-auto flex w-1/4 justify-center rounded-full bg-orange-650 px-6 py-3 text-center font-semibold text-white ring-1 ring-darkblue-850 transition duration-300 hover:bg-orange-600 sm:w-full sm:px-2">
                Schedule Your Call →
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="mx-auto flex flex-col justify-center space-y-8">
          {/* Image */}
          <div className="flex w-full flex-col justify-center px-10">
            <Image
              src="/svg/hero-illustration-2.svg"
              alt="Cloud Service"
              className="mx-auto flex justify-center"
              width={1000}
              height={80}
            />
          </div>

          <div className="container mx-auto mt-12 flex items-start justify-between space-y-8 px-4 md:flex-row md:space-y-0 sm:px-0">
            <div className="flex items-center justify-between gap-12 px-14 sm:flex-col sm:px-10">
              <div className="w-1/2 sm:w-full">
                <h3 className="text-4xl font-extrabold tracking-wide text-gray-900">
                  Tech{" "}
                  <span className="text-orange-650 underline">experts</span>
                  <br /> on duty
                </h3>
                <p className="mt-4 text-gray-600">
                  Want to skip the intro call and get straight to it? Tell us
                  what’s up and our tech experts will get back to you ASAP.
                </p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full border-b-2 p-3 shadow-sm outline-none ${
                      errors.message ? "border-b-red-500" : "border-b-gray-300"
                    }`}
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full border-b-2 p-3 pr-10 shadow-sm outline-none ${
                      errors.email ? "border-b-red-500" : "border-b-gray-300"
                    }`}
                    placeholder="Email address"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    @
                  </span>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
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
                    className={`ml-2 block text-sm ${
                      errors.terms ? "text-red-500" : "text-gray-600"
                    }`}
                  >
                    Yes, I&apos;d like to receive marketing communications from
                    Teverse about its products and services.
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-10 flex items-center justify-center rounded-full border border-black bg-transparent px-6 py-3 text-sm font-medium text-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 sm:w-full"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Form →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ContactOffice />
    </>
  );
}
