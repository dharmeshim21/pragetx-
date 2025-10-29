'use client';

import Footer from '@/layouts/Footer/Footer';
import Header from '@/layouts/Header/Header';
import { scrollToResults } from '@/shared/utils/ScrollUtils';
// import NextNProgressClient from "@/ui/NextNProgressClient";
import { NextUIProvider } from '@nextui-org/react';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const Providers = ({ children }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const categories = [
        'artificial-intelligence', 'health-care', 'fintech', 'logistics-and-supply-chain',
        'insurance', 'startup', 'real-estate-and-construction', 'media-and-entertainment',
        'manufacturing', 'astrology-and-spiritual-tech', 'education', 'government-and-public',
        'social-networking'
    ];

    // 🔹 Handle dynamic body class
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            let className = '';
            const segments = pathname.split('/').filter(Boolean);
            const mainPath = segments[0] || '';

            if (segments.length === 0) {
                className = 'home-section-container';
            } else if (mainPath === 'portfolio') {
                if (segments.length === 1) {
                    className = 'portfolio-main-section-container';
                } else if (categories.includes(segments[1])) {
                    className = 'portfolio-section-container';
                } else {
                    className = 'portfolio-detail-section-container';
                }
            } else if (mainPath === 'careers') {
                if (segments.length === 1) {
                    className = 'careers-main-section-container';
                } else {
                    className = 'careers-section-container';
                }
            } else {
                className = mainPath + '-section-container';
            }

            document.body.classList.forEach(cls => {
                if (cls.endsWith('section-container')) {
                    document.body.classList.remove(cls);
                }
            });

            document.body.classList.add(className);

            return () => {
                document.body.classList.remove(className);
            };
        }
    }, [pathname, categories]);

    // 🔹 Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    // 🔹 Handle portfolio scroll based on filters
    React.useEffect(() => {
        const portfolioIndustry = sessionStorage.getItem("portfolio-industry-scroll");
        if (pathname?.includes('/portfolio')) {
            if (searchParams.size > 0 && portfolioIndustry === 'false') {
                scrollToResults('portfolio-results', 120);
                sessionStorage.setItem("portfolio-industry-scroll", true);
            }
        }
    }, [pathname, searchParams]);

    // 🔹 Hide header/footer for certain routes
    const showHeaderFooter = !pathname.includes('/email') &&
        !pathname.includes('/sign') &&
        !pathname.includes('/overview') &&
        !pathname.includes('/certificate') &&
        !pathname.includes('/thanks');

    return (
        <NextUIProvider>
            {/* <NextNProgressClient /> */}
            {showHeaderFooter && <Header />}
            {children}
            {showHeaderFooter && <Footer />}
        </NextUIProvider>
    );
};

export default Providers;
