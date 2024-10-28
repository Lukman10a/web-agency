import React, { useState } from "react";
import Image from "next/image";

// Form Logic: Handle form state and submission
const useContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return { formData, handleChange, handleSubmit };
};

const ContactSection: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useContactForm(); // Destructure form logic

  return (
    <section className="py-16 bg-white space-y-14">
      <div className="container mx-auto flex justify-center space-y-8 px-24 md:px-10">
        {/* Left Side: Text */}
        <div className=" container mx-auto flex justify-between space-y-8 sm:flex-col">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-left">
              Let’s talk!
            </h2>
            <p className="text-gray-600 text-lg text-left">
              Quick intro to what we’re all about, answering questions <br />
              and drafting a roadmap of your cloud journey. All within 30
              minutes.
            </p>
          </div>
          <button className="px-6 py-3 sm:w-full  bg-orange-650 ring-1 ring-darkblue-850 text-white rounded-full font-semibold hover:bg-orange-600 transition duration-300">
            Schedule Your Call →
          </button>
        </div>

        
      </div>

      {/* Right Side: Form */}
      <div className="flex sm:flex-col justify-between sm:px-10 px-24 space-y-8 ">
        {/* Image */}
        <div className="w-full flex">
          <Image
            src="/assets/contact.png"
            alt="Cloud Service"
            className="rounded-lg shadow-lg"
            width={400}
            height={400}
          />
        </div>
      
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
        <div className="">
          <h3 className="text-4xl font-extrabold tracking-wide text-gray-900">
            Cloud <span className="text-orange-650 underline">experts</span><br /> on duty
          </h3>
          <p className="text-gray-600 mt-4">
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
                  className="block w-full p-3 border-b-2 border-b-gray-300 outline-none shadow-sm"
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
                  className="block w-full p-3 border-b-2 border-b-gray-300 outline-none shadow-sm"
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
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree with storage and handling of my data by this website
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="sm:w-full  flex items-center mt-10 justify-center px-6 py-3 border border-black text-sm font-medium rounded-full shadow-sm text-neutral-800 bg-transparent  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Submit Form →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
