"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";

const ScrollingStep = () => {
    const steps = [
        {
            svg: "/images/stepsImgs/1problem.svg",
            gif: "/images/stepsImgs/Identifying the Problem.gif",
            title: "Identifying the Problem",
            details:
                "We work with you to understand your business challenge and define the scope of the AI solution needed to address it effectively.",
        },
        {
            svg: "/images/stepsImgs/2data.svg",
            gif: "/images/stepsImgs/Data Acquisition.gif",
            title: "Data Acquisition & Preparation",
            details:
                "We gather, clean, and structure your data to ensure it’s ready for AI model development.",
        },
        {
            svg: "/images/stepsImgs/3aimodel.svg",
            gif: "/images/stepsImgs/AI Model Design & Training1.gif",
            title: "AI Model Design & Training",
            details:
                "Our AI experts design, train, and fine-tune custom models based on your specific requirements and the collected data.",
        },
        {
            svg: "/images/stepsImgs/4cpu.svg",
            gif: "/images/stepsImgs/AI Model Assessment.gif",
            title: "AI Model Assessment & Optimization",
            details:
                "We rigorously test the AI model against real-world scenarios and continuously refine it to ensure optimal performance and accuracy.",
        },
        {
            svg: "/images/stepsImgs/5deployment.svg",
            gif: "/images/stepsImgs/Deployment GIF.gif",
            title: "Deployment",
            details:
                "We deploy the AI solution into your existing infrastructure and ensure seamless integration with your current systems and workflows.",
        },
        {
            svg: "/images/stepsImgs/6monitor.svg",
            gif: "/images/stepsImgs/MLOps (Machine Learning Operations).gif",
            title: "MLOps (Machine Learning Operations)",
            details:
                "We provide ongoing support to monitor the AI system’s performance, update models as needed, and ensure continuous improvement.",
        },
    ];

    const containerRef = useRef(null);
    const stepRefs = useRef([]);
    const horizontalStepsRef = useRef(null);

    // States for desktop (vertical) scrolling
    const [progressHeight, setProgressHeight] = useState(0);
    const [activeIndexDesktop, setActiveIndexDesktop] = useState(0);

    // State for mobile (horizontal) scrolling
    const [activeIndexMobile, setActiveIndexMobile] = useState(0);

    // NEW: State to safely check the viewport width
    const [isDesktopView, setIsDesktopView] = useState(false);

    // Determine the active index based on the safe viewport check
    const activeIndex = isDesktopView ? activeIndexDesktop : activeIndexMobile;


    // --- 1. SAFE Viewport Check and Initial Setup ---
    // Use useLayoutEffect or useEffect for client-side code that depends on window
    useEffect(() => {
        const checkViewport = () => {
            // This code only runs in the browser, after mounting
            setIsDesktopView(window.innerWidth >= 1280);
        };

        checkViewport(); // Set initial view
        window.addEventListener("resize", checkViewport);

        return () => window.removeEventListener("resize", checkViewport);
    }, []);


    // --- 2. Desktop Vertical Scroll Activation Logic ---
    useEffect(() => {
        // Now using the safe state variable
        if (!isDesktopView || !containerRef.current || stepRefs.current.length === 0) {
            return;
        }

        const handleScroll = () => {
            // ... (Desktop vertical scroll calculation logic remains the same)
            const containerTop = containerRef.current.offsetTop;
            const scrollCenter = window.scrollY + window.innerHeight / 2;

            const firstY =
                stepRefs.current[0].offsetTop +
                stepRefs.current[0].offsetHeight / 2;
            const lastY =
                stepRefs.current[stepRefs.current.length - 1].offsetTop +
                stepRefs.current[stepRefs.current.length - 1].offsetHeight / 2;

            const totalDistance = lastY - firstY;

            const scrolled = Math.min(
                Math.max(scrollCenter - (containerTop + firstY), 0),
                totalDistance
            );

            const progressLine = Math.max(scrollCenter - (containerTop + firstY), 0);
            setProgressHeight(progressLine);

            const stepHeight = totalDistance / (steps.length - 1);
            let currentStep = Math.round(scrolled / stepHeight);

            currentStep = Math.min(Math.max(0, currentStep), steps.length - 1);
            setActiveIndexDesktop(currentStep);
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [steps.length, isDesktopView]); // Dependency on isDesktopView


    // --- 3. Mobile Horizontal Step Activation Logic (Intersection Observer) ---
    useEffect(() => {
        // Only run for mobile view
        if (isDesktopView) return;

        const stepsContainer = horizontalStepsRef.current;
        if (!stepsContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index"));
                        setActiveIndexMobile(index);
                    }
                });
            },
            {
                root: stepsContainer,
                rootMargin: "0px",
                threshold: 0.7,
            }
        );

        stepRefs.current.forEach((step) => {
            if (step) observer.observe(step);
        });

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [isDesktopView]); // Dependency on isDesktopView


    // Helper component for the list item (unchanged)
    const ListItem = ({ children }) => (
        <li className="flex items-center gap-[15px]">
            <Image src="/images/doneImg.png" alt="done" width={18} height={18} />
            <h6 className="text-[16px] font-medium">{children}</h6>
        </li>
    );

    return (
        // The rest of the JSX structure remains the same
        <div className="midPart mt-[70px] flex flex-col xl:flex-row justify-around">

            {/* -------------------- LEFT SIDE -------------------- */}
            <div className="left xl:sticky xl:top-20 h-fit mb-10 xl:mb-0">
                <div className="image relative h-[380px] w-full max-w-[600px] mx-auto xl:mx-0">
                    <Image
                        src={steps[activeIndex]?.gif || "/images/services/blackImg1.png"}
                        alt={steps[activeIndex]?.title || "Hero Image"}
                        fill
                        className="object-cover rounded-[25px] transition-all duration-500"
                    />

                </div>
                <div className="list mt-[25px]">
                    <ul className="flex flex-col justify-center gap-[10px] w-full max-w-[600px] mx-auto xl:mx-0">
                        <ListItem>Understanding business or technical challenges</ListItem>
                        <ListItem>Setting clear objectives and success metrics</ListItem>
                        <ListItem>Deciding whether AI is the right solution</ListItem>
                        <ListItem>
                            Identifying constraints like data availability & computational resources
                        </ListItem>
                    </ul>
                </div>
            </div>

            {/* -------------------- RIGHT SIDE (Steps) -------------------- */}
            <div ref={containerRef} className="relative flex flex-col xl:gap-[120px] w-full xl:w-auto">

                {/* TIMELINE CONTAINER (Desktop/Vertical Only) */}
                {/* Conditionality added for clean rendering if needed, though hidden by Tailwind's hidden/xl:block */}
                {isDesktopView && (
                    <div className="absolute left-[40px] w-[4px] top-0 hidden xl:block">
                        {/* BASE LINE */}
                        <div
                            className="bg-gray-200 w-full rounded-full z-0"
                            style={{
                                top: stepRefs.current[0]
                                    ? stepRefs.current[0].offsetTop + stepRefs.current[0].offsetHeight / 2
                                    : 0,
                                height: stepRefs.current.length
                                    ? stepRefs.current[stepRefs.current.length - 1].offsetTop +
                                    stepRefs.current[stepRefs.current.length - 1].offsetHeight / 2 -
                                    (stepRefs.current[0].offsetTop + stepRefs.current[0].offsetHeight / 2)
                                    : 0,
                                position: "absolute",
                            }}
                        ></div>

                        {/* PROGRESS LINE */}
                        <div
                            className="bg-gradient-to-b from-purple-500 to-indigo-600 w-full rounded-full transition-all duration-300 ease-out z-0"
                            style={{
                                top: stepRefs.current[0]
                                    ? stepRefs.current[0].offsetTop + stepRefs.current[0].offsetHeight / 2
                                    : 0,
                                height: stepRefs.current.length
                                    ? Math.min(
                                        progressHeight,
                                        stepRefs.current[stepRefs.current.length - 1].offsetTop +
                                        stepRefs.current[stepRefs.current.length - 1].offsetHeight / 2 -
                                        (stepRefs.current[0].offsetTop +
                                            stepRefs.current[0].offsetHeight / 2)
                                    )
                                    : 0,
                                position: "absolute",
                            }}
                        ></div>
                    </div>
                )}


                {/* Steps List (Horizontal Scroll on Mobile, Vertical on Desktop) */}
                <div ref={horizontalStepsRef} className="flex flex-row xl:flex-col lg:p-0 p-[10px] overflow-x-auto snap-x snap-mandatory pb-5 xl:pb-0 gap-6 xl:gap-[120px]">
                    {steps.map((step, index) => {
                        const isCurrentlyActive = index === activeIndex;
                        // Only mark as completed on desktop (isDesktopView)
                        const hasBeenCompleted = index < activeIndex && isDesktopView;

                        // Determine the final background class for the step card on mobile
                        const mobileBgClass = isCurrentlyActive
                            ? "bg-white shadow-lg ring-4 ring-purple-500/50" // Highlighted for active mobile
                            : "bg-white/90 border border-gray-200 shadow-sm"; // Normal for inactive mobile

                        // Determine the step card style
                        const stepCardClass = `
                            steps flex-shrink-0 w-[85vw] max-w-xs sm:max-w-md snap-center flex flex-col gap-4 p-4 rounded-xl transition-all duration-300
                            xl:w-auto xl:max-w-none xl:border-none  xl:rounded-none xl:flex-row xl:items-start xl:gap-[20px] relative z-10 xl:p-0
                            ${!isDesktopView ? mobileBgClass : ''}
                        `;


                        return (
                            <div
                                key={index}
                                ref={(el) => (stepRefs.current[index] = el)}
                                data-index={index}
                                className={stepCardClass}
                            >

                                {/* Step Icon */}
                                <div className="flex items-center justify-start xl:justify-center z-20">
                                    <div
                                        className={`logo w-[80px] h-[80px] flex items-center justify-center rounded-[15px] shadow-md transition-all duration-300`}
                                        style={{
                                            // The icon fill/gradient applies if it's active or if it has been completed on desktop
                                            background: (isCurrentlyActive || hasBeenCompleted)
                                                ? 'linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)' // Darker/Solid for active
                                                : 'linear-gradient(90deg, rgba(168, 86, 247, 0.1) 0%, rgba(106, 90, 205, 0.1) 50%, rgba(0, 161, 224, 0.1) 100%)' // Lighter/Ghosted for inactive
                                        }}
                                    >
                                        <img
                                            src={step.svg}
                                            alt={step.title}
                                            className="w-[48px] h-[48px]"
                                        />
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="right w-auto xl:w-[380px] z-20">
                                    <h3
                                        className={`font-bold text-lg transition-colors duration-300 ${isCurrentlyActive ? "text-purple-600" : "text-gray-900"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="mt-[5px] text-gray-600 text-[18px] leading-relaxed">
                                        {step.details}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ScrollingStep;