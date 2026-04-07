import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GoArrowDownRight } from "react-icons/go";

const API = "http://localhost:5000/api";

const Pricing = () => {

    const [projects, setProjects] = useState([]);
    // For Choose Us Section
    const [active, setActive] = useState(0);

    // For Choose US Section
    useEffect(() => {
        fetch(`${API}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    const pricingPlans = [
        { name: "Standard Plan", price: 60, img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/package1.svg" },
        { name: "Professional Plan", price: 70, img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/package2.svg" },
        { name: "Platinum Plan", price: 80, img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/package3.svg" },
    ];

    const pricingFeatures = [
        { label: "Flexible Terms", available: true },
        { label: "Biweekly status updates", available: true },
        { label: "100% natural placement", available: true },
        { label: "Link Quality Guarantee", available: false },
        { label: "5 editorial mentions per month", available: false },
    ];

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Our Pricing Plan</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>Pricing</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* WHY CHOOSE US */}
            <section>
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <div className="">
                        <div>
                            <p className="text-[#F84E25] text-lg md:text-xl font-semibold">
                                WHY CHOOSE US
                            </p>
                        </div>
                        <div className="flex md:flex-row flex-col justify-between">
                            <p className="mt-5 font-bold text-2xl md:text-5xl">
                                Helping Operto 4X Its Revenue In <br /> 12 Months
                            </p>
                            <div>
                                <button className="text-white mt-5 text-sm md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 bg-[#FB5E01] hover:bg-black transition-all duration-600 cursor-pointer">
                                    View ALL Services
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col mt-10">
                        {/* Left Side */}
                        <div className="md:w-1/2 space-y-10">
                            {projects.map((project, index) => (
                                <>
                                    <div key={project._id || index} className="flex">
                                        <div
                                            onMouseEnter={() => setActive(index)}
                                            className="cursor-pointer border-b pb-6 group"
                                        >
                                            <h2
                                                className={`text-2xl font-bold ${active === index ? "text-black" : "text-gray-500"}`}
                                            >
                                                {project.title}
                                            </h2>
                                            <p className="text-gray-500 mt-2">{project.desc}</p>
                                        </div>
                                        <div>
                                            <button className="hidden md:flex w-14 h-14 items-center justify-center shadow-xl rounded-full bg-white text-2xl text-black hover:text-white hover:bg-[#FB5E01] transition">
                                                <GoArrowDownRight />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="md:w-1/2 flex justify-center items-center relative">
                            <img
                                src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/choose-shape1.png"
                                className="absolute hidden md:flex w-100"
                            />
                            {projects.length > 0 && (
                                <img
                                    src={projects[active]?.image}
                                    className="relative w-90 md:w-125 md:left-18 top-5 rounded-xl rotate-4 transition-all duration-500"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className='bg-[#ECEFE4]'>
                <div className="px-8 py-5 md:px-50 md:py-20">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            PRICING PLAN
                        </p>
                        <p className="text-black font-extrabold md:text-5xl text-2xl">
                            Best Pricing Package For You
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="flex gap-6 mt-20">
                        {pricingPlans.map((plan, i) => (
                            <div key={i} className="flex p-10 flex-col flex-1 bg-white shadow-md">

                                <div className="flex items-center gap-4 mb-3">
                                    <img src={plan.img} alt={plan.name} className="w-14 h-14 rounded-xl" />
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                                        <div className="flex items-baseline gap-1 mt-2 mb-1">
                                            <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                                            <span className="text-sm text-gray-400 ml-1">/ Per Month</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mt-2 mb-5">Lorem ipsum dolor sit amet so</p>

                                <hr className="border-gray-100 mb-5" />

                                <ul className="flex flex-col gap-3 mb-8 flex-1">
                                    {pricingFeatures.map((f) => (
                                        <li key={f.label} className="flex items-center justify-between text-sm text-gray-700">
                                            <span>{f.label}</span>
                                            {f.available
                                                ? <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                                : <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                                            }
                                        </li>
                                    ))}
                                </ul>

                                <button className="py-3 rounded-md font-bold text-sm bg-gray-100 text-gray-800">
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing