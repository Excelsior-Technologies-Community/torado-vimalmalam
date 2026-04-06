import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const API = "http://localhost:5000/api";

const Team = () => {

    const [team, setTeam] = useState([]);

    // For Team
    useEffect(() => {
        fetch(`${API}/team`)
            .then((res) => res.json())
            .then((data) => setTeam(data))
            .catch((err) => console.error("Error fetching manager:", err));
    }, []);

    const services = [
        { id: "01", letter: "L", title: "Link Building" },
        { id: "02", letter: "C", title: "Content Writers" },
        { id: "03", letter: "S", title: "SEO Analysts" },
        { id: "04", letter: "V", title: "Video Production" },
    ];

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Our Team Members</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>Our Team</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Members Section */}
            <section className="bg-white">
                <div className="px-8 py-5 md:px-50 md:py-20">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            TEAM MEMBERS
                        </p>
                        <p className="text-black font-bold md:text-5xl text-2xl">
                            Content Marketing Leaders Work With Us
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {team.map((member) => (
                            <div key={member._id} className="h-full w-80">
                                <div className="relative overflow-hidden group">
                                    <img
                                        src={member.image}
                                        alt={member.role}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition duration-500">
                                        <div className="flex gap-5">
                                            <div className="bg-white p-3 rounded-full shadow hover:bg-orange-500 hover:transition-all hover:duration-300 hover:text-white cursor-pointer">
                                                <FaFacebookF size={14} />
                                            </div>

                                            <div className="bg-white p-3 rounded-full shadow hover:bg-orange-500 hover:transition-all hover:duration-300 hover:text-white cursor-pointer">
                                                <FaTwitter size={14} />
                                            </div>

                                            <div className="bg-white p-3 rounded-full shadow hover:bg-orange-500 hover:transition-all hover:duration-300 hover:text-white cursor-pointer">
                                                <FaInstagram size={14} />
                                            </div>

                                            <div className="bg-white p-3 rounded-full shadow hover:bg-orange-500 hover:transition-all hover:duration-300 hover:text-white cursor-pointer">
                                                <FaLinkedinIn size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-gray-900 text-center cursor-pointer hover:text-[#E15604] hover:transition-all hover:duration-300">
                                    {member.name}
                                </h3>

                                <p className="text-gray-600 textlgm text-center">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-30 px-6 md:px-80 flex flex-col md:flex-row bg-[#ECEFE4] items-center justify-between">

                {/* Left Text */}
                <h2 className="text-3xl md:text-5xl font-bold text-[#0b1c2c] mb-6 md:mb-0">
                    Ready To Start Creating?
                </h2>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-white text-[#0b1c2c] px-6 py-3 font-semibold shadow-sm hover:shadow-md hover:bg-black hover:text-white cursor-pointer transition-all duration-300">
                        Learn More
                    </button>

                    <button className="bg-[#ff5a00] text-white px-6 py-3 font-semibold hover:bg-black hover:text-white cursor-pointer transition-all duration-300">
                        Get In Touch
                    </button>
                </div>
            </div>

            <section className="py-20 px-6 bg-gray-50 flex items-center justify-center">
                <div className="px-8 py-5 md:px-50 md:py-20 w-full mx-auto">

                    <div className="text-center mb-12">
                        <p className="text-lg font-bold tracking-widest uppercase text-orange-500 mb-2">Working Process</p>
                        <h2 className="md:text-5xl text-2xl font-extrabold text-gray-900">Tell stories that create lifelong customers</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map(({ id, letter, title }) => (
                            <div key={id} className="relative py-15 px-10 border border-gray-200 shadow-xl rounded-xl bg-white transition-all duration-300">
                                <span className="absolute top-6 right-6 text-2xl text-gray-400 transition-colors">{id}</span>
                                <p
                                    className="text-7xl lg:text-9xl mb-5 font-bold text-transparent hover:text-[#FB5E01] transition-colors duration-300"
                                    style={{ WebkitTextStroke: "2px black" }}
                                >
                                    {letter}
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 transition-colors mb-2">{title}</h3>
                                <p className="text-lg text-gray-500 transition-colors">Aliquam ses justo et uctor is anet tempus enim esent egti hendrer ve nibh vitae</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Team