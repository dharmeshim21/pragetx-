"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";

// Tool images
const allToolImages = [
    "/homescreen/tools/gemini.png",
    "/homescreen/tools/chatgpt.png",
    "/homescreen/tools/aws.png",
    "/homescreen/tools/copilot.png",
    "/homescreen/tools/slack.png",
    "/homescreen/tools/github.png",
    "/homescreen/tools/vscode.png",
    "/homescreen/tools/docker.png",
    "/homescreen/tools/react.png",
    "/homescreen/tools/vercel.png",
    "/homescreen/tools/jira.png",
    "/homescreen/tools/postman.png",
    "/homescreen/tools/google-cloud.png",
    "/homescreen/tools/azure.png",
    "/homescreen/tools/mongodb.png",
    "/homescreen/tools/postgresql.png",
];

// Grid box with switching image
const GridBox = ({ initialIndex }) => {
    const [currentImage, setCurrentImage] = useState(allToolImages[initialIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * allToolImages.length);
            setCurrentImage(allToolImages[randomIndex]);
        }, 8000 + Math.random() * 2000);
        return () => clearInterval(interval);
    }, []);

    const imageVariants = {
        exit: { scale: 0.9, opacity: 0, filter: "blur(6px)", transition: { duration: 0.4 } },
        enter: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
    };

    return (
        <div
            className="rounded-[23px] p-[4px]"
            style={{ background: "linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)" }}
        >
            <motion.div className="w-[97px] h-[97px] flex items-center justify-center bg-white rounded-[20px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        variants={imageVariants}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        className="flex items-center justify-center w-full h-full"
                    >
                        <Image src={currentImage} alt="tool" width={40} height={40} className="object-contain" />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

// Empty grid box
const EmptyGridBox = () => {
    return (
        <div className="p-[4px] rounded-[24px]">
            <div
                className="w-[97px] h-[97px] rounded-[20px] flex items-center justify-center"
                style={{
                    background: "linear-gradient(90deg, rgba(168, 86, 247, 0.06) 0%, rgba(106, 90, 205, 0.06) 50%, rgba(0, 161, 224, 0.06) 100%)",
                    backdropFilter: "blur(12px)",   // glass effect
                    WebkitBackdropFilter: "blur(12px)", // Safari support
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
            />
        </div>
    );
};

const ToolSection = () => {
    return (
        <AnimationWrapper>
            <section className="">
                <div className=".container w-full relative">
                    {/* Title */}
                    <div className="upper w-full flex justify-center items-center">
                        <h2 className="flex" style={{ fontWeight: "700" }}>
                            Here are the{" "}
                            <div className="text-[#29408B] flex flex-col items-center">
                                Tools{" "}
                                <Image
                                    className="relative bottom-[25px]"
                                    src={"/homescreen/homeCard/curv.png"}
                                    width={165}
                                    height={14}
                                    alt="curve"
                                />
                            </div>{" "}
                            & Software We Use
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="container flex justify-center items-center">
                        <div className="flex justify-center">
                            <div className="gridofApps mt-[32px] grid grid-cols-11 place-items-center">
                                {/* Row 1 */}
                                <div className="col-start-1 row-start-1 row-end-2">
                                    <EmptyGridBox blur="strong" />
                                </div>
                                <div className="col-start-3 row-start-1 row-end-2">
                                    <EmptyGridBox blur="medium" />
                                </div>
                                <div className="absolute inset-0 z-10 pointer-events-none">
                                    <div className="absolute left-0 top-[100px] bottom-1 w-1/6 bg-gradient-to-r from-[#FAFAFA] via-transparent to-[#FAFAFA]"></div>
                                    <div className="absolute right-0 top-[100px] bottom-0 w-1/6 bg-gradient-to-l from-[#FAFAFA] via-transparent to-[#FAFAFA]"></div>
                                </div>

                                <div className="col-start-5 row-start-1 row-end-2">
                                    <GridBox initialIndex={2} />
                                </div>
                                <div className="col-start-7 row-start-1 row-end-2">
                                    <GridBox initialIndex={3} />
                                </div>
                                <div className="col-start-9 row-start-1 row-end-2">
                                    <EmptyGridBox blur="medium" />
                                </div>
                                <div className="col-start-11 row-start-1 row-end-2">
                                    <EmptyGridBox blur="strong" />
                                </div>

                                {/* Row 2 */}
                                <div className="col-start-2 row-start-2 row-end-3">
                                    <EmptyGridBox blur="medium" />
                                </div>
                                <div className="col-start-4 row-start-2 row-end-3">
                                    <GridBox initialIndex={7} />
                                </div>
                                <div className="col-start-6 row-start-2 row-end-3">
                                    <GridBox initialIndex={8} />
                                </div>
                                <div className="col-start-8 row-start-2 row-end-3">
                                    <GridBox initialIndex={9} />
                                </div>
                                <div className="col-start-10 row-start-2 row-end-3">
                                    <EmptyGridBox blur="medium" />
                                </div>

                                {/* Row 3 */}
                                <div className="col-start-1 row-start-3 row-end-4">
                                    <EmptyGridBox blur="strong" />
                                </div>
                                <div className="col-start-3 row-start-3 row-end-4">
                                    <EmptyGridBox blur="medium" />
                                </div>
                                <div className="col-start-5 row-start-3 row-end-4">
                                    <GridBox initialIndex={13} />
                                </div>
                                <div className="col-start-7 row-start-3 row-end-4">
                                    <GridBox initialIndex={14} />
                                </div>
                                <div className="col-start-9 row-start-3 row-end-4">
                                    <EmptyGridBox blur="medium" />
                                </div>
                                <div className="col-start-11 row-start-3 row-end-4">
                                    <EmptyGridBox blur="strong" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimationWrapper>
    );
};

export default ToolSection;
