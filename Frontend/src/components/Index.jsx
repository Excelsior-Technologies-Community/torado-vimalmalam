import { useRef, useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { RiDoubleQuotesR, RiStarSFill } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BiCommentDetail } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Index.css";

const API = "http://localhost:5000/api";

const Index = () => {
    const swiperRef = useRef(null);

    const [services, setServices] = useState([]);
    const [manager, setManager] = useState(null);
    const [slide, setSlide] = useState([]);
    const [projects, setProjects] = useState([]);
    const [team, setTeam] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [process, setProcess] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // For Choose Us Section
    const [active, setActive] = useState(0);

    // For Services Section
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // For Manager Section
    useEffect(() => {
        fetch(`${API}/manager`)
            .then((res) => res.json())
            .then((data) => setManager(data))
            .catch((err) => console.error("Error fetching manager:", err));
    }, []);

    // For Project Slides
    useEffect(() => {
        const fetchSlides = async () => {
            const res = await axios.get(`${API}/sliders`);
            setSlide(res.data);
        };

        fetchSlides();
    }, []);

    // For Choose US Section
    useEffect(() => {
        fetch(`${API}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // For Team
    useEffect(() => {
        fetch(`${API}/team`)
            .then((res) => res.json())
            .then((data) => setTeam(data))
            .catch((err) => console.error("Error fetching manager:", err));
    }, []);

    // For Testimonials
    useEffect(() => {
        axios.get(`${API}/testimonials`).then(res => setTestimonials(res.data));
    }, []);

    // For Process Section
    useEffect(() => {
        fetch(`${API}/process`)
            .then((res) => res.json())
            .then((data) => setProcess(data))
            .catch((err) => console.error("Error fetching manager:", err));
    }, []);

    // For Blog Post
    useEffect(() => {
        fetch(`${API}/blogs`)
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error fetching manager:", err));
    }, []);

    // Duplicate slides so loop works when slidesPerView equals total slides
    const slides = services.length > 0 ? [...services, ...services] : [];

    const blogPost = [
        {
            _id: 1,
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/blogs/blog1.jpg",
            tag: "Marketing",
            date: "Jul 23 , 2025",
            comment: "No Comments",
            title: "How To Write Killer Evergreen Content To Boost Your Traffic",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas delectus voluptatem praesentium sunt nobis, quisquam aliquam reiciendis dolorum temporibus sapiente.",
        },
        {
            _id: 2,
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/blogs/blog2.jpg",
            tag: "Strategy",
            date: "Jul 07 , 2025",
            comment: "02 Comment",
            title: "53 Best SEO Experts Of 2020: A More Diverse Roundup",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas delectus voluptatem praesentium sunt nobis, quisquam aliquam reiciendis dolorum temporibus sapiente.",
        },
        {
            _id: 3,
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/blogs/blog1.jpg",
            tag: "Marketing",
            date: "Jul 23 , 2025",
            comment: "No Comments",
            title: "How To Write Killer Evergreen Content To Boost Your Traffic",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas delectus voluptatem praesentium sunt nobis, quisquam aliquam reiciendis dolorum temporibus sapiente.",
        },
        {
            _id: 4,
            image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/blogs/blog2.jpg",
            tag: "Strategy",
            date: "Jul 07 , 2025",
            comment: "02 Comment",
            title: "53 Best SEO Experts Of 2020: A More Diverse Roundup",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas delectus voluptatem praesentium sunt nobis, quisquam aliquam reiciendis dolorum temporibus sapiente.",
        },

    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative z-10 overflow-x-clip bg-[#152C39] pb-50">
                <div className="px-8 py-5 lg:px-30 lg:py-32">
                    <div className="">
                        <h1 className="text-white text-xl lg:text-8xl font-bold">
                            Grow Your Business <br /> Faster With{" "}
                            <span className="text-[#FB5E01]">Content</span>-led SEO
                        </h1>
                        <p className="text-zinc-300 text-lg lg:text-[17px] font-normal lg:max-w-none mt-5">
                            Maecenas euismod viverra purus volutpat posuere mauris tristique
                            quisokaft mauris facilisis consequat dolor luctus imperdiet eget
                            nulla <br /> europi venenatis libero proin nec nisi auctor
                            pulvinar massa dolore magna
                        </p>
                    </div>
                    <div className="hidden lg:block absolute top-[80%] left-[130px] translate-x-[50px] -translate-y-[100px]">
                        <img
                            className="w-40 h-40"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/video-shape2.png"
                            alt="AboutUsLink"
                        />
                        <img
                            className="absolute top-[65px] left-[65px] translate-x-[50%] translate-y-[50%]"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/about-link.svg"
                            alt="AboutUsLink"
                        />
                    </div>
                </div>
                <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{
                        duration: 300,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="hidden lg:block"
                >
                    <img
                        className="absolute flex z-100 h-18 w-auto top-[165px] left-[100px]"
                        src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/design-shape2.png"
                        alt="MotionImage"
                    />
                </motion.div>
            </section>

            {/* Second Hero Section */}
            <section className="relative bg-[#ECEFE4]">
                <div className="flex flex-col lg:flex-row px-8 lg:px-30 py-10 lg:py-20">
                    <div className="text-xl lg:text-2xl font-bold">
                        <p className="mb-3 lg:mb-6">Content For SEO</p>
                        <p className="mb-3 lg:mb-6">eBooks & White Papers</p>
                        <p className="mb-3 lg:mb-6">Graphic Design</p>
                        <p className="mb-3 lg:mb-6">Video Production & Animation</p>
                    </div>
                    {/* Mobile: images in normal flow; Desktop: absolute positioned */}
                    <div className="flex flex-col gap-4 mt-6 lg:hidden">
                        <img
                            className="w-full h-auto rounded-lg"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design1.jpg"
                            alt="HeroImage1"
                        />
                        <img
                            className="w-full h-auto rounded-lg"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design2.jpg"
                            alt="HeroImage2"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <img
                            className="z-100 absolute lg:h-120 w-auto lg:top-[-380px] lg:left-[620px] translate-x-[50%] translate-y-[50%]"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design1.jpg"
                            alt="HeroImage1"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <img
                            className="z-100 absolute lg:h-190 w-auto lg:top-[-640px] lg:left-[1050px] translate-x-[50%] translate-y-[50%]"
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design2.jpg"
                            alt="HeroImage2"
                        />
                    </div>
                </div>
                <div className="lg:px-30 lg:py-20 py-10 lg:mt-40">
                    <p className="lg:text-xl text-sm font-semibold text-center">
                        We've helped great brands reach new heights
                    </p>
                    <div className="flex gap-5 flex-col lg:flex-row mt-18 lg:justify-around items-center justify-center">
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner1.png"
                            alt="Uelphix"
                        />
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner2.png"
                            alt="Logo2"
                        />
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner3.png"
                            alt="Sracle"
                        />
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner4.png"
                            alt="Logo4"
                        />
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner5.png"
                            alt="Puadien"
                        />
                    </div>
                </div>
            </section>

            {/* OUR SERVICES Section */}
            <section className="">
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <p className="text-[#FB6B01] font-bold md:text-xl text-lg">
                        OUR SERVICES
                    </p>
                    <div className="flex lg:flex-row items-end justify-between">
                        <div className="mt-4">
                            <p className="font-bold md:text-5xl text-4xl">
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
                    {slides.length > 0 && (
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
                                    <div className="min-h-[300px] border border-gray-200 bg-white shadow-lg">
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

            {/* About Us Section */}
            <section>
                <div className="px-6 py-5 lg:px-50 lg:py-20">
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
                        <div>
                            <div>
                                <p className="text-[#FB6B01] font-bold md:text-xl text-lg">
                                    ABOUT US
                                </p>
                                <h1 className="mt-4 font-bold md:text-5xl text-2xl">
                                    We Take Pride In Keeping Our
                                    <br /> Services In-House
                                </h1>
                            </div>
                            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="h-auto md:h-150 w-full md:w-90">
                                    <img
                                        className="h-150 w-90"
                                        src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/pride1.jpg"
                                        alt="AboutUS1"
                                    />
                                </div>
                                <div className="order-2 md:order-2 w-full md:w-1/2 md:mx-15 my-8 flex flex-col gap-5">
                                    <p className="text-md text-gray-700">
                                        Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod
                                        tempo ncididunt ut labore et dolore magna aliqua quis ipsum
                                        suspendisse ultrice risus com
                                    </p>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img
                                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg"
                                            alt="Check"
                                        />
                                        <p>Content Marketing Strategy</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img
                                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg"
                                            alt="Check"
                                        />
                                        <p>Targeted Demand Generation</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img
                                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg"
                                            alt="Check"
                                        />
                                        <p>Video Marketing Production</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img
                                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg"
                                            alt="Check"
                                        />
                                        <p>Content Creation & Amplification</p>
                                    </div>
                                    <div className="mt-5">
                                        {manager && (
                                            <div className="flex items-center gap-5">
                                                <img
                                                    className="w-16 h-16 rounded-full object-cover"
                                                    src={manager.profileImage}
                                                    alt="SeniorManager"
                                                />

                                                <div className="flex flex-col">
                                                    <p className="font-bold">{manager.name}</p>
                                                    <p>{manager.role}</p>
                                                </div>

                                                <img
                                                    className="w-24"
                                                    src={manager.signatureImage}
                                                    alt="Signature"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-3 md:order-none flex flex-col items-center mt-10 md:mt-0">
                            <img
                                className="w-full md:w-130 h-auto md:h-150"
                                src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/pride2.jpg"
                                alt="AboutUS2"
                            />
                            <div className="w-50 h-50 flex flex-col items-center justify-center border border-[#FB5E01] rounded-full mt-5 bg-[#FB5E01] text-white z-10">
                                <span className="text-6xl font-bold">18+</span>
                                <span className="text-xl">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative z-10 overflow-x-clip bg-[#152C39]">
                <div className="px-8 py-5 md:px-50 md:py-32">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            RECENT PROJECTS
                        </p>
                        <p className="text-white font-bold md:text-5xl text-2xl">
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
            </section>

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

            {/* Team Members Section */}
            <section className="bg-[#ECEFE4]">
                <div className="px-8 py-5 md:px-50 md:py-20">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            TEAM MEMBERS
                        </p>
                        <p className="text-black font-bold md:text-5xl text-2xl">
                            Content Marketing Leaders Work With Us
                        </p>
                    </div>
                    <div className="mt-20 flex md:flex-row flex-col justify-between gap-5">
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
                            <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/testimonial-shape1.png" className="absolute hidden md:flex md:w-50 md:top-58 md:-left-4" alt="" />
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

            {/* WORKING PROCESS */}
            <section>
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <div>
                        <div>
                            <p className="text-[#F84E25] text-lg md:text-xl font-semibold">
                                WORKING PROCESS
                            </p>
                        </div>
                        <div className="flex md:flex-row flex-col justify-between">
                            <p className="mt-5 font-bold text-2xl md:text-5xl">
                                Tell Stories That Create <br /> Lifelong Customers
                            </p>
                            <div>
                                <button className="text-white mt-5 text-sm md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 bg-[#FB5E01] hover:bg-black transition-all duration-600 cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 flex items-center gap-10">
                        <div className="flex md:flex-row flex-col gap-10 justify-center">
                            {process.map((item) => (
                                <div key={item._id}>
                                    <div className="w-80 overflow-hidden rounded-l-full rounded-r-full transition-all mb-10 md:-rotate-10 hover:rotate-0 duration-700 cursor-pointer">
                                        <img src={item.image} className="w-full h-25 object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-2xl">{item.heading}</p>
                                        <p className="mt-3 text-lg text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Post */}
            <section>
                <div className="px-8 py-5 md:px-60 md:py-20">
                    <div className="text-center">
                        <p className="text-[#F84E25] md:text-xl text-lg font-semibold">
                            BLOG POST
                        </p>
                        <p className="text-black font-bold md:text-5xl text-2xl">
                            Benefits Of Partnering With Us
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="w-full py-10">
                        <Swiper
                        modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1, // swipe 2 slides together
                                },
                            }}
                        >
                            {/* Empty slides (you add design inside) */}
                            {blogs.map((item) => (
                                <SwiperSlide key={item}>
                                    <div className="my-10 flex md:flex-col justify-center">
                                        <div>
                                            <img src={item.image} className="relative" alt="" />
                                            <p className="absolute top-75 left-8 p-2 bg-white text-[#FB5E01] font-bold">{item.tag}</p>
                                        </div>
                                        <div className="p-8">
                                            <div className="flex gap-5">
                                                <p className="flex justify-center items-center gap-2 text-gray-700"><SlCalender className="text-[#FB5E01]" />{item.date}</p>
                                                <p className="flex justify-center items-center gap-2 text-gray-700"><BiCommentDetail className="text-[#FB5E01]" />{item.comment}</p>
                                            </div>
                                            <div className="mt-10 flex flex-col gap-5">
                                                <h3 className="font-bold text-3xl hover:text-[#FB5E01] transition-all duration-300 cursor-pointer">{item.title}</h3>
                                                <p className="font-normal text-gray-700">{item.desc}</p>
                                                <div>
                                                    <button className="btn text-black font-bold hover:text-[#FB5E01] transition-all duration-300 cursor-pointer">Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
