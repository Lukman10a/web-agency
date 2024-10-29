import React from 'react';
import Image from 'next/image';

const CallToAction: React.FC = () => {
  return (
    <div
    className="relative w-full max-w-6xl bg-orange-650 text-black rounded-2xl p-8 flex flex-col items-center justify-between space-y-6 lg:space-y-0"
    style={{
      backgroundImage: "url('/assets/Star.png')",
      backgroundPosition: 'right top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '150px',
      backgroundPositionY: "-50px",
    }}
  >
    <div className="text-center ">
      <div className="text-4xl sm:text-xl font-bold">We’re here for you, <h2>call us!</h2></div>
    </div>
    <div className="flex sm:flex-col items-center sm:space-x-2 space-x-4 sm:space-y-4">
      <Image
        src="https://via.placeholder.com/50"
        alt="Ivan Sakin"
        className="w-12 h-12 rounded-full"
        width={48}
        height={48}
      />
      <div className="flex justify-between sm:flex-col sm:text-sm sm:w-full sm:space-y-3">
        <p className="font-semibold sm:text-sm">Ivan Sakin - Strategic Sales Maestro</p>
        <p className='px-3 sm:hidden'>|</p>
        <p className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 sm:size-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
          <span>+421 221 020 694</span>
        </p>
      </div>
    </div>
  </div>
  );
};

export default CallToAction;
