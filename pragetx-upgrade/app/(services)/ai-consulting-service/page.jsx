"use client"
import ScrollProgressBar from '@/components/ScrollProggress/ScrollProgressBar'
import Header from '@/layouts/Header/Header'
import Image from 'next/image'
import { Button } from '@heroui/button'
import React from 'react'
import Footer from '@/layouts/Footer/Footer'
import TechSelector from '@/components/TechSelector/TechSelector'
import ScrollingStep from '@/components/ScrollingSteps/ScrollingStep'
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper'
import WhyChooseCard from '@/components/WhyChooseUs/WhyChooseCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import SuccessComp from '@/components/success/SuccessComp'
import { Card, CardFooter } from '@nextui-org/react'
import TestimonialCard from '@/components/TrustedIndustry/TestimonialCard'
import { BlogCard } from '@/components/TrustedIndustry/AIAgentsSection'
import TopSlider from '@/components/TopSlider/TopSlider'
const page = () => {
    const buttons = ["ML Cloud Services", "Containerization", "RAG"];
    const techOptions = [
        {
            id: '1',
            title: 'Machine Learning',
            details: 'Custom machine learning algorithms that learn from your data to make predictions, recognize patterns, and improve over time.',
            keywords: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
            image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=ML+Image+Placeholder'
        },
        {
            id: '2',
            title: 'Natural Language Processing',
            details: 'Enabling computers to understand, interpret, and generate human language for tasks like translation, sentiment analysis, and chatbots.',
            keywords: ['Text Generation', 'Sentiment Analysis', 'Machine Translation'],
            image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=NLP+Image+Placeholder'
        },
        {
            id: '3',
            title: 'Computer Vision',
            details: 'Extracting meaningful information from digital images, videos, and other visual inputs to automate visual tasks.',
            keywords: ['Object Detection', 'Facial Recognition', 'Image Segmentation'],
            image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=CV+Image+Placeholder'
        },
        {
            id: '4',
            title: 'AI Chatbots',
            details: 'Intelligent conversational agents that simulate human conversation through voice commands or text chats, powered by AI.',
            keywords: ['Generative AI', 'Context Awareness', 'Customer Service Bots'],
            image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=Chatbot+Image+Placeholder'
        },
    ];

    const industries = [
        {
            title: "Government",
            img: "/images/government.png",
        },
        {
            title: "Startup",
            img: "/images/startup.png",
        },
        {
            title: "Healthcare",
            img: "/images/healthcare.png",
        },
        {
            title: "Supply chain",
            img: "/images/supplychain.png",
        },
    ];
    const testimonials = [
        {
            id: 1,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Clay Johnson',
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/priyanka-sharma.png',
        },
        {
            id: 2,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Alex', // Note: name mismatch from image for illustration
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/alex-sharma.png',
        },
        {
            id: 3,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Priyanka Sharma', // Note: name mismatch from image for illustration
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/priyanka-sharma.png',
        },
    ];

    const blogs = [
        {
            id: 1,
            imageUrl: '/homescreen/AgentCard/agent-card-1.png',
            altText: 'AI Robot Sitting',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
        {
            id: 2,
            imageUrl: '/homescreen/AgentCard/agent-card-2.png',
            altText: 'AI Brain Network',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
        {
            id: 3,
            imageUrl: '/homescreen/AgentCard/agent-card-3.png',
            altText: 'Humanoid Robot',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
    ];

    const WhyChooseServiceData = [
        {
            number: "1",
            title: "Expertise-Driven Team",
            description:
                "With years of experience and a deep understanding of emerging technologies, we transform innovative AI solutions into business growth.",
            img: "/images/services/growth.png",
            color: "#3C83F6",
        },
        {
            number: "2",
            title: "Fast Teamwork & Timely Deployment",
            description:
                "We follow agile workflows and streamlined coordination, ensuring efficient project management without compromising quality.",
            img: "/images/services/invention.png",
            color: "#A856F7",
        },
        {
            number: "3",
            title: "Highly Skilled Developers & Leaders",
            description:
                "Our top-tier developers excel in advanced AI techniques, delivering innovative, strategic, and technical solutions.",
            img: "/images/services/artificial-intelligence.png",
            color: "#3C83F6",
        },
        {
            number: "4",
            title: "Flexible Work Approach",
            description:
                "We adapt to client needs with customizable workflows, ensuring faster project completion and seamless delivery.",
            img: "/images/services/hands.png",
            color: "#A856F7",
        },
        {
            number: "5",
            title: "Scalable Solutions",
            description:
                "Our AI solutions are designed to scale effortlessly, featuring robust architecture and technology integration.",
            img: "/images/services/medal.png",
            color: "#3C83F6",
        },
        {
            number: "6",
            title: "Transparent Collaboration",
            description:
                "We keep you informed at every step, ensuring consistent decision-making for critical project phases.",
            img: "/images/services/navigation.png",
            color: "#A856F7",
        },
        {
            number: "7",
            title: "End-to-End Service",
            description:
                "From data collection to deployment, we offer full-stack support with integrated management.",
            img: "/images/services/recycle.png",
            color: "#3C83F6",
        },
        {
            number: "8",
            title: "Cutting-Edge Tools",
            description:
                "We leverage the latest AI, ML, and data frameworks, ensuring scalability and future-ready solutions.",
            img: "/images/services/security.png",
            color: "#A856F7",
        },
    ];


    const agentTitleGradient =
        "bg-clip-text text-transparent bg-[linear-gradient(50.25deg,_#3730A3_3.51%,_#38BDF8_30.28%)]"
    const borderGradient = agentTitleGradient; // Reusing the same gradient for the border
    const starImagePath = '/homescreen/homeCard/star.png';
    const dottedImagePath = '/homescreen/homeCard/dottedImg2.png';
    return (
        <>
            <section className='ai-services-bg min-h-screen '>
                <TopSlider
                    mainSubtitle="Artificial Intelligence Services"
                    title="Transforming Business"
                    titleBreak="Through AI"
                    gradientText="Innovation"
                    subtitle="Leverage cutting-edge artificial intelligence solutions to optimize operations,enhance customer experiences, and drive business growth in the digital era."
                    button="Talk To Our Consultant"
                />
            </section>


            <section style={{ paddingBottom: '0px' }}>
                <div className="container" >
                    <div className="flex flex-col items-center gap-[15px]">
                        <h2 className="font-bold ibm center">
                            <span className="text-[#3756B9] ">AI </span>{" "} Development Services We Offer
                        </h2>
                        <p className="w-full lg:w-[60%]  text-center" >
                            Unlock the full potential of artificial intelligence with our comprehensive suite of AI development services tailored to your business needs.
                        </p>
                    </div>
                </div>

                <TechSelector techOptions={techOptions} />
            </section>

            <section>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]" >
                        <h2 className="font-bold ibm">AI {" "}
                            <span className="text-[#3756B9] ">Lifecycle </span>{" "} Management
                        </h2>
                        <p className="w-full lg:w-[50%]  text-center" >
                            Our systematic approach to AI development ensures efficient delivery of robust AI solutions tailored to your business needs.
                        </p>
                    </div>
                    <ScrollingStep />
                </div>
            </section>

            <section className='bg-[linear-gradient(90deg,rgba(168,86,247,0.08)_0%,rgba(106,90,205,0.08)_50%,rgba(0,161,224,0.08)_100%)] mb-[120px] overflow-hidden'>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]" >
                        <h2 className="font-bold ibm text-3xl md:text-4xl">From Tools to {" "}
                            <span className="text-[#3756B9] ">Solutions </span>{" "}
                        </h2>
                        <p className="w-full md:w-[60%] text-center" >
                            See how we use these technologies to design real-world AI solutions for your business.
                        </p>
                    </div>


                    <div className="main mt-[70px] flex flex-col items-center lg:flex-row lg:justify-center lg:items-start w-full">

                        <div className="left relative z-10 h-[275px] w-full max-w-[370px] my-box bg-white/40 backdrop-blur-[8px] p-[20px] rounded-[20px] flex flex-col gap-[20px] mb-8 lg:mb-0" >
                            {/* NOTE: Using a hardcoded array to match the image */}
                            {["ML Cloud Services", "Containerization", "RAG"].map((text, i) => (
                                <button
                                    key={i}
                                    className="
                    group w-full h-[65px] backdrop-blur-[4px] my-box rounded-[10px] font-bold text-[23px] my-box
                    bg-white/2 text-[#374151] border-none transition-all duration-300
                    hover:bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)]
                  "
                                >
                                    <span className={`
                            ${i === 0 ? "text-transparent bg-clip-text  [background-image:linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]" : ""}
                            group-hover:text-transparent group-hover:bg-clip-text
                            group-hover:[background-image:linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]
                          `}>
                                        {text}
                                    </span>
                                </button>
                            ))}
                        </div>


                        <div className="center relative z-6 w-full max-w-[500px] px-[20px] h-[275px] mb-8 lg:mb-0 lg:-mx-5">
                            {/* Background Image */}
                            <Image
                                src="/images/ai-service-tool-bg.png"
                                alt="Background"
                                fill
                                className="object-contain z-0"
                            />

                            {/* 3 Icons on top */}
                            <div className="relative z-10 flex flex-row md:flex-row justify-center items-center h-full">
                                <div className="flex flex-col items-center justify-center w-[174px] h-[156px]">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/images/solutionImg/sagemaker-icon.png"
                                            className="object-contain h-full w-full"
                                            alt="Sagemaker"
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                    <span className="font-medium text-[18px] sm:text-[20px] lg:text-[25px] mt-2">
                                        Sagemaker
                                    </span>
                                </div>

                                <div className="flex flex-col justify-center items-center w-[174px] h-[156px]">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/images/solutionImg/vertexai-icon.png"
                                            className="object-contain h-full w-full"
                                            alt="VertexAI"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <span className="font-medium text-[18px] sm:text-[20px] lg:text-[25px] mt-2">
                                        VertexAI
                                    </span>
                                </div>

                                <div className="flex flex-col justify-center items-center w-[174px] h-[156px]">
                                    <div className="w-[80px] h-[80px]">
                                        <Image
                                            src="/images/solutionImg/azure-icon.png"
                                            className="object-contain h-full w-full"
                                            alt="Azure"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <span className="font-medium text-[18px] sm:text-[20px] lg:text-[25px] mt-2">
                                        Azure
                                    </span>
                                </div>
                            </div>


                        </div>



                        <div className="right relative z-10 h-[275px] w-full max-w-[370px] bg-white/40 backdrop-blur-[8px] p-[20px] rounded-[20px] flex flex-col gap-[20px]" >
                            {/* NOTE: Using a hardcoded array to match the image */}
                            {["LLM", "Vector DB", "ML(Machine Learning)"].map((text, i) => (
                                <button
                                    key={i}
                                    className="
                    backdrop-blur-[4px] group w-full h-[65px] rounded-[10px] font-bold text-[23px] my-box
                    bg-white/2 text-[#374151] border-none transition-all duration-300
                    hover:bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)]
                  "
                                >
                                    <span className="
                      group-hover:text-transparent group-hover:bg-clip-text
                      group-hover:[background-image:linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]
                    ">
                                        {text}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <AnimationWrapper>
                <div
                    className="
                    container
                    relative
                    py-[120px]
                    // mx-auto 
                     px-8  // Vertical padding for inner content centering
                    rounded-[50px]
                    overflow-hidden  
                    text-center
                    my-box
                    
                "
                    style={{
                        // Combine the dotted pattern and the gradient background
                        background: `
                        url(${dottedImagePath}) center/auto repeat, 
                        linear-gradient(91.69deg, #FF9A9E -0.03%, #4FACFE 99.97%)
                    `,
                    }}
                >
                    {/* Decorative Star 1 (Top-Right) */}
                    <img
                        src={starImagePath}
                        alt="Decorative Star"
                        className="absolute top-8 right-8 h-[50px] w-[50px] opacity-90 z-10"
                    />

                    {/* Decorative Star 2 (Bottom-Left) */}
                    <img
                        src={starImagePath}
                        alt="Decorative Star"
                        className="absolute bottom-8 left-8 h-[50px] w-[50px] opacity-90 z-10"
                    />

                    {/* Content Wrapper */}
                    <div className="relative z-20 flex flex-col items-center justify-center">


                        {/* Main Heading */}
                        <h1 className="text-white  leading-tight mb-[25px] mt-2" style={{}}>
                            {/* ⚡ Added mt-2 (margin-top: 2) to compensate slightly for mb-0 on p-tag */}
                            Need a Hand in Custom Software Development
                        </h1>
                        <p className="text-white text-lg mb-[25px] font-light tracking-wide" style={{ fontSize: '17px', color: 'white', fontWeight: 600 }}>
                            {/* ⚡ KEY FIX: Changed mb-4 to mb-0 (margin-bottom: 0) to remove the gap */}
                            We have a track record in helping brands like yours to scale faster
                        </p>
                        {/* Get Started Button (Kept existing styling) */}
                        <Button
                            className="
                            relative
                            inline-flex items-center justify-center
                            px-12 py-4
                            rounded-full
                            overflow-hidden
                            group
                            transition-all duration-300 ease-out transform
                            hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                        "
                        >
                            {/* ... button spans (unchanged) ... */}
                            <span
                                className="absolute inset-0 
                                bg-gradient-to-r from-gray-50 to-white 
                                transition-all duration-300 ease-out 
                                group-hover:opacity-0"
                            ></span>

                            <span
                                className="absolute inset-0 
                                bg-gradient-to-r from-white to-gray-50 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300 ease-out"
                            ></span>

                            {/* Text with gradient */}
                            <span
                                className="relative z-10 text-xl font-bold 
                                bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                text-transparent bg-clip-text
                                transition-colors duration-300 ease-out"
                            >
                                Became A Partner
                            </span>
                        </Button>
                    </div>
                </div>
            </AnimationWrapper>

            {
                // why choose 
            }
            <section>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]">
                        <h2 className="font-bold ibm">
                            Why Choose <span className="text-[#3756B9]">Us</span>
                        </h2>
                        <p className="w-full lg:w-[50%] text-center">
                            Partner with a team that combines deep technical expertise with
                            business acumen to deliver AI solutions that drive real value.
                        </p>
                    </div>

                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={40} // ✅ reduced from 250 → 40
                        slidesPerGroup={1}
                        mousewheel={true}
                        freeMode={true}
                        pagination={false}
                        centerInsufficientSlides={true}
                        modules={[Mousewheel, FreeMode]}
                        className="mySwiper mt-[50px] pt-6 !flex-nowrap"
                        breakpoints={{
                            320: { spaceBetween: 16 },   // 📱 mobile
                            640: { spaceBetween: 24 },   // 📲 small tablet
                            1024: { spaceBetween: 40 },  // 💻 desktop
                            1440: { spaceBetween: 60 },  // 🖥️ large screen
                        }}
                    >
                        {WhyChooseServiceData.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    width: "auto", // ✅ cards auto-size to their content (from responsive width in component)
                                    maxWidth: "500px", // prevent too wide cards
                                }}
                            >
                                <WhyChooseCard
                                    title={item.title}
                                    description={item.description}
                                    img={item.img}
                                    color={item.color}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>
            </section>


            <div className="Sucess ">
                <SuccessComp hide={false} isTitle={true} />
                <SuccessComp hide={false} swap={true} />
                <SuccessComp hide={false} swap={false} />
                <SuccessComp hide={false} swap={true} />
            </div>

            <section className="text-center py-16 bg-white">
                {/* Heading */}
                <h2 className="font-bold ibm">
                    Industries Transforming with  <span className="text-[#3756B9] ">AI</span>
                </h2>
                <p className="w-full lg:w-[50%]  text-center mx-auto mt-[15px]" >
                    Discover how artificial intelligence is revolutionizing operations and
                    creating new opportunities across various sectors.
                </p>

                <div className="mt-[70px] flex flex-wrap justify-center gap-[25px]">
                    {industries.map((item, index) => (
                        <Card
                            key={index}
                            isFooterBlurred
                            radius="lg"
                            className="border-none w-[280px] h-[300px] overflow-hidden relative hover:scale-105 transition-transform duration-300 rounded-[20px]"
                        >
                            {/* Dark overlay (under text, over image) */}
                            <Image
                                alt={item.title}
                                className="object-cover w-full h-full brightness-95 contrast-110"
                                height={300}
                                src={item.img}
                                width={280}
                            />
                            <div className="absolute inset-0 bg-black/30 z-[5] mix-blend-multiply"></div>

                            <CardFooter className="justify-center absolute bottom-0 w-full py-3 backdrop-blur-[4px] z-[10]">
                                <p className="text-lg font-semibold text-white" style={{ color: 'white' }}>
                                    {item.title}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>


            <section className='bg-[linear-gradient(90deg,rgba(168,86,247,0.08)_0%,rgba(106,90,205,0.08)_50%,rgba(0,161,224,0.08)_100%)]'>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]">
                        <h2 className="font-bold ibm">
                            Wall of {" "}<span className="text-[#3756B9] ">Trust </span>
                        </h2>
                        <p className="w-full lg:w-[59%]  text-center" >
                            Our work speaks for itself. Take a look why our clients love team PragetX. They are not just our customers, but they are part of one large extended family.                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px] mt-[70px] md:justify-between  w-full items-center place-items-center ">
                        {testimonials.map(testimonial => (
                            // ⚡ Added w-full md:w-1/3 or similar classes for flex item sizing
                            <TestimonialCard isWhite={true} key={testimonial.id} {...testimonial} className="w-full md:w-[32%] lg:w-[31%] mb-6 md:mb-0" />
                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]">
                        <h2 className="font-bold ibm">
                            Related {" "}<span className="text-[#3756B9] ">Blogs </span>
                        </h2>
                    </div>
                    <AnimationWrapper>

                        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px] mt-[70px] md:justify-between ">
                            {blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    imageUrl={blog.imageUrl}
                                    altText={blog.altText}
                                    title={blog.title}
                                    date={blog.date}
                                    // Pass the gradient classes as props
                                    agentTitleGradient={agentTitleGradient}
                                    borderGradient={borderGradient}
                                />
                            ))}
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
        </>
    )
}

export default page