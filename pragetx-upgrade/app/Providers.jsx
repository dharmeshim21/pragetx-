'use client';

// import ScrollProgressBar from "@/components/ScrollProggress/ScrollProgressBar";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import { NextUIProvider } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
    const pathname = usePathname();

    const categories = [
        'artificial-intelligence', 'health-care', 'fintech', 'logistics-and-supply-chain',
        'insurance', 'startup', 'real-estate-and-construction', 'media-and-entertainment',
        'manufacturing', 'astrology-and-spiritual-tech', 'education', 'government-and-public',
        'social-networking'
    ];

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

    React.useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    const showHeaderFooter = !pathname.includes('/email') &&
        !pathname.includes('/sign') &&
        !pathname.includes('/overview') &&
        !pathname.includes('/certificate') &&
        !pathname.includes('/thanks');

    // ✅ Black header routes
    const blackHeaderRoutes = ['/contact-us', '/ai-consulting-service', '/about'];
    const isBlackHeader = blackHeaderRoutes.includes(pathname);

    return (
        <NextUIProvider>
            <Toaster position="bottom-center" reverseOrder={false} />
            {/* <ScrollProgressBar /> */}

            {/* Header condition */}
            {showHeaderFooter && (
                <Header mode={isBlackHeader ? 'black' : undefined} />
            )}

            {children}

            {showHeaderFooter && <Footer />}
        </NextUIProvider>
    );
};

export default Providers;
