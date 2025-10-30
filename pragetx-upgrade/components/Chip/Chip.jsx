import React from 'react'
import Image from 'next/image'

const Chip = ({
    title,
    imageSrc = "/homescreen/star.svg",
    imageAlt = "Icon",
    gradientBg = "bg-gradient-to-r from-[#A856F7]/40 via-[#6A5ACD]/50 to-[#00A1E0]/50",
    className = "",
    position = "center" // 👈 default position
}) => {
    // Choose alignment based on prop
    const alignment =
        position === "start"
            ? "justify-start"
            : position === "end"
            ? "justify-end"
            : "justify-center"

    return (
        <div
            className={`
                ${gradientBg} 
                flex items-center ${alignment} gap-2 sm:gap-3 
                mx-auto w-fit 
                px-[10px] sm:px-[14px] py-[5px] sm:py-[7px] 
                rounded-full 
                ${className}
            `}
            style={{ fontSize: "14px", fontWeight: 400 }}
        >
            {imageSrc && (
                <div className="relative flex-shrink-0">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={18}
                        height={18}
                        className="object-contain sm:w-[22px] sm:h-[22px] w-[16px] h-[16px]"
                    />
                </div>
            )}

            <span className="text-white text-[13px] sm:text-[15px] font-medium leading-tight text-center">
                {title}
            </span>
        </div>
    )
}

export default Chip
