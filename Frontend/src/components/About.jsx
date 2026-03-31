import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { GoArrowDownRight } from "react-icons/go";
import { RiDoubleQuotesR, RiStarSFill } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const API = "http://localhost:5000/api";

const About = () => {

    const swiperRef = useRef(null);

    const [services, setServices] = useState([]);
    const [projects, setProjects] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    // For Choose Us Section
    const [active, setActive] = useState(0);

    // For Services Section
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // For Choose US Section
    useEffect(() => {
        fetch(`${API}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // For Testimonials Section
    useEffect(() => {
        fetch(`${API}/testimonials`)
            .then((res) => res.json())
            .then((data) => setTestimonials(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    const globalNumbers = [
        { number: "10K", label: "Global Customers" },
        { number: "300", label: "Completed Projects" },
        { number: "50", label: "Offices Nationwide" },
        { number: "24", label: "Winning Awards" },
    ];

    const companyLogo = [
        { img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner1.png", alt: "Uelphix" },
        { img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner2.png", alt: "Logo2" },
        { img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner3.png", alt: "Sracle" },
        { img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner4.png", alt: "Logo4" },
        { img: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner5.png", alt: "Puadien" },
    ]

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
                                <div className='shrink-0 h-16 w-16 rounded-full bg-[#FB5E01] flex items-center justify-center'>
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

            {/* Numbers */}
            <div className="bg-[#000E1E] flex justify-between px-55 py-25 text-white">
                {
                    globalNumbers.map((item, index) => (
                        <div key={index} className="flex gap-5 items-center">
                            <div>
                                <p className="text-8xl font-extrabold text-transparent hover:text-white transition-colors duration-300" style={{ WebkitTextStroke: "2px white" }}>{item.number}</p>
                            </div>
                            <div className="w-20">
                                <p className="text-2xl font-medium">{item.label}</p>
                            </div>
                        </div>
                    ))
                }
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
                <div className="lg:px-30 lg:py-20 py-10">
                    <p className="lg:text-xl text-sm font-bold text-center">
                        We've helped great brands reach new heights
                    </p>
                    <div className="flex flex-col md:flex-row mt-18 md:justify-around items-center justify-center gap-5">
                        {companyLogo.map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR TESTIMONIAL */}
            <section className="bg-[#ECEFE4]">
                <div className="px-8 py-5 md:px-60 md:py-32">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            OUR TESTIMONIAL
                        </p>
                        <p className="text-black font-bold md:text-5xl text-2xl">
                            What Our Customers Say About Us
                        </p>
                    </div>
                    {/* Main content div */}
                    <div className="mt-20 flex flex-col md:flex-row gap-5 md:gap-30">
                        {/* Left side image div */}
                        <div className="flex md:flex-row flex-col relative">
                            <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/testimonial-shape1.png" className="absolute hidden md:flex md:w-50 md:top-60 md:-left-25" alt="" />
                            <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/testimonials/testimonial1.jpg" className="relative w-full max-w-sm md:max-w-lg" alt="" />
                        </div>
                        {/* Right side content div */}
                        <div className="relative w-full md:w-1/2 py-5">
                            {/* 🔥 Fixed Buttons */}
                            <div className="absolute bottom-0 right-0 flex gap-5 z-10">
                                <button className="prev w-12 h-12 flex items-center justify-center rounded-full bg-white text-2xl hover:bg-[#FB5E01] hover:text-white transition-all duration-300 cursor-pointer">
                                    <GoArrowLeft />
                                </button>
                                <button className="next w-12 h-12 flex items-center justify-center rounded-full bg-white text-2xl hover:bg-[#FB5E01] hover:text-white transition-all duration-300 cursor-pointer">
                                    <GoArrowRight />
                                </button>
                            </div>

                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: ".prev",
                                    nextEl: ".next",
                                }}
                                loop={true}
                            >
                                {/* Slide 1 */}
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item._id}>
                                        <div className="py-5">

                                            <div className="flex justify-between">
                                                <RiDoubleQuotesR className="md:text-7xl text-5xl text-[#FB5E01]" />

                                                <div className="flex gap-2 p-5">
                                                    {[...Array(item.rating)].map((_, i) => (
                                                        <RiStarSFill key={i} className="text-2xl text-amber-400" />
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="py-5 text-base md:text-xl text-gray-700">
                                                {item.message}
                                            </p>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.image} alt="" />
                                                    <div className="mx-5">
                                                        <h3 className="text-xl font-bold">{item.name}</h3>
                                                        <p>{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About