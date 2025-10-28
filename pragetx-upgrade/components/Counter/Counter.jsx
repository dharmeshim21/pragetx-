'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        if (inView) {
            animationFrame = requestAnimationFrame(animate);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, inView]);

    return <p ref={ref} className='' style={{
        fontSize: "120px",
        fontWeight: "lighter",
        fontSize: "120px",
        fontWeight: "lighter",
        textAlign: "center",
        background: "linear-gradient(to right, #A856F7, #6A5ACD, #00A1E0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    }}>{count}</p>;
};

export default Counter;