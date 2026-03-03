import { motion } from "framer-motion";

const Index = () => {
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
                    animate={{ x: [0, 100, 0] }} // Move 100px right and back
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
                    <p className="text-[#FB6B01] font-bold text-xl">OUR SERVICES</p>
                    <div className="flex lg:flex-row">
                        <div className="mt-4">
                            <p className="font-bold text-5xl">We Push Brands To Reach Their Full<br /> Potential Whatever It Takes</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index