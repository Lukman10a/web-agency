import React from "react";
import amplitude from "../../public/images/amplitude.svg";
import Image from "next/image";

const SecurityCertifications: React.FC = () => {
  return (
    <section
      className="bg-[#FF9557]  p-16 px-24 space-y-4 text-center sm:p-12"
      aria-labelledby="certifications-heading"
    >
      <header>
        <h2
          id="certifications-heading"
          className="md:text-5xl sm:text-2xl text-2xl font-extrabold py-4"
        >
          Security Certifications
        </h2>
        <p>
          Your security is our priority. We hold top industry certifications
          including ISO, AWS, CISSP, and more.
        </p>
      </header>

      <div className="grid grid-cols-4 gap-4 lg:grid-cols-2 sm:grid-cols-1">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="rounded-xl shadow-[0px_3px_0px_0px_#050505] bg-white p-8 flex justify-center"
          >
            <Image src={amplitude} alt="Certification Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityCertifications;
