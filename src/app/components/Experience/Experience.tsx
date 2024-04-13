import Image from 'next/image'
import React from 'react'
import experience1 from "../../../../public/images/experience1.png"
import experience2 from "../../../../public/images/experience2.png"
import experience3 from "../../../../public/images/experience3new.png"
import experience4 from "../../../../public/images/experience4.png"
import experience5 from "../../../../public/images/experience5.png"
import reviews from "../../../../public/images/reviews.png"

const Experience = () => {
    return (
        <div className='mt-[5rem] mb-[3rem]'>
            <div className='text-center '>
                <h1 className='font-extrabold text-[30px] md:text-[40px] mx-[4rem] md:mx-0'>Don't Just Take Our Words For It.</h1>
                <p className='font-bold text-[20px] mt-4'>See what others says about us</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 mt-[3rem] md:mx-[5rem]  mx-4 md:gap-5 gap-4 items-center justify-center text-center'>
                <div className='hidden md:block'>
                    <Image src={experience1} alt='experience1' className='md:block hidden' />
                </div>
                <div>
                    <Image src={experience2} alt='experience1' className='rounded-lg' />
                </div>
                <div className='inline-block relative '>
                    <Image src={experience3} alt='experience1' className='rounded-lg lg:h-[580px] h-[330px]' />
                    <div className="absolute -bottom-8   h-[150px] text-[10px] md:text-[14px] border border-white bg-black text-white rounded-2xl p-3 md:mx-2">These features are yet the best i have ever seen. I didn’t have to go see the physician before i could get a medicine that works without complications. </div>
                </div>
                <div>
                    <Image src={experience4} alt='experience4' className='rounded-lg   mr-3 md:h-auto h-[330px]' />
                </div>
                <div className='hidden md:block'>
                    <Image src={experience5} alt='experience4' className='rounded-lg md:block hidden ' />
                </div>
            </div>

        </div>
    )
}

export default Experience