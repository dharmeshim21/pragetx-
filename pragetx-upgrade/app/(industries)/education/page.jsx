"use client"
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper';
import IndustrySolution from '@/components/IndustrySolution/IndustrySolution';
import SuccessComp from '@/components/success/SuccessComp';
import TechSelector from '@/components/TechSelector/TechSelector'
import WhyChooseCard from '@/components/WhyChooseUs/WhyChooseCard';
import { Button } from '@heroui/button'
import React from 'react'
import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import TestimonialCard from '@/components/TrustedIndustry/TestimonialCard';
import { BlogCard } from '@/components/TrustedIndustry/AIAgentsSection';
// export const metadata = {
//   title: 'AI Solutions for Education | PragetX',
//   description: 'Transform educational experiences with PragetX’s AI solutions. From adaptive learning systems to automated administration and predictive analytics, we empower institutions with smarter, scalable, and personalized AI-powered education tools.',
//   keywords: "AI in education, EdTech AI, adaptive learning, student performance analytics, AI for schools, education automation, personalized learning AI, education chatbot, academic AI, AI teaching assistant",
//   alternates: {
//     canonical: '/education/',
//   },
//   openGraph: {
//     title: 'AI Solutions for Education | PragetX',
//     description: 'Hire AI professionals from PragetX who will dedicatedly work on your business AI projects to meet unique intelligence needs with satisfactory results.',
//     url: '/industries/healthcare/',
//     images: 'https://pragetx.ai/images/ai-ml-main-bg.jpg',
//   },
//   icons: {
//     icon: [{ url: '/images/favicon.png', type: 'image/webp' }],
//     shortcut: [{ url: '/images/favicon.png', type: 'image/x-icon' }, { url: '/images/favicon.ico', type: 'image/x-icon' }],
//   },
//   verification: {
//     google: '',
//   },
// };

const IndustryImpactData = [
  {
    id: "1",
    title: "Personalized Learning Paths",
    details: "AI customizes content and pacing to boost comprehension, retention, and engagement for each student.",
    borderColor: "#3C83F6",
    image: '/images/industries/Personalized-Learning.jpg'
  },
  {
    id: "2",
    title: "Smart Tutoring Systems",
    details: "AI virtual tutors give instant feedback, helping students learn faster without waiting for help.",
    borderColor: "#A856F7",
    image: '/images/industries/Smart-Tutoring-Systems.jpg'
  },
  {
    id: "3",
    title: "Automated Assessments",
    details: "AI streamlines grading, saving time and giving instant insights into student performance and progress.",
    borderColor: "#3C83F6",
    image: '/images/industries/Automated-Assessments.jpg'
  },
  {
    id: "4",
    title: "Predictive Analytics for Student Success",
    details: "AI analyzes academic behavior to identify at-risk students early, enabling timely interventions and improved retention rates.",
    borderColor: "#A856F7",
    image: '/images/industries/Predictive-Analytics.jpg'
  },
];
const WhyChooseServiceData = [
  {
    number: "1",
    title: "Growth",
    description: "We continuously help businesses grow through innovation and scalable technology.",
    img: "/images/services/growth.png",
    color: "#3C83F6"
  },
  {
    number: "2",
    title: "Invention",
    description: "Our approach is rooted in invention — building unique solutions tailored for your challenges.",
    img: "/images/services/invention.png",
    color: "#A856F7"
  },
  {
    number: "3",
    title: "Artificial Intelligence",
    description: "Harnessing AI to automate processes, uncover insights, and enhance decision-making.",
    img: "/images/services/artificial-intelligence.png",
    color: "#3C83F6"
  },
  {
    number: "4",
    title: "Hands",
    description: "We collaborate hand-in-hand with clients to deliver seamless, effective results.",
    img: "/images/services/hands.png",
    color: "#A856F7"
  },
  {
    number: "5",
    title: "Medal",
    description: "Our commitment to excellence has earned us recognition for high-quality performance.",
    img: "/images/services/medal.png",
    color: "#3C83F6"
  },
  {
    number: "6",
    title: "Navigation",
    description: "We guide businesses through complex digital landscapes with precision and strategy.",
    img: "/images/services/navigation.png",
    color: "#A856F7"
  },
  {
    number: "7",
    title: "Recycle",
    description: "Sustainability is built into our process — reusing, optimizing, and improving continuously.",
    img: "/images/services/recycle.png",
    color: "#3C83F6"
  },
  {
    number: "8",
    title: "Security",
    description: "Protecting data and ensuring system integrity is our topmost priority.",
    img: "/images/services/security.png",
    color: "#A856F7"
  }
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
const agentTitleGradient =
  "bg-clip-text text-transparent bg-[linear-gradient(50.25deg,_#3730A3_3.51%,_#38BDF8_30.28%)]"
const borderGradient = agentTitleGradient; // Re
const page = () => {

  return (
    <>
      <section className='education-bg min-h-screen '>
        <div className="container xl:pt-[100px] ">
          <div className="div">
            <div
              className="aboutLinem flex gap-2 mx-auto w-fit px-[15px] py-[5px] rounded-full items-center"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                background: 'linear-gradient(90deg, rgba(168, 86, 247, 0.5) 0%, rgba(106, 90, 205, 0.5) 50%, rgba(0, 161, 224, 0.5) 100%)'
              }}
            >
              <span
                className="text-white"
                style={{
                  fontSize: '15px',
                  fontWeight: '500', // medium weight
                }}
              >
                Artificial Intelligence Services </span>

            </div>

            <div className="middle flex flex-col items-center mt-5 ">
              <div className="mb-[15px] my-auto w-[75%] text-center ibm" style={{ fontWeight: 'bolder', lineHeight: 1.3, color: 'white' }}>
                <h1
                  style={{

                  }}
                >
                  AI-Driven Revolution<br />
                  in <span className="bg-[linear-gradient(95.74deg,#3730A3_-29.39%,#38BDF8_114.09%)] bg-clip-text text-transparent"> Education</span>
                </h1>


              </div>

              <p className="w-[72%] text-center" style={{ fontWeight: 500, fontSize: '18px', lineHeight: 1.2, color: 'white' }}>AI-powered learning transforms education with personalized experiences, smart tutoring, and automation boosting engagement, efficiency, and lifelong learning for students and educators.</p>

              <div className="btns  mt-[30px]">
                <Button
                  className="cursor-pointer bg-gradient-to-r h-[38px] w-[220px] font-bold from-[#3730A3] to-[#38BDF8] px-[10px]  text-white rounded-full"
                >
                  Talk To Our Consultant
                </Button>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{}}>
        <div className="container" >
          <div className="flex flex-col items-center gap-[15px]">
            <h2 className="font-bold ibm">The Impact of
              <span className="text-[#3756B9] "> AI </span>{" "} in Education
            </h2>
            <p className="w-[60%]  text-center" >
              PragetX is transforming education through AI, creating personalized, scalable, and secure learning experiences.                        </p>
          </div>
        </div>

        <TechSelector techOptions={IndustryImpactData} imagePath='/images/services/ai-education.png' />
      </section>

      <section className='bg-[linear-gradient(90deg,rgba(168,86,247,0.08)_0%,rgba(106,90,205,0.08)_50%,rgba(0,161,224,0.08)_100%)]' style={{ paddingTop: '0px' }}>
        <IndustrySolution />
      </section>


      <section className="p-0">
        <AnimationWrapper>

          <div
            className="
                                    container
                                    relative
                                    mx-auto
                                    py-[100px]
                                    rounded-[50px]
                                    overflow-hidden
                                    text-center
                                 my-box"
            style={{
              background: `
                                    url('/homescreen/homeCard/dottedImg2.png') center/auto repeat,
                                    linear-gradient(91.69deg, #FF9A9E -0.03%, #4FACFE 99.97%)`,
            }}
          >
            {/* ⭐ Decorative Star 1 (Top-Right) */}
            <img
              src="/homescreen/homeCard/star.png"
              alt="Decorative Star"
              className="
                                    absolute top-8 right-8
                                    w-[40px] h-[40px]
                                    sm:w-[55px] sm:h-[55px]
                                    md:w-[65px] md:h-[65px]
                                    xl:w-[80px] xl:h-[80px]
                                    z-10 "
            />

            {/* ⭐ Decorative Star 2 (Bottom-Left) */}
            <img
              src="/homescreen/homeCard/star.png"
              alt="Decorative Star"
              className="
                                    absolute bottom-8 left-8
                                    w-[40px] h-[40px]
                                    sm:w-[55px] sm:h-[55px]
                                    md:w-[65px] md:h-[65px]
                                    xl:w-[80px] xl:h-[80px]
                                    z-10 "
            />

            {/* 🌟 Content */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <h2 className="text-white leading-tight mb-8 mt-2 ">
                Ready to Transform Your Educational Experience?
              </h2>

              <p
                className="text-white text-lg mb-0 font-light tracking-wide w-auto 2xl:w-[90%]"
                style={{ color: 'white', fontWeight: 600 }}
              >
                Let's explore how our AI-powered education solutions can enhance student engagement, personalize learning, improve academic outcomes, and optimize institutional efficiency.
              </p>

              <Button
                className="
                                        mt-[30px]
                                        relative
                                        inline-flex items-center justify-center
                                        px-12 py-4
                                        rounded-full
                                        overflow-hidden
                                        group
                                        transition-all duration-300 ease-out transform
                                        hover:scale-105 active:scale-95
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white "
              >
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

                <span
                  className="relative z-10 text-xl font-bold 
                                        bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                        text-transparent bg-clip-text
                                        transition-colors duration-300 ease-out"
                >
                  Become a Partner
                </span>
              </Button>
            </div>
          </div>
        </AnimationWrapper>
      </section>

      <section>
        <div className="Sucess ">
          <SuccessComp hide={false} isTitle={true} />
          <SuccessComp hide={false} swap={true} />
          <SuccessComp hide={false} swap={false} />
          <SuccessComp hide={false} swap={true} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col items-center gap-[15px]">
            <h2 className="font-bold ibm">
              Why Choose PragetX for <span className="text-[#3756B9]">Education ?</span>
            </h2>

          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={250}
            slidesPerGroup={1}
            mousewheel={true}
            freeMode={true}
            pagination={false}
            centerInsufficientSlides={true}
            modules={[Mousewheel, FreeMode]}
            className="mySwiper mt-[70px] pt-10 !flex-nowrap"
          >
            {WhyChooseServiceData.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "300px" }}>
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

      <section className='bg-[linear-gradient(90deg,rgba(168,86,247,0.08)_0%,rgba(106,90,205,0.08)_50%,rgba(0,161,224,0.08)_100%)]'>
        <div className="container">
          <div className="flex flex-col items-center gap-[15px]">
            <h2 className="font-bold ibm">
              Wall of {" "}<span className="text-[#3756B9] ">Trust </span>
            </h2>
            <p className="w-[59%]  text-center" >
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
