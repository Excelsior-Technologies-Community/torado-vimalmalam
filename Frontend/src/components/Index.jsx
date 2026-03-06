import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const API = "http://localhost:5000/api";

const Index = () => {
    const swiperRef = useRef(null);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.error("Error fetching services:", err));
    }, []);

    // Duplicate slides so loop works when slidesPerView equals total slides
    const slides = services.length > 0 ? [...services, ...services] : [];

    return (
        <>
            {/* Hero Section */}
            <section className='relative z-10 overflow-x-clip bg-[#152C39] pb-50'>
                <div className="px-8 py-5 lg:px-30 lg:py-32">
                    <div className="">
                        <h1 className="text-white text-xl lg:text-8xl font-bold">Grow Your Business <br /> Faster With <span className="text-[#FB5E01]">Content</span>-led SEO</h1>
                        <p className='text-zinc-300 text-lg lg:text-[17px] font-normal lg:max-w-none mt-5'>Maecenas euismod viverra purus volutpat posuere mauris tristique quisokaft mauris facilisis consequat dolor luctus imperdiet eget nulla <br /> europi venenatis libero proin nec nisi auctor pulvinar massa dolore magna</p>
                    </div>
                    <div className='hidden lg:block absolute top-[80%] left-[130px] translate-x-[50px] -translate-y-[100px]'>
                        <img className='w-40 h-40' src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/video-shape2.png" alt="AboutUsLink" />
                        <img className='absolute top-[65px] left-[65px] translate-x-[50%] translate-y-[50%]' src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/about-link.svg" alt="AboutUsLink" />
                    </div>
                </div>
                <motion.div
                    animate={{ x: [0, 100, 0] }}
                    transition={{
                        duration: 300,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="hidden lg:block"
                >
                    <img className="absolute flex z-100 h-18 w-auto top-[165px] left-[100px]" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/design-shape2.png" alt="MotionImage" />
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
                        <img className="w-full h-auto rounded-lg" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design1.jpg" alt="HeroImage1" />
                        <img className="w-full h-auto rounded-lg" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design2.jpg" alt="HeroImage2" />
                    </div>
                    <div className="hidden lg:block">
                        <img className="z-100 absolute lg:h-120 w-auto lg:top-[-380px] lg:left-[620px] translate-x-[50%] translate-y-[50%]" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design1.jpg" alt="HeroImage1" />
                    </div>
                    <div className="hidden lg:block">
                        <img className="z-100 absolute lg:h-190 w-auto lg:top-[-640px] lg:left-[1050px] translate-x-[50%] translate-y-[50%]" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/design2.jpg" alt="HeroImage2" />
                    </div>
                </div>
                <div className="lg:px-30 lg:py-20 py-10 lg:mt-40">
                    <p className="lg:text-xl text-sm font-semibold text-center">We've helped great brands reach new heights</p>
                    <div className="flex gap-5 flex-col lg:flex-row mt-18 lg:justify-around items-center justify-center">
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner1.png" alt="Uelphix" />
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner2.png" alt="Logo2" />
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner3.png" alt="Sracle" />
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner4.png" alt="Logo4" />
                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/partners/partner5.png" alt="Puadien" />
                    </div>
                </div>
            </section>

            {/* OUR SERVICES Section */}
            <section className="">
                <div className="px-8 py-5 lg:px-50 lg:py-32">
                    <p className="text-[#FB6B01] font-bold md:text-xl text-lg">OUR SERVICES</p>
                    <div className="flex lg:flex-row items-end justify-between">
                        <div className="mt-4">
                            <p className="font-bold md:text-5xl text-4xl">We Push Brands To Reach Their Full<br /> Potential Whatever It Takes</p>
                        </div>
                        <div className="flex gap-3 mt-4 lg:mt-0">
                            <button onClick={() => swiperRef.current?.slidePrev()} className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#FB5E01] hover:border-[#FB5E01] hover:text-white group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={() => swiperRef.current?.slideNext()} className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#FB5E01] hover:border-[#FB5E01] hover:text-white group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
                            className="mt-10 [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden">

                            {slides.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="min-h-[300px] border border-gray-200 bg-white shadow-lg">
                                        <div className="pt-10 px-10 pb-10">
                                            <div>
                                                <img className="mb-9" src={service.image} alt={service.title} />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold mb-4">{service.title}</p>
                                                <p className="text-md text-gray-700">{service.description}</p>
                                            </div>
                                            <div>
                                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                                    {service.bullets?.map((bullet, i) => (
                                                        <li key={i} className="marker:text-[#FB5E01] marker:text-2xl font-bold text-lg">{bullet}</li>
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
                <div className="px-8 py-5 lg:px-50 lg:py-20">
                    <div className="flex lg:flex-row items-end justify-between">
                        <div>
                            <div>
                                <p className="text-[#FB6B01] font-bold md:text-xl text-lg">ABOUT US</p>
                                <h1 className="mt-4 font-bold md:text-5xl text-4xl">We Take Pride In Keeping Our<br /> Services In-House</h1>
                            </div>
                            <div className="mt-16 flex lg:flex-row items-start justify-evenly">
                                <div className="">
                                    <img className="h-150 w-90" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/pride1.jpg" alt="AboutUS1" />
                                </div>
                                <div className="w-1/2 mx-15 my-8 flex flex-col gap-5 ">
                                    <p className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipiscing do eiusmod tempo ncididunt ut labore et dolore magna aliqua quis ipsum suspendisse ultrice risus com</p>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg" alt="Check" />
                                        <p>Content Marketing Strategy</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg" alt="Check" />
                                        <p>Targeted Demand Generation</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg" alt="Check" />
                                        <p>Video Marketing Production</p>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#ECEFE4] p-5 ">
                                        <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/check.svg" alt="Check" />
                                        <p>Content Creation & Amplification</p>
                                    </div>
                                    <div className="mt-5">
                                        <div className="flex items-center gap-5">
                                            <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/users/pride1.png" alt="SeniorManager" />
                                            <div className="flex flex-col">
                                                <p className="font-bold">Benjamin Noahmin</p>
                                                <p>Senior Manager</p>
                                            </div>
                                            <img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/user-shape1.png" alt="Signature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-130 h-150" src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/design/pride2.jpg" alt="AboutUS2" />
                            <div className="w-50 h-50 flex flex-col items-center justify-center border border-[#FB5E01] rounded-full mt-5 bg-[#FB5E01] text-white z-10"><span className="text-6xl font-bold">18+</span><span className="text-xl">Years Experience</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index