import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { GoArrowDownRight } from "react-icons/go";
import { Pagination, EffectCoverflow } from "swiper/modules";

const API = "http://localhost:5000/api";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [slide, setSlide] = useState([]);

    // For Choose Us Section
    const [active, setActive] = useState(0);

    // For Choose US Section
    useEffect(() => {
        fetch(`${API}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // For Projects Slides
    useEffect(() => {
        fetch(`${API}/sliders`)
            .then((res) => res.json())
            .then((data) => setSlide(data))
            .catch((err) => console.error("Error fetching sliders:", err));
    }, []);

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Some Of Our Projects</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'>Our Projects</span>
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

            {/* Projects Section */}
            <section className="relative z-10 overflow-x-clip bg-[#ECEFE4]">
                <div className="px-8 py-5 md:px-50 md:py-32">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            RECENT PROJECTS
                        </p>
                        <p className="text-black font-extrabold md:text-5xl text-2xl">
                            Our High-Impact Content Marketing Projects
                        </p>
                    </div>
                    <div className="">
                        <div className="py-20">
                            <div className="w-full md:w-[90%] md:ml-[10%]">
                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    slideToClickedSlide={true}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    modules={[EffectCoverflow, Pagination]}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 150,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                >
                                    {slide.map((slide) => (
                                        <SwiperSlide key={slide._id}>
                                            <div className="relative">
                                                <img
                                                    src={slide.image}
                                                    className="w-full h-100 md:h-105 object-cover rounded-md"
                                                />

                                                {/* white info card */}
                                                <div className="absolute bottom-8 left-8 right-8 bg-white p-6 flex justify-between items-center rounded">
                                                    <div>
                                                        <p className="text-orange-500 text-sm font-semibold">
                                                            {slide.tag}
                                                        </p>

                                                        <h3 className="text-lg font-semibold">
                                                            {slide.title}
                                                        </h3>
                                                    </div>

                                                    <div className="bg-orange-500 w-10 h-10 flex items-center justify-center text-white rounded-full">
                                                        →
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-30 px-6 md:px-80 flex flex-col md:flex-row items-center justify-between">

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
            </section>
        </>
    )
}

export default Projects