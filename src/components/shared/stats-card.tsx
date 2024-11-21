import React from 'react';

interface StatsCardProps {
  stats: string; // Statistic value (e.g., "100+")
  description: string; // Short description
  details: string; // Additional details or explanation
}

const StatsCard: React.FC<StatsCardProps> = ({ stats, description, details }) => {
  return (
    <div className='mb-16 w-[90%] max-w-[1300px] mx-auto rounded-2xl border border-black p-8 sm:px-2'>
      <div className='w-[90%] flex gap-48 lg:gap-24 md:gap-8 mx-auto md:flex-col text-xl 2md:text-xl md:text-lg'>
        <div className='w-[40%] md:w-full md:border-b md:pb-4'>
          <h2 className="mb-[.5em] w-full font-sora text-4xl font-medium 2md:w-full md:mx-auto md:mb-[.3em] sm:w-full">
            {stats}
          </h2>
          <p className="text-[#808080] md:mx-auto">
            {description}
          </p>
        </div>
        <div className='w-[60%] md:w-full'>
          <p className="text-[#808080] md:mx-auto">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
