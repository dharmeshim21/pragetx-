import React from 'react'
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper';
import { Button } from '@heroui/button';

const GetStarted = () => {
    // Define the correct image paths for clarity
    const starImagePath = '/homescreen/homeCard/star.png';
    const dottedImagePath = '/homescreen/homeCard/dottedImg2.png';

    return (
        // <section className="bg-red-400 flex justify-start"> {/* ⚡ Set section padding to 0 */}
        <AnimationWrapper>
            <div
                className="
                    container
                    relative
                    // mx-auto 
                    py-[100px] px-8  // Vertical padding for inner content centering
                    rounded-[50px]
                    overflow-hidden  
                    text-center
                    my-box
                    h-[480px]
                "
                style={{
                    // Combine the dotted pattern and the gradient background
                    background: `
                        url(${dottedImagePath}) center/auto repeat, 
                        linear-gradient(91.69deg, #FF9A9E -0.03%, #4FACFE 99.97%)
                    `,
                }}
            >
                {/* Decorative Star 1 (Top-Right) */}
                <img
                    src={starImagePath}
                    alt="Decorative Star"
                    className="absolute top-8 right-8 h-10 w-10 opacity-90 z-10"
                />

                {/* Decorative Star 2 (Bottom-Left) */}
                <img
                    src={starImagePath}
                    alt="Decorative Star"
                    className="absolute bottom-8 left-8 h-10 w-10 opacity-90 z-10"
                />

                {/* Content Wrapper */}
                <div className="relative z-20 flex flex-col items-center justify-center">
                    {/* Top Subtitle */}
                    <p className="text-white text-lg opacity-80 mb-0 font-light tracking-wide" style={{fontSize:'17px',color:'white',fontWeight:600}}>
                        {/* ⚡ KEY FIX: Changed mb-4 to mb-0 (margin-bottom: 0) to remove the gap */}
                        Our workflows, powered by AI simple, fast, reliable
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-white w-[800px] leading-tight mb-8 mt-2">
                        {/* ⚡ Added mt-2 (margin-top: 2) to compensate slightly for mb-0 on p-tag */}
                        Ready to Automate Your Business with AI?
                    </h1>

                    {/* Get Started Button (Kept existing styling) */}
                    <Button
                        className="
                            relative
                            inline-flex items-center justify-center
                            px-12 py-4
                            rounded-full
                            overflow-hidden
                            group
                            transition-all duration-300 ease-out transform
                            hover:scale-105 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                        "
                    >
                        {/* ... button spans (unchanged) ... */}
                        <span
                            className="absolute inset-0 
                                bg-gradient-to-r from-gray-50 to-white 
                                transition-all duration-300 ease-out 
                                group-hover:opacity-0"
                        ></span>

                        <span
                            className="absolute inset-0 
                                bg-gradient-to-r from-white to-gray-50 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-300 ease-out"
                        ></span>

                        {/* Text with gradient */}
                        <span
                            className="relative z-10 text-xl font-bold 
                                bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                text-transparent bg-clip-text
                                transition-colors duration-300 ease-out"
                        >
                            Get Started
                        </span>
                    </Button>
                </div>
            </div>
        </AnimationWrapper>

        // </section>

    );
};

export default GetStarted;