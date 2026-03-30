import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>About Us</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>About Us</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-8 py-5 md:px-60 md:py-40'>
                <div className='flex justify-evenly'>
                    {/* Left Side Images */}
                    <div className="relative flex gap-4 items-start">
                        {/* Stat Card - top left overlapping */}
                        <div className="absolute top-3 left-35 z-10 bg-white shadow-md px-6 py-4">
                            <p className="text-5xl font-extrabold text-gray-900">120+ <br /> <span className='text-sm font-medium'>Projects Completed</span></p>
                        </div>

                        {/* Left tall image */}
                        <div className="mt-40">
                            <img
                                className="h-80 object-cover"
                                src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/abouts/inner-about1.jpg"
                                alt=""
                            />
                        </div>
                        {/* Right image - taller, starts from top */}
                        <div>
                            <img
                                className="h-120 object-cover"
                                src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/abouts/inner-about2.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Right Side Text-info */}
                    <div className='p-5'>
                        <div>
                            <p className='text-sm text-[#FB5E01] font-semibold tracking-widest uppercase'>About Us</p>
                        </div>
                        <div className='max-w-xl mt-3'>
                            <p className='text-4xl text-[#000E1E] font-extrabold leading-tight'>We Take Pride In Keeping Our Services In House</p>
                        </div>
                        <div className='max-w-xl mt-4'>
                            <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consetur iscing elit do sed dolor eiusmod tempor inchidunt labore et dolore magna dolore magna</p>
                        </div>

                        <div className='flex flex-col mt-6 gap-6'>
                            {/* Item 1 */}
                            <div className='flex items-start gap-4'>
                                <div className='shrink-0 h-16 w-16 rounded-full bg-[#FB5E01] flex items-center justify-center'>
                                    <img
                                        className='h-8 w-8'
                                        src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/about1.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className='text-xl font-bold text-[#000E1E]'>Content For SEO</p>
                                    <p className='text-base text-gray-500 mt-1 max-w-md'>Rhoncus dolor quam etiam mattis tincidunt nec lobortis sociis facilisi aenean netus tempor duis labore magn set</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0 h-16 w-16 rounded-full bg-[#FB5E01] flex items-center justify-center'>
                                    <img
                                        className='h-8 w-8'
                                        src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/about2.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p className='text-xl font-bold text-[#000E1E]'>eBooks & White Papers</p>
                                    <p className='text-base text-gray-500 mt-1 max-w-md'>Rhoncus dolor quam etiam mattis tincidunt nec lobortis sociis facilisi aenean netus tempor duis labore magn set</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About