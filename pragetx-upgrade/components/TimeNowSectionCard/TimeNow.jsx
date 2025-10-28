"use client";

import React, { useMemo } from "react";
import TimeCard from "./TimeCard";
import Image from "next/image";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

const TimeNow = ({ option = "Workflow Automation" }) => {

    const sections = useMemo(() => ({
        "Workflow Automation": {
            pill: "Always On",
            heading: (
                <>
                    The Right{" "}
                    <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
                        Time
                    </span>{" "}
                    is Now
                </>
            ),
        },
        "AI Agents": {
            pill: "Instant Data Insights",
            heading: (
                <>
                    Smarter Work.{" "}
                    <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
                        Happier
                    </span>{" "}
                    Customers.
                </>
            ),
        },
        "Data & System Architech": {
            pill: "Secure by Design",
            heading: (
                <>
                    Startups to{" "}
                    <span className="bg-gradient-to-r from-[#3730A3] to-[#38BDF8] text-transparent bg-clip-text">
                        Enterprises
                    </span>{" "}
                    Alike
                </>
            ),
        },
    }), []);

    const currentSection = sections[option] || sections["Workflow Automation"];

    return (
        <section style={{ paddingBottom: '0px' }}>
            <div className='container w-full flex flex-col items-center'>
                {/* Title */}
                <div className="titleLine bg-[linear-gradient(90deg,rgba(168,86,247,0.1)_0%,rgba(106,90,205,0.1)_50%,rgba(0,161,224,0.1)_100%)] flex gap-2 w-fit px-[15px] py-[5px] rounded-full items-center">
                    <Image
                        src="/homescreen/stars.png"
                        alt="Stars"
                        className="rounded-md"
                        height={17}
                        width={17}
                    />
                    <span className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] bg-clip-text text-transparent font-medium text-[16px]">
                        {currentSection.pill}
                    </span>
                </div>

                <h2 className='mt-[13px] text-center'>
                    {currentSection.heading}
                </h2>

                {/* Cards */}
                {option == 'Workflow Automation' && <>
                    <div className="cards w-full grid grid-cols-2 gap-[20px] mt-[70px] overflow-x-hidden">
                        <AnimationWrapper direction='left'>
                            <div className="grid1 space-y-[30px] p-1">
                                <TimeCard title={"Drowning in Repetition"} desc={"Let automation handle routine tasks for you."} width={350} src={"/homescreen/TimeNow/drowing.png"} />
                                <TimeCard title={"Scaling Too Fast"} desc={"Grow without overwhelming your team."} width={300} src={"/homescreen/TimeNow/scalling.png"} />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper direction='right'>
                            <div className="grid2 space-y-[30px] gap-[20px] p-1">
                                <TimeCard title={"When Accuracy Matters"} desc={"AI ensures error-free, instant execution."} width={300} src={"/homescreen/TimeNow/whenAccuracy.png"} />
                                <TimeCard title={"Always On"} desc={"Automation never sleeps, unlike humans."} width={350} src={"/homescreen/TimeNow/alwaysOn.png"} />
                            </div>
                        </AnimationWrapper>
                    </div>
                </>
                }

                {option == 'AI Agents' && <>
                    <div className="cards w-full grid grid-cols-2 gap-[20px] mt-[70px] overflow-x-hidden">
                        <AnimationWrapper direction='left'>
                            <div className="grid1 space-y-[30px] p-1">
                                <TimeCard title={"Boosted Productivity"} desc={"Free your team from repetitive, time-draining tasks."} width={350} src={"/homescreen/TimeNow/SmaterOption1.png"} />
                                <TimeCard title={"Customer Delight"} desc={"Deliver 24/7 personalized support at scale."} width={300} src={"/homescreen/TimeNow/scalling.png"} />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper direction='right'>
                            <div className="grid2 space-y-[30px] gap-[20px] p-1">
                                <TimeCard title={"Smarter Decisions"} desc={"Process complex data instantly to uncover real insights."} width={300} src={"/homescreen/TimeNow/whenAccuracy.png"} />
                                <TimeCard title={"Cost Efficiency"} desc={"Reduce manual work, minimize errors, and cut costs."} width={350} src={"/homescreen/TimeNow/alwaysOn.png"} />
                            </div>
                        </AnimationWrapper>
                    </div>
                </>
                }

                {option == 'Data & System Architech' && <>
                    <div className="cards w-full grid grid-cols-2 gap-[20px] mt-[70px] overflow-x-hidden">
                        <AnimationWrapper direction='left'>
                            <div className="grid1 space-y-[30px] p-1">
                                <TimeCard title={"Smooth Operations"} desc={"Free your team from repetitive, time-draining tasks."} width={350} src={"/homescreen/TimeNow/StartupOption1.png"} />
                                <TimeCard title={"Easy Growth"} desc={"Deliver 24/7 personalized support at scale."} width={300} src={"/homescreen/TimeNow/StartupOption2.png"} />
                            </div>
                        </AnimationWrapper>

                        <AnimationWrapper direction='right'>
                            <div className="grid2 space-y-[30px] gap-[20px] p-1">
                                <TimeCard title={"Data Security"} desc={"Process complex data instantly to uncover real insights."} width={300} src={"/homescreen/TimeNow/StartupOption3.png"} />
                                <TimeCard title={"Team Alignment"} desc={"Reduce manual work, minimize errors, and cut costs."} width={350} src={"/homescreen/TimeNow/StartupOption4.png"} />
                            </div>
                        </AnimationWrapper>
                    </div>
                </>
                }
            </div>
        </section>
    );
};

export default TimeNow;
