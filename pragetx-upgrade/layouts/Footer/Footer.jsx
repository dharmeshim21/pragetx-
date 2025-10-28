"use client"
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import AnimationWrapper from '@/components/AnimationWrapper/AnimationWrapper';

const Footer = () => {
    return (
        <div
            className="bg-[#0D0D0D] mt-[120px] overflow-x-hidden
                            rounded-t-[50px] sm:rounded-t-[100px]" // 👈 responsive radius
        >
            <div className="flex flex-col">
                <footer
                    className="relative w-full flex flex-col gap-[70px] text-white 
                                overflow-hidden bg-[#0D0D0D] bg-[url('/homescreen/Map.png')] bg-cover bg-center
                                rounded-b-[50px] sm:rounded-b-[100px]" // 👈 same responsive behavior
                >

                    {/* <div className="absolute inset-x-0 bottom-0 h-[250px] bg-gradient-to-b from-transparent to-[#0D0D0D]" /> */}
                    <div className="container pt-[70px] relative z-10 flex flex-col gap-[70px]">

                        {/* Section 1 */}
                        <div className="section-1 flex flex-col lg:flex-row space-y-[20px] lg:space-y-0 justify-between items-center overflow-x-hidden">
                            <AnimationWrapper direction='left'>

                                <div className="logo">
                                    <Link href={""}>
                                        <Image
                                            priority
                                            width={250}
                                            height={43}
                                            alt="Pragetx logo"
                                            src="/images/header_logo_white.png"
                                        />
                                    </Link>
                                </div>
                            </AnimationWrapper>

                            {/* Socials */}
                            <AnimationWrapper direction='right'>
                                <div className="social flex items-center gap-[28px]">
                                    {["x", "link", "insta", "facebook", "be", "browser"].map((icon, idx) => (
                                        <Link href={""} key={idx}>
                                            <Image
                                                priority
                                                width={30}
                                                height={30}
                                                alt={icon}
                                                src={`/social-imgs/${icon}.png`}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </AnimationWrapper>
                        </div>

                        {/* Section 2 - Offices & Contact */}
                        <div className="flex flex-col gap-[62px] mt-[70px]">

                            {/* Offices */}
                            <div className="grid reposive-grid grid-cols-3 gap-10">
                                <AnimationWrapper direction='left'>
                                    <div className="add-con px-[10px]">
                                        <div className="flex items-center gap-2 mb-[12px] countryCenter">
                                            <Image src="/country/india.svg" alt="India" height={30} width={30} />
                                            <h3 className="font-semibold">India (HQ)</h3>
                                        </div>
                                        <Link
                                            href="https://www.google.com/maps"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm  hover:underline block max-w-[250px]"
                                        >
                                            <p style={{ color: '#DCDCDC', fontSize: '16px', fontWeight: 500, width: '300px' }}> D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road, Thaltej,
                                                Ahmedabad - 380054</p>
                                        </Link>
                                    </div>
                                </AnimationWrapper>
                                <AnimationWrapper>
                                    <div className="add-con px-[10px]">
                                        <div className="flex  items-center gap-2 mb-[12px] countryCenter">
                                            <Image src="/country/united-states.svg" alt="US" height={30} width={30} />
                                            <h5 className="font-semibold">US Office</h5>
                                        </div>
                                        <p className="text-sm " style={{ color: '#DCDCDC', fontSize: '16px', fontWeight: 500, width: '300px' }}>
                                            PO Box 533, Centerville, Auburn GA 31023
                                        </p>
                                    </div>
                                </AnimationWrapper>
                                <AnimationWrapper direction='right'>
                                    <div className="add-con px-[10px]">
                                        <div className="flex items-center gap-2 mb-[12px] countryCenter">
                                            <Image src="/country/brazil.svg" alt="Brazil" height={30} width={30} />
                                            <h5 className="font-semibold">Brazil Office</h5>
                                        </div>
                                        <p className="text-sm " style={{ color: '#DCDCDC', fontSize: '16px', fontWeight: 500, width: '300px' }}>
                                            Rua Curitiba 239 Foz do Iguaçu Paraná, 85852-010
                                        </p>
                                    </div>
                                </AnimationWrapper>
                            </div>

                            {/* Contact */}
                            <div className="flex footerContact flex-nowrap justify-center gap-[30px] overflow-hidden">
                                {[
                                    { icon: "calendar", label: "PragetX" },
                                    { icon: "call", label: "+91-8487890733" },
                                    { icon: "mail", label: "hello@pragetx.com" }
                                ].map((item, idx) => (
                                    <div key={idx} className="contact1 cursor-pointer flex items-center  gap-3 md:w-[400px] w-[300px]  h-[60px] rounded-[20px] 
                                        bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all duration-300">
                                        <div className="div flex items-center  mx-auto  gap-[10px]">
                                            <Image src={`/images/myimgs/${item.icon}.png`} className='' alt={item.label} height={24} width={24} />
                                            <span className="text-white font-medium">{item.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Links */}

                        <AnimationWrapper>
                            <div className="flex gap-[10px]  items-center justify-center flex-wrap text-white">
                                {[
                                    "About Us",
                                    "Portfolio",
                                    "Careers",
                                    "How We Work",
                                    "Referral Programs",
                                    "Become A Partner",
                                    "Blogs",
                                    "Contact Us",
                                ].map((link, idx) => {
                                    const isLast = idx === 7;
                                    const href = link === "Contact Us" ? "/contact-us" : "#";

                                    return (
                                        <Link
                                            key={idx}
                                            href={href}
                                            className={`${!isLast ? "border-r border-white pr-4 mr-4" : ""} 
                     cursor-pointer hover:underline 
                     transition-colors duration-200`}
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {link}
                                        </Link>
                                    );
                                })}
                            </div>
                        </AnimationWrapper>


                        {/* Bottom Policies + Logo */}
                        <div className="flex md:flex-row flex-col justify-between items-center text-gray-400">
                            <AnimationWrapper direction='left'>
                                <div className="left">
                                    <span className="border-r border-gray-500 pr-4 mr-4 cursor-pointer hover:underline">Cookies</span>
                                    <span className="border-r border-gray-500 pr-4 mr-4 cursor-pointer hover:underline">Privacy</span>
                                    <span className="cursor-pointer hover:underline">Terms</span>
                                </div>
                            </AnimationWrapper>


                            <AnimationWrapper direction='right'>

                                <div className="rights">
                                    <span>
                                        © 2025{" "}
                                        <span className="bg-gradient-to-r from-[#FF9A9E] to-[#4FACFE] font-bold bg-clip-text text-transparent">
                                            PragetX.
                                        </span>{" "}
                                        All rights reserved
                                    </span>
                                </div>
                            </AnimationWrapper>
                        </div>

                        {/*<div className="left ">
                            <div
                                className="effect z-10" // z-0 to be behind footer content but over footer background
                            />
                        </div>*/}
                        
                    </div>
                </footer>

                <div className=" w-full px-[25px]  justify-center   select-none">
                    <div className="text-[150px] ">
                        <Image priority width={1500} height={1000} alt={"X"} src={`/homescreen/footer.png`} className="mx-auto" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
