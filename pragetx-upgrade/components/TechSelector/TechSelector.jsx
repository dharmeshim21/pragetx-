"use client"
import React, { useState } from 'react';
import './TechSelector.css';
import Image from 'next/image';

// Gradient title with responsive text
const GradientTitle = ({ text }) => {
  return (
    <h4
      className="gradient-text 
        text-[16px] sm:text-[20px] md:text-[22px] lg:text-[18px] 
        font-semibold leading-snug"
    >
      {text}
    </h4>
  );
};

const TechSelector = ({ techOptions = [], imagePath = '' }) => {
  const [selectedId, setSelectedId] = useState('1');
  const selectedOption = techOptions.find(opt => opt.id === selectedId);

  return (
    <div className="container px-4 sm:px-6 md:px-8 pb-0">
      {/* 💡 Image goes below text on small screens, side-by-side on large */}
      <div className="tech-selector-container mt-[70px] flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-16 my-box1" >

        {/* --- LEFT PANEL --- */}
        <div className="selection-panel flex flex-col w-full lg:w-[480px]">
          {techOptions.map((option) => (
            <div
              key={option.id}
              className={`option-item my-box cursor-pointer transition-all duration-300 ${
                selectedId === option.id ? 'selected' : ''
              }`}
              onClick={() => setSelectedId(option.id)}
            >
              <GradientTitle text={option.title} />

              <div
                className={`details-wrapper ${
                  selectedId === option.id ? 'expanded' : 'collapsed'
                }`}
              >
                <div className="details-inner-content">
                  <p className="details-text text-[#374151] font-semibold text-[16px] sm:text-[17px] md:text-[18px] lg:text-[15px]">
                    {option.details}
                  </p>

                  {option.keywords && (
                    <div className="keywords flex flex-wrap gap-x-2 gap-y-1 mt-1">
                      {option.keywords.map((keyword, index) => (
                        <span
                          key={keyword}
                          className={`text-[14px] sm:text-[15px] font-medium text-[#6B7280] px-2 py-0.5 ${
                            index < option.keywords.length - 1
                              ? 'border-r border-gray-300'
                              : ''
                          }`}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT IMAGE (Responsive) --- */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="relative w-full sm:w-[380px] md:w-[420px] h-[240px] sm:h-[300px] md:h-[350px] lg:h-auto rounded-[20px] overflow-hidden">
            <Image
              src={
                imagePath !== ''
                  ? imagePath
                  : '/images/services/Machine Learning.png'
              }
              alt="Tech Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSelector;
