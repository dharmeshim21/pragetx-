// CardVideo.js
import React from 'react';

const CardVideo = ({ videoPath, title }) => {
    return (
        <div className="mt-[35px]">
            <div className="relative rounded-[40px] overflow-hidden w-[1239px] h-[600px]">
                <video
                    className="w-full h-full object-cover"
                    key={videoPath}
                    src={videoPath}
                    loop
                    muted
                    autoPlay
                >
                    Your browser does not support the video tag.
                </video>

                {/* Top Left Title and Button Overlay */}
                <div className="absolute top-0 left-0 p-8 w-full flex justify-between items-start">

                    {/* TITLE WRAPPER */}
                    <div className="max-w-[70%]">
                        <h4 className="text-white text-xl">
                            {title} {/* Use the title prop */}
                        </h4>
                    </div>

                    {/* BUTTON WRAPPER */}
                    <button className="relative flex-shrink-0 whitespace-nowrap
                                       bg-gradient-to-r from-[#3730A3] to-[#38BDF8] 
                                       text-white font-semibold py-2 px-6 
                                       rounded-full 
                                       flex items-center gap-2 
                                       overflow-hidden
                                       transition-transform duration-200 
                                       hover:scale-105 
                                       active:scale-95">

                        <span className="relative z-10">Read More</span>
                        <svg
                            className="w-4 h-4 relative z-10"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;
