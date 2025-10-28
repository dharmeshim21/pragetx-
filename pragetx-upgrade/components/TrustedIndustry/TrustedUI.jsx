import React from 'react'
import ProfileCard from './ProfileCard';
import TestimonialCard from './TestimonialCard';
import AIAgentsSection from './AIAgentsSection';
import AnimationWrapper from '../AnimationWrapper/AnimationWrapper';

const TrustedUI = () => {
    const profiles = [
        {
            id: 1,
            name: 'Priyanka Sharma',
            title: 'CTO',
            company: 'ShopNow',
            imageUrl: '/people/priyanka-sharma.png', // Make sure these paths are correct
        },
        {
            id: 2,
            name: 'Alex Sharma',
            title: 'CTO',
            company: 'ShopNow',
            imageUrl: '/people/alex-sharma.png',
        },
        {
            id: 3,
            name: 'Michale Sharma',
            title: 'CTO',
            company: 'ShopNow',
            imageUrl: '/people/michale-sharma.png',
        },
    ];

    const testimonials = [
        {
            id: 1,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Clay Johnson',
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/priyanka-sharma.png',
        },
        {
            id: 2,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Alex', // Note: name mismatch from image for illustration
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/alex-sharma.png',
        },
        {
            id: 3,
            quote: "PragetX.ai made our processes faster and smarter. Their AI solutions helped us cut down manual work by more than half. A truly reliable partner for business growth.",
            authorName: 'Priyanka Sharma', // Note: name mismatch from image for illustration
            authorTitle: 'CTO',
            authorCompany: 'ShopNow',
            authorImageUrl: '/people/priyanka-sharma.png',
        },
    ];

    return (
        <section className=""> {/* Added vertical padding for overall section */}
            <div className="container">
                {/* Heading (unchanged) */}
                <AnimationWrapper>
                <div className="text-center mb-12">
                    <h2 className=" text-[#111827] leading-tight">
                        Trusted by Industry <span className="text-[#3756B9]">Leaders</span>
                    </h2>
                    <p className="mt-3 text-xl text-gray-600">
                        See what our clients say about scaling smarter with AI agents.
                    </p>
                </div>
                </AnimationWrapper>

                {/* Profile Cards Grid (Main Container) */}
                <div className="">

                    {/* Profile Cards Grid (Top Row) */}
                    {/* ⚡ KEY FIX: Changed grid to flex and added justify-between for spacing */}
                    <div className="flex flex-col md:flex-row gap-[30px] md:justify-evenly mb-8">
                        {profiles.map(profile => (
                            // ⚡ Added w-full md:w-1/3 or similar classes for flex item sizing
                            
                            <ProfileCard key={profile.id} {...profile} className="w-full md:w-[32%] lg:w-[31%] mb-6 md:mb-0" />
                        ))}
                    </div>

                    {/* Testimonial Cards Grid (Bottom Row) */}
                    {/* ⚡ KEY FIX: Changed grid to flex and added justify-between for spacing */}
                <AnimationWrapper>

                    <div className="flex flex-col md:flex-row gap-[30px] md:justify-between">
                        {testimonials.map(testimonial => (
                            // ⚡ Added w-full md:w-1/3 or similar classes for flex item sizing
                            <TestimonialCard key={testimonial.id} {...testimonial} className="w-full md:w-[32%] lg:w-[31%] mb-6 md:mb-0" />
                        ))}
                    </div>
                </AnimationWrapper>

                </div>
            </div>
        </section>
    );
};

export default TrustedUI;