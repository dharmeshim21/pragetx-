import { Ripple } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const IndustrySolution = () => {
    const IndustrySolutionData = [
        {
            title: "AI-First Learning Models",
            description:
                "Harness the power of advanced AI and machine learning to deliver personalized, adaptive, and engaging learning journeys. From intelligent tutoring systems to automated assessments, we design education systems that evolve with every learner.",
            image: "/images/industries/ai-learning-model.jpg",
            cardicon: "/images/services/ModelTraining.svg",
        },
        {
            title: "Scalable & Future-Ready Platforms",
            description:
                "Our cloud-native education platforms are engineered for scalability and longevity—capable of handling thousands of users with real-time analytics, seamless collaboration tools, and the flexibility to integrate with evolving EdTech ecosystems globally.",
            image: "/images/industries/ai-education-platform.jpg",
            cardicon: "/images/industries/Cloud-Architecture1.svg",
        },
        {
            title: "Tailored Solutions for Every Sector",
            description:
                "We deliver custom solutions for K-12 schools, universities, EdTech startups, corporate training providers, and government bodies—each built to meet unique goals, compliance standards, and learner engagement requirements.",
            image: "/images/industries/ai-solutions.jpg",
            cardicon: "/images/industries/solutions.svg",
        },
        {
            title: "Comprehensive End-to-End Development",
            description:
                "From strategic planning and UX design to AI integration and deployment, we manage the entire lifecycle of your EdTech product. Our agile approach ensures timely delivery, continuous optimization, and post-launch support tailored to your success.",
            image: "/images/industries/End-to-End-Development.jpg",
            cardicon: "/images/industries/end-to-end-development.svg",
        },
        {
            title: "AI-First Learning Models",
            description:
                "Harness the power of advanced AI and machine learning to deliver personalized, adaptive, and engaging learning journeys. From intelligent tutoring systems to automated assessments, we design education systems that evolve with every learner.",
            image: "/images/industries/ai-learning-model.jpg",
            cardicon: "/images/services/ModelTraining.svg",
        },
        {
            title: "Scalable & Future-Ready Platforms",
            description:
                "Our cloud-native education platforms are engineered for scalability and longevity—capable of handling thousands of users with real-time analytics, seamless collaboration tools, and the flexibility to integrate with evolving EdTech ecosystems globally.",
            image: "/images/industries/ai-education-platform.jpg",
            cardicon: "/images/industries/Cloud-Architecture1.svg",
        },
        {
            title: "Tailored Solutions for Every Sector",
            description:
                "We deliver custom solutions for K-12 schools, universities, EdTech startups, corporate training providers, and government bodies—each built to meet unique goals, compliance standards, and learner engagement requirements.",
            image: "/images/industries/ai-solutions.jpg",
            cardicon: "/images/industries/solutions.svg",
        },
        {
            title: "Comprehensive End-to-End Development",
            description:
                "From strategic planning and UX design to AI integration and deployment, we manage the entire lifecycle of your EdTech product. Our agile approach ensures timely delivery, continuous optimization, and post-launch support tailored to your success.",
            image: "/images/industries/End-to-End-Development.jpg",
            cardicon: "/images/industries/end-to-end-development.svg",
        },
    ];
    return (
        <>
            <div className="container w-full">
                <div className=" pt-[120px] w-full flex justify-around">
                    <div
                        className="Option my-box flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '18px',
                            fontWeight: 400,
                            background: 'white'
                        }}
                    >
                        <span
                            style={{
                                background: 'linear-gradient(90deg, rgba(168, 86, 247, 1) 0%, rgba(106, 90, 205, 1) 50%, rgba(0, 161, 224, 1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '16px',

                                fontWeight: '600',
                                display: 'inline-block',
                            }}
                        >
                            AI-First Learning Models
                        </span>


                    </div>

                    <div
                        className="Option my-box flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            background: 'white'
                        }}
                    >
                        <span
                            style={{
                                background: '#6B7280',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '14px',

                                fontWeight: 'bold',
                                display: 'inline-block',
                            }}
                        >
                            Scalabele & Future-Ready Platforms
                        </span>


                    </div>

                    <div
                        className="Option my-box flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            background: 'white'
                        }}
                    >
                        <span
                            style={{
                                background: '#6B7280',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '14px',

                                fontWeight: 'bold',
                                display: 'inline-block',
                            }}
                        >
                            Tailored Solition for Every Sector
                        </span>


                    </div>

                    <div
                        className="Option my-box flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '14px',
                            fontWeight: 400,
                            background: 'white'
                        }}
                    >
                        <span
                            style={{
                                background: '#6B7280',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent',
                                fontSize: '14px',

                                fontWeight: 'bold',
                                display: 'inline-block',
                            }}
                        >
                            Comprehensive End-to-End Development
                        </span>


                    </div>
                </div>
                <div className="image mt-[50px] w-[600px] h-[275px] mx-auto relative">
                    <Image
                        src="/images/services/ai-first-model.png"
                        alt="AI Icon"
                        fill
                        className="object-contain mt-2 rounded-[20px]"
                    />
                </div>
                <div className="title mt-[40px]">
                    <div
                        className="aboutLinem flex gap-2 mx-auto w-fit px-[15px] py-[5px] rounded-full items-center"
                        style={{
                            fontSize: '18px',
                            fontWeight: 400,
                            background: 'linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)',
                            color: 'white', // ensures all text is white
                        }}
                    >
                        <span
                            style={{
                                fontSize: '18px',
                                fontWeight: '600', // medium weight
                            }}
                        >
                            PragetX for Education
                        </span>
                    </div>

                </div>
                <div className="description text-center  ">

                    <div className="mx-auto w-full mt-[30px]">
                        <h2 className='text-center mb-[20px]'>
                            Smart & Scalable Education Solutions
                        </h2>
                        <div className="div flex items-start justify-around">
                            <div className="leftIcon relative h-[50px] w-[50px] rounded-full overflow-hidden cursor-pointer">
                                <Ripple /> {/* HeroUI click effect */}
                                <Image
                                    src="images/services/leftIcon.svg"
                                    alt="Left Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <span className='text-[22px] font-semibold text-[#374151] '>
                                Comprehensive End-to-End Development
                            </span>

                            <div className="rightIcon relative h-[50px] w-[50px] rounded-full overflow-hidden cursor-pointer">
                                <Ripple /> {/* HeroUI click effect */}
                                <Image
                                    src="images/services/rightIcon.svg"
                                    alt="Right Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <p className='mt-[20px] !text-[18px] text-[#6B7280] ' style={{ fontWeight: '500' }}>
                            From strategic planning and UX design to AI integration and <br />deployment, we manage the entire lifecycle of your EdTech <br /> product. Our agile approach ensures timely delivery, continuous<br /> optimization, and post-launch support tailored to your success.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default IndustrySolution
