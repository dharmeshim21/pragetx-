"use client"
import CardOfAi from "@/components/AiSection/CardOfAi";
import ToolSection from "@/components/AiSection/ToolSection";
import AnimationWrapper from "@/components/AnimationWrapper/AnimationWrapper";
import AutoMate from "@/components/AutomateCard/AutoMate";
import GetStarted from "@/components/GetStartedAi/GetStarted";
import Growth from "@/components/GrowthSection/Growth";
import ScrollProgressBar from "@/components/ScrollProggress/ScrollProgressBar";
import SuccessComp from "@/components/success/SuccessComp";
import Team from "@/components/TeamSlider/Team";
import TimeNow from "@/components/TimeNowSectionCard/TimeNow";
import AIAgentsSection from "@/components/TrustedIndustry/AIAgentsSection";
import TrustedUI from "@/components/TrustedIndustry/TrustedUI";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import Image from "next/image";
import { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Button, ButtonGroup } from "@heroui/button";
import StikyTabs from "@/components/StikyTabs/StikyTabs";

export default function Home() {


  return (
    <>

      <AnimationWrapper>
        <section className="hero  text-center" style={{
          backgroundImage: `url("/homescreen/homeCard/dottedImg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '40px',
          paddingBottom: '0px'
        }}>
          <div className="container  z-20">
            <div className="left-icons ">
              <Image
                src="/homescreen/vscode.png"
                alt="Stars"
                className="rounded-md absolute left-[150px] top-[140px]"
                height={90}
                width={90}
              />
              <Image
                src="/homescreen/icons2.png"
                alt="Stars"
                className="rounded-md absolute left-[140px] top-[330px]"
                height={100}
                width={110}
              />
            </div>
            <div
              className="aboutLinem bg-gradient-to-r from-[#A856F7]/7 via-[#6A5ACD]/8 to-[#00A1E0]/8  flex gap-2 mx-auto w-fit px-[10px] py-[5px] rounded-full items-center"
              style={{ fontSize: '14px', fontWeight: 400 }}
            >
              <Image
                src="/homescreen/stars.png"
                alt="Stars"
                className="rounded-md"
                height={20}
                width={15}
              />
              <span
                className="bg-gradient-to-r from-[#B183F9] via-[#7C6DD6] to-[#33C0F0] bg-clip-text text-transparent"
                style={{
                  fontSize: '15px',
                  fontWeight: '600', // medium weight
                }}
              >
                Trusted by businesses in finance, healthcare, logistics, retail, and beyond.
              </span>
            </div>

            <div className="middle flex flex-col items-center mt-5 ">
              <div className="mb-[15px] flex flex-col ibm" style={{ fontWeight: 'bolder', lineHeight: 1.3 }}>
                <h1
                  style={{
                    fontSize: '65px',

                  }}
                >
                  Automate,
                </h1>

                <h1
                  style={{
                    fontSize: '65px',

                  }}
                >
                  Accelerate &<span className="
                  " style={{
                      backgroundImage: `url("/homescreen/scale.png")`,
                      paddingLeft: '10px',
                      marginLeft: '2px',
                      paddingRight: '10px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                    <span
                      style={{
                        fontSize: '65px',
                        background: 'linear-gradient(97.98deg, #4D73ED 0%, #4D73ED 70%, #38BDF8 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >Scale</span></span>
                </h1>
              </div>

              <p className="w-[600px]  text-[#777777]" style={{ fontWeight: 600, fontSize: '16px', lineHeight: 1.2 }}>Unlock the future of work with AI Agents, Workflow Automation, and Smart Data Architecture. From startups to enterprises, we help businesses cut costs, save time, and grow faster without the tech headaches.</p>

              <div className="btns flex gap-5 items-center justify-center mt-[30px]">
                <Button
                  className="cursor-pointer bg-gradient-to-r h-[38px] w-[170px] from-[#3730A3] to-[#38BDF8] px-[4px] text-white rounded-full"
                >
                  Get Started
                </Button>

                {/* Animated See How It Works Button */}
                <Button
                  className="cursor-pointer bg-white px-[4px]  h-[38px] font-medium w-[170px] py-1 my-box text-[#374151] rounded-full"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="mainImg relative h-[400px]">
              <Image
                src="/homescreen/main.png"
                alt="Hero Image"
                className="rounded-md object-cover "
                fill
              />
            </div>

            <div className="left-icons ">
              <Image
                src="/homescreen/figma.png"
                alt="Stars"
                className="rounded-md absolute right-[150px] top-[200px]"
                height={90}
                width={90}
              />

            </div>
          </div>

        </section>
      </AnimationWrapper>

      <AnimationWrapper>
        <div className="switchingButtons relative pt-[120px] pb-[60px] ">
          <div className="container">
            <div className="flex flex-col items-center gap-[15px]">
              <h2 className="font-bold ibm">
                <span className="text-[#3756B9] ">Workflows</span> that work for you
              </h2>
              <p className="w-[880px]  text-center" >
                Automate repetitive tasks, empower AI-driven decision-making, and build a
                secure, scalable digital backbone so your business runs faster, smarter, and
                more reliably than ever.
              </p>
            </div>

          </div>
        </div>
      </AnimationWrapper>


      {/* Stiky Tab contains Components Rendering according to option in Stiky Tab */} 
      <StikyTabs />

      <CardOfAi />


      <ToolSection />

      <SuccessComp />

      <TrustedUI />

      <AIAgentsSection />

      <GetStarted />

    </>
  );
}



