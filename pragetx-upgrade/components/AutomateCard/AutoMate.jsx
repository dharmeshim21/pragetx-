import React, { useMemo } from "react";
import AutoMateCard from "./AutoMateCard";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import Image from "next/image";

const AutoMate = ({ option }) => {
  // All option configurations
  const sections = [
    {
      option: "Workflow Automation",
      pill: "Trigger Actions",
      heading: (
        <>
          Trigger.{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Automate.
          </span>{" "}
          Done.
        </>
      ),
    },
    {
      option: "AI Agents",
      pill: "24/7 Digital Workforce",
      heading: (
        <>
          Your{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Digital
          </span>{" "}
          Teammates
        </>
      ),
    },
    {
      option: "Data & System Architech",
      pill: "Seamless Connectivity",
      heading: (
        <>
          Designed for Scale and{" "}
          <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
            Security
          </span>
        </>
      ),
    },
  ];

  // Memoized: only re-renders when `option` changes
  const current = useMemo(
    () => sections.find((s) => s.option === option) || sections[0],
    [option]
  );

  return (
    <section className="bg-gradient-to-r from-[#A856F7]/10 via-[#6A5ACD]/10 to-[#00A1E0]/10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          {/* 🌟 Dynamic Pill */}
          <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2 w-fit px-[15px] py-[5px] mb-[13px] rounded-full items-center">
            <Image
              src="/homescreen/stars.png"
              alt="Stars"
              className="rounded-md"
              height={17}
              width={17}
            />
            <span
              className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent"
              style={{ fontWeight: 700, fontSize: "16px" }}
            >
              {current.pill}
            </span>
          </div>

          {/* 🌟 Dynamic Heading */}
          <h2 className="text-4xl font-semibold text-center mb-[70px]">{current.heading}</h2>

          {/* 🌟 Cards (unchanged) */}
          {option == 'Workflow Automation' && <>
            <div className="cards flex justify-between mt-[70px] items-stretch">
              <AnimationWrapper className="overflow-hidden" direction="left">
                <AutoMateCard
                  title={"Choose your trigger"}
                  desc={
                    "Select the event that starts your workflow: email, form, or call."
                  }
                  src={"/homescreen/homeCard/trigger.png"}
                />
              </AnimationWrapper>

              <div className="connect bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)] h-[3px] w-[30px] my-auto" />

              <AnimationWrapper>
                <AutoMateCard
                  title={"Build the workflow"}
                  desc={
                    "Drag-and-drop steps, set conditions, and let AI plan the path."
                  }
                  src={"/homescreen/homeCard/workFlow.png"}
                />
              </AnimationWrapper>

              <div className="connect bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)] h-[3px] w-[30px] my-auto" />

              <AnimationWrapper className="overflow-hidden" direction="right">
                <AutoMateCard
                  title={"Let AI handle the rest"}
                  desc={
                    "Tasks executed automatically, data updated, and notifications sent."
                  }
                  src={"/homescreen/homeCard/aiHandle.png"}
                />
              </AnimationWrapper>
            </div>
          </>}

          {option == 'AI Agents' && <>
            <Image
              src="/homescreen/optionsImgs/autoMateOption2.png"
              alt="Automation Option"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-md"
              priority
            />


          </>}

          {option == 'Data & System Architech' && <>

            <Image
              src="/homescreen/optionsImgs/autoMateOption3.png"
              alt="Option3"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-md"
              priority
            />
          </>}
        </div>
      </div>
    </section>
  );
};

export default AutoMate;
