import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaEarthAsia } from "react-icons/fa6";
import { PiListLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <header>

                {/* Top header */}
                <div className='flex justify-between items-start px-8 lg:px-30 py-3 lg:py-5 bg-[#233845] text-white'>
                    <div className='flex flex-wrap font-light text-zinc-300 gap-x-4 gap-y-1 max-w-[65%] lg:max-w-none lg:items-center'>
                        <div className='flex items-center gap-4'>
                            <p><span className='text-white font-semibold'>Call Us:</span> +14 20 7836 2736</p>
                            <div className='h-4 border-r border-zinc-500'></div>
                            <p><span className='text-white font-semibold'>Mail Us:</span> hello@torado.com</p>
                            <div className='h-4 border-r border-zinc-500 hidden lg:block'></div>
                        </div>
                        <p><span className='text-white font-semibold'>Location:</span> 39th Street, New York, NY 10018</p>
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
                <div className='flex py-3 px-8 lg:px-35 lg:py-6 bg-[#152C39] items-center justify-between'>
                    <div>
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/logo.svg" alt="MainLogo" />
                    </div>
                    <div className='flex items-center gap-20'>
                        <div>
                            <nav>
                                <ul className='flex gap-10 font-semibold text-lg text-zinc-300'>
                                    <li className='relative hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Home +</li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Service +</li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Projects +</li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Pages +</li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Blog +</li>
                                    <li className='hover:text-[#FB5E01] transition-all duration-300 cursor-pointer'>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                        <div className='flex items-center gap-5'>
                            <PiListLight className='text-white text-2xl font-bold' />
                            <div className='h-4 border-r border-zinc-500'></div>
                            <CiSearch className='text-white text-2xl font-bold' />
                            <button className='text-white text-lg font-semibold px-6 py-3 bg-[#FB5E01] hover:bg-black transition-all duration-300 cursor-pointer'>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;