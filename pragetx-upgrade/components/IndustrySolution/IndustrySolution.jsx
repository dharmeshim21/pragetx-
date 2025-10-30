'use client'
import { Ripple } from '@heroui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './IndustrySolution.css'

const IndustrySolution = () => {
    const IndustrySolutionData = [
        {
            title: 'AI-First Learning Models',
            description:
                'Harness the power of advanced AI and machine learning to deliver personalized, adaptive, and engaging learning journeys. From intelligent tutoring systems to automated assessments, we design education systems that evolve with every learner.',
            image: '/images/industries/ai-first-model.png',
            cardicon: '/images/services/ModelTraining.svg',
        },
        {
            title: 'Scalable & Future-Ready Platforms',
            description:
                'Our cloud-native education platforms are engineered for scalability and longevity—capable of handling thousands of users with real-time analytics, seamless collaboration tools, and the flexibility to integrate with evolving EdTech ecosystems globally.',
            image: '/images/industries/scalable-future.png',
            cardicon: '/images/industries/Cloud-Architecture1.svg',
        },
        {
            title: 'Tailored Solutions for Every Sector',
            description:
                'We deliver custom solutions for K-12 schools, universities, EdTech startups, corporate training providers, and government bodies—each built to meet unique goals, compliance standards, and learner engagement requirements.',
            image: '/images/industries/tailored-solution.png',
            cardicon: '/images/industries/solutions.svg',
        },
        {
            title: 'Comprehensive End-to-End Development',
            description:
                'From strategic planning and UX design to AI integration and deployment, we manage the entire lifecycle of your EdTech product. Our agile approach ensures timely delivery, continuous optimization, and post-launch support tailored to your success.',
            image: '/images/industries/end-to-end.png',
            cardicon: '/images/industries/end-to-end-development.svg',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === IndustrySolutionData.length - 1 ? 0 : prev + 1
        )
    }

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? IndustrySolutionData.length - 1 : prev - 1
        )
    }

    return (
        <>
            <div className="container w-full pt-[120px]">
                {/* OPTIONS */}
                <div className="option-container">
                    {IndustrySolutionData.map((item, index) => (
                        <div
                            key={index}
                            className="Option my-box flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center cursor-pointer transition-all duration-300"
                            style={{
                                fontSize: '18px',
                                fontWeight: 400,
                                background: 'white',
                            }}
                        >
                            <span
                                style={{
                                    backgroundImage:
                                        index === currentIndex
                                            ? 'linear-gradient(90deg, rgba(168,86,247,1) 0%, rgba(106,90,205,1) 50%, rgba(0,161,224,1) 100%)'
                                            : 'none',
                                    color: index === currentIndex ? 'transparent' : '#6B7280',
                                    WebkitBackgroundClip: index === currentIndex ? 'text' : 'unset',
                                    WebkitTextFillColor: index === currentIndex ? 'transparent' : '#6B7280',
                                    backgroundClip: index === currentIndex ? 'text' : 'unset',
                                    fontSize: index === currentIndex ? '16px' : '14px',
                                    fontWeight: index === currentIndex ? '600' : 'bold',
                                    display: 'inline-block',
                                    transition: 'all 0.3s ease',
                                    minHeight:'25px'
                                }}
                            >
                                {item.title}
                            </span>

                        </div>
                    ))}
                </div>

                {/* IMAGE */}
                <div className="image mt-[30px] lg:w-[600px] xl:w-[50%] xl:h-[270px] w-[100%] h-[300px] mx-auto relative">
                    <Image
                        src={IndustrySolutionData[currentIndex].image}
                        alt="AI Icon"
                        fill
                        className="object-cover lg:mt-2 rounded-[20px]"
                    />
                </div>

                {/* TITLE */}
                <div className="title mt-[40px]">
                    <div
                        className="aboutLinem flex gap-2 mx-auto w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '18px',
                            fontWeight: 400,
                            background:
                                'linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)',
                            color: 'white',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '18px',
                                fontWeight: '600',
                            }}
                        >
                            PragetX for Education
                        </span>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="description text-center">
                    <div className="mx-auto w-full mt-[30px]">
                        <h2 className="text-center mb-[20px]">
                            Smart & Scalable Education Solutions
                        </h2>

                        {/* Swiper controlled by left/right icons */}
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            allowTouchMove={false}
                            onSlideChange={() => { }}
                            className="relative"
                        >
                            <SwiperSlide key={currentIndex}>
                                <div className="div w-full flex items-start justify-between">
                                    {/* LEFT ICON */}
                                    <div
                                        className="leftIcon relative lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] rounded-full overflow-hidden cursor-pointer"
                                        onClick={handlePrev}
                                    >
                                        <Ripple />
                                        <Image
                                            src="images/services/leftIcon.svg"
                                            alt="Left Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* TITLE */}
                                    <span className="lg:text-[22px] font-semibold text-[#374151]">
                                        {IndustrySolutionData[currentIndex].title}
                                    </span>

                                    {/* RIGHT ICON */}
                                    <div
                                        className="rightIcon relative lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] rounded-full overflow-hidden cursor-pointer"
                                        onClick={handleNext}
                                    >
                                        <Ripple />
                                        <Image
                                            src="images/services/rightIcon.svg"
                                            alt="Right Icon"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* DESCRIPTION TEXT */}
                                <p className='mt-[20px] !text-[18px] text-[#6B7280] lg:w-[50%] mx-auto ' style={{ fontWeight: '500' }}>
                                    {IndustrySolutionData[currentIndex].description}
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustrySolution
