import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-[#152C39] flex flex-col md:flex-row gap-10 px-6 py-10 md:px-20 lg:px-40'>

                {/* Column 1 */}
                <div className='w-full md:w-1/4'>
                    <div className='mb-5'>
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/logo.svg" alt="FooterLogo" />
                    </div>

                    <p className='text-gray-400 mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt
                    </p>

                    <div className='flex text-white text-xl gap-5'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>

                {/* Column 2 */}
                <div className='w-full md:w-1/4'>
                    <p className='text-xl text-white font-bold mb-5'>Get To Know Us</p>

                    <ul className='text-gray-400 space-y-2'>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>About Us</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>Recent Projects</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>Contact Us</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>Blog & articles</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>Link building services</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className='w-full md:w-1/4'>
                    <p className='text-xl text-white font-bold mb-5'>Get In Touch</p>

                    <ul className='text-gray-400 space-y-2'>
                        <li>8502 Preston Rd. Inglewood, Maine 98380</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>hello@torado.com</li>
                        <li className='hover:text-[#FB5E01] cursor-pointer'>+1 (414) 968 - 320</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className='w-full md:w-1/4'>
                    <p className='text-xl text-white font-bold mb-5'>Keep Up To Date</p>

                    {/* Input + Button */}
                    <div className="flex items-center border-b border-gray-400 py-2">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="flex-1 bg-transparent text-white outline-none"
                        />
                        <button className="text-[#FB5E01]">
                            <FaTelegramPlane size={20} />
                        </button>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 mt-5">
                        <input
                            type="checkbox"
                            id="termsRadio"
                            className="mt-1 accent-blue-500"
                        />
                        <label htmlFor="termsRadio" className="text-gray-400 text-sm">
                            I agree to all your terms and policies
                        </label>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='bg-[#233845] flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5 md:px-20 lg:px-40'>

                <p className='text-gray-300 text-sm text-center md:text-left'>
                    © <span className='text-[#FB5E01]'>Torado</span> is Proudly Owned by <span className='text-[#FB5E01]'>EnvyTheme</span>
                </p>

                <div className='flex items-center text-sm'>
                    <p className='text-gray-300 hover:text-[#FB5E01] cursor-pointer px-3'>
                        Terms & Conditions
                    </p>

                    <div className="w-px h-4 bg-gray-400"></div>

                    <p className='text-gray-300 hover:text-[#FB5E01] cursor-pointer px-3'>
                        Privacy Policy
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;