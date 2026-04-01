import {React, useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const API = "http://localhost:5000/api";

const Services = () => {

    const swiperRef = useRef(null);

    const [services, setServices] = useState([]);

    const moreServices = [
        {
            title: "Sales Enablement Content",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service1.svg"
        },
        {
            title: "Newsletters Email Copy",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service2.svg"
        },
        {
            title: "Video Production Animation",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service3.svg"
        },
        {
            title: "Custom Digital Auditt",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service4.svg"
        },
        {
            title: "Distribution Strategy",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service5.svg"
        },
        {
            title: "Marketing Data Science",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service6.svg"
        },
        {
            title: "Content Creation",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service7.svg"
        },
        {
            title: "Brand Strategy",
            description: "Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features",
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service8.svg"
        },
    ]

    // For Services Section
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Our Services</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>Our Services</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* OUR SERVICES Section */}
            <section className="">
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <p className="text-[#FB6B01] font-bold md:text-xl text-lg">
                        OUR SERVICES
                    </p>
                    <div className="flex lg:flex-row items-end justify-between">
                        <div className="mt-4">
                            <p className="font-extrabold md:text-5xl text-4xl">
                                We Push Brands To Reach Their Full
                                <br /> Potential Whatever It Takes
                            </p>
                        </div>
                        <div className="flex gap-3 mt-4 lg:mt-0">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#FB5E01] hover:border-[#FB5E01] hover:text-white group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#FB5E01] hover:border-[#FB5E01] hover:text-white group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Swiper Slider */}
                    {services.length > 0 && (
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation]}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="mt-10 [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="min-h-75 border border-gray-200 bg-white shadow-lg">
                                        <div className="pt-10 px-10 pb-10">
                                            <div>
                                                <img
                                                    className="mb-9"
                                                    src={service.image}
                                                    alt={service.title}
                                                />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold mb-4">
                                                    {service.title}
                                                </p>
                                                <p className="text-md text-gray-700">
                                                    {service.description}
                                                </p>
                                            </div>
                                            <div>
                                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                                    {service.bullets?.map((bullet, i) => (
                                                        <li
                                                            key={i}
                                                            className="marker:text-[#FB5E01] marker:text-2xl font-bold text-lg"
                                                        >
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>

            {/* More Services */}
            <section className='bg-[#ECEFE4]'>
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <div>
                        <div>
                            <p className="text-[#F84E25] text-lg md:text-xl font-semibold">
                                OUR SERVICES
                            </p>
                        </div>
                        <div className="flex md:flex-row flex-col justify-between">
                            <p className="md:w-220 mt-5 font-extrabold text-2xl md:text-5xl">
                                We Push Brands To Reach Their Full Potential Whatever It Takes
                            </p>
                            <div>
                                <button className="text-white mt-5 text-sm md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 bg-[#FB5E01] hover:bg-black transition-all duration-600 cursor-pointer">
                                    View ALL Services
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-8 mt-10'>
                        <div className='bg-white px-15 flex gap-8 items-center justify-center'>
                            <div>
                                <img className='h-70' src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service1.svg" alt="" />
                            </div>
                            <div>
                                <p className='text-2xl cursor-pointer hover:text-[#FB5E01] transition-all duration-300 font-bold'>Sales Enablement Content</p>
                                <p className='text-lg mt-4 text-gray-700'>Procreate is a powerful digital illustration app designed exclusively for ipad It offers a wide range of brushes layering capabilities & advanced features</p>
                                <button className='btn cursor-pointer text-md font-bold mt-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services