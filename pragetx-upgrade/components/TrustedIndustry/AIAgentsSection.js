// AgentBlogs.js (Updated for Image Arrow)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper';
import { Button, ButtonGroup } from "@heroui/button";

// NOTE: ArrowRight from lucide-react is no longer used, but keep the import if other parts need it.
// import { ArrowRight } from 'lucide-react'; 

// --- BlogCard Component Definition ---
// NOTE: It now accepts gradient classes as props
export const BlogCard = ({ imageUrl, altText, title, date='', address='', agentTitleGradient, borderGradient }) => (
    <div className="rounded-[20px] pb-[15px] overflow-hidden my-box hover:shadow-xl transition duration-300 transform hover:-translate-y-1 bg-white">
        {/* Image Container - Using object-cover to maintain aspect ratio */}
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-[300px] relative ">
            <Image
                src={imageUrl}
                alt={altText}
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
            {date.length != 0 && <div className="flex items-center text-sm text-[#6B7280] mb-2 font-medium">
                <span className="text-[#6B7280] font-bold" style={{fontSize:'18px'}}>Techonology</span>
                <span className="mx-2 font-bold" style={{fontSize:'18px'}}>•</span>
                 <span className='font-bold' style={{fontSize:'18px'}}>{date}</span>
            </div>}
            <h3 className="font-bold text-[#374151] mb-[20px] leading-snug">
                {title}
            </h3>

                {address.length != 0 &&<span className='font-bold ' style={{fontSize:'18px'}}>{address}</span>}

            {/* --- 'Read More' Link with Gradient Text and Image Arrow --- */}
            <Link
                href="#"
                // Apply gradient text class passed from props
                className={`flex items-center font-medium group transition duration-150 mt-[20px] ${agentTitleGradient}`}
            style={{
                fontSize:'18px'
            }}>
                {address.length != 0 ? "Map" :"Read More"}

                {/* IMAGE WRAPPER: Custom gradient border */}
                {/* This div provides the fixed size and the gradient border effect. */}
                <div
                    className={`ml-3 w-6 h-6 rounded-full flex items-center justify-center relative overflow-hidden transition-transform group-hover:translate-x-0.5`}
                    style={{ padding: '2.72px' }} // The padding forms the visible gradient border
                >
                    {/* 1. Gradient Layer (The "Border") */}
                    <div className={`absolute inset-0 ${borderGradient} rounded-full z-0`}></div>

                    {/* 2. White Mask Layer (Covers the center) */}
                    <div
                        className="absolute inset-0 bg-white rounded-full z-10"
                        style={{ margin: '2.72px' }} // Margin controls border thickness
                    ></div>

                    {/* 3. Image Arrow Layer - Z-20 ensures visibility over the white mask */}
                    {/* The parent div (w-6 h-6) provides the dimensions for layout="fill" */}
                    <div className="relative w-4 h-4 z-20"> {/* Smaller container for the arrow image */}
                        <Image
                            src={"/homescreen/AgentCard/arrow.png"}
                            alt={"Arrow"}
                            layout="fill"
                            objectFit="contain" // Use 'contain' to ensure the image fits well
                            priority
                        />
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

// --- Main Component Definition (remains the same) ---
const AIAgentsSection = () => {
    // Gradient classes defined inside the main component where they are guaranteed to exist
    const agentTitleGradient =
        "bg-clip-text text-transparent bg-[linear-gradient(95.74deg,_#3730A3_-29.39%,_#38BDF8_114.09%)]";

    const readAllButtonGradient =
        'bg-gradient-to-r from-[#3730A3] to-[#38BDF8]';
    const borderGradient = agentTitleGradient; // Reusing the same gradient for the border

    // Mock data for the cards (replace with actual data)
    const blogs = [
        {
            id: 1,
            imageUrl: '/homescreen/AgentCard/agent-card-1.png',
            altText: 'AI Robot Sitting',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
        {
            id: 2,
            imageUrl: '/homescreen/AgentCard/agent-card-2.png',
            altText: 'AI Brain Network',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
        {
            id: 3,
            imageUrl: '/homescreen/AgentCard/agent-card-3.png',
            altText: 'Humanoid Robot',
            title: 'MediCare + AI-Powered Patient Support',
            date: 'Sep 1, 2024',
        },
    ];

    return (
        <section className="overflow-x-hidden">
            <div className="container">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-[80px]">
                    <div className="max-w-3xl mb-8 lg:mb-0 overflow-x-hidden">
                        {/* Title with Gradient and Animation */}
                        <AnimationWrapper direction='left'>
                            <h2 className={`  font-extrabold leading-tight animate-in-from-left`} style={{width:'600px'}}>
                                <span className={` ${agentTitleGradient}`}>AI Agents</span>: Redefining the Future of Work
                            </h2>
                            <p className="mt-4  text-[#374151] lg:w-[520px]" style={{fontSize:'18px' ,wordSpacing:'1px'}}>
                                Discover how intelligent automation is transforming
                                industries by reducing costs, saving time, and scaling
                                operations.
                            </p>
                        </AnimationWrapper>

                    </div>

                    {/* Button with Gradient and Hero UI Effect */}
                    <AnimationWrapper direction='right'>

                        <Button
                            href="#"
                            className={`
                            py-[30px] px-[30px] rounded-full text-white font-semibold shadow-lg transition-all duration-300
                            ${readAllButtonGradient}
                            hover:shadow-2xl hover:scale-[1.03]
                            focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75
                            transform active:scale-95
                        `}
                        style={{fontSize:'18px',fontWeight:600}}
                        >
                            Read All Blogs &rarr;
                        </Button>
                    </AnimationWrapper>

                </div>

                {/* Blog Cards Grid */}
                <AnimationWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                imageUrl={blog.imageUrl}
                                altText={blog.altText}
                                title={blog.title}
                                date={blog.date}
                                // Pass the gradient classes as props
                                agentTitleGradient={agentTitleGradient}
                                borderGradient={borderGradient}
                            />
                        ))}
                    </div>
                </AnimationWrapper>

            </div>

            {/* Injected Tailwind CSS for custom animation */}
            <style jsx global>{`
                /* Simple CSS for the 'in from left' animation */
                @keyframes slideInFromLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-in-from-left {
                    animation: slideInFromLeft 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default AIAgentsSection;