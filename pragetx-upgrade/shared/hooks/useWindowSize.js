'use client';

import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null,
    });

    const [scrollValue, setScrollValue] = useState();

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        function handleScroll() {
            setScrollValue(window.scrollY);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener('scroll', handleScroll);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
        window.removeEventListener('scroll', handleScroll);
    }, []);
    return [windowSize, scrollValue];
}