import { React, useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaPlay } from "react-icons/fa";

const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        {
            question: "Does this course include a certification?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod tincidunt laoreet dolore magna aliquam erat volutpat."
        },
        {
            question: "When was the course last updated?",
            answer: "This course was last updated in 2025 with new content."
        },
        {
            question: "How long do I have access to the course?",
            answer: "You will have lifetime access to this course."
        },
        {
            question: "How long will the course take?",
            answer: "It depends, but typically 4–6 weeks."
        }
    ];

    const items = [
        'Digital PR',
        'Content Creation',
        'Content Marketing',
        'SEO Analysts',
        'Content Writers',
        'Link Building',
    ];

    return (
        <>
            <div className='bg-[#ECEFE4]'>
                <div className='px-8 py-5 md:px-60 md:py-40'>
                    <div>
                        <h1 className='text-5xl font-extrabold text-center'>Frequently Asked Questions</h1>
                    </div>
                    <div className='mt-8'>
                        <p className='text-center font-medium text-lg'>
                            <Link className='text-black text-lg' to="/">Home</Link>  /
                            <span className='text-lg text-[#FB5E51]'> FAQ</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-20 py-56 bg-gray-100">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE IMAGES */}
                    <div className="relative flex justify-center items-center">

                        {/* Top Image */}
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/questions/question1.jpg"
                            alt=""
                            className="w-74 object-cover rounded-lg shadow-lg absolute left-30 -bottom-30"
                        />

                        {/* Bottom Image */}
                        <img
                            src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/questions/question2.jpg"
                            alt=""
                            className="w-74 object-cover rounded-lg shadow-lg absolute right-32 -top-25"
                        />

                        {/* Play Button */}
                        <div className="z-10 bg-white w-26 h-26 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                            <FaPlay className="text-orange-500 text-2xl ml-1" />
                        </div>
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <div>
                        <p className="text-orange-500 font-semibold mb-2">FAQ</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Need To Ask Some Question <br /> Or Check Question
                        </h2>

                        {/* ACCORDION */}
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow p-4"
                                >
                                    {/* Question */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggle(index)}
                                    >
                                        <h3 className="font-semibold text-lg">
                                            {item.question}
                                        </h3>

                                        {/* Smooth Icon Animation */}
                                        <div
                                            className={`text-orange-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                        </div>
                                    </div>

                                    {/* Answer (Smooth Animation) */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
                                            ? "max-h-40 opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 text-sm">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FB5E01] overflow-hidden w-full py-20">
                <div
                    className="flex w-max animate-marquee hover:[animation-play-state:paused]"  // 👈 this
                >
                    {[...items, ...items].map((item, i) => (
                        <Fragment key={i}>
                            <span className="text-white text-3xl font-bold whitespace-nowrap tracking-wide">
                                {item}
                            </span>
                            <span className="text-white text-2xl mx-7 flex items-center"><img src="https://torado.envytheme.com/content-marketing-agency/default/assets/images/shapes/text-slider-shape.png" alt="" /></span>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faq