import Image from 'next/image'
import React from 'react'
import press from '/public/assets/press.png'

const PressPriCard = () => {
  return (
    <div className='w-full max-w-[500px]'>
          <div className='mb-2'>
              <Image
                  src={press}
                  width={500}
                  height={500}
                  alt="press image"
                  className="w-full border rounded-2xl"
              />
      </div>
          <div>
              <p className='font-sora font-light text-sm'>Source: DD/MM/YY</p>
              <h4 className='font-sans font-semibold text-lg leading-tight'>Mission and CrowdStrike Launch Mission Cloud Secure to Deliver Advanced Cloud Detection and Response for AWS Customers</h4>
      </div>
    </div>
  )
}

export default PressPriCard
