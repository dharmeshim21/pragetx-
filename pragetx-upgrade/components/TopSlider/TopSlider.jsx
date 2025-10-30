import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Chip from '@/components/Chip/Chip';

const TopSlider = ({
    mainSubtitle,   // e.g. "Artificial Intelligence Services"
    title,          // e.g. "AI-Driven Revolution in Education"
    subtitle,       // e.g. paragraph under title
    button,         // e.g. "Talk To Our Consultant"
    customButton,   // optional custom button JSX
    list1,          // optional bullet points
    list2,          // optional bullet points
    className,      // extra styles for text
    gradientText,   // optional gradient text span
    backgroundClass, // background CSS class like 'education-bg'
    titleBreak=""
}) => {
    return (
        <section className={`${backgroundClass || 'top-slider w-full'} flex flex-col justify-center`} style={{ padding: '0px' }}>
            <div className="container pt-[60px] xl:pt-[120px]  px-4">
                <div className="header-top-con flex flex-col items-center text-center">

                    {/* 🔹 Main Subtitle (Gradient Badge) */}
                    {mainSubtitle && (
                        <Chip
                            title={mainSubtitle}
                        />
                    )}

                    {/* 🔹 Title */}
                    {title && (
                        <h1
                            className={`font-bold w-full mt-5 mb-[15px] text-center  text-white ibm ${className || ''}`}
                        >
                            {title}
                            {titleBreak && <br /> } {/* ✅ optional manual break */}
                            {titleBreak +" "}
                            {/* ✅ Full gradient phrase, including "in " */}
                            {gradientText && (
                                <span
                                    className="bg-[linear-gradient(95.74deg,#3730A3_-29.39%,#38BDF8_114.09%)] bg-clip-text text-transparent inline-block"
                                >
                                    {' '}{gradientText}
                                </span>
                            )}
                        </h1>
                    )}


                    {/* 🔹 Subtitle Paragraph */}
                    {subtitle && (
                        <p
                            className="text-center w-[90%] md:w-[90%] mx-auto"
                            style={{ fontWeight: 500, fontSize: '18px', lineHeight: 1.5, color: 'white' }}
                        >
                            {subtitle}
                        </p>
                    )}

                    {/* 🔹 Button Section */}
                    {button && (
                        <div className="text-center mt-[30px]">
                            <Button
                                as={Link}
                                href="/contact-us/"
                                color="primary"
                                variant="solid"
                                endContent={<FaChevronRight />}
                                className="cursor-pointer bg-gradient-to-r h-[45px] w-[240px] font-bold from-[#3730A3] to-[#38BDF8] px-[10px] text-white rounded-full"
                            >
                                {button}
                            </Button>
                        </div>
                    )}

                    {/* 🔹 Custom Button (optional override) */}
                    {customButton && <div className="text-center mt-6">{customButton}</div>}

                    {/* 🔹 Optional Two-Column Lists */}
                    {list1 && list2 && (
                        <div className="flex justify-center mt-8 gap-8 max-[650px]:flex-col max-[650px]:gap-0 max-[650px]:items-center">
                            <div className="w-[300px] max-[650px]:w-full">
                                {list1?.map((list, index) => (
                                    <div
                                        key={index}
                                        className="relative ml-8 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:top-[8px] before:left-[-18px] my-2 text-white"
                                    >
                                        {list}
                                    </div>
                                ))}
                            </div>
                            <div className="w-[300px] max-[650px]:w-full">
                                {list2?.map((list, index) => (
                                    <div
                                        key={index}
                                        className="relative ml-8 before:w-2 before:h-2 before:rounded-full before:bg-white before:absolute before:top-[8px] before:left-[-18px] my-2 text-white"
                                    >
                                        {list}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TopSlider
