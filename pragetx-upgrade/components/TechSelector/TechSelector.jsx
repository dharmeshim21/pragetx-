"use client"
import React, { useState } from 'react';
import './TechSelector.css';
import Image from 'next/image';


const GradientTitle = ({ text }) => {
    return (
        <h4 className="gradient-text" >{text}</h4>
    );
};

const TechSelector = ({ techOptions = [],imagePath = '' }) => {
    const [selectedId, setSelectedId] = useState('1');
    const selectedOption = techOptions.find(opt => opt.id === selectedId);

    return (
        <div className="container px-4 sm:px-6 md:px-8 pb-0">
            <div className="tech-selector-container mt-[70px]  flex flex-col lg:flex-row   justify-between gap-10 lg:gap-16 my-box1">

                {/* --- LEFT PANEL --- */}
                <div className="selection-panel flex flex-col w-full lg:w-[480px] ">
                    {techOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`option-item my-box cursor-pointer transition-all duration-300 ${selectedId === option.id ? 'selected' : ''}`}
                            onClick={() => setSelectedId(option.id)}
                        >
                            <GradientTitle text={option.title} />

                            {/* This wrapper will expand or collapse with CSS */}
                            <div
                                className={`details-wrapper ${selectedId === option.id ? 'expanded' : 'collapsed'
                                    }`}
                            >
                                {/* This inner div ensures spacing is correct */}
                                <div className="details-inner-content">
                                    <p className="details-text text-[#374151] font-semibold text-[17px]">
                                        {option.details}
                                    </p>
                                    {option.keywords && <div className="keywords flex flex-wrap gap-x-2 gap-y-1">
                                        {option.keywords.map((keyword, index) => (
                                            <span
                                                key={keyword}
                                                className={`text-[15px] font-medium text-[#6B7280] px-2 py-0.5 ${index < option.keywords.length - 1 ? 'border-r border-gray-300' : ''}`}
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- RIGHT IMAGE --- */}
                <div className="flex justify-center w-full lg:w-auto">
                    <div className="h-full w-[420px] relative rounded-[20px] overflow-hidden">
                        {imagePath != '' ?
                            <Image
                                src={imagePath}
                                alt="Hero Image"
                                fill
                                className="object-cover "
                            />
                            : <Image
                                src="/images/services/Machine Learning.png"
                                alt="Hero Image"
                                fill
                                className="object-cover w-full h-full"
                            />}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TechSelector;