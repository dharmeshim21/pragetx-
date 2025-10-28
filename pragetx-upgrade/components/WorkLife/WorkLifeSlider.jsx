"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";

export default function WorkLifeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const options = [
    "Constructive Feedback",
    "Learning & Development",
    "Mindful Personal Guidance",
    "Inclusive & Open-Culture",
    "Innovation & Quality First",
    "Productive Implementation",
    "Best & Global Opportunities",
    "Work with Latest Technologies",
    "Evolving Culture",
  ];

  return (
    <section className="pt-0">
      <div className="container text-center flex flex-col items-center justify-center gap-5 px-0 md:px-6 rounded-[20px]">
        <h1>
          Work Life At Its <span className="text-[#A856F7]">Best</span>
        </h1>
        <p className="font-[500] text-[16px] text-center text-[#374151] leading-5 tracking-normal md:px-28">
          A passionate team that develops an encouraging and innovative work
          culture that you’re actively looking forward to collaborating with
        </p>

        {/* Swiper slider with cards */}
        <div className="w-full h-[550px] mt-10 slider">
          <Swiper
            direction="vertical"
            slidesPerView={1.2}
            spaceBetween={0}
            centeredSlides={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ height: "100%" }}
            allowTouchMove={true} // Enable drag/swipe
          >
            {options.map((option, index) => (
              <SwiperSlide
                key={index}
                className={activeIndex === index ? "slide-active" : "slide-preview"}
              >
                <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden shadow-lg">
                  <Image
                    src="/homescreen/WorkLife.png"
                    alt={`Slide ${index}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl font-bold text-white">
                    {option}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
