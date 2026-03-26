import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>My Account</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'><Link className='text-black text-lg' to="/">Home</Link>  /  <span className='text-lg text-[#FB5E51]'>My Account</span></p>
                    </div>
                </div>
            </div>
            <div className='px-8 py-5 md:px-60 md:py-40'>
                <div className='flex md:flex-row flex-col justify-center items-start gap-10'>
                    {/* Login Div */}
                    <div className="flex w-150 justify-center shadow-2xl items-center">
                        <div className="bg-white w-150 p-8 rounded-md">

                            {/* Title */}
                            <p className="text-2xl font-bold mb-6">Log In To Your Account</p>

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Password */}
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Remember + Forgot */}
                            <div className="flex justify-between items-center text-md mb-5">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="accent-blue-500" />
                                    Keep me logged in
                                </label>
                                <span className="cursor-pointer">
                                    Forgot your password?
                                </span>
                            </div>

                            {/* Login Button */}
                            <button className="w-full bg-orange-500 text-white py-3 font-semibold rounded hover:bg-black transition-all duration-500 cursor-pointer">
                                Log In
                            </button>

                            {/* Divider */}
                            <div className="flex items-center my-6">
                                <hr className="flex-1 border-gray-300" />
                                <span className="px-3 text-gray-500 text-sm">Or</span>
                                <hr className="flex-1 border-gray-300" />
                            </div>

                            {/* Facebook Button */}
                            <button className="w-full bg-blue-700 text-white py-3 rounded mb-3 hover:bg-black transition-all duration-500 cursor-pointer">
                                Login With Facebook
                            </button>

                            {/* Google Button */}
                            <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-black transition-all duration-500 cursor-pointer">
                                Login With Google
                            </button>

                            {/* Signup */}
                            <p className="text-center text-sm mt-5">
                                Don’t Have An Account?{" "}
                                <span className="text-orange-500 cursor-pointer">
                                    Create
                                </span>
                            </p>

                        </div>
                    </div>

                    {/* Register Div */}
                    <div className="flex justify-center w-150 shadow-2xl items-center">
                        <div className="bg-white p-8 w-150 rounded-md">

                            {/* Title */}
                            <p className="text-2xl font-bold mb-6">Create An Account</p>

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Password */}
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Repeat Password */}
                            <input
                                type="password"
                                placeholder="Repeat Password"
                                className="w-full mb-4 px-4 py-3 bg-[#ECEFE4] rounded outline-none"
                            />

                            {/* Login Button */}
                            <button className="w-full bg-orange-500 text-white py-3 font-semibold rounded hover:bg-black transition-all duration-500 cursor-pointer">
                                Register Now
                            </button>

                            <p className='mt-5'>
                                Don't Have An Account? <span className='cursor-pointer'>Login</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account