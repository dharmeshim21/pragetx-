"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import TeamCard from "./TeamCard";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const Team = ({ option = "Workflow Automation" }) => {
  const teams = [
    { id: 1, name: "Founders & Startups", description: "Scale without scaling costs" },
    { id: 2, name: "Engineering", description: "Deliver faster, together" },
    { id: 3, name: "Design", description: "Bring your vision to life" },
    { id: 4, name: "Marketing", description: "Create compelling campaigns" },
    { id: 5, name: "Sales", description: "Close deals, streamline workflows" },
    { id: 6, name: "Support", description: "Provide amazing customer service" },
  ];

  // Section data based on option
  const sections = useMemo(() => ({
    "Workflow Automation": {
      pill: "All Teams",
      heading: (
        <>
          Built for Every{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Team
          </span>{" "}
          Everywhere
        </>
      ),
    },
    "AI Agents": {
      pill: "Instant Customer Response",
      heading: (
        <>
          Every{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Industry
          </span>
          . Every Use Case
        </>
      ),
    },
    "Data & System Architech": {
      pill: "Built for All Scales",
      heading: (
        <>
          From Day One to{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Scale
          </span>
        </>
      ),
    },
  }), []);

  const currentSection = sections[option] || sections["Workflow Automation"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teams.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teams.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimationWrapper>
      <section className="bg-gradient-to-r from-[#A856F7]/10 via-[#6A5ACD]/10 to-[#00A1E0]/10">
        <div className="container w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Title */}
          <div className="upper flex flex-col items-center">
            <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2 w-fit px-[15px] py-[5px] mb-[13px] rounded-full items-center">
              <Image
                src="/homescreen/stars.png"
                alt="Stars"
                className="rounded-md"
                height={17}
                width={17}
              />
              <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent font-bold text-[16px]">
                {currentSection.pill}
              </span>
            </div>
            <h2>{currentSection.heading}</h2>
          </div>

          {/* Slider */}

          {option == 'Workflow Automation' && <>
            <div className="relative w-full flex items-center justify-around h-[600px]">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-30 h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out active:scale-95"
              >
                <Image src="/homescreen/left.png" alt="Left" height={40} width={40} />
              </button>

              {/* Cards */}
              <div className="relative flex items-center justify-center w-[1100px] h-full">
                {teams.map((team, index) => (
                  <div
                    key={team.id}
                    className={`absolute transition-all duration-500 ease-in-out
                    ${index === currentIndex ? "scale-100 z-20 opacity-100" : "scale-80 z-10"}
                    ${index === (currentIndex - 1 + teams.length) % teams.length ? "left-[37%] transform -translate-x-1/2 scale-85 opacity-80" : ""}
                    ${index === (currentIndex - 2 + teams.length) % teams.length ? "left-[29%] transform -translate-x-1/2 scale-65 opacity-60" : ""}
                    ${index === (currentIndex + 1) % teams.length ? "right-[29%] transform translate-x-1/2 scale-65 opacity-60" : ""}
                    ${index === (currentIndex + 2) % teams.length ? "right-[37%] transform translate-x-1/2 scale-85 opacity-80" : ""}
                    ${index !== currentIndex &&
                        index !== (currentIndex - 1 + teams.length) % teams.length &&
                        index !== (currentIndex - 2 + teams.length) % teams.length &&
                        index !== (currentIndex + 1) % teams.length &&
                        index !== (currentIndex + 2) % teams.length
                        ? "hidden" : ""}
                  `}
                    style={{ width: "54.8%" }}
                  >
                    <TeamCard team={team} />
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-30 h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out active:scale-95"
              >
                <Image src="/homescreen/right.png" alt="Right" height={40} width={40} />
              </button>
            </div>
          </>}

          {option == 'AI Agents' && <>
            <div className="relative w-full flex items-center justify-around h-[600px]">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-30 h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out active:scale-95"
              >
                <Image src="/homescreen/left.png" alt="Left" height={40} width={40} />
              </button>

              {/* Cards */}
              <div className="relative flex items-center justify-center w-[1100px] h-full">
                {teams.map((team, index) => (
                  <div
                    key={team.id}
                    className={`absolute transition-all duration-500 ease-in-out
                    ${index === currentIndex ? "scale-100 z-20 opacity-100" : "scale-80 z-10"}
                    ${index === (currentIndex - 1 + teams.length) % teams.length ? "left-[37%] transform -translate-x-1/2 scale-85 opacity-80" : ""}
                    ${index === (currentIndex - 2 + teams.length) % teams.length ? "left-[29%] transform -translate-x-1/2 scale-65 opacity-60" : ""}
                    ${index === (currentIndex + 1) % teams.length ? "right-[29%] transform translate-x-1/2 scale-65 opacity-60" : ""}
                    ${index === (currentIndex + 2) % teams.length ? "right-[37%] transform translate-x-1/2 scale-85 opacity-80" : ""}
                    ${index !== currentIndex &&
                        index !== (currentIndex - 1 + teams.length) % teams.length &&
                        index !== (currentIndex - 2 + teams.length) % teams.length &&
                        index !== (currentIndex + 1) % teams.length &&
                        index !== (currentIndex + 2) % teams.length
                        ? "hidden" : ""}
                  `}
                    style={{ width: "54.8%" }}
                  >
                    <TeamCard team={team} />
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-30 h-[60px] w-[60px] bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-200 ease-in-out active:scale-95"
              >
                <Image src="/homescreen/right.png" alt="Right" height={40} width={40} />
              </button>
            </div>
          </>}

          {option == 'Data & System Architech' && <>
            <Image
              src="/homescreen/optionsImgs/teamOption3.png"
              alt="Option3"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-md"
              priority
            />
          </>}

        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Team;
