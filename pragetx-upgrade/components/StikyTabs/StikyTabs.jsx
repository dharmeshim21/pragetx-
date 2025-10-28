"use client"
import React, { useState } from 'react'
import { Tabs, Tab } from "@heroui/tabs";
import WorkFlow from '../WorkFlowCard/WorkFlow';
import Growth from '../GrowthSection/Growth';
import Team from '../TeamSlider/Team';
import TimeNow from '../TimeNowSectionCard/TimeNow';
import Image from 'next/image';
import AutoMate from '../AutomateCard/AutoMate';
const StikyTabs = () => {
    const buttons = [
        'Workflow Automation',
        'AI Agents',
        'Data & System Architech',
    ];
    const [active, setActive] = useState("Workflow Automation");

    // const buttons = ["Photos", "Music", "Videos"];



    const getButtonClass = (buttonName) => {
        const baseClasses = 'w-[200px] cursor-pointer text-center p-2 rounded-full transition-all duration-300 ease-in-out font-medium';
        if (buttonName === activeButton) {
            return `${baseClasses} bg-gradient-to-r from-[#3730A3] text-white to-[#38BDF8]`;
        }
        return baseClasses;
    };
    return (
        <>
            <div className="w-full flex z-1000000 justify-center mb-[110px] sticky top-[80px]   mt-[35px]">
                <div className="w-[800px]  z-100  rounded-[100px] my-box p-[5px]">
                    <Tabs
                        aria-label="Styled Tabs"
                        selectedKey={active}
                        onSelectionChange={setActive}
                        radius="full"
                        defaultSelectedKey={buttons[0]}
                        classNames={{
                            base: "w-full h-[60px]",
                            tabList: "flex bg-red-500 w-full h-full gap-3 bg-white/60 rounded-full",
                            tab: [
                                "flex-1 h-[55px] font-medium text-[18px] rounded-[50px] flex items-center justify-center transition-all duration-300",
                                "text-[#777777] data-[selected=true]:text-white",
                                "data-[selected=true]:bg-[linear-gradient(98.25deg,#3730A3_3.51%,#38BDF8_96.28%)]",
                            ].join(" "),
                        }}
                    >
                        {buttons.map((btn) => (
                            <Tab key={btn} title={btn} />
                        ))}
                    </Tabs>
                </div>
            </div>

            {active == 'Workflow Automation' && <>
                <WorkFlow option={`${active}`} />

                <AutoMate option={`${active}`} />

                <Growth option={`${active}`} />

                <Team option={`${active}`} />

                <TimeNow option={`${active}`} />
            </>}

            {active == 'AI Agents' && <>
                <WorkFlow option={`${active}`} />

                <AutoMate option={`${active}`} />

                <Growth option={`${active}`} />

                <Team option={`${active}`} />

                <TimeNow option={`${active}`} />
            </>}

            {active == 'Data & System Architech' && <>
                <WorkFlow option={`${active}`} />

                <AutoMate option={`${active}`} />

                <Growth option={`${active}`} />

                <TimeNow option={`${active}`} />

                <Team option={`${active}`} />

            </>}
        </>

    )
}

export default StikyTabs