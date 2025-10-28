import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import './dropdown.css'

const IndustryDropdown = (scrollValue) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const timeoutRef = React.useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);


    return (
        <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Dropdown
                isOpen={isOpen}
                onOpenChange={setIsOpen}

                classNames={{
                    trigger: `${isOpen ? "dropdown-icon" : ""} blog-header-title font-medium relative hover:cursor-pointer !opacity-100 text-medium `,
                }}
            >
                <DropdownTrigger style={{ fontWeight: 500 }} className="hover:text-[#024D81]">
                    <div className="group flex items-center gap-[10px] max-[1100px]:gap-[5px] max-[1100px]:text-sm">
                        Industries
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            className="transition-transform duration-300 group-hover:rotate-180"
                        >
                            <path
                                d="M17 12.5L12 16.5L7 12.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </DropdownTrigger>

                <DropdownMenu aria-label="Services dropdown" className="" style={{
                    outline: 'none',
                    boxShadow: 'none',
                    padding: 0,
                    border: 'none'
                }} >
                    <DropdownItem
                        textValue="header"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            padding: 0,
                            border: 'none'
                        }}
                    >
                        <div className="nav-dropdowns new-service-dropdown" style={{ borderRadius: '15px', outline: 'none', boxShadow: 'none' }}>
                            {/* <div className="nav-dropdowns-content"> */}
                            <div className='nav-content'>
                                <div className="dropdown-navigations">
                                    <ul className="dropdown-navigation col1 border-r-2 border-[#eee] pr-4">
                                        <li className="dropdown-navigation-menu">
                                            <Link href="/education" className="!items-center after:!bg-[#e6f1ff]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/education.svg' width={100} height={100} alt='Education' />

                                                </div>
                                                <div className="sub-title">Education</div>
                                            </Link>
                                            <Link href="/fintech" className="!items-center after:!bg-[#f0e6ff]">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/fintech.svg' width={100} height={100} alt='Fintech' />
                                                </div>
                                                <div className="sub-title">Fintech</div>
                                            </Link>
                                            <Link href="/healthcare" className="!items-center after:!bg-[#ffe6e6]">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/healthcare.svg' width={100} height={100} alt='Healthcare' />
                                                </div>
                                                <div className="sub-title">Healthcare</div>
                                            </Link>
                                            <Link href="/xaas-product-development" className="!items-center after:!bg-[#e1fffd]">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/xass-product.svg' width={100} height={100} alt='Xass Product' />
                                                </div>
                                                <div className="sub-title">XaaS Product</div>
                                            </Link>
                                            <Link href="/startup-ecosystem-and-future-technologies" className="!items-center after:!bg-[#fffbc6]">
                                                <div className="navigation-icon">
                                                    <Image src='/icons/startup.svg' width={100} height={100} alt='Startup Ecosystem & Future Technologies' style={{ width: '29px' }} />
                                                </div>
                                                <div className="sub-title">Startup</div>
                                            </Link>

                                        </li>
                                    </ul>
                                    <ul className="dropdown-navigation col2 border-r-2 border-[#eee] pr-4">
                                        <li className="dropdown-navigation-menu">
                                            <Link href="/manufacturing-innovation" className="!items-center after:!bg-[#e6f1ff]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/manufacturing.svg' width={100} height={100} alt='Manufacturing' />
                                                </div>
                                                <div className="sub-title">Manufacturing & Innovation</div>
                                            </Link>
                                            <Link href="/social-networking-industry" className="!items-center after:!bg-[#f0e6ff]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/social-media.svg' width={100} height={100} alt='Social Networking' />
                                                </div>
                                                <div className="sub-title">Social Networking</div>
                                            </Link>
                                            <Link href="/astrology-and-spiritual-tech" className="!items-center after:!bg-[#ffe6e6]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/astrology2.svg' width={100} height={100} alt='Astrology and Spiritual Tech' />
                                                </div>
                                                <div className="sub-title">Astrology and Spiritual Tech</div>
                                            </Link>
                                            <Link href="/government-and-public-sector" className="!items-center after:!bg-[#e1fffd]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/government.svg' width={100} height={100} alt='Govt & Public Sector' />
                                                </div>
                                                <div className="sub-title">Govt & Public Sector</div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="dropdown-navigation col2">
                                        <li className="dropdown-navigation-menu">
                                            <Link href="/insurance" className="!items-center after:!bg-[#e6f1ff]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/insurance.svg' width={100} height={100} alt='Insurance Industry' />
                                                </div>
                                                <div className="sub-title">Insurance</div>
                                            </Link>
                                            <Link href="/media-and-entertainment" className="!items-center after:!bg-[#f0e6ff]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/media.svg' width={100} height={100} alt='Media & Entertainment' />
                                                </div>
                                                <div className="sub-title">Media & Entertainment</div>
                                            </Link>
                                            <Link href="/real-estate-and-construction" className="!items-center after:!bg-[#ffe6e6]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/real-estate.svg' width={100} height={100} alt='Real Estate & Construction' />
                                                </div>
                                                <div className="sub-title">Real Estate & Construction</div>
                                            </Link>
                                            <Link href="/logistics-and-supply-chain" className="!items-center after:!bg-[#e1fffd]">
                                                <div className="navigation-icon ">
                                                    <Image src='/icons/logistics.svg' width={100} height={100} alt='logistics & Supply' />
                                                </div>
                                                <div className="sub-title">Logistics & Supply Chain</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default IndustryDropdown;