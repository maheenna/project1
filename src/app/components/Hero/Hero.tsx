'use client'
import React from 'react'
import Image from 'next/image';
import Stethoscope from "../../../../public/Stethoscope.png"
import bottle from "../../../../public/image 20.png"
import tablet from "../../../../public/images/tablet.png"
import capsule from "../../../../public/images/capsule.png"
import suitcase from "../../../../public/suitcase.png"
import heropic1 from "../../../../public/images/heropic1.png"
import heropic1top from "../../../../public/images/heropic1top,.png"
import heropic1bottom from "../../../../public/images/heropic1bottom.png"

const Hero = () => {



  return (
    <div className='bg-[#99C8FF]'>
      <div className='pt-[2rem] md:pt-[5rem] md:pb-[5rem] pb-[2rem] relative'> {/* Added relative positioning */}
        <div className='text-center flex items-center'> {/* Centered content vertically */}
          {/* Bottle Image */}

          {/* First Bottle Image */}
          <div className='absolute top-0 left-0'>
            <Image src={bottle} alt='bottle' className='h-[300px] w-[200px] lg:block hidden' />
          </div>
          {/* Second tablet Image */}
          <div className='absolute top-3/4 left-0 transform -translate-y-1/4 opacity-50 lg:block hidden'>
            <Image src={tablet} alt='tablet' className='h-[100px]' />
          </div>


          {/* Stethoscope Image */}
          <div className='relative text-center justify-center lg:block hidden'> {/* Added relative positioning */}
            <Image src={Stethoscope} alt='stethoscope' className='w-28 h-[7rem] opacity-40 transform rotate-0.66  ml-40' />
          </div>
          {/* Heading */}
          <div className='md:ml-14 ml-4'> {/* Added margin to position the heading */}
            <h1 className='font-bold text-[32px] md:text-[40px] mt-[3rem] text-start md:text-center'>
              Guide To Wellness With Digital
              <br className='md:block hidden' /> Personalised <span className='text-[#0075FF]'>Medication Matchmaker</span>
            </h1>
          </div>
          <Image src={capsule} alt="capsule" className='w-[60px] opacity-65 lg:block hidden' />
          <Image src={suitcase} alt='suitcase' className='pl-5 pt-10 opacity-50 ml-7 lg:block hidden' />
        </div>
        <div className='text-center mt-[2rem] md:mt-[3rem]'> {/* Centered content */}
          {/* Input */}
          <input type="email" placeholder='Enter your email' className='px-5 py-4 bg-white/80 w-[92%] md:w-[25%] outline-none rounded-2xl placeholder:text-black md:mr-6 mb-5' />
          {/* Subscribe button */}
          <button className='md:px-8 px-[8.2rem] py-4 bg-[#2B88D9] transition-all duration-200 text-white rounded-lg font-bold'>Join waitlist</button>
        </div>
        
      </div>
      <div className="relative inline-block mx-[0.8rem] md:mx-[20rem]">
  <Image src={heropic1} alt="heropic1" width={800} height={900} className="md:w-[1000px] w-[520px] h-auto"/>
  <Image src={heropic1top} alt="heropic1top" className="absolute top-5 right-0 w-[75px] md:w-[200px] -mr-10 rounded-2xl  md:block hidden"/>
  <Image src={heropic1bottom} alt='heropic1bottom' className='absolute left-0 bottom-3  md:bottom-10 -ml-10 rounded-2xl transition-all delay-6000ms md:block hidden'/>
</div>






    </div>
  )
}

export default Hero;
