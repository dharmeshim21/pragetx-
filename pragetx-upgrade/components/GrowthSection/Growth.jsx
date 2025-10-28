"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const Growth = ({ option = "Workflow Automation" }) => {
  const [activeId, setActiveId] = useState(1); // default active = 1

  // Data for items based on option
  const itemsData = {
    "Workflow Automation": [
      { id: 1, text: "Reduce repetitive admin tasks by up to 80%." },
      { id: 2, text: "Average 22% reduction in operating costs." },
      { id: 3, text: "Teams scale without adding headcount." },
    ],
    "AI Agents": [
      { id: 1, text: "Consistent style matching your brand voice." },
      { id: 2, text: "Learns past interactions for personalized context." },
      { id: 3, text: "Understands, decides, and acts with logic." },
    ],
    "Data & System Architech": [
      { id: 1, text: "Structures and updates information efficiently." },
      { id: 2, text: "Secures data with authorized access." },
      { id: 3, text: "Unifies apps, CRMs, and workflows." },
    ],
  };

  // Section titles & pill based on option
  const sections = {
    "Workflow Automation": {
      pill: "Faster Growth",
      heading: (
        <>
          Less Busywork. More{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Growth.
          </span>{" "}
          Done.
        </>
      ),
    },
    "AI Agents": {
      pill: "Memory",
      heading: (
        <>
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Intelligence
          </span>{" "}
          in Action
        </>
      ),
    },
    "Data & System Architech": {
      pill: "Organized Data",
      heading: (
        <>
          Strong Foundations. Future-Proof{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Systems.
          </span>
        </>
      ),
    },
  };

  const currentItems = useMemo(() => itemsData[option] || itemsData["Workflow Automation"], [option]);
  const currentSection = useMemo(() => sections[option] || sections["Workflow Automation"], [option]);

  return (
    <section>
      <div className="container flex flex-col items-start w-full">
        {/* Upper Section: Pill & Heading */}
        <div className="upper w-full flex flex-col items-center">
          <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2 w-fit px-[15px] py-[5px] mb-[13px] rounded-full items-center">
            <Image
              src="/homescreen/stars.png"
              alt="Stars"
              className="rounded-md"
              height={17}
              width={17}
            />
            <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent font-bold text-[14px]">
              {currentSection.pill}
            </span>
          </div>
          <h2 className="text-center">{currentSection.heading}</h2>
        </div>

        {/* Items + Image */}
        <div className="ScreenGrowth mt-[70px] flex gap-[49px] justify-center items-center overflow-x-hidden overflow-y-hidden">
          {/* LEFT: Items */}
          <div className="left">
            <AnimationWrapper direction="left">
              <div className="titleContainer flex flex-col gap-[40px]">
                {currentItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="title flex items-center cursor-pointer px-1"
                      onClick={() => setActiveId(item.id)}
                    >
                      {/* Number circle */}
                      <div
                        className={`w-[65px] h-[65px] rounded-full p-[2px] transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0]"
                            : "my-box bg-[#ADADAD14]"
                        }`}
                      >
                        <div
                          className={`w-full h-full rounded-full flex justify-center items-center font-bold text-lg relative overflow-hidden ${
                            isActive ? "bg-white" : ""
                          }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] opacity-10"></div>
                          )}
                          <span
                            className={`relative ${
                              isActive
                                ? "bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent"
                                : "text-[#8E8E8E]"
                            }`}
                          >
                            {item.id}
                          </span>
                        </div>
                      </div>

                      {/* Line */}
                      <div
                        className={`h-[1.5px] w-[15px] transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0]"
                            : "bg-[#8E8E8E]"
                        }`}
                      ></div>

                      {/* Content box */}
                      <div
                        className={`relative w-[490px] h-[65px] rounded-full p-[2px] transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0]"
                            : "my-box bg-[#ADADAD14]"
                        }`}
                      >
                        <div
                          className={`w-full h-full rounded-full flex items-center px-[30px] text-[18px] font-medium relative overflow-hidden ${
                            isActive ? "bg-white" : ""
                          }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] opacity-10"></div>
                          )}
                          <span
                            className={`relative ${
                              isActive
                                ? "bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent font-semibold"
                                : "text-[#8E8E8E]"
                            }`}
                          >
                            {item.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimationWrapper>
          </div>

          {/* RIGHT: Image */}
          <div className="right">
            <AnimationWrapper direction="right">
              <Image
                src={"/homescreen/homeCard/growth.png"}
                alt="Growth"
                className="rounded-lg"
                height={559}
                width={995}
              />
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
