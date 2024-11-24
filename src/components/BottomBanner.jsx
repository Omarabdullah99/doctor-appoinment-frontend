import React from 'react'
import { assets } from '../assets/assets_frontend/assets'


const BottomBanner = () => {
  return (
    <div className='flex bg-primary rounded-xl px-6 sm:px-10 md-14 lg-12 my-20 md:my-10'>
        {/* left content */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2x md:text-3xl lg:text-5xl text-white font-bold'>
                <p>Book Appointment </p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button className='bg-white text-sm  sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
        </div>
        {/* right content */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default BottomBanner