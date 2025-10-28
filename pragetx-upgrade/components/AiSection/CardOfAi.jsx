"use client";

import React, { useState } from "react";
import CardVideo from "./CardVideo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import AstrologyIcon from "/public/homescreen/videosSvg/astrology-and-spiritual-tech.svg";
import GovtIcon from "/public/homescreen/videosSvg/government-and-public.svg";
import AIIcon from "/public/homescreen/videosSvg/artificial-intelligence.svg";
import EducationIcon from "/public/homescreen/videosSvg/education.svg";
import MediaIcon from "/public/homescreen/videosSvg/media-and-entertainment.svg";
import LogisticsIcon from "/public/homescreen/videosSvg/logistics-and-supply-chain.svg";
import HealthcareIcon from "/public/homescreen/videosSvg/health-care.svg";
import FintechIcon from "/public/homescreen/videosSvg/fintech.svg";
import ManufacturingIcon from "/public/homescreen/videosSvg/manufacturing.svg";
import StartupIcon from "/public/homescreen/videosSvg/startup.svg";
import RealEstateIcon from "/public/homescreen/videosSvg/real-estate-and-construction.svg";
import InsuranceIcon from "/public/homescreen/videosSvg/insurance.svg";
import XaaSIcon from "/public/homescreen/videosSvg/xaas-product-development.svg";
import SocialIcon from "/public/homescreen/videosSvg/social-networking.svg";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import Image from "next/image";
const CardOfAi = () => {
  const navItems = [
    {
      label: "Astrology & Spiritual Tech",
      value: "astrology-and-spiritual-tech",
      videoPath: "astrology-and-spiritual-tech.mp4",
      Icon: AstrologyIcon,
      title:
        "Astrology and spiritual technology that learns, adapts, and powers innovation across industries.",
    },
    {
      label: "Govt & Public Sector",
      value: "government-and-public",
      videoPath: "government-and-public.mp4",
      Icon: GovtIcon,
      title:
        "Government and public sector solutions that learn, adapt, and power innovation across industries.",
    },
    {
      label: "Artificial Intelligence",
      value: "artificial-intelligence",
      videoPath: "artificial-intelligence.mp4",
      Icon: AIIcon,
      title: "AI that learns, adapts, and powers innovation across industries.",
    },
    {
      label: "Education",
      value: "education",
      videoPath: "education.mp4",
      Icon: EducationIcon,
      title:
        "Education and EdTech solutions that learn, adapts, and powers innovation across industries.",
    },
    {
      label: "Media & Entertainment",
      value: "media-and-entertainment",
      videoPath: "media-and-entertainment.mp4",
      Icon: MediaIcon,
      title:
        "Media and entertainment solutions that learn, adapt, and power innovation across industries.",
    },
    {
      label: "Logistics & Supply Chain",
      value: "logistics-and-supply-chain",
      videoPath: "logistics-and-supply-chain.mp4",
      Icon: LogisticsIcon,
      title:
        "Logistics and supply chain solutions that learn, adapt, and power innovation across industries.",
    },
    {
      label: "Healthcare",
      value: "health-care",
      videoPath: "health-care.mp4",
      Icon: HealthcareIcon,
      title:
        "Healthcare solutions that learn, adapts, and powers innovation across industries.",
    },
    {
      label: "Fintech",
      value: "fintech",
      videoPath: "fintech.mp4",
      Icon: FintechIcon,
      title: "Empowering finance with secure, innovative solutions for seamless, trusted transactions.",
    },
    {
      label: "Manufacturing & Innovation",
      value: "manufacturing",
      videoPath: "manufacturing.mp4",
      Icon: ManufacturingIcon,
      title: "Implementing smart factory solutions and IoT integration for improved productivity.",
    },
    {
      label: "Startup",
      value: "startup",
      videoPath: "startup.mp4",
      Icon: StartupIcon,
      title: "Offering scalable tech solutions to help startups grow rapidly and efficiently.",
    },
    {
      label: "Real Estate & Construction",
      value: "real-estate-and-construction",
      videoPath: "real-estate-and-construction.mp4",
      Icon: RealEstateIcon,
      title: "Developing property management systems and construction project tools.",
    },
    {
      label: "Insurance",
      value: "insurance",
      videoPath: "insurance.mp4",
      Icon: InsuranceIcon,
      title: "Delivering risk assessment tools and customer management systems for insurers.",
    },
    {
      label: "XaaS Product",
      value: "xaas-product-development",
      videoPath: "xaas-product-development.mp4",
      Icon: XaaSIcon,
      title: "Developing scalable cloud platforms for flexible, on-demand business solutions.",
    },
    {
      label: "Social Networking",
      value: "social-networking",
      videoPath: "social-networking.mp4",
      Icon: SocialIcon,
      title: "Creating social platforms with real-time features to foster meaningful connections.",
    },
  ];



  const [activeIndex, setActiveIndex] = useState(3); // default AI

  return (
    <>
      <div className="container">
        <AnimationWrapper>
          <div className="footSection flex ju mt-[120px] w-full justify-between pr-[15px] pl-[30px]  my-box py-[20px]" style={{ borderRadius: '24px' }}>
            <div className="left w-1/2 my-auto flex flex-col   ">
              <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2  w-fit  px-[15px] py-[5px]  mb-[13px] rounded-full items-center">
                <Image
                  src="/homescreen/stars.png"
                  alt="Stars"
                  className="rounded-md"
                  height={17}
                  width={17}
                />
                <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent" style={{ fontWeight: 700, fontSize: '16px' }}>
                  Why Pragetx.ai
                </span>
              </div>
              <h2 className='mt-[0px]' style={{ lineHeight: '1.3' }}>
                An{" "}
                <span className='bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text'>
                  AI innovation{" "}
                </span>
                partner trusted by organizations worldwide!
              </h2>
              <p className='mt-[20px]' style={{ fontWeight: 500, color: '#6B7280' }}>
                Join hands with our skilled team to turn bold ideas into practical, scalable AI solutions.
              </p>
              <button className="mt-[15px] flex items-center w-fit gap-2 px-[20px] py-[15px] cursor-pointer rounded-full text-white bg-gradient-to-r from-[#3730A3] to-[#38BDF8] hover:opacity-90 transition" style={{ fontWeight: 500, fontSize: '18px' }}>
                Let’s build the future together with AI
                <span className="ml-2">➜</span>
              </button>

            </div>
            <div className="right ">
              <Image
                src={"/homescreen/TimeNow/aiImage.png"}
                alt="Ai"
                className="rounded-lg -webkit-fill-available"
                height={800}
                width={550}
              />
            </div>
          </div>
        </AnimationWrapper>
      </div>
      <div className=" w-full flex flex-col items-center justify-center my-[150px]">
        {/* Nav Items with Swiper */}
        <div className="w-full  relative">
          <Swiper

            modules={[FreeMode]}
            freeMode={true}
            grabCursor={true}
            slidesPerView="auto"
            spaceBetween={10}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            centeredSlides={true}
            initialSlide={activeIndex}
            className="w-full custom-cursor-swiper"
          >
            {navItems.map((item, idx) => {
              const isActive = idx === activeIndex;
              const Icon = item.Icon;

              return (
                <SwiperSlide
                  key={item.value}
                  style={{ width: "auto" }}
                  className="flex items-center justify-center"
                >
                  <div className="px-4 py-2 flex items-center justify-center relative transition-all duration-300 ease-in-out">
                    <div className="flex items-center gap-2">

                      {/* SVG Wrapper */}
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: isActive ? "35px" : "23px",
                          height: "23px",
                        }}
                      >
                        {/* SVG gradient definition */}
                        <svg width="0" height="0" style={{ position: "absolute" }}>
                          <defs>
                            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3730A3" />
                              <stop offset="50%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <div
                          className="flex items-center justify-center transition-all duration-300"
                          style={{ width: isActive ? 35 : 23, height: 23 }}
                        >
                          <Icon
                            className="w-full h-full transition-all duration-300"
                            // Set fill to the gradient URL when active, or 'none' when inactive
                            fill={isActive ? "url(#icon-gradient)" : "none"}
                            // Set stroke (border) to the gradient URL when active, or 'currentColor' when inactive
                            stroke={isActive ? "url(#icon-gradient)" : "currentColor"}
                            // You might also need to adjust the strokeWidth for the border
                            strokeWidth={isActive ? "1.5" : "1.5"} // Adjust strokeWidth as needed for visual fidelity
                          />
                        </div>
                      </div>

                      {/* Label */}
                      <h4
                        className={`transition-all duration-300 ${isActive
                          ? "font-semibold bg-gradient-to-r from-[#3730A3] via-[#6366F1] to-[#38BDF8] text-transparent bg-clip-text"
                          : "text-gray-400 opacity-70 hover:opacity-100"
                          }`}
                        style={{
                          fontSize: isActive ? "20px" : "16px",
                          lineHeight: "1",
                        }}
                      >
                        {item.label}
                      </h4>
                    </div>

                    {/* Gradient underline */}
                    {isActive && (
                      <span
                        className="block absolute bottom-0 right-[13px] h-[2px] w-[74%] rounded"
                        style={{
                          background:
                            "linear-gradient(95.74deg, #3730A3 -29.39%, #38BDF8 114.09%)",
                        }}
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}





          </Swiper>

          {/* Gradient Fade Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-gradient-to-r from-[#FAFAFA] via-transparent to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-l from-[#FAFAFA] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="video  w-full container">
          {navItems[activeIndex] && (
            <CardVideo
              videoPath={`/videos/${navItems[activeIndex].videoPath}`}
              title={navItems[activeIndex].title}
            />
          )}
        </div>
      </div>
    </>

  );
};

export default CardOfAi;
