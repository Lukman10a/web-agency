import React from "react";
import amplitude from "../../public/svg/amplitude.svg";
import Image from "next/image";
import sysops from "../../public/assets/sysops.png";
import security from "../../public/assets/security.png";
import archi from "../../public/assets/archi.png";
import cloud from "../../public/assets/cloud.png";
import devops from "../../public/assets/devops.png";
import data from "../../public/assets/data.png";

const SecurityCertifications: React.FC = () => {
  return (
    <section
      className="bg-[#FF9557] p-16 px-24 space-y-4 text-center sm:p-12"
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
          including ISO, AWS, CISSP, and more
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

<div className="bg-orange-650 py-16 border border-gray-800">
  {/* Title */}
  <div className="text-center mb-8">
    <h2 className="text-4xl md:text-3xl font-sora font-bold text-gray-900">
      We are certified professionals
    </h2>
    <p className="font-sans text-lg md:text-sm mt-4 w-[90%] mx-auto">
      Your security is our priority. We hold top industry certifications
      including
      <br /> ISO, AWS, CISSP, and more.
    </p>
  </div>

  {/* Certifications Badges */}
  <div className="flex 2md:flex-col justify-center items-center gap-12 md:gap-8 lg:space-y-0 px-5 max-w-[1200px] mx-auto">
    {/* First Row of Badges */}
    <div className="flex gap-5">
      <Image
        width={500}
        height={500}
        src={sysops}
        alt="AWS SysOps Administrator Badge"
        className="w-32 md:w-24 md:h-24"
      />
      <Image
        width={500}
        height={500}
        src={security}
        alt="AWS Security Badge"
        className="w-32 md:w-24 md:h-24"
      />
      <Image
        width={500}
        height={500}
        src={archi}
        alt="AWS Solutions Architect Badge"
        className="w-32 md:w-24 md:h-24"
      />
    </div>

    {/* Second Row of Badges */}
    <div className="flex gap-5">
      <Image
        width={500}
        height={500}
        src={cloud}
        alt="AWS Cloud Practitioner Badge"
        className="w-32 md:w-24 md:h-24"
      />
      <Image
        width={500}
        height={500}
        src={devops}
        alt="AWS DevOps Engineer Badge"
        className="w-32 h-32 md:w-24 md:h-24"
      />
      <Image
        width={500}
        height={500}
        src={data}
        alt="AWS Data Analytics Badge"
        className="w-32 md:w-24 md:h-24"
      />
    </div>
  </div>
</div>;

export default SecurityCertifications;
