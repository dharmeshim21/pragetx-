import React, { useMemo } from "react";
import Image from "next/image";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const WorkFlow = ({ option }) => {
  const content = useMemo(
    () => ({
      "Workflow Automation": {
        pill: "Smart Automation",
        heading: "That Run Themselves",
        blueWord: "Workflow",
        details:
          "Automation replaces manual, repetitive work with smart, AI-driven workflows that run effortlessly.",
        image: "/homescreen/RightCard.png",
      },
      "AI Agents": {
        pill: "Your Smartest Teammate",
        heading: "That Thinks, Learns, and Acts",
        blueWord: "AI",
        details:
          "More than bots—AI agents adapt, reason, and collaborate across your systems like real digital colleagues.",
        image: "/homescreen/RightCard.png",
      },
      "Data & System Architech": {
        pill: "Build on Strong Foundations",
        heading: "The Digital Blueprint of Your",
        blueWord: "Business",
        details:
          "A strong architecture ensures your AI and workflows run smoothlysecure, scalable, and reliable.",
        image: "/homescreen/RightCard.png",
      },
    }),
    []
  );

  const current = useMemo(() => content[option] || content["Workflow Automation"], [
    option,
    content,
  ]);

  return (
    <div className="container">
      <div className="flex pb-[120px] flex-col md:flex-row items-center">
        {/* LEFT SECTION */}
        <div className="left flex flex-col h-full mt-[60px] md:w-1/2">
          <AnimationWrapper direction="left" key={option}>
            {/* Pill */}
            <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2 w-fit px-[15px] py-[5px] mb-[13px] rounded-full items-center">
              <Image src="/homescreen/stars.png" alt="Stars" height={17} width={17} />
              <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent font-semibold text-[16px]">
                {current.pill}
              </span>
            </div>

            {/* Heading */}
            <div className="description font-semibold w-full mb-[10px]">
              <h2 className="ibm text-4xl md:text-5xl" style={{ lineHeight: 1.3 }}>
                {option === "Data & System Architech" ? (
                  <>
                    {current.heading}{" "}
                    <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] bg-clip-text text-transparent">
                      {current.blueWord}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] bg-clip-text text-transparent">
                      {current.blueWord}{" "}
                    </span>
                    {current.heading}
                  </>
                )}
              </h2>
            </div>

            {/* Details */}
            <p className="w-[90%] text-gray-600 leading-relaxed text-[16px]">{current.details}</p>
          </AnimationWrapper>
        </div>

        {/* RIGHT SECTION */}
        <div className="right md:w-1/2 h-full flex justify-center mt-10 md:mt-0 overflow-hidden">
          <AnimationWrapper direction="right" key={option + "-img"}>
            <Image
              src={current.image}
              alt={current.blueWord}
              className="rounded-md"
              height={500}
              width={815}
              priority
            />
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
