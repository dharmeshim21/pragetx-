"use client"
import Footer from '@/layouts/Footer/Footer'
import Header from '@/layouts/Header/Header'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@heroui/button'
import TestimonialCard from '@/components/TrustedIndustry/TestimonialCard'
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper'
import { BlogCard } from '@/components/TrustedIndustry/AIAgentsSection'
import Offices from '@/components/Offices/Offices'
// const ContactForm = dynamic(() => import('@/components/contact-from/ContactFrom'), { ssr: false });
import ContactForm from '@/components/contact-from/ContactFrom'
import Line from "@/public/homescreen/line.png"
import ProfileCard from '@/components/ProfileCard/ProfileCard'

// export const metadata = {
//     title: 'Get in Touch for IT Services & Solutions | PragetX',
//     description: "Have a web or mobile app development project for us? Contact us now or fill out a project requirement form and get a free project quote within 24-48 hours.",
//     keywords: "mobile app development company, app development, food delivery app, food delivery solution, online food app, android app development, iOS app development, India, USA, UAE, Sweden, Turkey, California, Top app development companies, on-demand solution",
//     alternates: {
//         canonical: '/contact-us/',
//     },
//     openGraph: {
//         title: 'Get in Touch for IT Services & Solutions | PragetX',
//         description: "Have a web or mobile app development project for us? Contact us now or fill out a project requirement form and get a free project quote within 24-48 hours.",
//         url: '/contact-us',
//         images: [
//             {
//                 url: 'https://pragetx.ai/images/get-in-touch-main-bg.jpg',
//                 width: null,
//                 height: null,
//             },
//         ],
//     },
//     icons: {
//         icon: [{ url: '/images/favicon.png', type: 'image/webp' }],
//         shortcut: [{ url: '/images/favicon.png', type: 'image/x-icon' }, { url: '/images/favicon.ico', type: 'image/x-icon' }],
//     },
//     verification: {
//         google: '',
//     },
// }

const page = () => {
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
    const agentTitleGradient =
        "bg-clip-text text-transparent bg-[linear-gradient(90deg,_#3730A3_0%,_#3730A3_40%,_#38BDF8_70%,_#38BDF8_100%)]";


    const borderGradient = agentTitleGradient; // Reusing the same gradient for the border

    const offices = [
        {
            id: 1,
            imageUrl: '/homescreen/offices/india-office.png',
            altText: 'Corporate & Registered Office',
            title: 'Corporate & Registered Office',
            address: 'D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road, Thaltej, Ahmedabad - 380054',
        },
        {
            id: 2,
            imageUrl: '/homescreen/offices/us-office.png',
            altText: 'US Office',
            title: 'US Office',
            address: 'PO Box 531 Centerville ga 31028',
        },
        {
            id: 3,
            imageUrl: '/homescreen/offices/brazil-office.png',
            altText: 'Brazil Office',
            title: 'Brazil Office',
            // Note: I combined the contact info into the address for simplicity based on the request
            address: 'Rua Castelo 239 Foz do Iguaçu Paraná\nMr. Marco Antônio\n+55 45 8802-5573\nmsouza@pragetx.com',
        },
    ];

    // const contactusSchema = {
    //     ...schemaData,
    //     "@graph": [
    //         ...schemaData["@graph"],
    //         {
    //             "@id": "https://pragetx.ai/contact-us/#webpage",
    //             "url": "https://pragetx.ai/contact-us/",
    //             "name": "Get in Touch for IT Services & Solutions | PragetX",
    //             "primaryImageOfPage": {
    //                 "@id": "https://pragetx.ai/contact-us/#primaryimage"
    //             },
    //             "description": "Have a web or mobile app development project for us? Contact us now or fill out a project requirement form and get a free project quote within 24-48 hours."
    //         }
    //     ]
    // };

    return (

        <>
            {/* <SchemaScript schema={contactusSchema} /> */}

            <section className='contact-us-bg' style={{ paddingTop: '70px' }}>
                <div className='container'>
                    <div className="flex  justify-between contact-s1-responsive">
                        <div className="left  lg:my-auto center">
                            <div className="aboutLinem flex gap-2  w-fit px-[15px] py-[5px] center  rounded-full items-center"
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    background: 'linear-gradient(90deg, rgba(168, 86, 247, 0.5) 0%, rgba(106, 90, 205, 0.5) 50%, rgba(0, 161, 224, 0.5) 100%)'
                                }}
                            >
                                <Image
                                    src="/homescreen/stars.png"
                                    alt="Stars"
                                    className="rounded-md"
                                    height={20}
                                    width={15}
                                />
                                <span
                                    className="text-white"
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: '500', // medium weight
                                    }}
                                >
                                    Let’s Connect </span>
                            </div>
                            <h1 className='ibm w-full mt-[30px] center'
                                style={{
                                    background: 'linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2
                                }}
                            >
                                Automate your
                                <br />
                                Business with AI/ML?
                            </h1>

                            <ul className='contact-ul pl-[30px]  mt-[40px] flex flex-col items-start lg:items-start ' >
                                <li className='text-[#DCDCDC] list-disc ' style={{ fontSize: '22px', fontWeight: 500 }}>AI Without the Complexity (Low-Code/No-code)</li>
                                <li className='text-[#DCDCDC] list-disc text-start' style={{ fontSize: '22px', fontWeight: 500 }}>Domain-Specific ML Solutions & Enterprise Systems</li>
                                <li className='text-[#DCDCDC] list-disc ' style={{ fontSize: '22px', fontWeight: 500 }}>Smarter Workflows: AI-Optimized Operations</li>
                                <li className='text-[#DCDCDC] list-disc ' style={{ fontSize: '22px', fontWeight: 500 }}>Fast Delivery: Rapid AI Deployment</li>
                            </ul>
                        </div>
                        <div className="right lg:w-[40%] w-full mx-auto lg:mx-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className='' style={{ padding: 0, paddingTop: '120px' }}>
                <div className="flex flex-col items-center justify-center gap-14">

                    <div className="flex items-start justify-start self-start mt-[30px]">
                        <Image
                            src={Line}
                            alt="Line svg"
                            height={10000}
                            width={10000}
                        />
                    </div>

                    <div className="bg h-full">
                        <div className="container">
                            <div className="flex flex-col items-center gap-[15px]" >
                                <h2 className="font-bold ibm  text-center lg:text-left">Got a Startup{" "}
                                    <span className="text-[#3756B9] ">Idea</span>? Let`s Make It  {" "}
                                    <span className="text-[#3756B9] ">Real </span>
                                </h2>
                                <p className="w-[60%]  text-center" >
                                    <span className="text-[#3756B9] ">Free 30-minute</span> consultation with our experts
                                </p>
                            </div>

                            <ProfileCard/>


                            <div className="qute mt-[50px] lg:mx-[25%] flex flex-col items-center ">
                                <div className="div">
                                    <div className="startQuute">
                                        <Image
                                            src="/homescreen/homecard/double.png"
                                            alt="''"
                                            className="rounded-md"
                                            height={40}
                                            width={40}
                                        />
                                    </div>
                                    <p className=' font-medium  text-center' style={{ fontSize: '22px' }}>
                                        We typically respond within 24 hours. Our goal is to give you honest, actionable advice no strings attached.
                                    </p>
                                    <div className="startQuute ">
                                        <Image
                                            src="/homescreen/homecard/double1.png"
                                            alt="''"
                                            className="rounded-md relative left-[92%]"
                                            height={40}
                                            width={40}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-start self-start mt-[30px]">
                        <Image
                            src={Line}
                            alt="Line svg"
                            height={10000}
                            width={10000}
                        />
                    </div>
                </div>
            </section>

            <section className=''>
                <div className="container">
                    <div className="flex flex-col items-center gap-[15px]">
                        <h2 className="font-bold ibm">
                            Wall of {" "}<span className="text-[#3756B9] ">Trust </span>
                        </h2>
                        <p className="lg:w-[59%] w-full  text-center" >
                            Our work speaks for itself. Take a look why our clients love team PragetX. They are not just our customers, but they are part of one large extended family.                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[30px] mt-[70px] md:justify-between  w-full items-center place-items-center">
                        {testimonials.map(testimonial => (
                            // ⚡ Added w-full md:w-1/3 or similar classes for flex item sizing
                            <TestimonialCard key={testimonial.id} {...testimonial} className="w-full md:w-[32%] lg:w-[31%] mb-6 md:mb-0" />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="font-bold ibm text-center">
                        Our{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #A856F7 0%, #6A5ACD 50%, #00A1E0 100%)",
                            }}
                        >
                            Offices
                        </span>
                    </h2>

                    <AnimationWrapper>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[70px]">
                            {offices.map((office) => (
                                <Offices
                                    key={office.id}
                                    imageUrl={office.imageUrl}
                                    altText={office.altText}
                                    title={office.title}
                                    address={office.address}
                                    // Pass the gradient classes as props
                                    agentTitleGradient={agentTitleGradient}
                                    borderGradient={borderGradient}
                                />
                            ))}
                        </div>
                    </AnimationWrapper>
                </div>
            </section>
        </>
    )
}

export default page