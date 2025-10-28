import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Offices = ({ imageUrl, altText, title,address = '', agentTitleGradient, borderGradient }) => {
    return (
        <>
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
                    
                    <h3 className="font-bold text-[#374151] mb-[20px] leading-snug">
                        {title}
                    </h3>

                    {address.length != 0 && <span className='font-bold ' style={{ fontSize: '18px' }}>{address}</span>}

                    {/* --- 'Read More' Link with Gradient Text and Image Arrow --- */}
                    <Link
                        href="#"
                        // Apply gradient text class passed from props
                        className={`flex items-center font-medium group transition duration-150 mt-[20px] ${agentTitleGradient}`}
                        style={{
                            fontSize: '18px'
                        }}>
                        {"Map"}

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
        </>
    )
}

export default Offices