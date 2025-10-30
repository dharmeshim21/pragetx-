import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@heroui/button";
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper';
import Chip from '../Chip/Chip'

const SuccessComp = ({ hide = true, swap = false, isTitle = false }) => {
  const ReadAllButton = () => (
    <Button className="flex items-center justify-center h-[50px] sm:h-[55px] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white transition-colors duration-200 ease-in-out rounded-full bg-gradient-to-r from-[#6A5ACD] to-[#00A1E0] hover:shadow-lg hover:shadow-[#00A1E0]/50">
      Read All Case Study
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12h-11M13 16.5l4.5-4.5-4.5-4.5" />
      </svg>
    </Button>
  );

  const TechTag = ({ children }) => (
    <span className="px-[12px] sm:px-[15px] py-[6px] sm:py-[8px] text-xs sm:text-sm rounded-full text-[#374151] bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] font-semibold">
      {children}
    </span>
  );

  return (
    <section className="bg-[linear-gradient(90deg,rgba(168,86,247,0.08)_0%,rgba(106,90,205,0.08)_50%,rgba(0,161,224,0.08)_100%)] py-[60px] sm:py-[80px]">
      <div className="container mx-auto px-4">

        {/* Optional Title */}
        {isTitle && (
          <AnimationWrapper direction="left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] mb-10 sm:mb-16 text-center">
              AI Success <span className="text-[#3756B9]">Stories</span>
            </h2>
          </AnimationWrapper>
        )}

        {/* Header and Button */}
        {hide && (
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mx-auto mb-12 sm:mb-16">
            <div>
              <AnimationWrapper direction="left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight">
                  <span className="text-[#3756B9]">Success</span> Stories That Matter
                </h2>
              </AnimationWrapper>
              <AnimationWrapper direction="right">
                <p className="mt-2 text-base sm:text-lg text-[#374151]">
                  See how companies are cutting costs and boosting efficiency with our AI-powered solutions.
                </p>
              </AnimationWrapper>
            </div>
            <div className="w-full md:w-auto">
              <ReadAllButton />
            </div>
          </div>
        )}

        {/* Main Card Section */}
        <div className={`flex flex-col ${swap ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[40px] overflow-hidden`}>
          {/* Left / Text Side */}
          <div className="w-full lg:w-5/12 self-center px-2 sm:px-0">
            <AnimationWrapper direction="left">
              {/* Category Tag */}
                 <Chip title={"Logistics & Supply Chain"} position={"start"}  className='lg:!mx-0 mb-2 mx-auto'/>


              {/* Logo & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left mt-[5px] lg:m-[0px]">
                <Image
                  className="mr-0 sm:mr-4 mb-3 sm:mb-0"
                  src="/homescreen/homeCard/success.png"
                  alt="Success"
                  width={80}
                  height={80}
                />
                <h3 className="font-bold text-[#1E293B] !sm:text-[32px] !md:text-[40px] leading-tight my-auto ">
                  SwiftLogix Smart Logistics{" "}
                  <span className="text-[#3730A3]">Automation</span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#6B7280] text-sm sm:text-base mb-8 leading-relaxed">
                SwiftLogix partnered with us to automate shipment tracking and customer support. By deploying AI agents, they reduced manual data entry by 75%, cut response times from hours to seconds, and improved overall delivery efficiency.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                <TechTag>AI Agents</TechTag>
                <TechTag>Predictive Analytics</TechTag>
                <TechTag>NLP Chatbot</TechTag>
              </div>

              {/* Link */}
              <Link
                href="#"
                className="group inline-flex items-center text-sm sm:text-base font-medium transition-all duration-300 ease-out hover:scale-105"
              >
                <span className="bg-gradient-to-r from-indigo-800 to-sky-400 bg-clip-text text-transparent">
                  Read Case Study
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110 text-indigo-800 group-hover:text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 12h-11M13 16.5l4.5-4.5-4.5-4.5" />
                </svg>
              </Link>
            </AnimationWrapper>
          </div>

          {/* Right / Image Side */}
          <div className="w-full lg:w-6/12 relative overflow-hidden rounded-[12px]">
            <AnimationWrapper direction="right">
              <Image
                src="/homescreen/homeCard/logistics-factory.png"
                alt="Logistics factory floor with automation"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover w-full h-auto"
              />
            </AnimationWrapper>
          </div>
        </div>

        {/* Navigation Arrows */}
        {hide && (
          <div className="flex justify-center gap-[20px] sm:gap-[40px] mt-[30px] sm:mt-[40px]">
            {['/homescreen/left.png', '/homescreen/right.png'].map((src, i) => (
              <button
                key={i}
                className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out active:scale-95"
              >
                <Image src={src} alt="arrow" height={30} width={30} />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SuccessComp;
