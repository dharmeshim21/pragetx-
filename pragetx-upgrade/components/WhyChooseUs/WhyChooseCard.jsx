import React from 'react';
import Image from 'next/image';

const WhyChooseCard = ({ title, description, img, color }) => {
    return (
        <div
            className="card py-[40px] px-[20px] w-[500px] rounded-[27px] my-box min-h-[280px]"
            style={{
                background:
                    "linear-gradient(90deg, rgba(168, 86, 247, 0.1) 0%, rgba(106, 90, 205, 0.1) 50%, rgba(0, 161, 224, 0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(6px)",
            }}
        >
            <div className="top title flex items-start justify-between">
                <h3
                    className="w-2/5 text-transparent bg-clip-text"
                    style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        backgroundImage: `linear-gradient(90deg, ${color} 0%, rgba(106, 90, 205, 1) 50%, rgba(0, 161, 224, 1) 100%)`,
                    }}
                >
                    {title}
                </h3>

                <div className="logo">
                    <Image
                        src={img}
                        alt={title}
                        className="rounded-md"
                        height={70}
                        width={70}
                    />
                </div>
            </div>

            <div className="bottom mt-[30px] w-[400px]">
                <p
                    className="text-white"
                    style={{
                        fontSize: "22px",
                        fontWeight: 600,
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyChooseCard;
