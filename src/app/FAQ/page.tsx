import Image from 'next/image'
import React from 'react'
import { FiDownload } from "react-icons/fi"
import dot from "../../../public/images/dot.png"

const FAQ = () => {
    return (
        <div className='bg-[#99C8FF] min-h-screen'>
            <div className='lg:mx-[12rem] mx-[2rem] my-[4rem] pb-[2rem] bg-black text-white rounded-lg '>
                <div className='text-center'>
                    <h1 className='text-[30px] pt-10'>Frequently asked questions</h1>
                </div>
                <div className='lg:px-[10rem]  px-[1rem] pb-[0.5rem] md:pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center pt-12 flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How are products rated?
                            </p>
                            <div className='lg:ml-[23.5rem] ml-[5rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center  flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How does the scanner work?
                            </p>
                            <div className='lg:ml-[22rem] ml-[3.5rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How can i update my health profile?
                            </p>
                            <div className='lg:ml-[18.8rem] ml-[0.5rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How can i reach out to the HLV team?
                            </p>
                            <div className='md:ml-[18rem] ml-[0.5rem] mr-[0.7rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How is my data stored?
                            </p>
                            <div className='md:ml-[24.3rem] ml-[6rem] '> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How are products rated?
                            </p>
                            <div className='md:ml-[23.7rem] ml-[5.5rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='md:mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                What happens if i encounter technical issues or need assistance with the app?
                            </p>
                            <div className='md:ml-[1.5rem] ml-[0.5rem] mr-[0.5rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                How does HLV handle user feedback and incorporate it into app's feature?
                            </p>
                            <div className='md:ml-[2.7rem] mr-[0.5rem] '> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:px-[10rem] px-[1rem] mx-auto pb-[1rem]'>
                    <div className='border-b-[1px] border-b-gray-300 border-opacity-50'>
                        <div className='text-center flex items-center '>
                            <Image src={dot} alt='dot' className='mr-2' /> {/* Added margin to the right of the image */}
                            <p className='text-[15px] font-thin opacity-80'>
                                What should I do if I suspect any suspicious activity or unauthorized use of my account?
                            </p>
                            <div className=' md:mr-[1.2rem] mr-[0.7rem]'> {/* Added margin to the left of the icon */}
                                <FiDownload className='opacity-80' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FAQ