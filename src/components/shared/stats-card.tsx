import React from 'react'

const StatsCard = () => {
  return (
      <div className='w-[90%] max-w-[1300px] mx-auto rounded-2xl border border-black p-8 sm:px-2'>
          
      <div className='w-[90%] flex gap-48 lg:gap-24 md:gap-8 mx-auto md:flex-col text-xl 2md:text-xl md:text-lg'>
         <div className='w-[40%] md:w-full md:border-b md:pb-4'>
            <h2 className="mb-[.5em] w-full font-sora text-4xl font-medium 2md:w-full md:mx-auto md:mb-[.3em] sm:w-full">
                100+
            </h2>
            <p className="text-[#808080] md:mx-auto">
                Healthcare & Life Sciences firms we've helped build on AWS
            </p>        
         </div>
         <div className='w-[60%] md:w-full'>
             <p className="text-[#808080] md:mx-auto">
                From neighborhood clinics to international nonprofits to some of the largest life sciences firms in the world—we've helped companies of all sizes and stages serve their patients.
            </p>     
         </div>
      </div>
    </div>
  )
}

export default StatsCard
