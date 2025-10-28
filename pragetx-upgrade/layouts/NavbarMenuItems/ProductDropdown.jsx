import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './dropdown.css';

const ProductDropdown = (scrollValue) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
    const [isHoveringAstrology, setIsHoveringAstrology] = React.useState(false);
    const [isHoveringSubDropdown, setIsHoveringSubDropdown] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const subDropdownRef = React.useRef(null);
    const astrologyItemRef = React.useRef(null);

    // Effect to control sub-dropdown visibility based on hover states
    React.useEffect(() => {
        if (isHoveringAstrology || isHoveringSubDropdown) {
            setIsOpenDropdown(true);
        } else {
            setIsOpenDropdown(false);
        }
    }, [isHoveringAstrology, isHoveringSubDropdown]);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleAstrologyMouseEnter = () => {
        setIsHoveringAstrology(true);
    };

    const handleAstrologyMouseLeave = () => {
        setIsHoveringAstrology(false);
    };

    const handleSubDropdownMouseEnter = () => {
        setIsHoveringSubDropdown(true);
    };

    const handleSubDropdownMouseLeave = () => {
        setIsHoveringSubDropdown(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }

            // For the sub-dropdown, close it when clicking outside both elements
            if (!subDropdownRef.current?.contains(event.target) &&
                !astrologyItemRef.current?.contains(event.target)) {
                setIsOpenDropdown(false);
                setIsHoveringAstrology(false);
                setIsHoveringSubDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
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
                    trigger: `${isOpen ? "dropdown-icon" : ""} blog-header-title font-medium relative hover:cursor-pointer !opacity-100 text-medium max-[1100px]:text-sm`
                }}
            >
                <DropdownTrigger style={{ fontWeight: 500 }} className={'hover:text-[#024D81]'}>

                    <div className="group flex items-center gap-[10px] max-[1100px]:gap-[5px] max-[1100px]:text-sm">
                        Products
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
                <DropdownMenu
                    style={{
                        outline: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        border: 'none'
                    }}
                    aria-label="Product dropdown" className="about-dropdown" tabIndex={-1}>
                    <DropdownItem
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            padding: 0,
                            border: 'none'
                        }}
                        textValue='header'>
                        <div className="nav-dropdowns" style={{ borderRadius: '15px' }}>
                            <div className="nav-dropdowns-content">
                                <div className='dropdown-img max-[1100px]:!max-w-[300px] max-[1100px]:!min-w-[300px] max-[1024px]:!max-w-[250px] max-[1024px]:!min-w-[250px]'>
                                    <div>
                                        <div className="main-heading whitespace-break-spaces">We like to scale</div>
                                        <div className="sub-text">
                                            <span className='whitespace-break-spaces'>We Craft Software for Your Growth.</span>
                                            <div>
                                                <Button
                                                    as={Link}
                                                    href="/contact-us"
                                                    color='primary'
                                                    variant='solid'
                                                    className="font-medium h-[38px] w-[120px] mt-[10px] px-[70px] rounded-full text-white bg-gradient-to-r from-[#3730A3] to-[#38BDF8] shadow-none active:scale-100"
                                                >
                                                    Contact Us
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='nav-content'>
                                    <div className="title">Our Products</div>
                                    <div className="dropdown-navigations">
                                        <ul>
                                            <li
                                                ref={astrologyItemRef}
                                                className="dropdown-navigation-menu astrology relative"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                                onMouseEnter={handleAstrologyMouseEnter}
                                                onMouseLeave={handleAstrologyMouseLeave}
                                            >
                                                <div className="text-black font-normal flex gap-3 items-start relative z-10 no-underline">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/consultx.svg' width={100} height={100} alt='consultation' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='!text-[17px] !text-[#000]'>Consultation Suite</div>
                                                        <div className="text-[#434343] text-[14px] tracking-[0.5px] leading-[18px] max-w-[400px] font-light mt-[3px] whitespace-break-spaces">A white-label solution for consultants, streamlining appointments, client management, and analytics.</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                className="dropdown-navigation-menu voice-agent"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            >
                                                <Link href="https://agentx.pragetx.com/" target="_blank" rel="noopener noreferrer">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/agentx.svg' width={100} height={100} alt='agentx' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Agent X</div>
                                                        <div className="sub-title whitespace-break-spaces">Infinite voices, endless possibilities. Your ultimate call companion, speaking your language.</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li
                                                className="dropdown-navigation-menu invoice-utility"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            >
                                                <Link href="/portfolio/invoice-utility/">
                                                    <div className="navigation-icon">
                                                        <Image src='/icons/invoice.svg' width={100} height={100} alt='invoice' />
                                                    </div>
                                                    <div className=''>
                                                        <div className='title font-medium'>Invoice Utility</div>
                                                        <div className="sub-title whitespace-break-spaces">Offline Invoice generation Application.</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={subDropdownRef}
                            className={`absolute bg-[#fff] top-[60px] left-[98%] py-0 shadow-[-5px_10px_15px_rgba(0,0,0,0.1)]  ${isOpenDropdown ? 'px-4 w-[200px]' : 'px-0 w-[0px]'} rounded-[10px] overflow-hidden transition-all duration-300 ease-in-out`}
                            onMouseEnter={handleSubDropdownMouseEnter}
                            onMouseLeave={handleSubDropdownMouseLeave}
                        >
                            <div className="">
                                <ul className="">
                                    <li className="">
                                        <Link href="/astrozod" className="!items-center digital flex gap-2 my-3">
                                            <div className="w-[40px] h-[40px] min-w-[40px] grid place-items-center p-[6px] rounded-full bg-[#ffd196]">
                                                <Image src='/icons/astrology.svg' width={100} height={100} alt='astrology' />
                                            </div>
                                            <div className="text-[16px]">AstroZod</div>
                                        </Link>
                                        <Link href="/consultx" className="!items-center business-growth flex gap-2 my-3 ">
                                            <div className="w-[40px] h-[40px] min-w-[40px] grid place-items-center p-[6px] rounded-full bg-[#e9ddff]">
                                                <Image src='/icons/consultation.svg' width={100} height={100} alt='consultation' />
                                            </div>
                                            <div className="text-[16px]">ConsultX</div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default ProductDropdown;