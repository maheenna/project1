import Image from 'next/image'
import React from 'react'
import joinwaitlist from "../../../../public/images/joinwaitlist.png"

const Newsletter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem] bg-[#2B88D9]'>
     <div className='md:mx-[6rem] bg-white rounded-xl mx-[2.5rem]'>
        <div className='md:p-[5rem] p-[1.5rem] grid md:grid-cols-2 grid-cols-1 justify-center items-center text-center md:gap-[5rem] gap-[2rem]'>
          <div className='md:p-[2.5rem]'>
            <h1 className='md:text-start  font-semibold  md:text-[35px] text-[25px]'>Join the Waitlist</h1>
            <p className='mt-[1.5rem] text-start font-medium'>Be the first to experience our app! Join the waitlist now and be among the first to access our exciting features when we launch</p>
            <div className='text-center mt-[2rem] md:mt-[3rem]'> {/* Centered content */}
          {/* Input */}
          <input type="email" placeholder='Enter your email' className='px-5 py-4 bg-white/80 w-[92%] md:w-[60%] outline-gray-500 rounded-2xl placeholder:text-black md:mr-6 mb-5 bg-[#ccd2d4]' />
          {/* Subscribe button */}
          <button className='md:px-4 px-[5rem] py-4 bg-[#2B88D9] transition-all duration-200 text-white rounded-lg font-bold'>Join waitlist</button>
        </div>
          </div>
          
            <div>
            <Image src={joinwaitlist} alt='joinwaitlist'/>
          </div>
          
        </div>
     </div>
    </div>
  )
}

export default Newsletter