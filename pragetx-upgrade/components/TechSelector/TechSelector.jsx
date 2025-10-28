"use client"
import React, { useState } from 'react';
import './TechSelector.css';
import Image from 'next/image';

const techOptions = [
    {
        id: 'ml',
        title: 'Machine Learning',
        details: 'Custom machine learning algorithms that learn from your data to make predictions, recognize patterns, and improve over time.',
        keywords: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
        image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=ML+Image+Placeholder'
    },
    {
        id: 'nlp',
        title: 'Natural Language Processing',
        details: 'Enabling computers to understand, interpret, and generate human language for tasks like translation, sentiment analysis, and chatbots.',
        keywords: ['Text Generation', 'Sentiment Analysis', 'Machine Translation'],
        image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=NLP+Image+Placeholder'
    },
    {
        id: 'cv',
        title: 'Computer Vision',
        details: 'Extracting meaningful information from digital images, videos, and other visual inputs to automate visual tasks.',
        keywords: ['Object Detection', 'Facial Recognition', 'Image Segmentation'],
        image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=CV+Image+Placeholder'
    },
    {
        id: 'ai_chatbots',
        title: 'AI Chatbots',
        details: 'Intelligent conversational agents that simulate human conversation through voice commands or text chats, powered by AI.',
        keywords: ['Generative AI', 'Context Awareness', 'Customer Service Bots'],
        image: 'https://via.placeholder.com/350x250/000000/FFFFFF?text=Chatbot+Image+Placeholder'
    },
];

const GradientTitle = ({ text }) => {
    return (
        <h3 className="gradient-text">{text}</h3>
    );
};

const TechSelector = () => {
    const [selectedId, setSelectedId] = useState('ml');
    const selectedOption = techOptions.find(opt => opt.id === selectedId);

    return (
        <div className="container px-4 sm:px-6 md:px-8 pb-0">
            <div className="tech-selector-container mt-[70px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                {/* --- LEFT PANEL --- */}
                <div className="selection-panel flex flex-col w-full lg:w-[480px]">
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
                                    <div className="keywords flex flex-wrap gap-x-2 gap-y-1">
                                        {option.keywords.map((keyword, index) => (
                                            <span
                                                key={keyword}
                                                className={`text-[15px] font-medium text-[#6B7280] px-2 py-0.5 ${index < option.keywords.length - 1 ? 'border-r border-gray-300' : ''}`}
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- RIGHT IMAGE --- */}
                <div className="flex justify-center w-full lg:w-auto">
                    <div className="h-[375px] w-[420px] relative rounded-[20px] overflow-hidden">
                        <Image
                            src="/images/services/Machine Learning.png"
                            alt="Hero Image"
                            width={480}
                            height={390}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TechSelector;