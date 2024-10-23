import React from 'react';

const certifications = new Array(8).fill('Amplitude');

const SecurityCertifications: React.FC = () => {
  return (
    <div className="bg-orange-650 py-16 px-8 text-center w-full">
      <h2 className="text-4xl font-bold mb-4 text-neutral-800">Security Certifications</h2>
      <p className="text-sm mb-8 text-neutral-800">
        Your security is our priority. We hold top industry certifications including <br /> ISO, AWS, CISSP, and more.
      </p>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-4 gap-4 ">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center border ring-2 ring-darkblue-900 text-darkblue-900 rounded-lg font-bold bg-white shadow-lg py-6 px-8"
          >
            <img src="/assets/amplitude.png" alt={cert} className="h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityCertifications;
