import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { FaEarthAsia } from "react-icons/fa6";
import { PiListLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <header>

                {/* Top header */}
                <div className='flex justify-between items-start px-8 lg:px-30 py-3 lg:py-5 bg-[#233845] text-white'>
                    <div className='flex flex-wrap font-normal text-zinc-300 gap-x-4 gap-y-1 max-w-[65%] lg:max-w-none lg:items-center'>
                        <div className='flex items-center gap-7'>
                            <p><span className='text-white font-semibold'>Call Us:</span> +14 20 7836 2736</p>
                            <div className='h-4 border-r border-zinc-500'></div>
                            <p><span className='text-white font-semibold'>Mail Us:</span> hello@torado.com</p>
                            <div className='h-4 border-r border-zinc-500 hidden lg:block'></div>
                        </div>
                        <p><span className='text-white font-semibold'>Location:</span> 39th Street, Fourth Floor New York, NY 10018</p>
                    </div>
                    <div className='flex gap-4 font-light text-zinc-300 items-center justify-center shrink-0'>
                        <div className='flex gap-2 items-center'>
                            <CiUser />
                            <p>Login</p>
                            <p>/</p>
                            <p>Register</p>
                        </div>
                        <div className='h-4 border-r border-zinc-500'></div>
                        <div className='flex gap-2 items-center'>
                            <FaEarthAsia />
                            <p>English</p>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className='flex py-3 px-8 lg:px-30 lg:py-5 bg-[#152C39] items-center justify-between'>
                    <div>
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/logo.svg" alt="MainLogo" />
                    </div>
                    <div className='flex items-center gap-6 lg:gap-20'>
                        <div>
                            <nav>
                                <ul className='flex gap-4 lg:gap-10 font-semibold text-[15px] lg:text-xl text-zinc-300'>
                                    <li className='relative group/home hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>
                                        Home +
                                        {/* Dropdown Menu Home */}
                                        <ul className='absolute top-full left-0 mt-5 w-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible translate-y-2 group-hover/home:translate-y-0 transition-all duration-300 z-50'>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Home One</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Home Two</li>
                                        </ul>
                                    </li>
                                    <li className='relative group/home hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>
                                        Service +
                                        {/* Dropdown Menu Service */}
                                        <ul className='absolute top-full left-0 mt-5 w-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible translate-y-2 group-hover/home:translate-y-0 transition-all duration-300 z-50'>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Services</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Service Details</li>
                                        </ul>
                                    </li>
                                    <li className='relative group/home hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>
                                        Projects +
                                        {/* Dropdown Menu Projects */}
                                        <ul className='absolute top-full left-0 mt-5 w-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible translate-y-2 group-hover/home:translate-y-0 transition-all duration-300 z-50'>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Projects</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Project Details</li>
                                        </ul>
                                    </li>
                                    <li className='relative group/home hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>
                                        Pages +
                                        {/* Dropdown Menu Pages */}
                                        <ul className='absolute top-full left-0 mt-5 w-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible translate-y-2 group-hover/home:translate-y-0 transition-all duration-300 z-50'>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>About Us</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Team</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Pricing Plan</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>FAQs</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Testimonials</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>My Account</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Privacy & Policy</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Terms & Conditions</li>
                                        </ul>
                                    </li>
                                    <li className='relative group/home hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>
                                        Blog +
                                        {/* Dropdown Menu Blog */}
                                        <ul className='absolute top-full left-0 mt-5 w-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible translate-y-2 group-hover/home:translate-y-0 transition-all duration-300 z-50'>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Our Blog</li>
                                            <li className='px-5 py-2.5 text-gray-800 text-[15px] font-medium hover:text-[#FB5E01] transition-colors duration-300'>Blog Details</li>
                                        </ul>
                                    </li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                        <div className='flex items-center gap-5'>
                            <PiListLight className='text-white text-2xl font-bold cursor-pointer' onClick={() => setIsOffcanvasOpen(true)} />
                            <div className='h-4 border-r border-zinc-500'></div>
                            <div className='relative'>
                                <CiSearch className='text-white text-2xl font-bold cursor-pointer' onClick={() => setIsSearchOpen(!isSearchOpen)} />
                                {/* Search Dropdown */}
                                <div className={`absolute top-full right-0 mt-12 w-96 bg-[#152C39] shadow-2xl p-8 rounded-sm transition-all duration-300 z-50 ${isSearchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                                    <div className='flex items-center border-2 border-[#FB5E01] bg-white px-4 py-2.5'>
                                        <input
                                            type='text'
                                            placeholder='Search...'
                                            className='w-full outline-none text-gray-700 text-[15px] placeholder-gray-400 bg-transparent'
                                        />
                                        <CiSearch className='text-gray-500 text-2xl cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                            <button className='text-white text-sm lg:text-lg font-semibold px-4 py-2 lg:px-6 lg:py-3 bg-[#FB5E01] hover:bg-black transition-all duration-600 cursor-pointer'>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </header>



            {/* Offcanvas Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-998 transition-opacity duration-300 ${isOffcanvasOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOffcanvasOpen(false)}
            />

            {/* Offcanvas Panel */}
            <div className={`fixed top-0 right-0 h-full w-130 bg-white z-999 shadow-2xl transition-transform duration-300 ${isOffcanvasOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex items-center justify-between p-10 border-b border-gray-200'>
                    <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/black-logo.svg" alt="OffcanvasLogo" />
                    <IoCloseOutline
                        className='text-3xl text-gray-600 cursor-pointer hover:text-[#FB5E01] transition-colors duration-300'
                        onClick={() => setIsOffcanvasOpen(false)}
                    />
                </div>
                <div className='p-5'>
                    {/* Offcanvas content goes here */}
                    <div className='items-center justify-between p-8 mt-15'>
                        <div className='flex gap-3 text-4xl '>
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                            <FaInstagramSquare />
                            <FaLinkedin />
                        </div>
                        <div className='mt-13'>
                            <h2 className='text-2xl font-bold'>Our Contact</h2>
                            <p className='text-gray-600 mt-5'>27 Division St, New York, NY <br />
                                10002, USA</p>
                            <p className='text-gray-600 mt-5'>+1800-456-7890</p>
                            <p className='text-gray-600'>[88] 657 524 332</p>
                            <p className='text-gray-600 mt-5'>hello@torado.com</p>
                        </div>
                        <div className='mt-13'>
                            <h2 className='text-2xl font-bold'>Keep Up To Date</h2>
                            <div className='flex items-center border-b border-black mt-5 pb-2'>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    className='w-full text-gray-600 outline-none bg-transparent text-[15px] placeholder-gray-500'
                                />
                                <button className='text-[#FB5E01] text-2xl cursor-pointer mr-2 hover:text-[#d14e00] transition-colors duration-300'>
                                    <FaTelegramPlane />
                                </button>

                            </div>
                            <div className='flex items-center gap-2 mt-4'>
                                <input type='radio' id='terms' className='w-4 h-4 accent-[#FB5E01] cursor-pointer' />
                                <label htmlFor='terms' className='text-gray-600 text-[15px] cursor-pointer'>I agree to all your terms and policies</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;